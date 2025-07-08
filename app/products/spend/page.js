// app/products/spend/page.js
import Image from 'next/image';
import Link from 'next/link';

export default function SpendPage() {
  return (
    <div className="min-h-full">
      {/* Hero Section */}
      <div className="bg-[#4a2e37] rounded-lg p-6 md:p-8 flex flex-col md:flex-row items-center md:justify-between mb-8 shadow-lg">
        <div className="text-white md:w-2/3">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Rippling Spend</h1>
          <p className="text-lg md:text-xl mb-4">Get granular control over company spend.</p>
          <Link href="#" className="inline-block bg-[#f0b53d] text-gray-900 px-6 py-2 rounded-md font-semibold hover:bg-[#e0a52d] transition-colors duration-200">
            Learn more
          </Link>
        </div>
        <div className="md:w-1/3 flex justify-center md:justify-end mt-6 md:mt-0">
          <Image
            src="/images/spend-hero.png" // Replace with your local image if you prefer
            alt="Rippling Spend Hero"
            width={250}
            height={150}
            className="rounded-lg object-contain"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Spend Management Section */}
        <div>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <img src="https://rippling2.imgix.net/icon-expense-mgmt.png" alt="Expense Management Icon" className="h-10 w-10" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#4a2e37]">Expense Management</h3>
                <p className="text-gray-600">Enforce expense policies</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <img src="https://rippling2.imgix.net/icon-bill-pay.png" alt="Bill Pay Icon" className="h-10 w-10" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#4a2e37]">Bill Pay</h3>
                <p className="text-gray-600">Generate and approve invoices</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <img src="https://rippling2.imgix.net/icon-global-spend.png" alt="Global Spend Icon" className="h-10 w-10" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#4a2e37]">Global Spend</h3>
                <p className="text-gray-600">Save everywhere you operate</p>
              </div>
            </div>
          </div>
        </div>

        {/* Resources Section */}
        <div>
          <h2 className="text-sm font-semibold text-gray-500 uppercase mb-4">Resources</h2>
          <div className="space-y-6">
            <Link href="#" className="flex items-center space-x-4 group">
              <div className="flex-shrink-0 w-24 h-16 bg-gray-300 rounded-md overflow-hidden">
                <Image
                  src="/images/res-spend.png" // Placeholder
                  alt="Report Thumbnail"
                  width={96}
                  height={64}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div>
                <p className="font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-200">
                  The state-of-the-finance leader
                </p>
              </div>
            </Link>

            <Link href="#" className="flex items-center space-x-4 group">
              <div className="flex-shrink-0 w-24 h-16 bg-gray-300 rounded-md overflow-hidden">
                <Image
                  src="/images/res1-spend.png" // Placeholder
                  alt="Ebook Thumbnail"
                  width={96}
                  height={64}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div>
                <p className="font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-200">
                  The pitfalls of most modern spend solutions
                </p>
              </div>
            </Link>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <Link href="#" className="flex items-center text-blue-600 hover:underline font-medium">
              <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
              View all Spend resources
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}