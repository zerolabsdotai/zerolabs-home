import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

import {
  MarketingFooter,
  MarketingNav,
} from "@/components/marketing";
import BackToTop from "@/components/ui/BackToTop";
import ThemedBackground from "@/components/ui/ThemedBackground";
import { getPostBySlug, getPostSlugs } from "@/lib/blog";

type BlogPostPageParams = { slug: string };

type BlogPostPageProps = {
  params: BlogPostPageParams | Promise<BlogPostPageParams>;
};

async function resolveParams(
  params: BlogPostPageProps["params"]
): Promise<BlogPostPageParams> {
  return Promise.resolve(params);
}

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  const slugs = getPostSlugs();
  const hasHelloZeroLabs = slugs.includes("hello-zero-labs");

  console.info("[blog] generateStaticParams slugs:", slugs);
  if (!hasHelloZeroLabs) {
    console.warn("[blog] Missing expected slug: hello-zero-labs");
  }

  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await resolveParams(params);
  const post = getPostBySlug(slug);

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

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await resolveParams(params);
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="relative min-h-screen text-[color:var(--text)]">
      <ThemedBackground />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[color:var(--page-overlay)]" />
      <MarketingNav />

      <main className="flex flex-col gap-10 px-4 pb-20 pt-36 sm:px-6 md:pt-32 lg:px-10">
        <div className="mx-auto w-full max-w-4xl">
          <article className="space-y-8">
            <header className="glass-panel rounded-[36px] p-6 shadow-[var(--zl-shadow-soft)] sm:p-8">
              <div className="flex flex-wrap items-center gap-3 text-[0.55rem] uppercase tracking-[0.3em] text-[color:var(--muted)]">
                <span className="h-1 w-6 rounded-full bg-[color:var(--brand)]" />
                <span>{post.date}</span>
              </div>
              <h1 className="mt-4 font-display text-3xl text-[color:var(--text)] sm:text-4xl lg:text-5xl">
                {post.title}
              </h1>
              <p className="mt-4 max-w-3xl text-sm text-[color:var(--muted)] sm:text-base">
                {post.summary}
              </p>
            </header>

            <div className="glass-panel rounded-[36px] p-6 shadow-[var(--zl-shadow-soft)] sm:p-10">
              <div className="prose max-w-none prose-lg prose-headings:font-semibold prose-headings:text-[color:var(--text)] prose-p:text-[color:var(--muted)] prose-strong:text-[color:var(--text)] prose-a:text-[color:var(--brand)] prose-a:transition prose-a:duration-200 prose-a:hover:text-[color:var(--text)] prose-hr:border-[color:var(--glass-border)]">
                <MDXRemote source={post.content} />
              </div>
            </div>
          </article>
        </div>
      </main>

      <MarketingFooter />
      <BackToTop />
    </div>
  );
}
