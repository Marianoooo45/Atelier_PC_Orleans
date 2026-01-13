"use client";

import { motion } from "framer-motion";
import {
    Wrench,
    MapPin,
    Cpu,
    MessageCircle,
    Star,
    ChevronRight,
    Sparkles,
    Settings,
} from "lucide-react";
import { Header, Footer, WHATSAPP_LINK } from "@/components/layout";

// Animation variants
const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

// Hero Section Component
function HeroSection() {
    return (
        <section className="relative flex items-center pt-20 pb-8">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-red/10 via-transparent to-transparent" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        className="space-y-6 md:space-y-8"
                        initial="initial"
                        animate="animate"
                        variants={staggerContainer}
                    >
                        <motion.div variants={fadeInUp}>
                            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-red/10 border border-brand-red/20 rounded-full text-brand-red text-sm font-medium">
                                <Sparkles className="w-4 h-4" />
                                Artisan du PC Gaming
                            </span>
                        </motion.div>

                        <motion.h1
                            variants={fadeInUp}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
                        >
                            Votre PC Gamer{" "}
                            <span className="text-brand-red text-glow-red">sur-mesure</span> à
                            Orléans.
                        </motion.h1>

                        <motion.div variants={fadeInUp} className="space-y-4">
                            <p className="text-lg text-gray-300 leading-relaxed">
                                Bienvenue dans votre atelier local de montage et
                                d&apos;optimisation. Je transforme vos composants en{" "}
                                <strong className="text-white">machines de guerre</strong>,
                                assemblées à la main avec une rigueur obsessionnelle.
                            </p>
                            <p className="text-gray-400 leading-relaxed">
                                Pas de marges cachées sur le matériel. Vous achetez les pièces
                                au meilleur prix, je fournis l&apos;expertise, le montage
                                câble-caché et l&apos;optimisation BIOS.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={fadeInUp}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <motion.a
                                href={WHATSAPP_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-red hover:bg-brand-red-dark text-white font-semibold rounded-lg shadow-red-glow hover:shadow-red-glow-lg transition-all"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <MessageCircle className="w-5 h-5" />
                                Discutons de votre projet
                                <ChevronRight className="w-4 h-4" />
                            </motion.a>
                            <a
                                href="#services"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/5 hover:bg-white/10 text-white font-medium rounded-lg border border-white/10 transition-all"
                            >
                                Voir les forfaits
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Hero Image */}
                    <motion.div
                        className="relative aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="absolute inset-0 rounded-2xl overflow-hidden border border-white/10">
                            <img
                                src="/hero.png"
                                alt="PC Gaming sur-mesure avec RGB rouge - Atelier PC Orléans"
                                className="w-full h-full object-cover"
                            />
                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-950/50 to-transparent" />
                        </div>
                        {/* Decorative glow */}
                        <div className="absolute -inset-4 bg-brand-red/20 blur-3xl -z-10 rounded-full" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// Trust Icons Section Component
function TrustSection() {
    const features = [
        {
            icon: Wrench,
            title: "Montage Expert",
            description: "Cable management invisible, airflow optimisé",
        },
        {
            icon: MapPin,
            title: "Local & Direct",
            description: "Basé à Saint-Denis-en-Val, contact direct sans intermédiaire",
        },
        {
            icon: Cpu,
            title: "Performance Pure",
            description: "Optimisation BIOS, tests de charge, zéro bloatware",
        },
    ];

    return (
        <section className="relative py-12 md:py-16 bg-dark-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="grid md:grid-cols-3 gap-8 md:gap-12"
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            className="text-center group"
                        >
                            <motion.div
                                className="inline-flex items-center justify-center w-16 h-16 mb-5 bg-brand-red/10 rounded-2xl border border-brand-red/20 group-hover:border-brand-red/40 transition-colors"
                                whileHover={{ scale: 1.05, rotate: 5 }}
                            >
                                <feature.icon className="w-8 h-8 text-brand-red icon-glow-red" />
                            </motion.div>
                            <h3 className="text-xl font-bold text-white mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-gray-400">{feature.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

// Services Cards Section Component
function ServicesSection() {
    const services = [
        {
            icon: MessageCircle,
            title: "Le Conseil",
            price: "30€",
            description: "Liste de composants sur-mesure selon budget",
            features: [
                "Analyse de vos besoins",
                "Sélection des meilleurs composants",
                "Optimisation prix/performance",
                "Conseil compatibilité",
            ],
            popular: false,
        },
        {
            icon: Settings,
            title: "L'Assemblage Pro",
            price: "90€",
            description: "Montage complet, Windows, Pilotes",
            features: [
                "Montage complet du PC",
                "Installation Windows + pilotes",
                "Cable management premium",
                "Optimisation BIOS",
                "Tests de stabilité",
            ],
            popular: true,
        },
        {
            icon: Sparkles,
            title: "Le Refresh / Upgrade",
            price: "50€",
            description: "Nettoyage, Pâte thermique, nouveau GPU",
            features: [
                "Nettoyage complet",
                "Remplacement pâte thermique",
                "Installation nouveau composant",
                "Tests post-upgrade",
            ],
            popular: false,
        },
    ];

    return (
        <section id="services" className="relative py-12 md:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-12 md:mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Nos <span className="text-brand-red">Forfaits</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Des services transparents, des prix fixes. Pas de mauvaises
                        surprises.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    className="grid md:grid-cols-3 gap-6 md:gap-8"
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            className={`relative p-6 md:p-8 rounded-2xl border transition-all duration-300 ${service.popular
                                ? "bg-gradient-to-b from-brand-red/10 to-dark-800 border-brand-red/30 shadow-red-glow"
                                : "bg-dark-800/50 border-white/5 hover:border-white/10"
                                }`}
                            whileHover={{ y: -5 }}
                        >
                            {/* Popular Badge */}
                            {service.popular && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-brand-red text-white text-xs font-semibold rounded-full">
                                        <Star className="w-3 h-3" />
                                        Populaire
                                    </span>
                                </div>
                            )}

                            {/* Icon */}
                            <div
                                className={`inline-flex items-center justify-center w-12 h-12 mb-4 rounded-xl ${service.popular ? "bg-brand-red/20" : "bg-white/5"
                                    }`}
                            >
                                <service.icon
                                    className={`w-6 h-6 ${service.popular ? "text-brand-red" : "text-gray-400"
                                        }`}
                                />
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-white mb-1">
                                {service.title}
                            </h3>
                            <div className="flex items-baseline gap-1 mb-3">
                                <span className="text-3xl font-bold text-brand-red">
                                    {service.price}
                                </span>
                            </div>
                            <p className="text-gray-400 text-sm mb-5">
                                {service.description}
                            </p>

                            {/* Features List */}
                            <ul className="space-y-2 mb-6">
                                {service.features.map((feature, featureIndex) => (
                                    <li
                                        key={featureIndex}
                                        className="flex items-center gap-2 text-sm text-gray-300"
                                    >
                                        <ChevronRight className="w-4 h-4 text-brand-red flex-shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            {/* CTA Button */}
                            <motion.a
                                href={WHATSAPP_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center justify-center gap-2 w-full py-3 rounded-lg font-semibold transition-all ${service.popular
                                    ? "bg-brand-red hover:bg-brand-red-dark text-white"
                                    : "bg-white/5 hover:bg-white/10 text-white border border-white/10"
                                    }`}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <MessageCircle className="w-4 h-4" />
                                Réserver
                            </motion.a>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

// Main Page Component
export default function Home() {
    return (
        <main className="min-h-screen bg-dark-950">
            <Header />
            <HeroSection />
            <TrustSection />
            <ServicesSection />
            <Footer />
        </main>
    );
}
