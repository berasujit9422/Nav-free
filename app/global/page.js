// pages/menu.jsx

import Image from "next/image";

export default function MenuPage() {
  return (
    <div className="flex flex-col md:flex-row p-8 gap-8 bg-white text-[#333]">
      {/* Left Section */}
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* Products */}
        <div>
          <h3 className="text-xs font-semibold tracking-widest mb-4 text-gray-500">PRODUCTS</h3>
          <div className="space-y-4">
            {[
              { src: "/images/eor.svg", title: "Employer of Record", desc: "Hire globally without entities" },
              { src: "/images/payroll.svg", title: "Global Payroll", desc: "Pay employees anywhere" },
              { src: "/images/contractors.svg", title: "Global Contractors", desc: "Pay contractors anywhere" },
              { src: "/images/hris.svg", title: "Global HRIS", desc: "Run global HR in one place" },
              { src: "/images/hr_advisor.svg", title: "Global HR Advisor", desc: "Get localised HR expertise" },
              { src: "/images/benefits.svg", title: "Global Benefits", desc: "Manage benefits globally" },
              { src: "/images/spend.svg", title: "Global Spend", desc: "Save everywhere you operate" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <Image src={item.src} alt={item.title} width={40} height={40} />
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-xs font-semibold tracking-widest mb-4 text-gray-500">RESOURCES</h3>
          <div className="space-y-4">
            {[
              { src: "/images/hiring_guides.svg", title: "Hiring Guides" },
              { src: "/images/cost_calculator.svg", title: "Employee Cost Calculator" },
              { src: "/images/misclassification_quiz.svg", title: "Misclassification Quiz" },
              { src: "/images/entity_calculator.svg", title: "Entity vs. EOR Cost Calculator" },
              { src: "/images/glossary.svg", title: "Glossary" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <Image src={item.src} alt={item.title} width={40} height={40} />
                <p className="font-semibold">{item.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Solutions */}
        <div>
          <h3 className="text-xs font-semibold tracking-widest mb-4 text-gray-500">SOLUTIONS</h3>
          <div className="space-y-4">
            {[
              { src: "/images/all_in_one.svg", title: "All-in-One" },
              { src: "/images/global_only.svg", title: "Global Only" },
              { src: "/images/contractor_eor.svg", title: "Contractor to EOR" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <Image src={item.src} alt={item.title} width={40} height={40} />
                <p className="font-semibold">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-64">
        <h3 className="text-xs font-semibold tracking-widest mb-4 text-gray-500">FEATURED</h3>
        <div className="mb-8">
          <Image src="/images/global_hiring_report.png" alt="Global Hiring Report" width={200} height={100} className="rounded" />
          <p className="text-xs mt-2 text-gray-500">RESOURCE</p>
          <p className="font-semibold">Global Hiring Report</p>
        </div>

        <h3 className="text-xs font-semibold tracking-widest mb-4 text-gray-500">HIRE GLOBALLY</h3>
        <div className="space-y-2 text-sm">
          <p>🇬🇧 Hire in United Kingdom</p>
          <p>🇦🇺 Hire in Australia</p>
          <p>🇨🇦 Hire in Canada</p>
        </div>

        <p className="text-sm text-blue-600 mt-4 underline cursor-pointer">View all countries</p>
      </div>
    </div>
  );
}