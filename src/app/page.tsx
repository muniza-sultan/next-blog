import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default async function HomePage() {
  const posts = await getAllPosts();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">📝 Latest Posts</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug} className="bg-white p-5 rounded-xl shadow hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-1 capitalize">{post.title}</h2>
            <p className="text-gray-600 mb-3 line-clamp-2">{post.body}</p> {/* 👈 body not excerpt */}
            <Link href={`/blog/${post.slug}`} className="text-blue-500 hover:underline font-medium">
              Read more →
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}