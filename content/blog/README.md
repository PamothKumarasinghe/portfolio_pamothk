# Blog Content

This directory contains all blog posts in Markdown format with YAML frontmatter.

## Adding a New Blog Post

1. Create a new `.md` file in this directory
2. Use kebab-case for the filename (e.g., `my-awesome-post.md`)
3. Add frontmatter at the top of the file
4. Write your content in Markdown

### Example Blog Post Template

````markdown
---
title: "Your Blog Post Title"
date: "2026-02-08"
description: "A brief description of your post (155-160 characters for SEO)"
author: "Pamoth Kumarasinghe"
tags: ["tag1", "tag2", "tag3"]
readTime: "5 min read"
---

# Your Blog Post Title

Your content goes here...

## Subheading

More content...

### Code Example

\```typescript
const example = "code block";
\```

## Another Section

Continue writing...

---

**Call to action or conclusion**
````

## Frontmatter Fields

| Field         | Required | Description                                     | Example                    |
| ------------- | -------- | ----------------------------------------------- | -------------------------- |
| `title`       | Yes      | Post title                                      | "How I Built My Portfolio" |
| `date`        | Yes      | Publication date (YYYY-MM-DD)                   | "2026-02-08"               |
| `description` | Yes      | SEO description                                 | "Learn how I built..."     |
| `author`      | No       | Author name (defaults to "Pamoth Kumarasinghe") | "Pamoth Kumarasinghe"      |
| `tags`        | No       | Array of tags                                   | ["react", "nextjs"]        |
| `readTime`    | No       | Estimated read time                             | "5 min read"               |

## Markdown Support

The blog supports:

- **Headings** (H1-H6)
- **Bold** and _italic_ text
- `Inline code`
- Code blocks with syntax highlighting
- Links
- Lists (ordered and unordered)
- Blockquotes
- Tables
- GitHub-flavored markdown (GFM)

## Code Blocks with Syntax Highlighting

Supports all major languages:

\```typescript
const greeting: string = "Hello, World!";
\```

\```python
def greet():
print("Hello, World!")
\```

\```bash
npm install package-name
\```

## Internal Links

Link to other pages on your portfolio:

```markdown
Check out my [projects](/projects) and [achievements](/achievements).

[Get in touch](/contact) if you have questions!
```

## Best Practices

### SEO Optimization

1. **Title**: 50-60 characters, include main keyword
2. **Description**: 155-160 characters, compelling and keyword-rich
3. **Tags**: 3-7 relevant tags
4. **Content**: 800-1500 words for optimal SEO
5. **Headings**: Use proper H2, H3 hierarchy
6. **Internal Links**: Link to your projects/achievements
7. **Keywords**: Include "Pamoth Kumarasinghe" naturally

### Content Quality

- Write for humans first, search engines second
- Include code examples when relevant
- Use images/diagrams (place in `/public/blog/`)
- Break content into scannable sections
- End with a call-to-action

### Naming Convention

Use descriptive, SEO-friendly filenames:

- ✅ `building-scalable-react-apps.md`
- ✅ `typescript-best-practices-2026.md`
- ❌ `post1.md`
- ❌ `blog_post.md`

## Publishing Workflow

1. **Create** your markdown file in `content/blog/`
2. **Test locally** - the post will appear at `/blog/your-slug`
3. **Commit** to git
4. **Push** to GitHub
5. **Deploy** - Vercel auto-deploys on push to main
6. **Share** on social media with the blog post URL

## Blog Post Ideas

Based on your SEO action plan, consider writing about:

1. ✅ "How I Built Soyuru Sathkara" (Done!)
2. ✅ "Building a Modern Portfolio with Next.js" (Done!)
3. ✅ "My Top 10 GitHub Tricks" (Done!)
4. "React Performance Tips I Use in Production"
5. "My Journey as a Software Engineer"
6. "5 Full Stack Projects That Taught Me the Most"
7. "Game Development with Unity: Lessons Learned"
8. "TypeScript Tips for Cleaner Code"
9. "Why I Chose Next.js Over Other Frameworks"
10. "My Development Setup in 2026"

## File Structure

```
content/blog/
├── README.md (this file)
├── how-i-built-soyuru-sathkara.md
├── building-modern-portfolio-nextjs.md
├── github-tricks-every-developer-should-know.md
└── your-next-post.md
```

## Need Help?

- Check existing blog posts for examples
- Markdown guide: https://www.markdownguide.org/
- Test markdown: https://dillinger.io/

---

**Happy blogging! 🚀**
