import type { Metadata } from "next";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

import { getPostBySlug, getPostSlugs } from "@/lib/blog";

type BlogPostPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Post not found | Zero Labs Blog",
      description:
        "The requested post could not be found in the Zero Labs Blog archive.",
      openGraph: {
        title: "Post not found | Zero Labs Blog",
        description:
          "The requested post could not be found in the Zero Labs Blog archive.",
        type: "article",
      },
      twitter: {
        card: "summary_large_image",
        title: "Post not found | Zero Labs Blog",
        description:
          "The requested post could not be found in the Zero Labs Blog archive.",
      },
    };
  }

  const title = `${post.title} | Zero Labs Blog`;

  return {
    title,
    description: post.summary,
    openGraph: {
      title,
      description: post.summary,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: post.summary,
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#0b1430] via-[#0a0f1f] to-[#04060f] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-sky-500/35 via-blue-600/30 to-indigo-700/35 blur-3xl" />
        <div className="absolute -bottom-52 left-1/3 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-500/25 via-blue-700/25 to-cyan-500/25 blur-3xl" />
        <div className="absolute top-1/4 right-[-7rem] h-[24rem] w-[24rem] rounded-full bg-gradient-to-tr from-cyan-400/25 via-sky-500/25 to-indigo-600/25 blur-3xl" />
        <div className="absolute inset-0 bg-slate-950/60" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col px-6 py-20 sm:py-24">
        <article className="space-y-10">
          <header className="space-y-5">
            <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.3em] text-white/60">
              <Link
                href="/blog"
                className="transition hover:text-white/90"
              >
                Back to blog
              </Link>
              <span className="h-1 w-6 rounded-full bg-cyan-400/80" />
              <span>{post.date}</span>
            </div>
            <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <p className="max-w-3xl text-base text-white/70 sm:text-lg">
              {post.summary}
            </p>
          </header>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_40px_120px_-70px_rgba(15,23,42,0.9)] backdrop-blur-2xl sm:p-10">
            <div className="prose prose-invert max-w-none prose-lg prose-headings:font-semibold prose-headings:text-white prose-a:text-cyan-300 prose-a:transition prose-a:duration-200 prose-a:hover:text-cyan-200 prose-strong:text-white prose-hr:border-white/10">
              <MDXRemote source={post.content} />
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
