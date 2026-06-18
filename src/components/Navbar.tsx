import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { label: 'À propos', href: '#about' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Parcours', href: '#parcours' },
    { label: 'Réalisations', href: '#realisations' },
    { label: 'Services', href: '#services' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 30);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'auto';

        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setIsOpen(false);
            }
        };

        window.addEventListener('keydown', handleEscape);

        return () => {
            document.body.style.overflow = 'auto';
            window.removeEventListener('keydown', handleEscape);
        };
    }, [isOpen]);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 border-b border-gold/20 transition-all duration-500 ${
                    isScrolled
                        ? 'bg-navy/95 backdrop-blur-xl border-b border-gold/20 py-3'
                        : 'bg-transparent py-4 md:py-4'
                }`}
            >
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10">
                    {/* Logo */}
                    <h2 className="text-gold text-lg tracking-[0.2em]">
                        <a
                            href="#hero"
                            className="
                            text-gold
                            font-semibold
                            tracking-[0.15em]
                            sm:tracking-[0.25em]
                            text-base
                            sm:text-lg
                            md:text-xl
                            lg:text-2xl
                            whitespace-nowrap
                        "
                        >
                            A · AHOUADI
                        </a>
                    </h2>

                    {/* Navigation Desktop */}
                    <nav className="hidden lg:block">
                        <ul className="flex items-center gap-6 xl:gap-8">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <h2>
                                        <a
                                            href={link.href}
                                            className="
                                            group
                                            relative
                                            text-xs
                                            xl:text-sm
                                            uppercase
                                            tracking-[0.15em]
                                            text-gold/70
                                            transition
                                            hover:text-gold
                                        "
                                        >
                                            {link.label}

                                            <span
                                                className="
                                                absolute
                                                -bottom-2
                                                left-0
                                                h-[1px]
                                                w-0
                                                bg-gold
                                                transition-all
                                                duration-300
                                                group-hover:w-full
                                            "
                                            />
                                        </a>
                                    </h2>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* CTA Desktop */}
                    <a
                        href="#contact"
                        className="
                            hidden
                            lg:flex
                            items-center
                            border
                            border-gold
                            px-4
                            xl:px-5
                            py-3
                            text-xs
                            uppercase
                            tracking-[0.2em]
                            text-gold
                            transition-all
                            duration-300
                            hover:bg-gold
                            hover:text-navy
                        "
                    >
                        Contact
                    </a>

                    {/* Bouton Mobile */}
                    <button
                        type="button"
                        aria-label="Ouvrir le menu"
                        onClick={() => setIsOpen(true)}
                        className="
                            lg:hidden
                            flex
                            items-center
                            justify-center
                            p-2
                            text-gold
                        "
                    >
                        <Menu size={28} />
                    </button>
                </div>
            </header>

            {/* Overlay */}
            <div
                onClick={() => setIsOpen(false)}
                className={`
                    fixed inset-0 z-[55]
                    bg-black/60 backdrop-blur-sm
                    transition-all duration-300
                    lg:hidden
                    ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
                `}
            />

            {/* Menu Mobile */}
            <aside
                className={`
                    fixed
                    top-0
                    right-0
                    z-[60]
                    h-screen
                    w-[85%]
                    max-w-[380px]
                    bg-navy
                    border-l
                    border-gold/20
                    overflow-y-auto
                    transition-transform
                    duration-500
                    lg:hidden
                    ${isOpen ? 'translate-x-0' : 'translate-x-full'}
                `}
            >
                {/* Header Menu */}
                <div className="sticky top-0 bg-navy border-b border-gold/20">
                    <div className="flex items-center justify-between p-6">
                        <span className="text-gold text-lg tracking-[0.2em]">
                            MENU
                        </span>

                        <button
                            type="button"
                            aria-label="Fermer le menu"
                            onClick={() => setIsOpen(false)}
                        >
                            <X size={28} className="text-gold" />
                        </button>
                    </div>
                </div>

                {/* Liens */}
                <nav className="pt-4">
                    <ul>
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="
                                        block
                                        px-8
                                        py-5
                                        border-b
                                        border-white/5
                                        text-sm
                                        uppercase
                                        tracking-[0.15em]
                                        text-white/70
                                        transition-all
                                        duration-300
                                        hover:bg-gold/10
                                        hover:text-gold
                                    "
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* CTA Mobile */}
                <div className="p-6 sm:p-8">
                    <a
                        href="#contact"
                        onClick={() => setIsOpen(false)}
                        className="
                            flex
                            items-center
                            justify-center
                            border
                            border-gold
                            py-4
                            text-xs
                            uppercase
                            tracking-[0.25em]
                            text-gold
                            transition-all
                            duration-300
                            hover:bg-gold
                            hover:text-navy
                        "
                    >
                        Contact
                    </a>
                </div>
            </aside>
        </>
    );
}
