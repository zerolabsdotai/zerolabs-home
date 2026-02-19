import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

import { getPostBySlug, getPostSlugs } from "@/lib/blog";

type BlogPostPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <article className="space-y-6">
        <header className="space-y-2">
          <p className="text-xs text-neutral-500">{post.date}</p>
          <p className="text-sm text-neutral-700">{post.summary}</p>
        </header>
        <div className="prose prose-neutral max-w-none">
          <MDXRemote source={post.content} />
        </div>
      </article>
    </main>
  );
}
