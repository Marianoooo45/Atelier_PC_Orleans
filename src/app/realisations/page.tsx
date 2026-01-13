"use client";

import { motion } from "framer-motion";
import {
    Image,
    MessageCircle,
    Cpu,
    HardDrive,
    Monitor,
    Fan,
    Box,
    Zap,
    Database,
    ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { Header, Footer, WHATSAPP_LINK } from "@/components/layout";
import { builds } from "@/data/builds";

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

export default function RealisationsPage() {
    return (
        <main className="min-h-screen bg-dark-950">
            <Header />

            {/* Hero */}
            <section className="relative pt-32 pb-16">
                <div className="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-red/10 via-transparent to-transparent" />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-red/10 border border-brand-red/20 rounded-full text-brand-red text-sm font-medium mb-6">
                            <Image className="w-4 h-4" />
                            Portfolio
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Mes <span className="text-brand-red text-glow-red">réalisations</span>
                        </h1>
                        <p className="text-xl text-gray-300">
                            Découvrez quelques-unes des machines assemblées dans l&apos;atelier. Cliquez sur un build pour découvrir son histoire.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Portfolio Grid */}
            <section className="relative py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        {builds.map((build) => (
                            <motion.div
                                key={build.id}
                                variants={fadeInUp}
                            >
                                <Link href={`/realisations/${build.slug}`}>
                                    <div className="group relative bg-dark-800/50 rounded-2xl border border-white/5 overflow-hidden hover:border-brand-red/30 transition-all duration-300 cursor-pointer">
                                        {/* Image */}
                                        <div className="relative aspect-square overflow-hidden">
                                            <img
                                                src={build.image}
                                                alt={build.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent" />

                                            {/* Budget Badge */}
                                            <div className="absolute top-4 right-4">
                                                <span className="px-3 py-1.5 bg-brand-red text-white text-sm font-semibold rounded-full">
                                                    {build.budget}
                                                </span>
                                            </div>

                                            {/* Hover overlay */}
                                            <div className="absolute inset-0 bg-brand-red/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                <span className="px-4 py-2 bg-white text-dark-950 font-semibold rounded-lg flex items-center gap-2">
                                                    Voir l&apos;histoire
                                                    <ArrowRight className="w-4 h-4" />
                                                </span>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6">
                                            <div className="text-xs text-brand-red font-medium mb-2">{build.clientType}</div>
                                            <h3 className="text-xl font-bold text-white mb-2">{build.title}</h3>
                                            <p className="text-gray-400 text-sm mb-4">{build.description}</p>

                                            {/* Quick Specs */}
                                            <div className="flex flex-wrap gap-2">
                                                <span className="px-2 py-1 bg-white/5 text-gray-300 text-xs rounded">
                                                    {build.specs.cpu}
                                                </span>
                                                <span className="px-2 py-1 bg-white/5 text-gray-300 text-xs rounded">
                                                    {build.specs.gpu}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative py-16 bg-dark-900/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Envie de voir votre PC ici ?
                        </h2>
                        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                            Contactez-moi pour discuter de votre projet. Que ce soit un budget serré ou une config no-limit, je trouverai la solution parfaite pour vous.
                        </p>
                        <motion.a
                            href={WHATSAPP_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-red hover:bg-brand-red-dark text-white font-semibold rounded-lg shadow-red-glow hover:shadow-red-glow-lg transition-all"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <MessageCircle className="w-5 h-5" />
                            Discutons de votre build
                        </motion.a>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
