// In a real app, this would fetch from a DB or API
/*
export const posts = [
  {
    slug: "hello-world",
    title: "Hello World",
    date: "2024-01-01",
    excerpt: "My very first blog post.",
    content: "Welcome to my blog! This is the full content of the first post. Next.js makes building apps so easy!",
  },
  {
    slug: "nextjs-is-awesome",
    title: "Next.js is Awesome",
    date: "2024-02-15",
    excerpt: "Why I love building with Next.js.",
    content: "Next.js gives you SSR, SSG, ISR, file-based routing, and API routes all in one framework. It's a game changer!",
  },
  {
    slug: "react-server-components",
    title: "Understanding Server Components",
    date: "2024-03-10",
    excerpt: "A beginner's guide to React Server Components.",
    content: "Server Components run on the server and send zero JavaScript to the browser. This makes your app faster and leaner!",
  },
];

export function getAllPosts() {
  return posts;
}

export function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug);
}*/
export type Post = {
  id: number;
  slug: string;
  title: string;
  body: string;
};

export async function getAllPosts(): Promise<Post[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=6", {
    next: { revalidate: 60 }, // ISR — refresh every 60 seconds
  });
  const data = await res.json();

  // Shape the data to match what we need
  return data.map((post: any) => ({
    id: post.id,
    slug: post.id.toString(), // use id as slug
    title: post.title,
    body: post.body,
  }));
}

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) return undefined;
  const post = await res.json();

  return {
    id: post.id,
    slug: post.id.toString(),
    title: post.title,
    body: post.body,
  };
}