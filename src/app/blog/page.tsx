import Link from "next/link";

import { getAllPosts } from "@/lib/blog";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold">Blog</h1>
      <p className="mt-2 text-sm text-neutral-600">
        Notes, updates, and ideas from Zero Labs.
      </p>

      <div className="mt-10 space-y-8">
        {posts.map((post) => (
          <article key={post.slug} className="space-y-2">
            <h2 className="text-xl font-semibold">
              <Link href={`/blog/${post.slug}`} className="hover:underline">
                {post.title}
              </Link>
            </h2>
            <p className="text-xs text-neutral-500">{post.date}</p>
            <p className="text-sm text-neutral-700">{post.summary}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
