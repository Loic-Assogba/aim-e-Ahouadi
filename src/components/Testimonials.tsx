import { motion } from 'framer-motion';

const testimonials = [
    {
        stars: 5,
        text: "Aimé possède une vision rare pour quelqu'un de sa génération. Sa capacité à transformer des idées en actions concrètes est impressionnante.",
        name: 'Partenaire Institutionnel',
        role: 'Organisation Nationale · Bénin',
    },
    {
        stars: 5,
        text: "Grâce à l'accompagnement d'Aimé, j'ai obtenu ma bourse et trouvé un logement en moins d'un mois. Un soutien humain et efficace.",
        name: 'Étudiant bénéficiaire',
        role: 'Programme Jeunesse · Bénin',
    },
    {
        stars: 5,
        text: 'La stratégie de communication a multiplié notre visibilité par 3 en six mois. Un consultant hors du commun.',
        name: "Directeur d'Entreprise",
        role: 'PME · Cotonou',
    },
];

export default function Testimonials() {
    return (
        <section
            id="temoignages"
            className="relative overflow-hidden bg-navy py-24 px-6 lg:px-10"
        >
            {/* glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent_70%)]" />

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
                        Témoignages
                    </p>

                    <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white leading-tight">
                        La confiance de ceux qui
                        <br />
                        <span className="text-gold">
                            ont collaboré avec Aimé
                        </span>
                    </h2>
                </motion.div>

                {/* GRID */}
                <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {testimonials.map((t, index) => (
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
                            className="relative group rounded-2xl border border-gold/10 bg-white/[0.02] p-8 backdrop-blur-sm transition-all"
                        >
                            {/* glow hover */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.12),transparent_70%)]" />

                            <div className="relative">
                                {/* stars */}
                                <div className="text-gold text-sm tracking-widest">
                                    {'★★★★★'.slice(0, t.stars)}
                                </div>

                                {/* text */}
                                <p className="mt-4 text-white/70 leading-7">
                                    “{t.text}”
                                </p>

                                {/* author */}
                                <div className="mt-6">
                                    <p className="text-white font-semibold">
                                        {t.name}
                                    </p>
                                    <p className="text-white/50 text-sm">
                                        {t.role}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
