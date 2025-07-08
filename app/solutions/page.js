// app/solutions/page.js
import Link from 'next/link';
import Image from 'next/image'; // If you're using Next.js Image for optimization

// Data for the solutions content, based on your screenshot
// Ensure these paths correspond to images in your public/images/ directory
const industries = [
  { name: 'Construction', icon: '/images/icon-construction.svg' },
  { name: 'Retail', icon: '/images/icon-retail.svg' },
  { name: 'Financial Services', icon: '/images/icon-financial-services.svg' },
  { name: 'Technology', icon: '/images/icon-technology.svg' },
  { name: 'Healthcare', icon: '/images/icon-healthcare.svg' },
  { name: 'Marketing & Ad Agencies', icon: '/images/icon-marketing.svg' },
  { name: 'Manufacturing', icon: '/images/icon-manufacturing.svg' },
  { name: 'Non-profit Organisations', icon: '/images/icon-non-profit.svg' },
];

const companySizes = [
  { name: 'Startups', icon: '/images/icon-startups.svg' },
  { name: 'Small Businesses', icon: '/images/icon-small-businesses.svg' },
  { name: 'Mid-Sized Businesses', icon: '/images/icon-mid-sized-businesses.svg' },
  { name: 'Enterprise', icon: '/images/icon-enterprise.svg' },
];

const partners = [
  { name: 'VC Firms & Accelerators', icon: '/images/icon-vc-firms.svg' },
  { name: 'Developers', icon: '/images/icon-developers.svg' },
];

const integrations = [
  { name: 'Carta', logo: '/images/logo-carta.svg' },
  { name: 'PayPal', logo: '/images/logo-paypal.svg' },
  { name: '1Password', logo: '/images/logo-1password.svg' },
  { name: 'YubiKey', logo: '/images/logo-yubikey.svg' },
];

// Helper component for the clickable grid items with hover effect
const SolutionCard = ({ iconSrc, title, type }) => {
  const href = `/solutions/${type}/${title.toLowerCase().replace(/ & /g, '-and-').replace(/ /g, '-')}`;

  return (
    <Link href={href}
      className="flex items-center p-4 bg-white rounded-lg shadow-sm transition-all duration-200 group relative
                 border border-gray-200 hover:border-[#f0b53d] hover:shadow-md" // Styling for default and hover
    >
      <div className="flex-shrink-0 mr-4">
        {/* Using standard <img> for local public assets for simplicity.
            If using external images or requiring Next.js Image optimization,
            ensure next.config.js is configured for remote patterns and use <Image> component. */}
        <img src={iconSrc} alt={`${title} Icon`} className="h-10 w-10 object-contain" />
      </div>
      <span className="text-lg font-medium text-gray-800 group-hover:text-gray-900 transition-colors duration-200">
        {title}
      </span>
      {/* Arrow for hover effect - initially hidden, slides in from right */}
      <svg
        className="h-6 w-6 text-gray-400 absolute right-4 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-200 group-hover:text-[#f0b53d]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
      </svg>
    </Link>
  );
};

// Helper component for Integration items (similar, but perhaps different icon/logo size or spacing)
const IntegrationCard = ({ logoSrc, title }) => {
  const href = `/integrations/${title.toLowerCase().replace(/ /g, '-')}`;

  return (
    <Link href={href}
      className="flex items-center p-4 bg-white rounded-lg shadow-sm transition-all duration-200 group relative
                 border border-gray-200 hover:border-[#f0b53d] hover:shadow-md"
    >
      <div className="flex-shrink-0 mr-4">
        <img src={logoSrc} alt={`${title} Logo`} className="h-10 w-10 object-contain" />
      </div>
      <span className="text-lg font-medium text-gray-800 group-hover:text-gray-900 transition-colors duration-200">
        {title}
      </span>
      {/* Arrow for hover effect */}
      <svg
        className="h-6 w-6 text-gray-400 absolute right-4 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-200 group-hover:text-[#f0b53d]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
      </svg>
    </Link>
  );
};

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Main Content Area - Solutions Grid */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* INDUSTRIES Section */}
          <div>
            <h2 className="text-sm font-semibold text-gray-500 uppercase mb-6 border-b pb-2 border-gray-300">INDUSTRIES</h2>
            <div className="space-y-4">
              {industries.map((item) => (
                <SolutionCard key={item.name} iconSrc={item.icon} title={item.name} type="industry" />
              ))}
            </div>
          </div>

          {/* PARTNERS Section */}
          <div>
            <h2 className="text-sm font-semibold text-gray-500 uppercase mb-6 border-b pb-2 border-gray-300">PARTNERS</h2>
            <div className="space-y-4">
              {partners.map((item) => (
                <SolutionCard key={item.name} iconSrc={item.icon} title={item.name} type="partner" />
              ))}
            </div>
          </div>

          {/* COMPANY SIZE Section */}
          <div>
            <h2 className="text-sm font-semibold text-gray-500 uppercase mb-6 border-b pb-2 border-gray-300">COMPANY SIZE</h2>
            <div className="space-y-4">
              {companySizes.map((item) => (
                <SolutionCard key={item.name} iconSrc={item.icon} title={item.name} type="company-size" />
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar - Integrations */}
        <aside className="lg:w-80 flex-shrink-0 bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-sm font-semibold text-gray-500 uppercase mb-6 border-b pb-2 border-gray-300">INTEGRATIONS</h2>
          <div className="space-y-4 mb-6">
            {integrations.map((item) => (
              <IntegrationCard key={item.name} logoSrc={item.logo} title={item.name} />
            ))}
          </div>
          {/* "View all integrations" link */}
          <Link href="/integrations" className="flex items-center justify-center p-3 text-sm font-semibold text-[#4a2e37] hover:text-[#f0b53d] transition-colors duration-200">
            {/* Eye icon */}
            <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
            </svg>
            View all 600+ integrations
          </Link>
        </aside>
      </div>
    </div>
  );
}