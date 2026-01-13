"use client";

import { motion } from "framer-motion";
import {
    MessageCircle,
    Cpu,
    Monitor,
    HardDrive,
    Fan,
    Box,
    Zap,
    Database,
    ArrowLeft,
    Calendar,
    User,
    Target,
    Trophy,
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Header, Footer, WHATSAPP_LINK } from "@/components/layout";
import { getBuildBySlug, builds } from "@/data/builds";

export default function BuildDetailPage() {
    const params = useParams();
    const slug = params.slug as string;
    const build = getBuildBySlug(slug);

    if (!build) {
        return (
            <main className="min-h-screen bg-dark-950">
                <Header />
                <div className="pt-32 pb-16 text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">Build non trouvé</h1>
                    <Link href="/realisations" className="text-brand-red hover:underline">
                        ← Retour aux réalisations
                    </Link>
                </div>
                <Footer />
            </main>
        );
    }

    const specIcons: Record<string, any> = {
        cpu: Cpu,
        gpu: Monitor,
        ram: Database,
        storage: HardDrive,
        cooling: Fan,
        case: Box,
        psu: Zap,
        motherboard: Cpu,
        monitor: Monitor,
        audio: Fan,
    };

    const specLabels: Record<string, string> = {
        cpu: "Processeur",
        gpu: "Carte graphique",
        ram: "Mémoire",
        storage: "Stockage",
        cooling: "Refroidissement",
        case: "Boîtier",
        psu: "Alimentation",
        motherboard: "Carte mère",
        monitor: "Écran",
        audio: "Audio",
    };

    return (
        <main className="min-h-screen bg-dark-950">
            <Header />

            {/* Hero */}
            <section className="relative pt-32 pb-8">
                <div className="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-red/10 via-transparent to-transparent" />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Back link */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="mb-8"
                    >
                        <Link
                            href="/realisations"
                            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Retour aux réalisations
                        </Link>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Image */}
                        <motion.div
                            className="relative aspect-square rounded-2xl overflow-hidden"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                        >
                            <img
                                src={build.image}
                                alt={build.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-950/50 to-transparent" />
                            <div className="absolute top-4 right-4">
                                <span className="px-4 py-2 bg-brand-red text-white font-semibold rounded-full">
                                    {build.budget}
                                </span>
                            </div>
                            <div className="absolute -inset-4 bg-brand-red/20 blur-3xl -z-10 rounded-full" />
                        </motion.div>

                        {/* Info */}
                        <motion.div
                            className="space-y-6"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div>
                                <span className="text-brand-red font-medium">{build.clientType}</span>
                                <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
                                    {build.title}
                                </h1>
                                <p className="text-xl text-gray-300">{build.subtitle}</p>
                            </div>

                            <div className="flex items-center gap-4 text-gray-400">
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    {build.buildDate}
                                </div>
                            </div>

                            {/* Specs Grid */}
                            <div className="bg-dark-800/50 rounded-2xl p-6 border border-white/5">
                                <h3 className="text-lg font-semibold text-white mb-4">Configuration</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {Object.entries(build.specs).map(([key, value]) => {
                                        const Icon = specIcons[key] || Cpu;
                                        return (
                                            <div key={key} className="flex items-start gap-3">
                                                <Icon className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                                                <div>
                                                    <div className="text-xs text-gray-500">{specLabels[key]}</div>
                                                    <div className="text-gray-200">{value}</div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* CTA */}
                            <motion.a
                                href={WHATSAPP_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-red hover:bg-brand-red-dark text-white font-semibold rounded-lg shadow-red-glow transition-all"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <MessageCircle className="w-5 h-5" />
                                Je veux un build similaire
                            </motion.a>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="relative py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="space-y-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        {/* Client Story */}
                        <div className="bg-dark-800/50 rounded-2xl p-8 border border-white/5">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-brand-red/10 rounded-lg">
                                    <User className="w-6 h-6 text-brand-red" />
                                </div>
                                <h2 className="text-2xl font-bold text-white">Le Client</h2>
                            </div>
                            <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                                {build.clientStory}
                            </div>
                        </div>

                        {/* Challenge */}
                        <div className="bg-dark-800/50 rounded-2xl p-8 border border-white/5">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-brand-red/10 rounded-lg">
                                    <Target className="w-6 h-6 text-brand-red" />
                                </div>
                                <h2 className="text-2xl font-bold text-white">Le Défi</h2>
                            </div>
                            <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                                {build.challenge}
                            </div>
                        </div>

                        {/* Result */}
                        <div className="bg-gradient-to-br from-brand-red/10 to-dark-800 rounded-2xl p-8 border border-brand-red/20">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-brand-red/20 rounded-lg">
                                    <Trophy className="w-6 h-6 text-brand-red" />
                                </div>
                                <h2 className="text-2xl font-bold text-white">Le Résultat</h2>
                            </div>
                            <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                                {build.result}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Other Builds */}
            <section className="relative py-16 bg-dark-900/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-white mb-8 text-center">
                        Autres <span className="text-brand-red">réalisations</span>
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {builds.filter(b => b.slug !== slug).map((otherBuild) => (
                            <Link key={otherBuild.id} href={`/realisations/${otherBuild.slug}`}>
                                <motion.div
                                    className="bg-dark-800/50 rounded-xl border border-white/5 overflow-hidden hover:border-brand-red/30 transition-all"
                                    whileHover={{ y: -3 }}
                                >
                                    <div className="aspect-video overflow-hidden">
                                        <img
                                            src={otherBuild.image}
                                            alt={otherBuild.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-semibold text-white">{otherBuild.title}</h3>
                                        <p className="text-sm text-gray-400">{otherBuild.budget}</p>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
