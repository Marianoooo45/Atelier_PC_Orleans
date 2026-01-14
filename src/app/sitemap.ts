import { MetadataRoute } from 'next'
import { builds } from '@/data/builds'

const URL = "https://www.montage-pc-orleans.fr";

export default function sitemap(): MetadataRoute.Sitemap {
    // Pages statiques
    const staticRoutes: MetadataRoute.Sitemap = [
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

    // Pages dynamiques (Réalisations)
    const buildRoutes: MetadataRoute.Sitemap = builds.map((build) => ({
        url: `${URL}/realisations/${build.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
    }))

    return [...staticRoutes, ...buildRoutes]
}
