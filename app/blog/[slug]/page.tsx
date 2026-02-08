import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPostBySlug, getAllPostSlugs } from '@/app/lib/blog';
import { Navigation } from '@/app/components/Navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.description,
    keywords: [
      'Pamoth Kumarasinghe',
      ...post.tags,
      'software engineering',
      'web development',
      'programming',
    ],
    authors: [{ name: post.author }],
    alternates: {
      canonical: `https://pamoth.cse.mrt.lk/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://pamoth.cse.mrt.lk/blog/${slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // JSON-LD for Article
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "image": "https://pamoth.cse.mrt.lk/profilepic.jpg",
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Person",
      "name": post.author,
      "url": "https://pamoth.cse.mrt.lk"
    },
    "publisher": {
      "@type": "Person",
      "name": "Pamoth Kumarasinghe",
      "url": "https://pamoth.cse.mrt.lk"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://pamoth.cse.mrt.lk/blog/${slug}`
    },
    "keywords": post.tags.join(', ')
  };

  // Breadcrumb JSON-LD
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://pamoth.cse.mrt.lk"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://pamoth.cse.mrt.lk/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://pamoth.cse.mrt.lk/blog/${slug}`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="bg-black text-white min-h-screen">
        <Navigation />
        <main className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto">
            {/* Breadcrumb */}
            <nav className="text-sm mb-8 text-gray-400">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link href="/blog" className="hover:text-white">
                Blog
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white">{post.title}</span>
            </nav>

            {/* Article Header */}
            <article>
              <header className="mb-8">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
                <div className="flex flex-wrap items-center gap-4 text-gray-400 mb-6">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  <span>•</span>
                  <span>{post.readTime}</span>
                  <span>•</span>
                  <span>By {post.author}</span>
                </div>
                {post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
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
                <p className="text-xl text-gray-300">{post.description}</p>
              </header>

              {/* Article Content */}
              <div className="prose prose-invert prose-lg max-w-none">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    code({ node, inline, className, children, ...props }: any) {
                      const match = /language-(\w+)/.exec(className || '');
                      return !inline && match ? (
                        <SyntaxHighlighter
                          style={vscDarkPlus}
                          language={match[1]}
                          PreTag="div"
                          {...props}
                        >
                          {String(children).replace(/\n$/, '')}
                        </SyntaxHighlighter>
                      ) : (
                        <code className={className} {...props}>
                          {children}
                        </code>
                      );
                    },
                    h1: ({ children }) => <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>,
                    h2: ({ children }) => <h2 className="text-2xl font-bold mt-6 mb-3">{children}</h2>,
                    h3: ({ children }) => <h3 className="text-xl font-bold mt-4 mb-2">{children}</h3>,
                    p: ({ children }) => <p className="mb-4 text-gray-300 leading-relaxed">{children}</p>,
                    ul: ({ children }) => <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>,
                    ol: ({ children }) => <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>,
                    li: ({ children }) => <li className="text-gray-300">{children}</li>,
                    a: ({ href, children }) => (
                      <a href={href} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                        {children}
                      </a>
                    ),
                    blockquote: ({ children }) => (
                      <blockquote className="border-l-4 border-gray-700 pl-4 italic my-4 text-gray-400">
                        {children}
                      </blockquote>
                    ),
                  }}
                >
                  {post.content}
                </ReactMarkdown>
              </div>

              {/* Author Section */}
              <div className="mt-12 pt-8 border-t border-gray-800">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center text-2xl font-bold">
                    PK
                  </div>
                  <div>
                    <p className="font-semibold text-lg">{post.author}</p>
                    <p className="text-gray-400">Software Engineer | Full Stack Developer | Game Developer</p>
                  </div>
                </div>
              </div>

              {/* Back to Blog */}
              <div className="mt-8">
                <Link
                  href="/blog"
                  className="inline-flex items-center text-blue-500 hover:underline"
                >
                  ← Back to all posts
                </Link>
              </div>
            </article>
          </div>
        </main>
      </div>
    </>
  );
}
