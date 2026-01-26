import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'pamothK.com';

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/projects`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/achievements`,
            lastModified: new Date(),
        },
        // add the rest of the routes here - SEO important pages
    ]
}

