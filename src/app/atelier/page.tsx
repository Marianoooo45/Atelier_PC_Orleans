"use client";

import { motion } from "framer-motion";
import {
    User,
    CheckCircle,
    MessageCircle,
    Award,
    Clock,
    Heart,
} from "lucide-react";
import { Header, Footer, WHATSAPP_LINK } from "@/components/layout";

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

export default function AtelierPage() {
    const stats = [
        { value: "50+", label: "PC assemblés", icon: Award },
        { value: "100%", label: "Clients satisfaits", icon: Heart },
        { value: "24h", label: "Délai moyen", icon: Clock },
    ];

    const values = [
        {
            title: "Transparence totale",
            description: "Vous savez exactement ce que vous payez. Pas de frais cachés, pas de mauvaises surprises.",
        },
        {
            title: "Conseils honnêtes",
            description: "Je vous recommande ce dont vous avez vraiment besoin, pas ce qui me rapporte le plus.",
        },
        {
            title: "Support après-vente",
            description: "Un problème après la livraison ? Je reste disponible pour vous aider gratuitement.",
        },
    ];

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
                            <User className="w-4 h-4" />
                            L&apos;Atelier
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Un passionné à votre <span className="text-brand-red text-glow-red">service</span>
                        </h1>
                        <p className="text-xl text-gray-300">
                            Passionné de hardware depuis plus de 10 ans, j&apos;ai décidé de mettre mon expertise au service des gamers et créateurs de la région orléanaise.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats */}
            <section className="relative py-12 bg-dark-900/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="grid md:grid-cols-3 gap-6"
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className="text-center p-8 bg-dark-800/50 rounded-2xl border border-white/5"
                            >
                                <stat.icon className="w-8 h-8 text-brand-red mx-auto mb-4" />
                                <div className="text-4xl md:text-5xl font-bold text-brand-red mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-gray-400">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Story */}
            <section className="relative py-16 md:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Image */}
                        <motion.div
                            className="relative aspect-[4/3] rounded-2xl overflow-hidden"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="absolute inset-0 rounded-2xl overflow-hidden border border-white/10">
                                <img
                                    src="/workshop.png"
                                    alt="Atelier de montage PC - Atelier PC Orléans"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-dark-950/60 to-transparent" />
                            </div>
                            <div className="absolute -inset-4 bg-brand-red/10 blur-3xl -z-10 rounded-full" />
                        </motion.div>

                        {/* Content */}
                        <motion.div
                            className="space-y-6"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-white">
                                Mon <span className="text-brand-red">histoire</span>
                            </h2>
                            <div className="space-y-4 text-gray-300">
                                <p>
                                    Tout a commencé il y a plus de 10 ans, avec mon premier PC assemblé dans ma chambre d&apos;ado. Depuis, j&apos;ai monté des dizaines de machines pour moi, mes amis, puis pour leurs amis...
                                </p>
                                <p>
                                    Aujourd&apos;hui, j&apos;ai décidé de transformer cette passion en activité. Basé à Saint-Denis-en-Val, je propose mes services aux habitants d&apos;Orléans et du Loiret.
                                </p>
                                <p className="text-gray-400">
                                    Chaque PC est assemblé avec le même soin que si c&apos;était le mien. Cable management impeccable, optimisation poussée, tests de stabilité rigoureux — je ne livre que des machines dont je suis fier.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="relative py-16 bg-dark-900/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Mes <span className="text-brand-red">valeurs</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        className="grid md:grid-cols-3 gap-8"
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className="p-6 bg-dark-800/50 rounded-2xl border border-white/5"
                            >
                                <CheckCircle className="w-8 h-8 text-brand-red mb-4" />
                                <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                                <p className="text-gray-400">{value.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Prêt à construire votre <span className="text-brand-red">machine de guerre</span> ?
                        </h2>
                        <motion.a
                            href={WHATSAPP_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-red hover:bg-brand-red-dark text-white font-semibold rounded-lg shadow-red-glow hover:shadow-red-glow-lg transition-all"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <MessageCircle className="w-5 h-5" />
                            Discutons de votre projet
                        </motion.a>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
