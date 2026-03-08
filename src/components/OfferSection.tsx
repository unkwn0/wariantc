import { Gem, Landmark, Camera, ArrowUpFromLine, Flame, Wrench } from 'lucide-react';

const offers = [
  { icon: Gem, title: 'Nagrobki granitowe', desc: 'Pomagamy godnie upamiętniać bliskich — z naturalnego granitu, na wieki.' },
  { icon: Landmark, title: 'Grobowce rodzinne', desc: 'Trwałe grobowce rodzinne — służące kolejnym pokoleniom.' },
  { icon: Camera, title: 'Fotoceramika', desc: 'Zdjęcia w krysztale i porcelanie — wizerunek bliskiej osoby zachowany na lata.' },
  { icon: ArrowUpFromLine, title: 'Schody, parapety, blaty', desc: 'Elementy granitowe do wnętrz i ogrodów — precyzja i elegancja.' },
  { icon: Flame, title: 'Kominki i tarasy', desc: 'Granitowe obudowy kominków, tarasy i chodniki z kostki.' },
  { icon: Wrench, title: 'Renowacje', desc: 'Przywracamy nagrobkom dawny blask — konserwacja i czyszczenie kamienia.' },
];

export default function OfferSection() {
  return (
    <section id="oferta" className="bg-g-warmAlt py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-playfair text-3xl md:text-4xl text-g-textDark text-center tracking-wide">Jak możemy pomóc?</h2>
        <p className="font-inter text-lg text-g-textDarkMuted text-center mt-2">Wykonujemy z kamienia wszystko, czego potrzebujesz</p>
        <div className="w-10 h-0.5 bg-g-gold mx-auto mt-4 mb-12" />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          {offers.map((o, i) => (
            <div
              key={i}
              data-animate="fade-in"
              className="bg-g-card border-t-4 border-g-gold p-6 rounded-lg shadow-sm hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(198,168,90,0.18)] hover:border-t-g-goldHover transition-all duration-[250ms]"
            >
              <o.icon className="w-8 h-8 text-g-gold mb-3" />
              <h3 className="font-playfair text-lg text-g-textDark font-bold">{o.title}</h3>
              <p className="font-inter text-base text-g-textDarkMuted leading-relaxed mt-2">{o.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
