"use-client"
import Image from 'next/image';
import Link from 'next/link';

export default function PlatformPage() {
  return (
    <div className="container mx-auto p-8 pt-12 bg-white text-gray-800">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1">
          <h2 className="text-sm font-semibold text-gray-500 uppercase mb-4">Rippling Platform</h2>
          <div className="bg-gray-200 rounded-lg overflow-hidden mb-6">
            {/* Placeholder for the image */}
            <Image
              src="/images/platform-hero.png" // You'll need to add this image to public/images/
              alt="Rippling Platform Overview"
              width={600}
              height={400}
              layout="responsive"
              className="rounded-lg"
            />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-[#4a2e37]">Platform</h1>
          <p className="text-lg mb-6">
            Meet the platform tailored to your business.
          </p>
          <Link href="#" className="text-blue-600 hover:underline font-medium">
            Learn more
          </Link>
        </div>

        {/* Middle Section: Core Capabilities */}
        <div className="lg:col-span-1">
          <h2 className="text-sm font-semibold text-gray-500 uppercase mb-4">Core Capabilities</h2>
          <div className="space-y-6">
            {/* Capability Item 1 */}
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                {/* SVG for Workflow Studio icon */}
                <svg className="h-8 w-8 text-[#f0b53d]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 14H11V10H13M13 18H11V16H13M1 21H23V3H1V21M19 19V5H5V19H19Z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#4a2e37]">Workflow Studio</h3>
                <p className="text-gray-600">Trigger advanced workflows using any data</p>
              </div>
            </div>

            {/* Capability Item 2 */}
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                {/* SVG for Analytics icon */}
                <svg className="h-8 w-8 text-[#f0b53d]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2M13 17H11V7H13V17Z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#4a2e37]">Analytics</h3>
                <p className="text-gray-600">Report on anything across your apps</p>
              </div>
            </div>

            {/* Capability Item 3 */}
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                {/* SVG for Policies icon */}
                <svg className="h-8 w-8 text-[#f0b53d]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7V17L12 22L22 17V7L12 2M12 4.47L19.5 8.2V15.8L12 19.53L4.5 15.8V8.2L12 4.47M12 13L10.5 14.5L12 16L13.5 14.5L12 13Z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#4a2e37]">Policies</h3>
                <p className="text-gray-600">Enforce company rules automatically</p>
              </div>
            </div>

            {/* Capability Item 4 */}
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                {/* SVG for Permissions icon */}
                <svg className="h-8 w-8 text-[#f0b53d]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1M12 11.99L18 8.5L12 5L6 8.5L12 11.99Z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#4a2e37]">Permissions</h3>
                <p className="text-gray-600">Grant everyone the right access</p>
              </div>
            </div>

            {/* Capability Item 5 */}
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                {/* SVG for Integrations icon */}
                <svg className="h-8 w-8 text-[#f0b53d]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M12 6V18M18 12H6"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#4a2e37]">Integrations</h3>
                <p className="text-gray-600">Push third-party apps to perform better</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: Resources */}
        <div className="lg:col-span-1">
          <h2 className="text-sm font-semibold text-gray-500 uppercase mb-4">Resources</h2>
          <div className="space-y-6">
            {/* Resource Video 1 */}
            <Link href="#" className="flex items-center space-x-4 group">
              <div className="flex-shrink-0 w-24 h-16 bg-gray-300 rounded-md overflow-hidden">
                <Image
                  src="/images/video-thumb-1.png" // You'll need to add this image to public/images/
                  alt="Video Thumbnail"
                  width={96}
                  height={64}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div>
                <p className="font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-200">
                  Learn the secret behind impactful HR teams
                </p>
              </div>
            </Link>

            {/* Resource Video 2 */}
            <Link href="#" className="flex items-center space-x-4 group">
              <div className="flex-shrink-0 w-24 h-16 bg-gray-300 rounded-md overflow-hidden">
                <Image
                  src="/images/video-thumb-2.png" // You'll need to add this image to public/images/
                  alt="Video Thumbnail"
                  width={96}
                  height={64}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div>
                <p className="font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-200">
                  The struggle for a seat at the table
                </p>
              </div>
            </Link>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <Link href="#" className="flex items-center text-blue-600 hover:underline font-medium">
              <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
              Explore Rippling Recipes
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}