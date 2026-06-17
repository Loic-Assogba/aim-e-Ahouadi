import { motion } from 'framer-motion';

import {
    FaBullhorn,
    FaGlobe,
    FaBuilding,
    FaGem,
    FaRocket,
    FaUsers,
} from 'react-icons/fa';

const expertises = [
    {
        icon: FaBullhorn,
        title: 'Communication 360°',
        description:
            "Stratégies de communication intégrées couvrant le digital, l'événementiel, les médias et l'institutionnel.",
        tag: 'Stratégie · Contenu · Influence',
    },
    {
        icon: FaGlobe,
        title: 'Marketing Digital',
        description:
            'Transformation numérique, réseaux sociaux, SEO, publicité en ligne et analyse de performance.',
        tag: 'SEO · Social Media · Ads',
    },
    {
        icon: FaBuilding,
        title: 'Communication Territoriale',
        description:
            'Valorisation des territoires et accompagnement des collectivités locales dans leur rayonnement.',
        tag: 'Territoire · Institutions',
    },
    {
        icon: FaGem,
        title: 'Personal Branding',
        description:
            'Construction de marques personnelles fortes pour leaders, entrepreneurs et personnalités.',
        tag: 'Image · Positionnement',
    },
    {
        icon: FaRocket,
        title: 'Gestion de Projets',
        description:
            "Pilotage de projets complexes avec coordination d'équipes et mesure d'impact.",
        tag: 'Coordination · Résultats',
    },
    {
        icon: FaUsers,
        title: 'Leadership Jeunesse',
        description:
            'Formation, mentorat et accompagnement des jeunes leaders africains.',
        tag: 'Mentorat · Formation',
    },
];

export default function Expertise() {
    return (
        <section
            id="expertise"
            className="relative overflow-hidden bg-navy py-24 px-6 lg:px-10"
        >
            {/* Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.08),transparent_50%)]" />

            <div className="relative mx-auto max-w-7xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <p className="text-gold uppercase tracking-[0.3em] text-sm">
                        Domaines d'expertise
                    </p>

                    <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white leading-tight">
                        Des compétences au service
                        <br />
                        <span className="text-gold">d'un impact réel</span>
                    </h2>
                </motion.div>

                {/* Cards */}
                <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {expertises.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                }}
                                whileHover={{
                                    y: -10,
                                }}
                                className="group relative overflow-hidden rounded-2xl border border-gold/10 bg-white/[0.02] p-8 backdrop-blur-sm"
                            >
                                {/* Glow Hover */}
                                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.12),transparent_70%)]" />

                                <div className="relative">
                                    <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-gold/20 bg-gold/10">
                                        <Icon size={28} className="text-gold" />
                                    </div>

                                    <h3 className="mt-6 text-xl font-semibold text-white">
                                        {item.title}
                                    </h3>

                                    <p className="mt-4 leading-7 text-white/60">
                                        {item.description}
                                    </p>

                                    <div className="mt-6 inline-flex border border-gold/20 px-4 py-2 text-xs uppercase tracking-[0.15em] text-gold">
                                        {item.tag}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
