// app/products/hcm/page.js
import Image from 'next/image';
import Link from 'next/link';

export default function HcmPage() {
  return (
    <div className="min-h-full">
      {/* Hero Section */}
      <div className="bg-[#4a2e37] rounded-lg p-6 md:p-8 flex flex-col md:flex-row items-center md:justify-between mb-8 shadow-lg">
        <div className="text-white md:w-2/3">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Rippling HCM</h1>
          <p className="text-lg md:text-xl mb-4">Drive business outcomes with the number 1-rated HCM.</p>
          <Link href="#" className="inline-block bg-[#f0b53d] text-gray-900 px-6 py-2 rounded-md font-semibold hover:bg-[#e0a52d] transition-colors duration-200">
            Learn more
          </Link>
        </div>
        <div className="md:w-1/3 flex justify-center md:justify-end mt-6 md:mt-0">
          {/* Placeholder for the image in the hero section */}
          <Image
            src="/images/hcm-hero.png" // Replace with your local image if you prefer
            alt="Rippling HCM Hero"
            width={250} // Adjust based on your actual image dimensions
            height={150} // Adjust based on your actual image dimensions
            className="rounded-lg object-contain"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* HR Management Section */}
        <div>
          <h2 className="text-sm font-semibold text-gray-500 uppercase mb-4">HR Management</h2>
          <div className="space-y-6">
            {/* HRIS */}
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <img src="/images/icon-hris.svg" alt="HRIS Icon" className="h-10 w-10" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#4a2e37]">HRIS</h3>
                <p className="text-gray-600">Manage employee data</p>
              </div>
            </div>

            {/* Remuneration Bands */}
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <img src="https://rippling2.imgix.net/icon-remuneration.png" alt="Remuneration Icon" className="h-10 w-10" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#4a2e37]">Remuneration Bands</h3>
                <p className="text-gray-600">Prevent out-of-band comp</p>
              </div>
            </div>
          </div>
        </div>

        {/* Talent Section */}
        <div>
          <h2 className="text-sm font-semibold text-gray-500 uppercase mb-4">Talent</h2>
          <div className="space-y-6">
            {/* Recruiting */}
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <img src="https://rippling2.imgix.net/icon-recruiting.png" alt="Recruiting Icon" className="h-10 w-10" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#4a2e37]">Recruiting</h3>
                <p className="text-gray-600">Recruit better at every step</p>
              </div>
            </div>

            {/* Headcount Planning */}
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <img src="https://rippling2.imgix.net/icon-headcount.png" alt="Headcount Icon" className="h-10 w-10" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#4a2e37]">Headcount Planning</h3>
                <p className="text-gray-600">Align on headcount quickly</p>
              </div>
            </div>

            {/* Performance Management */}
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <img src="https://rippling2.imgix.net/icon-performance.png" alt="Performance Icon" className="h-10 w-10" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#4a2e37]">Performance Management</h3>
                <p className="text-gray-600">Build high-performing teams</p>
              </div>
            </div>

            {/* Surveys */}
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <img src="https://rippling2.imgix.net/icon-surveys.png" alt="Surveys Icon" className="h-10 w-10" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#4a2e37]">Surveys</h3>
                <p className="text-gray-600">Capture employee feedback</p>
              </div>
            </div>

            {/* Learning Management */}
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <img src="https://rippling2.imgix.net/icon-learning.png" alt="Learning Icon" className="h-10 w-10" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#4a2e37]">Learning Management</h3>
                <p className="text-gray-600">Upskill your talent</p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits & Workforce Management */}
        <div>
          <h2 className="text-sm font-semibold text-gray-500 uppercase mb-4">Benefits</h2>
          <div className="space-y-6 mb-8">
            {/* Benefits Administration */}
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <img src="https://rippling2.imgix.net/icon-benefits.png" alt="Benefits Icon" className="h-10 w-10" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#4a2e37]">Benefits Administration</h3>
                <p className="text-gray-600">Manage employee benefits</p>
              </div>
            </div>
          </div>

          <h2 className="text-sm font-semibold text-gray-500 uppercase mb-4">Workforce Management</h2>
          <div className="space-y-6">
            {/* Time & Attendance */}
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <img src="https://rippling2.imgix.net/icon-time-attendance.png" alt="Time & Attendance Icon" className="h-10 w-10" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#4a2e37]">Time & Attendance</h3>
                <p className="text-gray-600">Automate time tracking</p>
              </div>
            </div>

            {/* Scheduling */}
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <img src="https://rippling2.imgix.net/icon-scheduling.png" alt="Scheduling Icon" className="h-10 w-10" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#4a2e37]">Scheduling</h3>
                <p className="text-gray-600">Build smarter schedules</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}