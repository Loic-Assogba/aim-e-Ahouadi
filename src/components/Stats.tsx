import { motion } from 'framer-motion';

const stats = [
    { value: '500+', label: 'Jeunes accompagnés' },
    { value: '200+', label: 'Étudiants aidés' },
    { value: '30+', label: 'Projets réalisés' },
    { value: '50+', label: 'Partenariats actifs' },
    { value: '15+', label: 'Organisations servies' },
];

export default function Stats() {
    return (
        <section
            id="stats"
            className="
                relative
                overflow-hidden
                bg-navy
                py-16
                sm:py-20
                lg:py-24
                px-4
                sm:px-6
                lg:px-10
            "
        >
            {/* Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08),transparent_70%)]" />

            <div className="relative mx-auto max-w-7xl">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-12 sm:mb-16 text-center"
                >
                    <h2
                        className="
                            text-2xl
                            sm:text-3xl
                            md:text-4xl
                            font-semibold
                            uppercase
                            tracking-[0.15em]
                            sm:tracking-[0.25em]
                            text-gold
                        "
                    >
                        Impact
                    </h2>

                    <p
                        className="
                            mx-auto
                            mt-4
                            max-w-2xl
                            text-sm
                            sm:text-base
                            text-white/60
                            leading-relaxed
                        "
                    >
                        Des résultats concrets obtenus grâce à l'engagement,
                        l'innovation et l'accompagnement des jeunes et des
                        organisations.
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <div
                    className="
                        grid
                        grid-cols-1
                        sm:grid-cols-2
                        lg:grid-cols-5
                        gap-4
                        sm:gap-5
                    "
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.1,
                            }}
                            whileHover={{
                                y: -10,
                                scale: 1.03,
                            }}
                            className="
                                group
                                rounded-xl
                                border
                                border-gold/10
                                bg-white/[0.02]
                                p-5
                                sm:p-6
                                text-center
                                backdrop-blur-sm
                                transition-all
                                hover:border-gold/40
                            "
                        >
                            <h3
                                className="
                                    mb-3
                                    text-3xl
                                    sm:text-4xl
                                    font-bold
                                    text-gold
                                "
                            >
                                {stat.value}
                            </h3>

                            <p
                                className="
                                    text-[11px]
                                    sm:text-xs
                                    md:text-sm
                                    uppercase
                                    tracking-[0.1em]
                                    sm:tracking-[0.15em]
                                    text-white/60
                                    leading-relaxed
                                    transition
                                    group-hover:text-white/80
                                "
                            >
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
