// app/resources/layout.js
"use client"; // This is needed for `usePathname`

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function ResourcesLayout({ children }) {
  const pathname = usePathname();

  const navItems = [
    { name: 'Resources', href: '/resources', match: '/resources' }, // Default "Explore" page
    { name: 'Blog', href: '/resources/blog', match: '/resources/blog' },
    { name: 'Customer Stories', href: '/resources/customer-stories', match: '/resources/customer-stories' },
    { name: 'Webinars', href: '/resources/webinars', match: '/resources/webinars' },
    { name: 'Glossary', href: '/resources/glossary', match: '/resources/glossary' },
    { name: 'Recipes', href: '/resources/recipes', match: '/resources/recipes' },
    { name: 'Events', href: '/resources/events', match: '/resources/events' },
    { name: 'Rippling U', href: '/resources/rippling-u', match: '/resources/rippling-u' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Left Sidebar Navigation */}
        <aside className="lg:w-64 flex-shrink-0 bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-sm font-semibold text-gray-500 uppercase mb-6 border-b pb-2 border-gray-300">Resources</h2>
          <nav className="space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center justify-between p-3 rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#4a2e37] transition-colors duration-200 group
                  ${pathname === item.match || (item.name === 'Resources' && pathname === '/resources') ? 'bg-gray-100 text-[#4a2e37] font-semibold' : ''}
                `}
              >
                <span>{item.name}</span>
                {/* Arrow icon for active or hover state */}
                <svg
                  className={`h-5 w-5 text-gray-400 group-hover:text-[#4a2e37] ${
                    pathname === item.match || (item.name === 'Resources' && pathname === '/resources') ? 'opacity-100' : 'opacity-0'
                  } transition-opacity duration-200`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            ))}
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1">
          {children} {/* This is where the content of sub-pages (like blog/page.js) will be rendered */}
        </main>
      </div>
    </div>
  );
}