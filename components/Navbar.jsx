"use client"
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    {
      name: 'Products',
      href: '/products',
      // UPDATED: Links point to specific product sub-pages
      dropdown: [
        { name: 'HCM', href: '/products/hcm' },
        { name: 'Payroll', href: '/products/payroll' },
        { name: 'IT', href: '/products/it' },
        { name: 'Spend', href: '/products/spend' },
      ],
    },
    { name: 'Platform', href: '/platform', },
    { name: 'Solutions', href: '/solutions',},
    { name: 'Global', href: '/global', dropdown: ['Global Payroll', 'Global HR', 'Global IT'] },
    { name: 'Resources', href: '/resources', dropdown: ['Blog', 'Case Studies', 'Webinars'] },
    { name: 'Pricing', href: '/pricing' },
  ];

  return (
    // 1. Added 'group' class to the nav.
    // 2. Added 'hover:bg-white' to change background on hover.
    // 3. Added 'transition-colors duration-300' for a smooth transition.
    <nav className="bg-[#4a2e37] p-4 transition-colors duration-300 group hover:bg-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Text */}
        {/* Added 'text-white' to ensure default is white, and 'group-hover:text-black' to change on nav hover. */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-white group-hover:text-black">{"}}}"} RIPPLLNG</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6">
          {navItems.map((item) => (
            // Changed 'group' to 'group/item' to create a named group for dropdowns,
            // preventing conflict with the parent 'group' on the nav.
            <div key={item.name} className="relative group/item">
              {/* Nav Item Links */}
              {/* Added 'text-white' and 'group-hover:text-black'.
                  The order ensures 'group-hover:text-black' takes precedence over 'hover:text-gray-300'
                  when the entire nav is hovered, while 'hover:text-gray-300' still works for individual link hover
                  when the nav is not hovered. */}
              <Link href={item.href} className="text-white hover:text-gray-300 group-hover:text-black flex items-center">
                {item.name}
                {item.dropdown && (
                  <svg
                    className="ml-1 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                )}
              </Link>
              {item.dropdown && (
                <div className="absolute left-0 mt-2 w-48 bg-[#4a2e37] border border-gray-700 rounded-md shadow-lg opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 z-10">
                  {item.dropdown.map((dropItem) => {
                    const name = typeof dropItem === 'string' ? dropItem : dropItem.name;
                    const href = typeof dropItem === 'string'
                      ? `${item.href}/${dropItem.toLowerCase().replace(/\s/g, '-')}`
                      : dropItem.href;

                    return (
                      <Link
                        key={name}
                        href={href}
                        className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                      >
                        {name}
                      </Link>
                    );
                  })}
                </div>
              )}

            </div>
          ))}

          {/* Language Selector */}
          {/* Added 'text-white group-hover:text-black' */}
          <div className="flex items-center space-x-2 ml-6 text-white group-hover:text-black">
            <img src="https://rippling2.imgix.net/flag-UK.svg" alt="UK Flag" className="h-5 w-5" /> {/* Placeholder for flag */}
            <span>EN</span>
            <svg
              className="ml-1 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>

          {/* Login Link */}
          {/* Added 'text-white group-hover:text-black' */}
          <Link href="/login" className="flex items-center space-x-1 hover:text-gray-300 text-white group-hover:text-black">
            {/* SVG stroke/fill is 'currentColor', so it will inherit the text color */}
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
            <span>Login</span>
          </Link>

          {/* See Rippling Button - No change needed as its text is already dark by default */}
          <Link href="/see-rippling" className="bg-[#f0b53d] text-gray-900 px-6 py-2 rounded-md font-semibold hover:bg-[#e0a52d]">
            See Rippling
          </Link>
        </div>

        {/* Mobile Menu Button (Hamburger) - No change needed here */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg
              className="h-8 w-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (collapsible) - No change needed, as this is for mobile and typically doesn't follow desktop hover effects */}
      {isOpen && (
        <div className="lg:hidden mt-4 bg-[#4a2e37] pb-4">
          {navItems.map((item) => (
            <div key={item.name}>
              <Link href={item.href} className="block px-4 py-2 text-sm hover:bg-gray-700">
                {item.name}
              </Link>
              {item.dropdown && (
                <div className="pl-6">
                  {item.dropdown.map((dropItem) => {
                    const name = typeof dropItem === 'string' ? dropItem : dropItem.name;
                    const href = typeof dropItem === 'string'
                      ? `${item.href}/${dropItem.toLowerCase().replace(/\s/g, '-')}`
                      : dropItem.href;

                    return (
                      <Link
                        key={name}
                        href={href}
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                      >
                        {name}
                      </Link>
                    );
                  })}
                </div>
              )}

            </div>
          ))}
          <div className="px-4 py-2 flex items-center space-x-2 border-t border-gray-700 mt-2 pt-2">
            <img src="/images/uk-flag.svg" alt="UK Flag" className="h-5 w-5" />
            <span>EN</span>
          </div>
          <Link href="/login" className="block px-4 py-2 text-sm hover:bg-gray-700">
            Login
          </Link>
          <Link href="/see-rippling" className="block text-center mt-4 mx-4 bg-[#f0b53d] text-gray-900 px-4 py-2 rounded-md font-semibold hover:bg-[#e0a52d]">
            See Rippling
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;