// app/products/payroll/page.js
import Image from 'next/image';
import Link from 'next/link';

export default function PayrollPage() {
  return (
    <div className="min-h-full">
      {/* Hero Section */}
      <div className="bg-[#4a2e37] rounded-lg p-6 md:p-8 flex flex-col md:flex-row items-center md:justify-between mb-8 shadow-lg">
        <div className="text-white md:w-2/3">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Rippling Payroll</h1>
          <p className="text-lg md:text-xl mb-4">Pay employees and contractors your way.</p>
          <Link href="#" className="inline-block bg-[#f0b53d] text-gray-900 px-6 py-2 rounded-md font-semibold hover:bg-[#e0a52d] transition-colors duration-200">
            Learn more
          </Link>
        </div>
        <div className="md:w-1/3 flex justify-center md:justify-end mt-6 md:mt-0">
          <Image
            src="/images/payroll-hero.png" // Replace with your local image if you prefer
            alt="Rippling Payroll Hero"
            width={250}
            height={150}
            className="rounded-lg object-contain"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Global Payroll Section */}
        <div>
          <h2 className="text-sm font-semibold text-gray-500 uppercase mb-4">Global Payroll</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <img src="https://rippling2.imgix.net/icon-global-payroll.png" alt="Global Payroll Icon" className="h-10 w-10" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#4a2e37]">Global Payroll</h3>
                <p className="text-gray-600">Pay employees anywhere</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <img src="https://rippling2.imgix.net/icon-eor.png" alt="Employer of Record Icon" className="h-10 w-10" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#4a2e37]">Employer of Record</h3>
                <p className="text-gray-600">Hire globally without entities</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <img src="https://rippling2.imgix.net/icon-global-contractors.png" alt="Global Contractors Icon" className="h-10 w-10" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#4a2e37]">Global Contractors</h3>
                <p className="text-gray-600">Pay contractors anywhere</p>
              </div>
            </div>
          </div>
        </div>

        {/* US Payroll Section */}
        <div>
          <h2 className="text-sm font-semibold text-gray-500 uppercase mb-4">US Payroll</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <img src="https://rippling2.imgix.net/icon-us-payroll.png" alt="US Payroll Icon" className="h-10 w-10" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#4a2e37]">Payroll</h3>
                <p className="text-gray-600">Easy, accurate payroll</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <img src="https://rippling2.imgix.net/icon-contractors.png" alt="Contractors Icon" className="h-10 w-10" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#4a2e37]">Contractors</h3>
                <p className="text-gray-600">Pay contractors</p>
              </div>
            </div>
          </div>

          {/* Resources Section */}
          <div className="mt-12">
            <h2 className="text-sm font-semibold text-gray-500 uppercase mb-4">Resources</h2>
            <div className="space-y-6">
              <Link href="#" className="flex items-center space-x-4 group">
                <div className="flex-shrink-0 w-24 h-16 bg-gray-300 rounded-md overflow-hidden">
                  <Image
                    src="/images/res-payroll.png" // Placeholder
                    alt="Video Thumbnail"
                    width={96}
                    height={64}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div>
                  <p className="font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-200">
                    The essential guide to switching payroll systems
                  </p>
                </div>
              </Link>

              <Link href="#" className="flex items-center space-x-4 group">
                <div className="flex-shrink-0 w-24 h-16 bg-gray-300 rounded-md overflow-hidden">
                  <Image
                    src="/images/res1-payroll.png" // Placeholder
                    alt="Video Thumbnail"
                    width={96}
                    height={64}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div>
                  <p className="font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-200">
                    How to pay payroll taxes
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