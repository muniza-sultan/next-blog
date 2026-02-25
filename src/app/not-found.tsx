import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center mt-20">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-gray-500 mb-6">Oops! That page doesn't exist.</p>
      <Link href="/" className="text-blue-500 hover:underline">← Go back home</Link>
    </div>
  );
}