import { MetadataRoute } from 'next'

const URL = "https://www.montage-pc-orleans.fr";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/',
        },
        sitemap: `${URL}/sitemap.xml`,
    }
}
