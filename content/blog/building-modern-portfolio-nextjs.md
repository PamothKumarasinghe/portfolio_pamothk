---
title: "Building a Modern Portfolio with Next.js 15 and TypeScript"
date: "2026-02-07"
description: "Learn how I built my professional portfolio using Next.js 15 App Router, TypeScript, Tailwind CSS, and modern web development best practices. A complete guide to creating a high-performance, SEO-optimized portfolio website."
author: "Pamoth Kumarasinghe"
tags: ["nextjs", "typescript", "portfolio", "webdev", "seo"]
readTime: "10 min read"
---

# Building a Modern Portfolio with Next.js 15 and TypeScript

As a software engineer, having a strong online presence is crucial. Your portfolio is often the first impression potential employers or clients have of your work. In this post, I'll walk you through how I built my portfolio website using Next.js 15, and why I made specific technical choices along the way.

## Why Next.js?

After evaluating various frameworks, I chose Next.js for several compelling reasons:

### 1. Server-Side Rendering (SSR) & Static Site Generation (SSG)

Next.js offers the best of both worlds:

```typescript
// Static generation for performance
export async function generateStaticParams() {
  return [
    { slug: 'project-1' },
    { slug: 'project-2' },
  ];
}

// Server-side rendering when needed
export default async function Page({ params }: { params: { slug: string } }) {
  const data = await fetchData(params.slug);
  return <ProjectDetails data={data} />;
}
```

### 2. App Router Architecture

The App Router in Next.js 15 provides:

- Nested layouts
- Server and Client Components
- Streaming and Suspense
- Built-in loading and error states

### 3. Performance Out of the Box

- Automatic code splitting
- Image optimization
- Font optimization
- Script optimization

## Tech Stack Breakdown

Here's the complete stack I used:

### Core Technologies

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animations

### Additional Libraries

- **Lucide React** - Icons
- **React Hook Form** - Form handling
- **Zod** - Schema validation

## Project Structure

I organized the project following Next.js 15 conventions:

```
my-portfolio/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   ├── blog/               # Blog section
│   ├── projects/           # Projects page
│   ├── achievements/       # Achievements page
│   ├── components/         # React components
│   └── lib/                # Utility functions
├── public/                 # Static assets
└── content/                # Markdown content
```

## Key Features Implementation

### 1. SEO Optimization

SEO is critical for portfolio visibility. Here's my approach:

```typescript
// app/layout.tsx
export const metadata: Metadata = {
  metadataBase: new URL("https://pamoth.cse.mrt.lk"),
  title: {
    default: "Pamoth Kumarasinghe | Software Engineer & Full Stack Developer",
    template: "%s | Pamoth Kumarasinghe"
  },
  description: "Professional Software Engineer portfolio...",
  keywords: ["Software Engineer", "Full Stack Developer", ...],
  openGraph: {
    title: "Pamoth Kumarasinghe | Software Engineer",
    description: "Professional portfolio...",
    images: ["/og-image.jpg"],
  },
};
```

#### JSON-LD Structured Data

```typescript
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Pamoth Kumarasinghe",
  jobTitle: "Software Engineer",
  url: "https://pamoth.cse.mrt.lk",
  sameAs: [
    "https://github.com/PamothKumarasinghe",
    "https://linkedin.com/in/pamoth-kumarasinghe",
  ],
};
```

### 2. Responsive Navigation

A smooth, accessible navigation system:

```typescript
'use client';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={scrolled ? 'bg-black/95 backdrop-blur-md' : ''}>
      {/* Navigation items */}
    </nav>
  );
}
```

### 3. Animated Hero Section

First impressions matter:

```typescript
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center justify-center"
    >
      <div className="text-center">
        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className="text-6xl font-bold mb-4"
        >
          Hi, I'm Pamoth
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-2xl text-gray-400"
        >
          Software Engineer & Full Stack Developer
        </motion.p>
      </div>
    </motion.section>
  );
}
```

### 4. Project Showcase

Dynamic project cards with hover effects:

```typescript
export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      className="bg-gray-900 rounded-lg overflow-hidden"
    >
      <Image
        src={project.image}
        alt={project.title}
        width={600}
        height={400}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map(tech => (
            <span key={tech} className="bg-gray-800 px-3 py-1 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
```

### 5. Blog System

A complete blog with markdown support:

```typescript
// app/lib/blog.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getAllPosts() {
  const postsDirectory = path.join(process.cwd(), "content/blog");
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug: fileName.replace(/\.md$/, ""),
        ...data,
        content,
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}
```

## Performance Optimization Strategies

### 1. Image Optimization

Next.js Image component handles optimization automatically:

```typescript
import Image from 'next/image';

<Image
  src="/profile.jpg"
  alt="Pamoth Kumarasinghe"
  width={400}
  height={400}
  priority // Load eagerly for above-the-fold images
  className="rounded-full"
/>
```

### 2. Code Splitting

Dynamic imports for heavy components:

```typescript
import dynamic from 'next/dynamic';

const HeavyChart = dynamic(() => import('./HeavyChart'), {
  loading: () => <Skeleton />,
  ssr: false // Don't render on server
});
```

### 3. Font Optimization

Using next/font for optimal font loading:

```typescript
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
```

## Deployment & CI/CD

Deployed on Vercel with automatic deployments:

```yaml
# .github/workflows/ci.yml
name: CI
on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: "18"
      - run: npm ci
      - run: npm run build
      - run: npm run lint
```

## Accessibility Considerations

Made the portfolio accessible to everyone:

```typescript
// Semantic HTML
<nav aria-label="Main navigation">
  <Link href="/" aria-label="Go to homepage">
    Home
  </Link>
</nav>

// Keyboard navigation
<button
  onClick={handleClick}
  onKeyDown={(e) => e.key === 'Enter' && handleClick()}
  tabIndex={0}
  aria-label="Open menu"
>
  Menu
</button>

// Screen reader support
<span className="sr-only">Loading...</span>
```

## Lessons Learned

### What Worked Well

✅ **TypeScript** - Caught bugs early and improved developer experience
✅ **Tailwind CSS** - Rapid UI development without CSS files
✅ **App Router** - Simplified routing and layouts
✅ **Framer Motion** - Smooth, professional animations

### Challenges Faced

❌ **Learning App Router** - Different from Pages Router, required adjustment
❌ **Animation Performance** - Had to optimize heavy animations
❌ **SEO Testing** - Took time to get all structured data correct

## Performance Results

Final Lighthouse scores:

- **Performance**: 86/100 ⚡
- **Accessibility**: 96/100 ♿
- **Best Practices**: 100/100 ✅
- **SEO**: 100/100 🔍

## Tips for Building Your Portfolio

1. **Keep it simple** - Focus on showcasing your best work
2. **Make it fast** - Performance is a feature
3. **SEO matters** - Optimize for search engines
4. **Mobile-first** - Most visitors are on mobile
5. **Show personality** - Let your unique style shine
6. **Keep it updated** - Add new projects regularly
7. **Write blog posts** - Demonstrate your expertise
8. **Use analytics** - Understand your visitors

## Source Code & Resources

Want to build something similar? Here are helpful resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Guide](https://www.framer.com/motion/)

## Conclusion

Building a portfolio with Next.js 15 was an excellent decision. The framework's performance, developer experience, and SEO capabilities make it perfect for personal websites.

The combination of:

- Server and Client Components
- Built-in optimizations
- TypeScript support
- Great developer experience

...creates a solid foundation for any portfolio project.

**Ready to build yours?** Start with the [Next.js tutorial](https://nextjs.org/learn) and iterate from there!

---

**Questions or feedback?** [Get in touch](/contact) - I'd love to hear from you!

**Check out my portfolio:** [pamoth.cse.mrt.lk](https://pamoth.cse.mrt.lk)
