export default function AboutSection() {
  return (
    <section id="o-nas" className="bg-g-warm py-24 scroll-mt-20" aria-label="O firmie GRANBET">
      <div className="h-px bg-g-gold/30" />
      <div className="max-w-7xl mx-auto px-4 pt-12">
        <h2 className="font-playfair text-3xl md:text-4xl text-g-textDark text-center tracking-wide">O firmie GRANBET</h2>
        <div className="w-10 h-0.5 bg-g-gold mx-auto mt-4 mb-12" />
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div data-animate="fade-in">
            <p className="font-inter text-lg text-g-textDark leading-relaxed mb-4">
              Rozumiemy, że wybór nagrobka to jedna z najtrudniejszych decyzji. Dlatego od ponad 35 lat towarzyszymy rodzinom w Hrubieszowie, Kryłowie i okolicach — z szacunkiem, cierpliwością i pełnym zaangażowaniem.
            </p>
            <p className="font-inter text-lg text-g-textDark leading-relaxed">
              Nasz zakład produkcyjny mieści się w Kryłowie przy trasie Hrubieszów–Dołhobyczów. Każdy nagrobek wytwarzamy własnoręcznie — od projektu po montaż na cmentarzu. Biura handlowe prowadzimy w Hrubieszowie i Dołhobyczowie.
            </p>
          </div>
          <div
            data-animate="fade-in"
            className="aspect-[4/3] bg-stone-400 rounded-xl overflow-hidden flex items-center justify-center"
            role="img"
            aria-label="Zakład kamieniarski GRANBET w Kryłowie – widok warsztatu"
          >
            <span className="text-sm text-stone-600 font-inter">Zdjęcie zakładu</span>
          </div>
        </div>
      </div>
    </section>
  );
}
