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
    alternates: {
      canonical: `/blog/${slug}`,
    },
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

  const category = post.category ?? "AI Automation";

  return (
    <div className="relative min-h-screen text-[color:var(--text)]">
      <ThemedBackground />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[color:var(--page-overlay)]" />
      <MarketingNav />

      <main className="flex flex-col gap-10 px-4 pb-20 pt-36 sm:px-6 md:pt-32 lg:px-10">
        <div className="mx-auto w-full max-w-5xl">
          <article className="space-y-8">
            <header className="glass-panel rounded-[36px] p-6 shadow-[var(--zl-shadow-soft)] sm:p-10">
              <div className="flex flex-wrap items-center gap-3 text-[0.55rem] uppercase tracking-[0.3em] text-[color:var(--muted)]">
                <span className="rounded-full border border-[color:var(--glass-border)] bg-[color:var(--glass-bg)] px-3 py-1 text-[0.55rem] uppercase tracking-[0.35em] text-[color:var(--text)]">
                  {category}
                </span>
                <span className="rounded-full border border-[color:var(--glass-border)] bg-[color:var(--glass-bg)] px-3 py-1 text-[0.55rem] uppercase tracking-[0.35em] text-[color:var(--text)]">
                  {post.date}
                </span>
              </div>
              <h1 className="mt-6 font-display text-4xl tracking-tight text-[color:var(--text)] sm:text-5xl lg:text-6xl">
                {post.title}
              </h1>
              <p
                className="mt-4 max-w-3xl text-[16px] leading-relaxed md:text-[18px]"
                style={{ color: "var(--reading-text)" }}
              >
                {post.summary}
              </p>
            </header>

            <div className="mx-auto w-full max-w-3xl">
              <div
                className="rounded-[28px] border p-6 shadow-[var(--zl-shadow-soft)] backdrop-blur-md sm:p-10"
                style={{
                  background: "var(--reading-bg)",
                  borderColor: "var(--reading-border)",
                }}
              >
                <div
                  className="prose max-w-none text-[16px] leading-relaxed md:text-[18px] prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-[color:var(--text)] prose-p:leading-relaxed prose-p:text-[color:var(--reading-text)] prose-strong:text-[color:var(--text)] prose-a:text-[color:var(--brand)] prose-a:transition prose-a:duration-200 prose-a:hover:text-[color:var(--text)] prose-hr:border-[color:var(--glass-border)]"
                  style={{ textShadow: "var(--reading-shadow)" }}
                >
                  <MDXRemote source={post.content} />
                </div>
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
