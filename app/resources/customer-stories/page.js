// app/resources/customer-stories/page.js
import Link from 'next/link';

const customerStories = [
  {
    name: 'Barry\'s',
    description: 'empowers their workforce with a scalable HR solution',
    icon: '/images/logo-barrys.png', // Placeholder for Barry's logo
    href: '#',
  },
  {
    name: 'Forterra',
    description: 'automates busywork to drive impact',
    icon: '/images/logo-forterra.png', // Placeholder for Forterra logo
    href: '#',
  },
  {
    name: 'Chess.com',
    description: 'creates a frictionless people process',
    icon: '/images/logo-chesscom.png', // Placeholder for Chess.com logo
    href: '#',
  },
  {
    name: 'Clay',
    description: 'grew 5x by automating 80% of its onboarding tasks',
    icon: '/images/logo-clay.png', // Placeholder for Clay logo
    href: '#',
  },
  {
    name: 'Blank Street Coffee',
    description: 'saves 40 hours by automating open enrollment',
    icon: '/images/logo-blankstreet.png', // Placeholder for Blank Street Coffee logo
    href: '#',
  },
  {
    name: 'Rippling', // Assuming this is another Rippling case study or a company icon A
    description: 'gave Andros automation superpowers',
    icon: '/images/logo-rippling-a.png', // Placeholder for another company logo (icon A)
    href: '#',
  },
];

const StoryCard = ({ name, description, icon, href }) => (
  <Link href={href} className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 group border border-gray-200 hover:border-[#f0b53d]">
    <div className="flex-shrink-0 mr-4">
      <img src={icon} alt={`${name} Logo`} className="h-10 w-10 object-contain" />
    </div>
    <div>
      <h3 className="text-base font-medium text-gray-800 group-hover:text-gray-900">{name} <span className="font-normal text-gray-600">{description}</span></h3>
    </div>
    <svg
      className="ml-auto h-5 w-5 text-gray-400 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-200 group-hover:text-[#f0b53d]"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
    </svg>
  </Link>
);

export default function CustomerStoriesPage() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Section - Customer Stories List */}
        <div className="flex-1 lg:w-2/3">
          <h2 className="text-sm font-semibold text-gray-500 uppercase mb-6 border-b pb-2 border-gray-300 flex items-center justify-between">
            CUSTOMER STORIES
            <Link href="/customer-stories" className="text-gray-400 hover:text-[#f0b53d] transition-colors duration-200">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </Link>
          </h2>
          <div className="space-y-4">
            {customerStories.map((story, index) => (
              <StoryCard
                key={index}
                name={story.name}
                description={story.description}
                icon={story.icon}
                href={story.href}
              />
            ))}
          </div>
        </div>

        {/* Right Section - Meet the wavemakers */}
        <div className="lg:w-80 flex-shrink-0">
          <div className="bg-[#4a2e37] text-white p-6 rounded-lg overflow-hidden relative" style={{ backgroundImage: 'url(/images/wavemakers-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}> {/* Placeholder for abstract background */}
            <div className="relative z-10"> {/* To keep content above background image if image is part of div */}
              <div className="flex -space-x-2 mb-4">
                {/* Placeholder for avatars */}
                <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="/images/avatar-1.png" alt="Avatar" />
                <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="/images/avatar-2.png" alt="Avatar" />
                <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="/images/avatar-3.png" alt="Avatar" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Meet the wavemakers</h3>
              <p className="text-sm text-gray-300">
                Business visionaries empowered by Rippling to creatively impact their companies.
              </p>
            </div>
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#4a2e37] to-transparent opacity-90"></div>
          </div>
        </div>
      </div>
    </div>
  );
}