import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pamoth.cse.mrt.lk"),
  title: {
    default: "Pamoth Kumarasinghe | Backend Engineer & Full Stack Developer Portfolio",
    template: "%s | Pamoth Kumarasinghe"
  },
  description: "Backend Engineer & Full Stack Developer specializing in Node.js, Express.js, FastAPI, and Spring Boot. University of Moratuwa CSE undergraduate building scalable software systems.",
  keywords: [
    "Pamoth Kumarasinghe",
    "Pamoth",
    "Kumarasinghe",
    "Software Engineer",
    "Backend Engineer",
    "Full Stack Developer",
    "Game Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "Express.js Developer",
    "FastAPI Developer",
    "Spring Boot Developer",
    "RESTful API Design",
    "System Architecture",
    "University of Moratuwa",
    "Sri Lanka Software Engineer",
    "Portfolio",
    "Projects",
    "Skills",
    "Achievements",
    "Contact",
    "Web Development",
    "Backend Development",
    "github tricks",
    "Programming",
    "Computer Science",
    "Sri Lanka Developer",
  ],
  authors: [{ name: "Pamoth Kumarasinghe", url: "https://pamoth.cse.mrt.lk" }],
  creator: "Pamoth Kumarasinghe",
  publisher: "Pamoth Kumarasinghe",
  alternates: {
    canonical: "https://pamoth.cse.mrt.lk",
  },
  openGraph: {
    title: "Pamoth Kumarasinghe | Backend Engineer & Full Stack Developer Portfolio",
    description:
      "Backend Engineer & Full Stack Developer specializing in Node.js, Express.js, FastAPI, and Spring Boot. University of Moratuwa CSE undergraduate building scalable software systems.",
    url: "https://pamoth.cse.mrt.lk",
    siteName: "Pamoth Kumarasinghe Portfolio",
    images: [
      {
        url: "https://pamoth.cse.mrt.lk/profilepic.jpg",
        width: 1200,
        height: 630,
        alt: "Pamoth Kumarasinghe - Software Engineer and Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pamoth Kumarasinghe | Backend Engineer & Full Stack Developer Portfolio",
    description:
      "Backend Engineer & Full Stack Developer specializing in Node.js, Express.js, FastAPI, and Spring Boot. University of Moratuwa CSE undergraduate building scalable software systems.",
    images: ["https://pamoth.cse.mrt.lk/profilepic.jpg"],
    creator: "@pamothkumarasinghe",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "uZRvjlBgk97__nh2CVbtSD_ZyIOK8BExfgFBXn56Bus",
  },
  category: "Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Structured Data for better SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Pamoth Kumarasinghe",
    "url": "https://pamoth.cse.mrt.lk",
    "image": "https://pamoth.cse.mrt.lk/profilepic.jpg",
    "jobTitle": "Backend Engineer & Full Stack Developer",
    "description": "Backend Engineer and Full Stack Developer specializing in Node.js, Express.js, FastAPI, and Spring Boot. University of Moratuwa CSE undergraduate passionate about building scalable software systems.",
    "email": "prkumarasinghe@gmail.com",
    "sameAs": [
      "https://github.com/PamothKumarasinghe",
      "https://www.linkedin.com/in/pamoth-kumarasinghe-3a00b4346/",
      "https://www.instagram.com/nikolai_laazz?igsh=cDR0bWpnN2x3anEy"
    ],
    "knowsAbout": [
      "Backend Engineering",
      "Software Engineering",
      "Full Stack Development",
      "Game Development",
      "Node.js",
      "Express.js",
      "FastAPI",
      "Spring Boot",
      "RESTful API Design",
      "System Architecture",
      "React",
      "Next.js",
      "TypeScript",
      "Unity",
      "JavaScript",
      "Python",
      "Java",
      "Web Development",
      "Database Design",
      "Authentication Systems",
      "Cloud Deployments"
    ],
    "alumniOf": {
      "@type": "Organization",
      "name": "University of Moratuwa"
    }
  };

  // BreadcrumbList for better navigation understanding
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
        "name": "Projects",
        "item": "https://pamoth.cse.mrt.lk/projects"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Achievements",
        "item": "https://pamoth.cse.mrt.lk/achievements"
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
        <link rel="canonical" href="https://pamoth.cse.mrt.lk" />
        <meta name="author" content="Pamoth Kumarasinghe" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
