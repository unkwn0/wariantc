import { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'O nas', href: '#o-nas' },
  { label: 'Oferta', href: '#oferta' },
  { label: 'Realizacje', href: '#galeria' },
  { label: 'Proces', href: '#proces' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Kontakt', href: '#kontakt' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const menuBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Menu mobilne: Escape zamyka, tło się nie przewija, fokus trafia do nakładki
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false); };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeBtnRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
      menuBtnRef.current?.focus();
    };
  }, [menuOpen]);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b-2 border-g-gold transition-all duration-300 ${
        scrolled
          ? 'bg-g-dark shadow-[0_2px_16px_rgba(0,0,0,0.4)]'
          : 'bg-g-card'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16 md:h-[72px]">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="#" onClick={scrollToTop} className="block" aria-label="GRANBET — powrót na górę strony">
            <span className={`font-playfair font-bold text-2xl transition-colors duration-300 ${scrolled ? 'text-white' : 'text-g-textDark'}`}>
              GRANBET
            </span>
            <span className={`block font-cormorant text-[13px] leading-none transition-colors duration-300 ${scrolled ? 'text-g-textMuted' : 'text-g-textDarkMuted'}`}>
              Zakład Kamieniarski od 1988 r.
            </span>
          </a>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={`font-inter text-base transition-colors duration-200 hover:text-g-gold ${
                scrolled ? 'text-g-textLight' : 'text-g-textDark'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Phone + hamburger */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+48502480543"
            className={`font-inter font-bold text-[17px] px-5 py-2.5 rounded-lg transition-all duration-300 hidden sm:inline-flex items-center gap-2 ${
              scrolled
                ? 'bg-g-gold text-g-dark'
                : 'bg-g-dark text-g-gold'
            }`}
          >
            <Phone className="w-4 h-4" />
            502 480 543
          </a>
          {/* Mobile phone */}
          <a
            href="tel:+48502480543"
            className="sm:hidden font-inter font-bold text-base text-g-gold flex items-center gap-1"
          >
            <Phone className="w-4 h-4" />
            502 480 543
          </a>
          <button
            ref={menuBtnRef}
            className="md:hidden text-g-gold"
            onClick={() => setMenuOpen(true)}
            aria-label="Otwórz menu"
            aria-expanded={menuOpen}
            aria-controls="menu-mobilne"
          >
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div id="menu-mobilne" role="dialog" aria-modal="true" aria-label="Menu nawigacyjne" className="fixed inset-0 z-[60] bg-g-dark flex flex-col items-center justify-center">
          <button
            ref={closeBtnRef}
            className="absolute top-5 right-5 text-g-gold"
            onClick={() => setMenuOpen(false)}
            aria-label="Zamknij menu"
          >
            <X className="w-8 h-8" />
          </button>
          <nav className="flex flex-col items-center gap-2">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-inter text-xl text-g-textLight py-4 hover:text-g-gold transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
