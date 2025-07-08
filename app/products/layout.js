// app/products/layout.js
'use client'; // This layout uses client-side hooks like useRouter

import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Correct hook for App Router

export default function ProductsLayout({ children }) {
  const pathname = usePathname(); // Get the current path to highlight active link

  const productNavItems = [
    { name: 'HCM', slug: 'hcm' },
    { name: 'Payroll', slug: 'payroll' },
    { name: 'IT', slug: 'it' },
    { name: 'Spend', slug: 'spend' },
  ];

  return (
    <div className="flex flex-col lg:flex-row bg-gray-100 min-h-[calc(100vh-64px)]"> {/* min-h for content below navbar */}
      {/* Sidebar Navigation */}
      <aside className="w-full lg:w-64 bg-white p-6 shadow-md lg:shadow-none">
        <ul className="space-y-4">
          {productNavItems.map((item) => (
            <li key={item.slug}>
              <Link
                href={`/products/${item.slug}`}
                className={`flex items-center justify-between p-3 rounded-md text-lg font-semibold transition-colors duration-200
                  ${
                    pathname.startsWith(`/products/${item.slug}`) // Highlight if path matches slug
                      ? 'bg-gray-100 text-[#4a2e37] hover:bg-gray-200'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
              >
                {item.name}
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content Area (Children will be rendered here) */}
      <main className="flex-1 p-8 bg-gray-50">
        {children}
      </main>
    </div>
  );
}