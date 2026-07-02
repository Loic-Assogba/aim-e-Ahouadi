import { motion } from 'framer-motion';

const tags = [
    'Leadership',
    'Innovation',
    'Communication',
    'Impact Social',
    'Entrepreneuriat',
    'Jeunesse',
    'Numérique',
];

const pillars = [
    {
        title: 'Vision',
        text: 'Afrique digitale et inclusive',
    },
    {
        title: 'Mission',
        text: 'Élever la jeunesse africaine',
    },
    {
        title: 'Méthode',
        text: 'Impact mesurable & humain',
    },
    {
        title: 'Ancrage',
        text: 'Cotonou · Bénin · Monde',
    },
];

export default function About() {
    return (
        <section
            id="about"
            className="relative overflow-hidden bg-navy py-24 px-6 lg:px-10"
        >
            {/* Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(212,175,55,0.08),transparent_50%)]" />

            <div className="relative mx-auto max-w-7xl">
                <div className="grid gap-16 lg:grid-cols-2 items-center">
                    {/* LEFT */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Quote Card */}
                        <div className="border border-gold/15 bg-white/[0.02] backdrop-blur-sm p-8 md:p-10 rounded-2xl">
                            <p className="text-xl md:text-2xl leading-relaxed text-white/85">
                                « Je ne suis pas né avec des ressources, mais
                                avec une vision. Et c'est cette vision qui m'a
                                donné la force de construire, d'accompagner et
                                d'inspirer. »
                            </p>

                            <p className="mt-6 text-gold uppercase tracking-[0.2em] text-sm">
                                AIMÉ AHOUADI · FONDATEUR AYIHA BOOST
                            </p>
                        </div>

                        {/* Pillars */}
                        <div className="grid grid-cols-2 gap-4 mt-8">
                            {pillars.map((pillar, index) => (
                                <motion.div
                                    key={pillar.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: index * 0.1,
                                    }}
                                    whileHover={{
                                        y: -6,
                                    }}
                                    className="border border-gold/10 bg-white/[0.02] p-5 rounded-xl"
                                >
                                    <h3 className="text-gold font-semibold">
                                        {pillar.title}
                                    </h3>

                                    <p className="mt-2 text-sm text-white/60">
                                        {pillar.text}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* RIGHT */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-gold uppercase tracking-[0.3em] text-sm">
                            À propos
                        </p>

                        <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white leading-tight">
                            Une trajectoire forgée
                            <br />
                            <span className="text-gold">par l'engagement</span>
                        </h2>

                        <div className="mt-8 space-y-6 text-white/65 leading-8">
                            <p>
                                Né au Bénin,{' '}
                                <strong className="text-white">
                                    Aimé AHOUADI
                                </strong>{' '}
                                grandit dans un environnement qui lui enseigne
                                très tôt la valeur du collectif et la puissance
                                de l'initiative individuelle.
                            </p>

                            <p>
                                Fondateur de{' '}
                                <strong className="text-gold">
                                    AYIHA BOOST BEN/AFRIQUE
                                </strong>
                                , il développe des initiatives dédiées à
                                l'accompagnement des jeunes, à la communication
                                stratégique et au développement des territoires.
                            </p>

                            <p>
                                Consultant en Communication 360°, Marketing
                                Digital et Branding, il accompagne entreprises,
                                institutions, ONG et collectivités dans leurs
                                stratégies de croissance et de visibilité.
                            </p>

                            <p>
                                Mentor, conférencier et entrepreneur social, il
                                a déjà accompagné plusieurs jeunes vers des
                                opportunités concrètes.
                            </p>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-3 mt-10">
                            {tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="border border-gold/20 px-4 py-2 text-xs uppercase tracking-[0.15em] text-gold transition hover:bg-gold hover:text-navy"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
