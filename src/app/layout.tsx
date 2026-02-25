import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "My Blog",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800">

        {/* Navbar — persists on every page */}
        <nav className="bg-white shadow p-4 mb-8">
          <div className="max-w-2xl mx-auto flex gap-6">
            <Link href="/" className="font-bold text-blue-600 hover:underline">🏠 Home</Link>
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </div>
        </nav>

        <main className="max-w-2xl mx-auto px-4">
          {children}  {/* Each page renders here */}
        </main>
        
      </body>
    </html>
  );
}