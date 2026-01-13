import { MetadataRoute } from 'next'

const URL = "https://www.montage-pc-orleans.fr";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: `${URL}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${URL}/atelier`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${URL}/realisations`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
    ]
}
