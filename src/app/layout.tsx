import type { Metadata } from "next";
import "./globals.css";

// URL de ton site (change l'extension si tu as pris .com au lieu de .fr)
const SITE_URL = "https://www.montage-pc-orleans.fr";

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL), // Indispensable pour le SEO Next.js moderne
    // Titre optimisé "Bourrin" : Le mot clé exact en premier
    title: "Montage PC Orléans | Atelier Gamer & Dépannage (45)",
    description:
        "Votre expert en montage PC gamer sur-mesure à Orléans (45). Assemblage rigoureux, câble-management invisible et optimisation BIOS. Atelier basé à Saint-Denis-en-Val.",
    keywords: [
        "Montage PC Orléans", // Mot clé n°1
        "PC gamer 45",
        "Atelier PC Orléans",
        "Assemblage ordinateur Loiret",
        "Dépannage informatique Saint-Denis-en-Val",
        "Config PC sur-mesure",
        "Réparation PC Orléans",
        "Upgrade PC gamer",
    ],
    authors: [{ name: "Aurélien - Atelier PC Orléans" }],
    // Pour les partages sur les réseaux sociaux (Discord, WhatsApp, etc.)
    openGraph: {
        title: "Montage PC Orléans - L'Atelier Gaming",
        description:
            "Votre PC sur-mesure monté par un passionné. Zéro marge cachée, performance maximale. Basé à St-Denis-en-Val.",
        url: SITE_URL,
        siteName: "Atelier PC Orléans",
        locale: "fr_FR",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ComputerStore",
    name: "Atelier PC Orléans",
    image: "https://www.montage-pc-orleans.fr/hero.png",
    description:
        "Montage de PC Gamer sur mesure, dépannage et optimisation à Orléans et dans le Loiret.",
    address: {
        "@type": "PostalAddress",
        addressLocality: "Saint-Denis-en-Val",
        postalCode: "45560",
        addressCountry: "FR",
    },
    url: "https://www.montage-pc-orleans.fr",

    priceRange: "€€",
    areaServed: ["Orléans", "Loiret", "45"],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
            <body className="antialiased bg-slate-950 text-white selection:bg-red-600 selection:text-white">
                {children}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </body>
        </html>
    );
}