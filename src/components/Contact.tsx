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
    show: {
        opacity: 1,
        y: 0,
    },
};

export default function Contact() {
    return (
        <section
            id="contact"
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
                        Prise de contact
                    </p>

                    <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
                        Construisons quelque chose
                        <br />
                        <span className="text-gold">de grand ensemble</span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-white/60 leading-8">
                        Que vous soyez partenaire, institution, entreprise,
                        investisseur ou porteur de projet, échangeons autour
                        d'une vision commune et d'opportunités de collaboration.
                    </p>
                </motion.div>

                {/* Content */}
                <div className="mt-20 grid gap-10 xl:grid-cols-2">
                    {/* Informations */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <motion.div
                            variants={item}
                            whileHover={{ x: 8 }}
                            className="rounded-3xl border border-gold/10 bg-white/[0.02] p-6 backdrop-blur-sm"
                        >
                            <div className="flex items-start gap-5">
                                <div className="rounded-full border border-gold/20 p-4 text-gold">
                                    <FaLocationDot size={22} />
                                </div>

                                <div>
                                    <h3 className="text-white font-medium">
                                        Localisation
                                    </h3>

                                    <p className="mt-2 text-white/60">
                                        Cotonou, Bénin
                                    </p>

                                    <p className="mt-1 text-white/40 text-sm">
                                        Disponible à l'international
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={item}
                            whileHover={{ x: 8 }}
                            className="rounded-3xl border border-gold/10 bg-white/[0.02] p-6 backdrop-blur-sm"
                        >
                            <div className="flex items-start gap-5">
                                <div className="rounded-full border border-gold/20 p-4 text-gold">
                                    <MdEmail size={22} />
                                </div>

                                <div>
                                    <h3 className="text-white font-medium">
                                        Email
                                    </h3>

                                    <p className="mt-2 text-white/60">
                                        contact@aime-ahouadi.com
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={item}
                            whileHover={{ x: 8 }}
                            className="rounded-3xl border border-gold/10 bg-white/[0.02] p-6 backdrop-blur-sm"
                        >
                            <div className="flex items-start gap-5">
                                <div className="rounded-full border border-gold/20 p-4 text-gold">
                                    <FaPhone size={22} />
                                </div>

                                <div>
                                    <h3 className="text-white font-medium">
                                        Téléphone
                                    </h3>

                                    <p className="mt-2 text-white/60">
                                        +229 01 63 88 11 10
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={item}
                            className="rounded-3xl border border-gold/10 bg-gold/5 p-6"
                        >
                            <h3 className="text-gold uppercase tracking-[0.2em] text-sm">
                                Collaboration
                            </h3>

                            <p className="mt-4 text-white/60 leading-7">
                                Disponible pour des missions de communication
                                stratégique, marketing digital, branding,
                                développement territorial, conférences, mentorat
                                et accompagnement de projets.
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Formulaire */}
                    <motion.form
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="rounded-3xl border border-gold/10 bg-white/[0.02] p-8 backdrop-blur-sm"
                    >
                        <div className="grid gap-5 md:grid-cols-2">
                            <motion.div variants={item}>
                                <label className="text-white/70 text-sm uppercase tracking-[0.15em]">
                                    Nom
                                </label>

                                <input
                                    type="text"
                                    placeholder="Votre nom"
                                    className="mt-2 w-full rounded-xl border border-white/10 bg-transparent px-4 py-4 text-white outline-none transition focus:border-gold"
                                />
                            </motion.div>

                            <motion.div variants={item}>
                                <label className="text-white/70 text-sm uppercase tracking-[0.15em]">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    placeholder="Votre email"
                                    className="mt-2 w-full rounded-xl border border-white/10 bg-transparent px-4 py-4 text-white outline-none transition focus:border-gold"
                                />
                            </motion.div>
                        </div>

                        <motion.div variants={item} className="mt-5">
                            <label className="text-white/70 text-sm uppercase tracking-[0.15em]">
                                Organisation
                            </label>

                            <input
                                type="text"
                                placeholder="Entreprise ou institution"
                                className="mt-2 w-full rounded-xl border border-white/10 bg-transparent px-4 py-4 text-white outline-none transition focus:border-gold"
                            />
                        </motion.div>

                        <motion.div variants={item} className="mt-5">
                            <label className="text-white/70 text-sm uppercase tracking-[0.15em]">
                                Message
                            </label>

                            <textarea
                                rows={6}
                                placeholder="Décrivez votre projet ou votre besoin..."
                                className="mt-2 w-full rounded-xl border border-white/10 bg-transparent px-4 py-4 text-white outline-none transition resize-none focus:border-gold"
                            />
                        </motion.div>

                        <motion.button
                            variants={item}
                            whileHover={{
                                scale: 1.02,
                            }}
                            whileTap={{
                                scale: 0.98,
                            }}
                            className="mt-6 w-full border border-gold bg-transparent py-4 text-sm uppercase tracking-[0.25em] text-gold transition hover:bg-gold hover:text-navy"
                        >
                            Envoyer le message
                        </motion.button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
