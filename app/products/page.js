// app/products/page.js
import { redirect } from 'next/navigation';

export default function ProductsLandingPage() {
  // Redirect to the HCM page by default
  redirect('/products/hcm');

  // Alternatively, you could render a general products overview here
  // return (
  //   <div className="flex flex-col items-center justify-center h-full">
  //     <h1 className="text-4xl font-bold text-[#4a2e37] mb-4">Our Products</h1>
  //     <p className="text-lg text-gray-700">Select a product from the sidebar to learn more.</p>
  //   </div>
  // );
}