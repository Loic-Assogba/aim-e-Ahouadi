import { motion } from 'framer-motion';

/* ================= TYPES ================= */

type TimelineItem = {
    year: string;
    role: string;
    organization: string;
    description: string;
};

type TimelineColumnProps = {
    title: string;
    data: TimelineItem[];
};

/* ================= DATA ================= */

const entrepreneurship: TimelineItem[] = [
    {
        year: '2021 — Présent',
        role: 'Fondateur & CEO',
        organization: 'AYIHA BOOST BEN/AFRIQUE · Cotonou, Bénin',
        description:
            "Création et développement d'une structure spécialisée en communication stratégique, marketing digital et accompagnement des jeunes.",
    },
    {
        year: '2020 — Présent',
        role: 'Consultant en Communication 360°',
        organization: 'Indépendant · Bénin & International',
        description:
            "Accompagnement d'entreprises, d'ONG et d'institutions publiques dans leurs stratégies de communication.",
    },
    {
        year: '2019 — Présent',
        role: 'Conférencier & Mentor',
        organization: 'Événements nationaux & internationaux',
        description:
            "Interventions sur le leadership, l'entrepreneuriat, la communication et l'engagement citoyen.",
    },
];

const social: TimelineItem[] = [
    {
        year: 'En cours',
        role: 'Accompagnateur de Jeunes',
        organization: 'Bénin & Diaspora',
        description:
            'Accompagnement dans la recherche de logements, stages, bourses et insertion professionnelle.',
    },
    {
        year: 'En cours',
        role: 'Délégué & Représentant',
        organization: 'Organisations nationales & internationales',
        description:
            'Représentation de la jeunesse béninoise dans plusieurs instances nationales et internationales.',
    },
    {
        year: 'Continu',
        role: 'Entrepreneur Social & Bénévole',
        organization: 'Initiatives communautaires · Bénin',
        description:
            "Organisation d'actions de solidarité, d'événements communautaires et de projets d'impact social.",
    },
];

/* ================= COMPONENTS ================= */

function TimelineColumn({ title, data }: TimelineColumnProps) {
    return (
        <div>
            <h3 className="mb-10 text-gold text-xl md:text-2xl tracking-[0.2em] uppercase">
                {title}
            </h3>

            <div className="relative">
                {/* Ligne */}
                <div className="absolute left-[15px] top-0 h-full w-px bg-gold/20" />

                {data.map((item, index) => (
                    <motion.div
                        key={`${item.year}-${index}`}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.6,
                            delay: index * 0.15,
                        }}
                        className="relative mb-10 pl-14"
                    >
                        {/* Point */}
                        <div className="absolute left-0 top-2 flex h-8 w-8 items-center justify-center rounded-full border border-gold bg-navy">
                            <div className="h-2 w-2 rounded-full bg-gold" />
                        </div>

                        {/* Card */}
                        <motion.div
                            whileHover={{ y: -6 }}
                            className="rounded-2xl border border-gold/10 bg-white/[0.02] p-6 backdrop-blur-sm transition-all hover:border-gold/30"
                        >
                            <p className="text-gold text-sm tracking-[0.15em] uppercase">
                                {item.year}
                            </p>

                            <h4 className="mt-2 text-xl font-semibold text-white">
                                {item.role}
                            </h4>

                            <p className="mt-1 text-white/50 text-sm">
                                {item.organization}
                            </p>

                            <p className="mt-4 leading-7 text-white/65">
                                {item.description}
                            </p>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

/* ================= MAIN COMPONENT ================= */

export default function Journey() {
    return (
        <section
            id="parcours"
            className="relative overflow-hidden bg-navy py-24 px-6 lg:px-10"
        >
            {/* Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08),transparent_70%)]" />

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
                        Parcours & Expériences
                    </p>

                    <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white leading-tight">
                        Une trajectoire
                        <br />
                        <span className="text-gold">d'engagement constant</span>
                    </h2>
                </motion.div>

                {/* Timeline */}
                <div className="mt-20 grid gap-16 xl:grid-cols-2">
                    <TimelineColumn
                        title="Entrepreneuriat & Conseil"
                        data={entrepreneurship}
                    />

                    <TimelineColumn
                        title="Engagement Social & Associatif"
                        data={social}
                    />
                </div>
            </div>
        </section>
    );
}
