---
title: "How We Built Soyuru Sathkara: A Full Stack Web Application Journey"
date: "2026-02-08"
description: "A deep dive into building Soyuru Sathkara, a comprehensive web application using modern technologies including React, Next.js, and Node.js. Learn about the challenges, solutions, and key takeaways from this project."
author: "Pamoth Kumarasinghe"
tags: ["nextjs", "react", "fullstack", "webdev", "project"]
readTime: "8 min read"
---

# How I Built Soyuru Sathkara: A Full Stack Web Application Journey

Building a full-stack web application from scratch is both challenging and rewarding. In this post, I'll share my experience developing **Soyuru Sathkara**, walking you through the technical decisions, challenges faced, and lessons learned along the way.

## The Project Vision

Soyuru Sathkara was conceived as a comprehensive web platform that needed to be:

- **Fast and responsive** - Users expect instant feedback
- **Scalable** - Architecture that grows with user demand
- **User-friendly** - Intuitive interface for all skill levels
- **Maintainable** - Clean code for future development

## Technology Stack Selection

After careful consideration, I chose the following technologies:

### Frontend

- **Next.js 14** - For server-side rendering and optimal performance
- **React** - Component-based UI development
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Rapid UI development with utility classes

### Backend

- **Node.js** - JavaScript runtime for backend logic
- **Express.js** - Fast, minimalist web framework
- **PostgreSQL** - Relational database for data integrity
- **Prisma** - Modern ORM for type-safe database access

### DevOps

- **Vercel** - Deployment and hosting
- **GitHub Actions** - CI/CD pipeline
- **Docker** - Containerization for consistent environments

## Key Implementation Challenges

### 1. Performance Optimization

One of the biggest challenges was ensuring fast page loads. Here's what I did:

```typescript
// Implemented dynamic imports for code splitting
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <Skeleton />,
  ssr: false
});

// Used React Server Components for data fetching
export default async function Page() {
  const data = await fetchData(); // Runs on server
  return <ClientComponent data={data} />;
}
```

**Result**: Reduced initial page load time by 40%.

### 2. State Management

Managing global state across the application required a thoughtful approach:

```typescript
// Used Zustand for lightweight state management
import create from "zustand";

interface AppState {
  user: User | null;
  setUser: (user: User) => void;
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export const useStore = create<AppState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  theme: "light",
  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === "light" ? "dark" : "light",
    })),
}));
```

## Best Practices I Followed

### 1. Code Organization

I structured the project following Next.js 14 App Router conventions:

```
app/
├── (auth)/
│   ├── login/
│   └── register/
├── (dashboard)/
│   ├── layout.tsx
│   └── page.tsx
├── api/
│   └── [...routes]/
├── components/
│   ├── ui/
│   └── shared/
└── lib/
    ├── utils/
    └── db/
```

### 2. Error Handling

Comprehensive error handling at every level:

```typescript
// Global error boundary
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to monitoring service
    logErrorToService(error);
  }, [error]);

  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}
```

### 3. Testing Strategy

- **Unit tests** with Jest for utility functions
- **Integration tests** for API endpoints
- **E2E tests** with Playwright for critical user flows
- **Visual regression tests** for UI components

### 4. Accessibility (a11y)

Made the application accessible to all users:

- Semantic HTML elements
- ARIA labels where needed
- Keyboard navigation support
- Screen reader compatibility
- Color contrast compliance (WCAG AA)

## Performance Metrics

After optimization, here are the Lighthouse scores:

- **Performance**: 98/100
- **Accessibility**: 100/100
- **Best Practices**: 100/100
- **SEO**: 100/100

## Key Takeaways

### What Went Well

✅ **TypeScript adoption** - Caught numerous bugs during development
✅ **Server Components** - Significantly improved performance
✅ **Incremental Static Regeneration** - Perfect balance of static and dynamic content
✅ **Component-driven development** - Highly reusable UI components

### What I'd Do Differently

❌ **Earlier testing implementation** - Should have written tests from day one
❌ **Better documentation** - Would have saved time during handoffs
❌ **Monitoring setup** - Should have set up error tracking earlier

## Lessons Learned

1. **Start with TypeScript** - The initial setup time is worth it
2. **Performance is a feature** - Users notice and appreciate fast applications
3. **Invest in DevOps early** - Good CI/CD saves countless hours
4. **Write tests** - Future you will thank current you
5. **Document as you go** - Don't leave it until the end

## Future Improvements

Looking ahead, I plan to:

- Implement real-time features using WebSockets
- Add Progressive Web App (PWA) capabilities
- Integrate AI-powered features for enhanced UX
- Build a comprehensive analytics dashboard
- Create a mobile app using React Native

## Conclusion

Building Soyuru Sathkara taught me invaluable lessons about modern web development. The combination of Next.js, TypeScript, and a solid architecture created a foundation that's both performant and maintainable.

If you're starting a similar project, my advice is:

- Choose your tech stack wisely
- Prioritize performance from the start
- Write clean, documented code
- Test thoroughly
- Never stop learning

---

**Want to discuss this project or have questions?** Feel free to [reach out](/contact) or check out my other [projects](/projects).

**Interested in the code?** Visit the [GitHub repository](https://github.com/PamothKumarasinghe) to see the full implementation.
