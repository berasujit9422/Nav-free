// app/resources/webinars/page.js
import Link from 'next/link';

const upcomingWebinars = [
  {
    title: 'Manual to Magical: A Rippling Live Demo',
    schedule: 'Biweekly on Tuesdays · 10:00am PT',
    icon: '/images/webinar-icon-1.png', // Placeholder icon
    href: '#',
  },
  {
    title: 'Effortless Global Hiring and Payroll with Rippling',
    schedule: 'Ongoing · Varies',
    icon: '/images/webinar-icon-2.png', // Placeholder icon
    href: '#',
  },
  {
    title: 'See Rippling in Action',
    schedule: 'Ongoing · 12:00 GMT',
    icon: '/images/webinar-icon-3.svg', // Placeholder icon
    href: '#',
  },
];

const onDemandRecordings = [
  {
    title: 'Ask HR: First-Time Manager\'s Guide',
    icon: '/images/ondemand-icon-1.png', // Placeholder icon
    href: '#',
  },
  {
    title: 'Ask Me Anything with Reserv\'s VP of Strategy, Matthew Lu',
    icon: '/images/ondemand-icon-2.png', // Placeholder icon
    href: '#',
  },
  {
    title: 'How to Avoid Global Worker Misclassification (and Litigation) in 2025',
    icon: '/images/ondemand-icon-3.png', // Placeholder icon
    href: '#',
  },
  {
    title: 'Call Your Founder: Insights from Startup Builders',
    icon: '/images/ondemand-icon-4.png', // Placeholder icon
    href: '#',
  },
  {
    title: 'Fireside Chat: Culture Building for Remote-First Companies',
    icon: '/images/ondemand-icon-5.png', // Placeholder icon
    href: '#',
  },
];

const WebinarCard = ({ title, schedule, icon, href }) => (
  <Link href={href} className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 group border border-gray-200 hover:border-[#f0b53d]">
    <div className="flex-shrink-0 mr-4">
      <img src={icon} alt={`${title} Icon`} className="h-10 w-10 object-contain" />
    </div>
    <div>
      <h3 className="text-base font-medium text-gray-800 group-hover:text-gray-900">{title}</h3>
      {schedule && <p className="text-sm text-gray-600 mt-1">{schedule}</p>}
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

export default function WebinarsPage() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Section - Upcoming Webinars */}
        <div className="flex-1 lg:w-1/2">
          <h2 className="text-sm font-semibold text-gray-500 uppercase mb-6 border-b pb-2 border-gray-300 flex items-center justify-between">
            UPCOMING WEBINARS
            <Link href="/webinars" className="text-gray-400 hover:text-[#f0b53d] transition-colors duration-200">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </Link>
          </h2>
          <div className="space-y-4">
            {upcomingWebinars.map((webinar, index) => (
              <WebinarCard
                key={index}
                title={webinar.title}
                schedule={webinar.schedule}
                icon={webinar.icon}
                href={webinar.href}
              />
            ))}
          </div>
        </div>

        {/* Right Section - On-Demand Recordings */}
        <div className="lg:w-1/2 flex-shrink-0 border-l border-gray-200 pl-8">
          <h2 className="text-sm font-semibold text-gray-500 uppercase mb-6 border-b pb-2 border-gray-300">ON-DEMAND RECORDINGS</h2>
          <div className="space-y-4">
            {onDemandRecordings.map((recording, index) => (
              <WebinarCard
                key={index}
                title={recording.title}
                icon={recording.icon}
                href={recording.href}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}