import { getPostBySlug } from "@/lib/posts";

// Handles GET /api/posts/1, /api/posts/2 etc
export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return Response.json({ success: false, message: "Post not found" }, { status: 404 });
  }

  return Response.json({ success: true, data: post });
}