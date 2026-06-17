import { motion } from 'framer-motion';

export default function Vision() {
    return (
        <section
            id="vision"
            className="relative overflow-hidden bg-navy py-28 px-6 lg:px-10"
        >
            {/* glow background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.10),transparent_70%)]" />

            <div className="relative mx-auto max-w-4xl text-center">
                {/* Label */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-gold uppercase tracking-[0.3em] text-sm"
                >
                    Vision & Ambition
                </motion.p>

                {/* Divider */}
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '120px' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="h-px bg-gold/40 mx-auto mt-6"
                />

                {/* Quote */}
                <motion.p
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-10 text-2xl md:text-4xl leading-relaxed text-white font-light"
                >
                    “Construire une Afrique où{' '}
                    <span className="text-gold font-semibold">
                        la jeunesse, le numérique et l'innovation
                    </span>{' '}
                    deviennent les véritables moteurs du développement
                    territorial et économique.”
                </motion.p>

                {/* Author */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mt-8 text-sm text-white/50 tracking-[0.15em] uppercase"
                >
                    — Aimé AHOUADI, Fondateur de AYIHA BOOST BEN/AFRIQUE
                </motion.p>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <a
                        href="#contact"
                        className="px-6 py-3 border border-gold text-gold uppercase tracking-[0.2em] text-xs hover:bg-gold hover:text-navy transition"
                    >
                        Rejoindre la vision
                    </a>

                    <a
                        href="#parcours"
                        className="px-6 py-3 border border-white/10 text-white/70 uppercase tracking-[0.2em] text-xs hover:border-gold hover:text-gold transition"
                    >
                        Explorer le parcours
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
