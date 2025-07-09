// app/resources/page.js
import Link from 'next/link';
import Image from 'next/image';

const featuredResources = [
  {
    type: 'REPORT',
    title: 'The state of employment: Small and mid-sized companies',
    image: '/images/featured-report-1.png', // Placeholder image
    href: '#',
  },
  {
    type: 'EBOOK',
    title: 'HR Guide: Foundations for Actionable AI',
    image: '/images/featured-ebook-1.png', // Placeholder image
    href: '#',
  },
  {
    type: 'REPORT',
    title: 'The state of spend: Perception vs. reality',
    image: '/images/featured-report-2.png', // Placeholder image
    href: '#',
  },
  {
    type: 'EBOOK',
    title: 'Automate onboarding and offboarding',
    image: '/images/featured-ebook-2.png', // Placeholder image
    href: '#',
  },
];

const FeaturedResourceCard = ({ type, title, image, href }) => (
  <Link href={href} className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 group border border-gray-200 hover:border-[#f0b53d]">
    <div className="flex-shrink-0 mr-4">
      <img src={image} alt={title} className="h-16 w-16 object-cover rounded-md" />
    </div>
    <div>
      <span className="text-xs font-semibold text-gray-500 uppercase">{type}</span>
      <h3 className="text-base font-medium text-gray-800 group-hover:text-gray-900 mt-1">{title}</h3>
    </div>
  </Link>
);


export default function ExploreResourcesPage() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Section - Explore Rippling Resources */}
        <div className="flex-1">
          <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden relative">
            {/* Placeholder for the large image/video */}
            <img src="/images/rippling-resources-hero.png" alt="Explore Rippling Resources Hero" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white text-3xl font-bold">
              RIPPLLNG+
            </div>
          </div>
          <h1 className="text-3xl font-bold text-[#4a2e37] mt-8 mb-4">Explore Rippling Resources</h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Dig into blogs, content series, eBooks, and more from the experts at Rippling.
          </p>
          <Link href="#" className="inline-flex items-center bg-[#f0b53d] text-gray-900 px-6 py-3 rounded-md font-semibold hover:bg-[#e0a52d] transition-colors duration-200">
            Go to Rippling+
            <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </Link>
        </div>

        {/* Right Section - Featured Resources */}
        <div className="lg:w-80 flex-shrink-0 border-l border-gray-200 pl-8">
          <h2 className="text-sm font-semibold text-gray-500 uppercase mb-6 border-b pb-2 border-gray-300">FEATURED</h2>
          <div className="space-y-4">
            {featuredResources.map((resource, index) => (
              <FeaturedResourceCard
                key={index}
                type={resource.type}
                title={resource.title}
                image={resource.image}
                href={resource.href}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}