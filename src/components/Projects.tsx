import { motion } from 'framer-motion';

const projects = [
    {
        type: 'featured',
        category: 'Projet Phare · Entrepreneuriat Social',
        title: 'AYIHA BOOST BEN/AFRIQUE',
        description:
            "Structure pionnière au Bénin dédiée à l'accompagnement des jeunes et au développement organisationnel. Formation, communication stratégique et marketing digital.",
    },
    {
        category: 'Impact Social',
        title: "Programme d'Accompagnement Jeunesse",
        description:
            '+500 bénéficiaires accompagnés dans la recherche de logements, stages et bourses.',
    },
    {
        category: 'Communication Territoriale',
        title: 'Stratégies de Développement Local',
        description:
            "Accompagnement d'institutions publiques béninoises dans leur rayonnement et attractivité.",
    },
    {
        category: 'Événementiel & Conférences',
        title: 'Leadership & Innovation',
        description:
            "Organisation et participation à des conférences sur l'entrepreneuriat et la jeunesse africaine.",
    },
    {
        category: 'Numérique & Formation',
        title: 'Formations Digital & Communication',
        description:
            'Ateliers pratiques sur le marketing digital, branding et visibilité pour jeunes entrepreneurs.',
    },
];

export default function Realisations() {
    return (
        <section
            id="realisations"
            className="relative overflow-hidden bg-navy py-24 px-6 lg:px-10"
        >
            {/* glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.08),transparent_70%)]" />

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
                        Réalisations & Projets
                    </p>

                    <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white leading-tight">
                        Des actions concrètes,
                        <br />
                        <span className="text-gold">
                            des résultats visibles
                        </span>
                    </h2>
                </motion.div>

                {/* GRID */}
                <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {projects.map((project, index) => {
                        const isFeatured = project.type === 'featured';

                        return (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                }}
                                whileHover={{
                                    y: -10,
                                    scale: isFeatured ? 1.02 : 1.01,
                                }}
                                className={`relative group rounded-2xl border backdrop-blur-sm transition-all overflow-hidden
                                    ${
                                        isFeatured
                                            ? 'md:col-span-2 xl:col-span-2 border-gold/30 bg-white/[0.03]'
                                            : 'border-gold/10 bg-white/[0.02]'
                                    }
                                `}
                            >
                                {/* glow hover */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.12),transparent_70%)]" />

                                <div className="relative p-8">
                                    <p className="text-gold text-xs uppercase tracking-[0.2em]">
                                        {project.category}
                                    </p>

                                    <h3 className="mt-3 text-xl md:text-2xl font-semibold text-white">
                                        {project.title}
                                    </h3>

                                    <p className="mt-4 text-white/65 leading-7">
                                        {project.description}
                                    </p>

                                    <div className="mt-6 text-gold text-xl opacity-70 group-hover:opacity-100 transition">
                                        →
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
