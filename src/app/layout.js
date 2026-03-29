import "./globals.css";

export const metadata = {
  title: "Kunika Jain | UI/UX Designer & Frontend Developer",
  description: "Portfolio of Kunika Jain, a passionate UI/UX Designer and Frontend Developer creating intuitive digital experiences.",
};

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SmoothScrolling from '@/components/SmoothScrolling';
import CustomCursor from '@/components/CustomCursor';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased" suppressHydrationWarning>
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
          <CustomCursor />
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
