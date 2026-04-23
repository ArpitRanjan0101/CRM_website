import { Metadata } from "next";
import BlogClient from "./BlogClient";

async function getBlogData(slug) {
  const response = await fetch("https://api.blog-manager.triostack.in/api/blogs", {
    headers: {
      "Authorization": "Bearer 9f3c2e7a8b1c4d6e8f9a0b1c2d3e4f56789abcdeffedcba9876543210a1b2c3d4e5f6a7b8c9d"
    },
    next: { revalidate: 3600 } // Revalidate every hour
  });
  const data = await response.json();
  return data.find(p => p._id === slug);
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const post = await getBlogData(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.heading || post.content?.substring(0, 160),
    openGraph: {
      title: post.title,
      description: post.heading || post.content?.substring(0, 160),
      url: `https://triostack.in/blogs/${post._id}`,
      type: "article",
      images: [
        {
          url: post.image || "/img.png",
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.heading || post.content?.substring(0, 160),
      images: [post.image || "/img.png"],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = params;
  // We fetch all data in the client for now to keep the logic similar, 
  // but generateMetadata uses server-side fetching for SEO.
  return <BlogClient slug={slug} />;
}
