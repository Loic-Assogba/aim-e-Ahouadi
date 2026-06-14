import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { label: 'À propos', href: '#about' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Parcours', href: '#parcours' },
    { label: 'Réalisations', href: '#realisations' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 30);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <header
                className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
                    isScrolled
                        ? 'bg-navy/95 backdrop-blur-xl border-b border-gold/20 py-4'
                        : 'bg-transparent py-6'
                }`}
            >
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
                    {/* Logo */}
                    <a
                        href="#hero"
                        className="text-gold text-xl md:text-2xl font-semibold tracking-[0.3em]"
                    >
                        A · AHOUADI
                    </a>

                    {/* Desktop */}
                    <nav className="hidden lg:block">
                        <ul className="flex items-center gap-8">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="group relative text-sm uppercase tracking-[0.2em] text-white/70 transition hover:text-gold"
                                    >
                                        {link.label}

                                        <span className="absolute -bottom-2 left-0 h-[1px] w-0 bg-gold transition-all duration-300 group-hover:w-full"></span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* CTA Desktop */}
                    <a
                        href="#contact"
                        className="hidden lg:flex items-center border border-gold px-5 py-3 text-xs uppercase tracking-[0.25em] text-gold transition-all duration-300 hover:bg-gold hover:text-navy"
                    >
                        Collaborer
                    </a>

                    {/* Mobile button */}
                    <button
                        onClick={() => setIsOpen(true)}
                        className="lg:hidden text-gold"
                    >
                        <Menu size={28} />
                    </button>
                </div>
            </header>

            {/* Overlay */}
            <div
                onClick={() => setIsOpen(false)}
                className={`fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-all duration-300 lg:hidden ${
                    isOpen ? 'visible opacity-100' : 'invisible opacity-0'
                }`}
            />

            {/* Mobile menu */}
            <aside
                className={`fixed right-0 top-0 z-[60] h-screen w-[80%] max-w-sm bg-navy border-l border-gold/20 transition-all duration-500 lg:hidden ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className="flex items-center justify-between border-b border-gold/20 p-6">
                    <span className="text-gold text-lg tracking-[0.2em]">
                        MENU
                    </span>

                    <button onClick={() => setIsOpen(false)}>
                        <X className="text-gold" size={28} />
                    </button>
                </div>

                <nav className="mt-10">
                    <ul className="flex flex-col">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block border-b border-white/5 px-8 py-5 text-sm uppercase tracking-[0.2em] text-white/80 transition hover:bg-gold/10 hover:text-gold"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="p-8">
                    <a
                        href="#contact"
                        onClick={() => setIsOpen(false)}
                        className="flex justify-center border border-gold py-4 text-xs uppercase tracking-[0.25em] text-gold transition hover:bg-gold hover:text-navy"
                    >
                        Collaborer
                    </a>
                </div>
            </aside>
        </>
    );
}
