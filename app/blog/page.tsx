import { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts } from '../lib/blog';
import { Navigation } from '../components/Navigation';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Technical blog posts by Pamoth Kumarasinghe covering software engineering, web development, React, Next.js, game development, and programming best practices.',
  keywords: [
    'Pamoth Kumarasinghe blog',
    'software engineering blog',
    'web development articles',
    'React tutorials',
    'Next.js tips',
    'programming blog',
    'tech blog',
  ],
  alternates: {
    canonical: 'https://pamoth.cse.mrt.lk/blog',
  },
  openGraph: {
    title: 'Blog | Pamoth Kumarasinghe',
    description: 'Technical blog posts covering software engineering, web development, and programming best practices.',
    url: 'https://pamoth.cse.mrt.lk/blog',
    type: 'website',
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  // JSON-LD for Blog page
  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Pamoth Kumarasinghe's Blog",
    "description": "Technical blog covering software engineering, web development, and programming",
    "url": "https://pamoth.cse.mrt.lk/blog",
    "author": {
      "@type": "Person",
      "name": "Pamoth Kumarasinghe",
      "url": "https://pamoth.cse.mrt.lk"
    },
    "blogPost": posts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.description,
      "url": `https://pamoth.cse.mrt.lk/blog/${post.slug}`,
      "datePublished": post.date,
      "author": {
        "@type": "Person",
        "name": post.author
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <div className="bg-black text-white min-h-screen">
        <Navigation />
        <main className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-4">Blog</h1>
            <p className="text-gray-400 text-lg mb-12">
              Thoughts on software engineering, web development, and technology
            </p>

            {posts.length === 0 ? (
              <div className="bg-gray-900 rounded-lg p-8 text-center">
                <p className="text-gray-400 mb-4">No blog posts yet. Check back soon!</p>
                <p className="text-sm text-gray-500">
                  In the meantime, explore my{' '}
                  <Link href="/projects" className="text-blue-500 hover:underline">
                    projects
                  </Link>{' '}
                  and{' '}
                  <Link href="/achievements" className="text-blue-500 hover:underline">
                    achievements
                  </Link>
                  .
                </p>
              </div>
            ) : (
              <div className="space-y-8">
                {posts.map((post) => (
                  <article
                    key={post.slug}
                    className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors"
                  >
                    <Link href={`/blog/${post.slug}`}>
                      <div>
                        <div className="flex items-center gap-3 text-sm text-gray-400 mb-3">
                          <time dateTime={post.date}>
                            {new Date(post.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })}
                          </time>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>
                        <h2 className="text-2xl font-bold mb-2 hover:text-blue-500 transition-colors">
                          {post.title}
                        </h2>
                        <p className="text-gray-400 mb-4">{post.description}</p>
                        {post.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {post.tags.map((tag) => (
                              <span
                                key={tag}
                                className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
}
