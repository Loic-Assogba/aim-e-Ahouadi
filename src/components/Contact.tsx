import { motion } from 'framer-motion';
import { MdEmail } from 'react-icons/md';
import { FaPhone, FaLocationDot } from 'react-icons/fa6';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
};

export default function Contact() {
    return (
        <section id="contact" className="bg-navy py-24 px-6 lg:px-10">
            <div className="mx-auto max-w-7xl">
                {/* Titre */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-gold text-3xl md:text-4xl font-semibold tracking-[0.3em] uppercase">
                        Contact
                    </h2>

                    <p className="mt-4 text-white/60 max-w-2xl mx-auto">
                        Une idée, un projet ou une collaboration ? Parlons-en et
                        construisons quelque chose d’impactant.
                    </p>
                </motion.div>

                <div className="grid gap-12 lg:grid-cols-2">
                    {/* INFOS */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        className="space-y-8"
                    >
                        <motion.div variants={item} className="flex gap-4">
                            <FaLocationDot
                                className="text-gold mt-1"
                                size={20}
                            />
                            <div>
                                <h3 className="text-white/80 uppercase tracking-[0.2em] text-sm">
                                    Localisation
                                </h3>
                                <p className="text-white/60 mt-1">
                                    Cotonou, Bénin
                                </p>
                            </div>
                        </motion.div>

                        <motion.div variants={item} className="flex gap-4">
                            <MdEmail className="text-gold mt-1" size={20} />
                            <div>
                                <h3 className="text-white/80 uppercase tracking-[0.2em] text-sm">
                                    Email
                                </h3>
                                <p className="text-white/60 mt-1">
                                    contact@aime-ahouadi.com
                                </p>
                            </div>
                        </motion.div>

                        <motion.div variants={item} className="flex gap-4">
                            <FaPhone className="text-gold mt-1" size={20} />
                            <div>
                                <h3 className="text-white/80 uppercase tracking-[0.2em] text-sm">
                                    Téléphone
                                </h3>
                                <p className="text-white/60 mt-1">
                                    +229 00 00 00 00
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={item}
                            className="pt-6 border-t border-gold/10"
                        >
                            <p className="text-white/50 text-sm">
                                Disponible pour missions nationales et
                                internationales.
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* FORMULAIRE */}
                    <motion.form
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        className="space-y-6"
                    >
                        <motion.div variants={item}>
                            <label className="text-white/70 text-sm uppercase tracking-[0.2em]">
                                Nom
                            </label>
                            <input
                                type="text"
                                className="mt-2 w-full bg-transparent border border-white/10 px-4 py-3 text-white/80 outline-none focus:border-gold transition"
                                placeholder="Votre nom"
                            />
                        </motion.div>

                        <motion.div variants={item}>
                            <label className="text-white/70 text-sm uppercase tracking-[0.2em]">
                                Email
                            </label>
                            <input
                                type="email"
                                className="mt-2 w-full bg-transparent border border-white/10 px-4 py-3 text-white/80 outline-none focus:border-gold transition"
                                placeholder="Votre email"
                            />
                        </motion.div>

                        <motion.div variants={item}>
                            <label className="text-white/70 text-sm uppercase tracking-[0.2em]">
                                Message
                            </label>
                            <textarea
                                rows={5}
                                className="mt-2 w-full bg-transparent border border-white/10 px-4 py-3 text-white/80 outline-none focus:border-gold transition resize-none"
                                placeholder="Votre message..."
                            />
                        </motion.div>

                        <motion.button
                            variants={item}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            type="submit"
                            className="w-full border border-gold py-4 text-xs uppercase tracking-[0.25em] text-gold transition hover:bg-gold hover:text-navy"
                        >
                            Envoyer le message
                        </motion.button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
