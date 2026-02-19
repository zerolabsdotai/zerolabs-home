import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  content: string;
};

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

function toSafeSlug(slug: string) {
  return slug.replace(/\.mdx$/, "").replace(/[\\/]/g, "");
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }

  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getPostBySlug(slug?: string): BlogPost | null {
  if (!slug) {
    return null;
  }

  const safeSlug = toSafeSlug(slug);
  const filePath = path.join(BLOG_DIR, `${safeSlug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const source = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(source);
  const { title, date, summary } = data as {
    title: string;
    date: string;
    summary: string;
  };

  return {
    slug: safeSlug,
    title,
    date,
    summary,
    content,
  };
}

export function getAllPosts(): BlogPost[] {
  const posts = getPostSlugs()
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is BlogPost => post !== null);

  return posts.sort((a, b) => b.date.localeCompare(a.date));
}
