import { MdEmail } from 'react-icons/md';
import {
    FaInstagram,
    FaXTwitter,
    FaLinkedin,
    FaFacebook,
} from 'react-icons/fa6';

export default function Footer() {
    return (
        <footer className="border-t border-gold/10 bg-navy">
            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                    {/* Branding */}
                    <div>
                        <h2 className="mb-4 text-2xl font-semibold tracking-[0.3em] text-gold">
                            A · AHOUADI
                        </h2>

                        <p className="max-w-sm leading-7 text-white/60">
                            Entrepreneur, Consultant en Communication 360°,
                            Leader Jeunesse et acteur du développement en
                            Afrique.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="mb-5 text-sm uppercase tracking-[0.25em] text-gold">
                            Navigation
                        </h3>

                        <ul className="space-y-3 text-white/60">
                            <li>
                                <a
                                    href="#about"
                                    className="transition hover:text-gold"
                                >
                                    À propos
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#expertise"
                                    className="transition hover:text-gold"
                                >
                                    Expertise
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#parcours"
                                    className="transition hover:text-gold"
                                >
                                    Parcours
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#services"
                                    className="transition hover:text-gold"
                                >
                                    Services
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#contact"
                                    className="transition hover:text-gold"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="mb-5 text-sm uppercase tracking-[0.25em] text-gold">
                            Contact
                        </h3>

                        <div className="space-y-3 text-white/60">
                            <p>Cotonou, Bénin</p>

                            <p>
                                Disponible pour des missions nationales et
                                internationales.
                            </p>

                            <a
                                href="mailto:contact@aime-ahouadi.com"
                                className="inline-flex items-center gap-2 transition hover:text-gold"
                            >
                                <MdEmail size={16} />
                                ahouadiaime56@gmail.com
                            </a>
                        </div>
                    </div>

                    {/* Réseaux */}
                    <div>
                        <h3 className="mb-5 text-sm uppercase tracking-[0.25em] text-gold">
                            Réseaux
                        </h3>

                        <div className="flex flex-wrap gap-4">
                            <a
                                href="https://www.linkedin.com/in/aimeahouadi"
                                className="rounded-full border border-white/10 p-3 text-white/60 transition-all hover:border-gold hover:text-gold"
                            >
                                <FaLinkedin size={18} />
                            </a>

                            <a
                                href="https://www.facebook.com/ahouadi0"
                                className="rounded-full border border-white/10 p-3 text-white/60 transition-all hover:border-gold hover:text-gold"
                            >
                                <FaFacebook size={18} />
                            </a>

                            <a
                                href="https://www.instagram.com/aime.ahouadi"
                                className="rounded-full border border-white/10 p-3 text-white/60 transition-all hover:border-gold hover:text-gold"
                            >
                                <FaInstagram size={18} />
                            </a>

                            <a
                                href="#"
                                className="rounded-full border border-white/10 p-3 text-white/60 transition-all hover:border-gold hover:text-gold"
                            >
                                <FaXTwitter size={18} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Séparateur */}
                <div className="my-10 h-px bg-white/10" />

                {/* Bas du footer */}
                <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
                    <p className="text-sm text-white/40">
                        © {new Date().getFullYear()} Aimé AHOUADI. Tous droits
                        réservés.
                    </p>

                    <p className="text-sm text-center text-white/40">
                        Développé par{' '}
                        <a
                            href="https://loicassogba.vercel.app"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Loïc ASSOGBA
                        </a>{' '}
                        <br /> DigitalSociety
                    </p>
                </div>
            </div>
        </footer>
    );
}
