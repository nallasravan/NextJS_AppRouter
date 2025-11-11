import '@/app/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = { title: 'Tailwind App' };

export default function RootLayout({ children }) {
  console.log("children=", children)
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 container max-w-7xl mx-auto p-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}