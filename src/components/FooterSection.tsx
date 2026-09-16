export default function FooterSection() {
  return (
    <footer className="bg-g-darkFooter border-t-[3px] border-g-gold">
      <div className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-3 gap-8">
        <div>
          <span className="font-playfair font-bold text-xl text-white">GRANBET</span>
          <span className="block font-cormorant text-g-gold">Zakład Kamieniarski — Henryk Sobczuk</span>
          <p className="font-inter text-sm text-g-textMuted mt-2">
            Własna produkcja od 1988 roku.<br />
            Nagrobki granitowe · grobowce · fotoceramika
          </p>
        </div>
        <div>
          <h4 className="font-cormorant text-g-gold font-semibold mb-3">Adresy</h4>
          <ul className="space-y-2 font-inter text-sm text-g-textLight">
            <li><span className="text-g-textMuted">Zakład:</span> Kryłów, ul. Hrubieszowska 33 (gm. Mircze)</li>
            <li><span className="text-g-textMuted">Biuro:</span> Hrubieszów, ul. Nowa 10</li>
            <li><span className="text-g-textMuted">Ekspozycja:</span> Dołhobyczów, ul. Spółdzielcza 10</li>
          </ul>
        </div>
        <div>
          <h4 className="font-cormorant text-g-gold font-semibold mb-3">Kontakt</h4>
          <div className="space-y-1 font-inter text-base">
            <a href="tel:+48502480543" className="block text-g-textLight hover:text-g-gold transition-colors">☎ 502 480 543</a>
            <a href="tel:+48697994924" className="block text-g-textLight hover:text-g-gold transition-colors">☎ 697 994 924</a>
            <a href="mailto:granbet@vp.pl" className="block text-g-textLight hover:text-g-gold transition-colors">granbet@vp.pl</a>
            <span className="block text-g-textMuted text-sm pt-2">Kryłów: Pon–Pt 7:00–17:00, Sob 7:00–15:00</span>
            <span className="block text-g-textMuted text-sm">Hrubieszów: Pon–Pt 8:00–17:00, Sob 8:00–15:00</span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 mt-8 pt-6 pb-6 text-center">
        <p className="font-inter text-sm text-g-textMuted/60">© {new Date().getFullYear()} GRANBET Zakład Kamieniarski Henryk Sobczuk. Wszelkie prawa zastrzeżone.</p>
      </div>
    </footer>
  );
}
