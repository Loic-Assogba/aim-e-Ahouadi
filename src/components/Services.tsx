import { motion } from 'framer-motion';

const services = [
    {
        num: '01',
        title: 'Communication 360°',
        desc: 'Stratégies globales de communication adaptées aux objectifs internes, externes, digitaux et institutionnels.',
    },
    {
        num: '02',
        title: 'Marketing Digital',
        desc: 'Optimisation de la présence en ligne, gestion des réseaux sociaux, SEO et publicité digitale performante.',
    },
    {
        num: '03',
        title: 'Branding Personnel',
        desc: 'Construction d’une marque personnelle forte, positionnement stratégique et influence durable.',
    },
    {
        num: '04',
        title: 'Stratégie Territoriale',
        desc: 'Valorisation des territoires et accompagnement des institutions dans leur attractivité et développement.',
    },
    {
        num: '05',
        title: 'Conseil en Visibilité',
        desc: 'Stratégies de rayonnement via médias, réseaux, relations publiques et partenariats.',
    },
    {
        num: '06',
        title: 'Accompagnement de Projets',
        desc: 'Mentorat et accompagnement stratégique pour entrepreneurs et porteurs de projets sociaux.',
    },
];

export default function Services() {
    return (
        <section
            id="services"
            className="relative overflow-hidden bg-navy py-24 px-6 lg:px-10"
        >
            {/* Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(212,175,55,0.08),transparent_70%)]" />

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
                        Services & Offres
                    </p>

                    <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white leading-tight">
                        Travaillons ensemble
                        <br />
                        <span className="text-gold">
                            pour votre développement
                        </span>
                    </h2>
                </motion.div>

                {/* GRID */}
                <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.num}
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
                            className="group relative overflow-hidden rounded-2xl border border-gold/10 bg-white/[0.02] p-8 backdrop-blur-sm transition-all"
                        >
                            {/* glow hover */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.12),transparent_70%)]" />

                            <div className="relative">
                                {/* number */}
                                <div className="text-gold text-3xl font-bold opacity-70 group-hover:opacity-100 transition">
                                    {service.num}
                                </div>

                                {/* title */}
                                <h3 className="mt-4 text-xl font-semibold text-white group-hover:text-gold transition">
                                    {service.title}
                                </h3>

                                {/* desc */}
                                <p className="mt-4 text-white/65 leading-7 text-sm md:text-base">
                                    {service.desc}
                                </p>

                                {/* line hover */}
                                <div className="mt-6 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
