"use client";

import { motion } from "framer-motion";
import {
    Wrench,
    MessageCircle,
} from "lucide-react";
import Link from "next/link";

// WhatsApp number
const WHATSAPP_NUMBER = "33783944194";
const WHATSAPP_MESSAGE = encodeURIComponent(
    "Bonjour ! Je suis intéressé par vos services de montage PC."
);
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

// Header Component
export function Header() {
    const navLinks = [
        { name: "Services", href: "/#services" },
        { name: "L'Atelier", href: "/atelier" },
        { name: "Réalisations", href: "/realisations" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-dark-950/90 backdrop-blur-md border-b border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <motion.div
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link href="/" className="flex items-center gap-2">
                            <img src="/logo.png" alt="Atelier PC Orléans" className="w-10 h-10 object-contain" />
                            <span className="text-lg md:text-xl font-bold text-white">
                                Atelier PC <span className="text-brand-red">Orléans</span>
                            </span>
                        </Link>
                    </motion.div>

                    {/* Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="relative text-sm font-medium transition-colors hover:text-white text-gray-400"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <motion.a
                        href={WHATSAPP_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2.5 bg-brand-red hover:bg-brand-red-dark text-white text-sm font-semibold rounded-lg shadow-red-glow hover:shadow-red-glow-lg transition-all"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <MessageCircle className="w-4 h-4" />
                        <span className="hidden sm:inline">Demander un devis</span>
                    </motion.a>
                </div>
            </div>
        </header>
    );
}

// Footer Component
export function Footer() {
    const seoLinks = [
        "Montage PC Orléans",
        "Assemblage PC 45",
        "Dépannage Orléans",
        "PC Gamer Loiret",
        "Montage PC Saint-Denis-en-Val",
    ];

    return (
        <footer className="relative py-12 bg-dark-900/80 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Logo & Contact */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2">
                            <img src="/logo.png" alt="Atelier PC Orléans" className="w-8 h-8 object-contain" />
                            <span className="text-lg font-bold text-white">
                                Atelier PC <span className="text-brand-red">Orléans</span>
                            </span>
                        </Link>
                        <p className="text-gray-400 text-sm">
                            Montage PC gamer sur-mesure à Orléans et dans le Loiret.
                            <br />
                            Basé à Saint-Denis-en-Val (45560).
                        </p>
                        <motion.a
                            href={WHATSAPP_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-brand-red hover:text-brand-red-glow font-medium"
                            whileHover={{ x: 5 }}
                        >
                            <MessageCircle className="w-4 h-4" />
                            Contactez-moi sur WhatsApp
                        </motion.a>
                    </div>

                    {/* SEO Links */}
                    <div className="flex flex-wrap gap-2 md:justify-end">
                        {seoLinks.map((link, index) => (
                            <span
                                key={index}
                                className="px-3 py-1.5 bg-white/5 text-gray-400 text-xs rounded-full"
                            >
                                {link}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 pt-8 border-t border-white/5 text-center">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Atelier PC Orléans. Tous droits
                        réservés.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export { WHATSAPP_LINK };
