// app/products/it/page.js
import Image from 'next/image';
import Link from 'next/link';

export default function ITPage() {
  return (
    <div className="min-h-full">
      {/* Hero Section */}
      <div className="bg-[#4a2e37] rounded-lg p-6 md:p-8 flex flex-col md:flex-row items-center md:justify-between mb-8 shadow-lg">
        <div className="text-white md:w-2/3">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Rippling IT</h1>
          <p className="text-lg md:text-xl mb-4">Strengthen security and eliminate busy work.</p>
          <Link href="#" className="inline-block bg-[#f0b53d] text-gray-900 px-6 py-2 rounded-md font-semibold hover:bg-[#e0a52d] transition-colors duration-200">
            Learn more
          </Link>
        </div>
        <div className="md:w-1/3 flex justify-center md:justify-end mt-6 md:mt-0">
          <Image
            src="/images/it-hero.png" // Replace with your local image if you prefer
            alt="Rippling IT Hero"
            width={250}
            height={150}
            className="rounded-lg object-contain"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* IT Management Section */}
        <div>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <img src="https://rippling2.imgix.net/icon-identity.png" alt="Identity & Access Icon" className="h-10 w-10" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#4a2e37]">Identity & Access Management</h3>
                <p className="text-gray-600">Get access right every time</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <img src="https://rippling2.imgix.net/icon-inventory.png" alt="Inventory Management Icon" className="h-10 w-10" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#4a2e37]">Inventory Management</h3>
                <p className="text-gray-600">Retrieve and store devices</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <img src="https://rippling2.imgix.net/icon-device.png" alt="Device Management Icon" className="h-10 w-10" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#4a2e37]">Device Management</h3>
                <p className="text-gray-600">Secure your entire fleet</p>
              </div>
            </div>
          </div>
        </div>

        {/* Solutions & Resources Section */}
        <div>
          <h2 className="text-sm font-semibold text-gray-500 uppercase mb-4">Solutions</h2>
          <div className="space-y-6">
            <Link href="#" className="flex items-center group">
              <div className="flex-shrink-0 mr-4">
                <img src="https://rippling2.imgix.net/icon-zero-trust.png" alt="Zero Trust Icon" className="h-10 w-10" />
              </div>
              <div>
                <p className="font-medium text-gray-700 group-hover:text-blue-600">Enforce Zero Trust Controls</p>
              </div>
              <svg className="ml-auto h-5 w-5 text-gray-400 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </Link>
            <Link href="#" className="flex items-center group">
              <div className="flex-shrink-0 mr-4">
                <img src="https://rippling2.imgix.net/icon-device-mgmt.png" alt="Device Management Icon" className="h-10 w-10" />
              </div>
              <div>
                <p className="font-medium text-gray-700 group-hover:text-blue-600">Unify Cross-OS Device Management</p>
              </div>
              <svg className="ml-auto h-5 w-5 text-gray-400 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </Link>
            <Link href="#" className="flex items-center group">
              <div className="flex-shrink-0 mr-4">
                <img src="https://rippling2.imgix.net/icon-auth.png" alt="User Authentication Icon" className="h-10 w-10" />
              </div>
              <div>
                <p className="font-medium text-gray-700 group-hover:text-blue-600">Streamline User Authentication</p>
              </div>
              <svg className="ml-auto h-5 w-5 text-gray-400 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>

          <div className="mt-12">
            <h2 className="text-sm font-semibold text-gray-500 uppercase mb-4">Resources</h2>
            <div className="space-y-6">
              <Link href="#" className="flex items-center space-x-4 group">
                <div className="flex-shrink-0 w-24 h-16 bg-gray-300 rounded-md overflow-hidden">
                  <Image
                    src="/images/res-it.png" // Placeholder
                    alt="Report Thumbnail"
                    width={96}
                    height={64}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div>
                  <p className="font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-200">
                    The state-of-the-IT leader
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}