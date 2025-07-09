// app/resources/blog/page.js
import Link from 'next/link';

const blogCategories = [
  { name: 'HR Leaders', href: '/resources/blog/hr-leaders' },
  { name: 'IT Leaders', href: '/resources/blog/it-leaders' },
  { name: 'Finance Leaders', href: '/resources/blog/finance-leaders' },
  { name: 'Global', href: '/resources/blog/global' },
];

const featuredBlogPosts = [
  {
    type: 'FINANCE',
    title: 'The essential guide to switching payroll systems [2024]',
    image: '/images/blog-payroll-guide.png', // Placeholder image
    href: '#',
  },
  {
    type: 'HR',
    title: 'Pay transparency laws: A state-by-state guide [2024]',
    image: '/images/blog-pay-transparency.png', // Placeholder image
    href: '#',
  },
  {
    type: 'HR',
    title: 'Scaling frugally: How we grew Reserv from 17 to 250 in one year',
    image: '/images/blog-reserv-scaling.png', // Placeholder image (image with person)
    href: '#',
  },
  {
    type: 'HR',
    title: '3 leaders who are hacking global HR',
    image: '/images/blog-global-hr.png', // Placeholder image (image with people)
    href: '#',
  },
];

const FeaturedBlogPostCard = ({ type, title, image, href }) => (
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


export default function BlogPage() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Section - Blog Categories */}
        <div className="flex-1 lg:w-1/3">
          <h2 className="text-sm font-semibold text-gray-500 uppercase mb-6 border-b pb-2 border-gray-300 flex items-center justify-between">
            BLOG
            <Link href="/blog" className="text-gray-400 hover:text-[#f0b53d] transition-colors duration-200">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </Link>
          </h2>
          <nav className="space-y-1">
            {blogCategories.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center justify-between p-3 rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#4a2e37] transition-colors duration-200 group"
              >
                <span>{item.name}</span>
                <svg
                  className="h-5 w-5 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            ))}
          </nav>
        </div>

        {/* Right Section - Featured Blog Posts */}
        <div className="lg:w-2/3 flex-shrink-0 border-l border-gray-200 pl-8">
          <h2 className="text-sm font-semibold text-gray-500 uppercase mb-6 border-b pb-2 border-gray-300">FEATURED</h2>
          <div className="space-y-4">
            {featuredBlogPosts.map((post, index) => (
              <FeaturedBlogPostCard
                key={index}
                type={post.type}
                title={post.title}
                image={post.image}
                href={post.href}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}