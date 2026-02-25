import { getAllPosts } from "@/lib/posts";

// Handles GET /api/posts
export async function GET() {
  const posts = await getAllPosts();

  return Response.json({
    success: true,
    count: posts.length,
    data: posts,
  });
}