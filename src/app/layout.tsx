import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Atelier PC Orléans - Montage Gamer & Dépannage (45)",
    description:
        "Votre atelier local de montage PC gamer sur-mesure à Orléans et dans le Loiret (45). Assemblage expert, câble-management invisible, optimisation BIOS. Basé à Saint-Denis-en-Val.",
    keywords: [
        "montage PC",
        "PC gamer",
        "Orléans",
        "Loiret",
        "45",
        "assemblage PC",
        "dépannage informatique",
        "Saint-Denis-en-Val",
        "PC sur-mesure",
        "gaming",
    ],
    authors: [{ name: "Atelier PC Orléans" }],
    openGraph: {
        title: "Atelier PC Orléans - Montage Gamer & Dépannage (45)",
        description:
            "Votre atelier local de montage PC gamer sur-mesure à Orléans. Assemblage expert, câble-management invisible, optimisation BIOS.",
        type: "website",
        locale: "fr_FR",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
            <body className="antialiased">{children}</body>
        </html>
    );
}
