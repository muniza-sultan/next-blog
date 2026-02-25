import { getPostBySlug, getAllPosts } from "@/lib/posts";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug); // 👈 now we await it

  if (!post) return notFound();
  return (
    <article className="bg-white p-8 rounded-xl shadow">
      <span className="text-sm bg-blue-100 text-blue-600 px-2 py-1 rounded">Post #{post.id}</span>
      <h1 className="text-3xl font-bold my-4 capitalize">{post.title}</h1>
      <h6 className="text-3xl font-bold my-4 capitalize">{post.slug}</h6>
      <p className="text-gray-700 leading-relaxed">{post.body}</p>
    </article>
  );
}