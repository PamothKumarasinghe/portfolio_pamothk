import { MetadataRoute } from 'next';
import { getAllPosts } from './lib/blog';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://pamoth.cse.mrt.lk';

    // Get all blog posts
    const posts = getAllPosts();
    const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly',
        priority: 0.6,
    }));

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${baseUrl}/projects`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.9,
        },
        ...blogEntries,
        {
            url: `${baseUrl}/achievements`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
    ];
}

