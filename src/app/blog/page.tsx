'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

type BlogMeta = {
  title: string;
  date: string;
  slug: string;
  description?: string;
  image?: string;
};

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogMeta[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch('/api/blogs');
      const data = await res.json();
      setPosts(data);
    }

    fetchPosts();
  }, []);

  return (
    <>
      <Head>
        <title>Our Blog</title>
        <meta name="description" content="Insights and stories from the team" />
      </Head>

      <main className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-10">Our Blog</h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post.slug}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-5 border"
            >
              {post.image && (
                <Link href={`/blog/${post.slug}`}>
                  <div className="relative w-full h-48 mb-4 rounded-xl overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-xl"
                    />
                  </div>
                </Link>
              )}
              <div>
                <h2 className="text-xl font-semibold text-blue-600 hover:underline mb-2">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-gray-500 text-sm mb-3">{new Date(post.date).toDateString()}</p>
                <p className="text-gray-700 line-clamp-3">{post.description}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-block mt-4 text-sm text-[#007BFF] hover:underline"
                >
                  Read more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
