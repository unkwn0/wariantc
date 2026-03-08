export default function FooterSection() {
  return (
    <footer className="bg-g-darkFooter border-t-[3px] border-g-gold">
      <div className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-3 gap-8">
        <div>
          <span className="font-playfair font-bold text-xl text-white">GRANBET</span>
          <span className="block font-cormorant text-g-gold">Zakład Kamieniarski</span>
          <p className="font-inter text-sm text-g-textMuted mt-2">Tradycja od 1988 roku. Hrubieszów · Kryłów · Dołhobyczów</p>
        </div>
        <div>
          <h4 className="font-cormorant text-g-gold font-semibold mb-3">Menu</h4>
          <nav className="flex flex-col gap-1">
            {[
              { label: 'Oferta', href: '#oferta' },
              { label: 'Realizacje', href: '#galeria' },
              { label: 'O nas', href: '#o-nas' },
              { label: 'FAQ', href: '#faq' },
              { label: 'Proces', href: '#proces' },
              { label: 'Kontakt', href: '#kontakt' },
            ].map(l => (
              <a key={l.href} href={l.href} className="font-inter text-base text-g-textLight hover:text-g-gold transition-colors">{l.label}</a>
            ))}
          </nav>
        </div>
        <div>
          <h4 className="font-cormorant text-g-gold font-semibold mb-3">Kontakt</h4>
          <div className="space-y-1 font-inter text-base">
            <a href="tel:+48502480543" className="block text-g-textLight hover:text-g-gold transition-colors">☎ 502 480 543</a>
            <span className="block text-g-textLight">☎ 697 994 924</span>
            <a href="mailto:granbet@vp.pl" className="block text-g-textLight hover:text-g-gold transition-colors">granbet@vp.pl</a>
            <span className="block text-g-textMuted text-sm">Pon–Pt 7:00–17:00, Sob 7:00–15:00</span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 mt-8 pt-6 pb-6 text-center">
        <p className="font-inter text-sm text-g-textMuted/60">© {new Date().getFullYear()} GRANBET Zakład Kamieniarski. Wszelkie prawa zastrzeżone.</p>
      </div>
    </footer>
  );
}
