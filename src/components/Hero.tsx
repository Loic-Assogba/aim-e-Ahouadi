import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section
            id="hero"
            className="
                relative
                min-h-[calc(100vh-80px)]
                pt-24
                pb-16
                flex
                items-center
                bg-navy
                overflow-hidden
                px-4
                sm:px-6
                lg:px-10
            "
        >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.15),transparent_60%)]" />

            {/* Grid Effect */}
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:60px_60px]" />

            <div
                className="
                    relative
                    mx-auto
                    max-w-7xl
                    w-full
                    grid
                    grid-cols-1
                    lg:grid-cols-2
                    gap-12
                    lg:gap-16
                    items-center
                "
            >
                {/* LEFT CONTENT */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center lg:text-left"
                >
                    <p className="text-gold uppercase tracking-[0.25em] text-[11px] sm:text-xs md:text-sm">
                        Bénin · Afrique · International
                    </p>

                    <h1
                        className="
                            mt-4
                            text-4xl
                            sm:text-5xl
                            md:text-6xl
                            lg:text-7xl
                            font-bold
                            text-white
                            leading-tight
                        "
                    >
                        Aimé <br />
                        <span className="text-gold">AHOUADI</span>
                    </h1>

                    <p
                        className="
                            mt-4
                            text-white/70
                            text-xs
                            sm:text-sm
                            md:text-base
                            uppercase
                            tracking-[0.15em]
                            leading-relaxed
                        "
                    >
                        Entrepreneur • Consultant • Leader Jeunesse •
                        Développement
                    </p>

                    <p
                        className="
                            mt-6
                            text-white/60
                            text-sm
                            md:text-base
                            leading-7
                            max-w-xl
                            mx-auto
                            lg:mx-0
                        "
                    >
                        Architecte du changement, je construis des ponts entre
                        la jeunesse africaine, le numérique et le développement
                        territorial.
                    </p>

                    {/* Buttons */}
                    <div
                        className="
                            mt-8
                            flex
                            flex-col
                            sm:flex-row
                            gap-4
                            justify-center
                            lg:justify-start
                        "
                    >
                        <a
                            href="#parcours"
                            className="
                                px-6
                                py-4
                                bg-gold
                                text-navy
                                text-xs
                                uppercase
                                tracking-[0.25em]
                                text-center
                                transition-all
                                duration-300
                                hover:scale-105
                            "
                        >
                            Découvrir mon parcours
                        </a>

                        <a
                            href="#contact"
                            className="
                                px-6
                                py-4
                                border
                                border-gold
                                text-gold
                                text-xs
                                uppercase
                                tracking-[0.25em]
                                text-center
                                transition-all
                                duration-300
                                hover:bg-gold
                                hover:text-navy
                            "
                        >
                            Collaborons ensemble
                        </a>
                    </div>
                </motion.div>

                {/* RIGHT CONTENT */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.9 }}
                    className="relative flex justify-center mt-8 lg:mt-0"
                >
                    {/* Glow */}
                    <div
                        className="
                            absolute
                            w-[240px]
                            h-[240px]
                            sm:w-[320px]
                            sm:h-[320px]
                            md:w-[420px]
                            md:h-[420px]
                            bg-gold/20
                            blur-3xl
                            rounded-full
                        "
                    />

                    {/* Image */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                        className="
                            relative
                            border
                            border-gold/20
                            p-2
                            sm:p-3
                            bg-navy/40
                            backdrop-blur-xl
                        "
                    >
                        <img
                            src="/images/hero.jpeg"
                            alt="Aimé Ahouadi"
                            className="
                                w-[220px]
                                h-[280px]
                                sm:w-[280px]
                                sm:h-[360px]
                                md:w-[320px]
                                md:h-[420px]
                                object-cover
                            "
                        />

                        <div
                            className="
                                absolute
                                bottom-2
                                left-2
                                right-2
                                bg-navy/80
                                backdrop-blur-md
                                text-center
                                py-2
                                text-[10px]
                                sm:text-xs
                                text-gold
                                tracking-[0.15em]
                                uppercase
                            "
                        >
                            Aimé Ahouadi · Bénin
                        </div>
                    </motion.div>

                    {/* Experience Badge */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                        className="
                            hidden lg:block
                            absolute
                            bottom-0
                            right-0
                            translate-x-2
                            translate-y-2
                            sm:translate-x-6
                            sm:translate-y-6
                            bg-navy
                            border
                            border-gold/30
                            px-4
                            py-3
                            text-center
                        "
                    >
                        <p className="text-gold text-lg font-bold">+5</p>
                        <p className="text-white/60 text-xs">ans d'impact</p>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <div
                className="
                    hidden
                    lg:flex
                    absolute
                    bottom-6
                    left-1/2
                    -translate-x-1/2
                    flex-col
                    items-center
                    gap-2
                    animate-bounce
                "
            >
                <div className="w-[1px] h-10 bg-gold/50" />

                <span className="text-white/40 text-xs tracking-[0.3em] uppercase">
                    Défiler
                </span>
            </div>
        </section>
    );
}
