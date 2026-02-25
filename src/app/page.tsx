// This is a SERVER COMPONENT by default — no "use client" needed
// It can fetch data directly, like calling a DB

import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default async function HomePage() {
  const posts = await getAllPosts(); // In real life: await fetch(...) or await db.query(...)

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">📝 Latest Posts</h1>

      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug} className="bg-white p-5 rounded-xl shadow hover:shadow-md transition">
            <p className="text-sm text-gray-400 mb-1">{post.date}</p>
            <h2 className="text-xl font-semibold mb-1">{post.title}</h2>
            <p className="text-gray-600 mb-3">{post.excerpt}</p>
            {/* Link to the dynamic route */}
            <Link href={`/blog/${post.slug}`} className="text-blue-500 hover:underline font-medium">
              Read more →
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}