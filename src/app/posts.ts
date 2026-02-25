// src/posts.ts
import webDesignImage from "../assets/webDesign.png";

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  content: string;
  image?: string;
  tags?: string[];
}

export const posts: Post[] = [
  {
    slug: "tips-for-effective-web-design",
    title: "Tips for Effective Web Design",
    excerpt:
      "A website is often the first point of contact between a business and its audience. Learn the essential principles for creating engaging and effective web experiences.",
    date: "Aug 14, 2023",
    readTime: "5 min read",
    tags: ["Web Design", "UI/UX", "Tips"],
    image: webDesignImage as unknown as string,
    content: `Full article content for testing...

You can write multiple paragraphs here.

Add more text for testing.`,
  },
  {
    slug: "ai-design",
    title: "AI & Design",
    excerpt:
      "Exploring how artificial intelligence is reshaping the product design landscape and what it means for designers.",
    date: "February 15, 2026",
    readTime: "5 min read",
    tags: ["Design", "AI", "Thoughts"],
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    content: `Full details content...`,
  },
];