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
  metadataBase: new URL("https://pamothK.com"),
  title: "Pamoth Kumarasinghe - Portfolio",
  description: "Software Engineer, Full Stack Developer, and Game Developer portfolio showcasing projects and skills",
  keywords: [
    "Pamoth Kumarasinghe",
    "Portfolio",
    "Software Engineer",
    "Full Stack Developer",
    "Game Developer",
    "Projects",
    "Skills",
    "Achievements",
    "Contact",
    "Web Development",
    "github tricks",
  ],
  authors: [{ name: "Pamoth Kumarasinghe", url: "https://pamothK.com" }],
  publisher: "Pamoth Kumarasinghe",
  openGraph: {
    title: "Pamoth Kumarasinghe - Portfolio",
    description:
      "Software Engineer, Full Stack Developer, and Game Developer portfolio showcasing projects and skills",
    url: "https://pamothK.com",
    siteName: "Pamoth Kumarasinghe Portfolio",
    // images: [
    //   {
    //     url: "https://pamothK.com/og-image.png",
    //     width: 1200,
    //     height: 630,
    //     alt: "Pamoth Kumarasinghe Portfolio",
    //   },
    // ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pamoth Kumarasinghe - Portfolio",
    description:
      "Software Engineer, Full Stack Developer, and Game Developer portfolio showcasing projects and skills",
    // images: ["https://pamothK.com/og-image.png"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
