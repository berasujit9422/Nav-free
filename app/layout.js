// app/layout.js
import '../app/globals.css'; // Make sure this path is correct
import Navbar from '../components/Navbar'; // Import the Navbar component

export const metadata = {
  title: 'My Rippling App', // You can change this title
  description: 'A Next.js application with a Rippling-like navbar.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar /> {/* Place your Navbar component here */}
        {children} {/* This is where the content of your pages (e.g., app/page.js) will be rendered */}
      </body>
    </html>
  );
}