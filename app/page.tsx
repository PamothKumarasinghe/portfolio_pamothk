import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';

export default function Home() {
  // FAQ JSON-LD structured data for SEO
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who is Pamoth Kumarasinghe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pamoth Kumarasinghe is a professional Software Engineer, Full Stack Developer, and Game Developer specializing in modern web technologies including React, Next.js, Node.js, and TypeScript."
        }
      },
      {
        "@type": "Question",
        "name": "What technologies does Pamoth Kumarasinghe work with?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pamoth Kumarasinghe works with a wide range of technologies including React, Next.js, Node.js, TypeScript, Python, Java, Unity, and various modern web development frameworks and tools."
        }
      },
      {
        "@type": "Question",
        "name": "What services does Pamoth Kumarasinghe offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pamoth Kumarasinghe offers Software Engineering, Full Stack Development, Game Development, Web Development, and consulting services for building robust, scalable applications."
        }
      }
    ]
  };

  // Website JSON-LD for homepage
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Pamoth Kumarasinghe Portfolio",
    "url": "https://pamoth.cse.mrt.lk",
    "description": "Professional portfolio of Pamoth Kumarasinghe - Software Engineer, Full Stack Developer, and Game Developer",
    "author": {
      "@type": "Person",
      "name": "Pamoth Kumarasinghe"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://pamoth.cse.mrt.lk/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <div className="bg-black text-white min-h-screen">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
