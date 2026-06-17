import { motion } from 'framer-motion';
import { Lightbulb, Globe, Smartphone } from 'lucide-react';

const posts = [
    {
        icon: <Lightbulb />,
        category: 'Leadership',
        title: 'Leadership africain : pourquoi la jeunesse est la clé du renouveau continental',
        excerpt:
            "Les jeunes leaders africains jouent un rôle crucial dans la transformation des modèles de gouvernance et d'innovation.",
        date: 'Article à venir',
    },
    {
        icon: <Smartphone />,
        category: 'Numérique',
        title: 'Transformation digitale au Bénin : défis, opportunités et stratégies gagnantes',
        excerpt:
            "Le Bénin s'impose progressivement comme un acteur clé de la révolution numérique africaine.",
        date: 'Article à venir',
    },
    {
        icon: <Globe />,
        category: 'Développement local',
        title: "Communication territoriale : comment valoriser et rayonner à l'international",
        excerpt:
            'Les territoires africains possèdent un potentiel immense encore sous-exploité.',
        date: 'Article à venir',
    },
];

export default function Blog() {
    return (
        <section
            id="blog"
            className="relative overflow-hidden bg-navy py-24 px-6 lg:px-10"
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(212,175,55,0.08),transparent_70%)]" />

            <div className="relative mx-auto max-w-7xl">
                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <p className="text-gold uppercase tracking-[0.3em] text-sm">
                        Blog & Insights
                    </p>

                    <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white leading-tight">
                        Réflexions sur
                        <br />
                        <span className="text-gold">l’Afrique de demain</span>
                    </h2>
                </motion.div>

                {/* GRID */}
                <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {posts.map((post, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.15,
                            }}
                            whileHover={{
                                y: -10,
                                scale: 1.02,
                            }}
                            className="group relative overflow-hidden rounded-2xl border border-gold/10 bg-white/[0.02] p-8 backdrop-blur-sm transition-all"
                        >
                            {/* glow hover */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.12),transparent_70%)]" />

                            <div className="relative">
                                {/* ICON (clean + pro) */}
                                <div className="text-gold text-3xl">
                                    {post.icon}
                                </div>

                                {/* category */}
                                <p className="mt-4 text-gold text-xs uppercase tracking-[0.2em]">
                                    {post.category}
                                </p>

                                {/* title */}
                                <h3 className="mt-3 text-xl font-semibold text-white group-hover:text-gold transition">
                                    {post.title}
                                </h3>

                                {/* excerpt */}
                                <p className="mt-4 text-white/65 leading-7 text-sm">
                                    {post.excerpt}
                                </p>

                                {/* date */}
                                <p className="mt-6 text-white/40 text-xs uppercase tracking-[0.2em]">
                                    {post.date}
                                </p>

                                {/* underline */}
                                <div className="mt-6 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
