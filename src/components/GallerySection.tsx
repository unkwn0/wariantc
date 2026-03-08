import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { Phone } from 'lucide-react';

const placeholders = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  label: `Nagrobek granitowy – realizacja GRANBET ${i + 1}`,
}));

export default function GallerySection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (i: number) => {
    setLightboxIndex(i);
    setLightboxOpen(true);
  };

  return (
    <section id="galeria" className="bg-g-darkDeep py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-playfair text-3xl md:text-4xl text-white text-center tracking-wide">Nasze realizacje</h2>
        <p className="font-inter text-lg text-g-textMuted text-center mt-2">Każdy nagrobek to osobna historia — wykonana z szacunkiem</p>
        <div className="w-10 h-0.5 bg-g-gold mx-auto mt-4 mb-12" />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          {placeholders.slice(0, 6).map((p, i) => (
            <div
              key={p.id}
              data-animate="fade-in"
              className="relative aspect-[4/3] bg-[#C8C0B4] rounded-lg overflow-hidden cursor-pointer group"
              role="img"
              aria-label={p.label}
              onClick={() => openLightbox(i)}
            >
              <div className="absolute inset-0 bg-g-gold/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="flex items-center justify-center h-full group-hover:scale-[1.03] transition-transform duration-300">
                <span className="text-sm text-[#6E6560] font-inter">Zdjęcie realizacji {p.id}</span>
              </div>
            </div>
          ))}

          {/* Phone CTA block */}
          <div className="col-span-full bg-g-darkCard border border-g-gold rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="font-playfair text-lg text-g-textLight">Chcesz zamówić podobny nagrobek?</span>
            <a href="tel:+48502480543" className="text-g-gold font-inter font-bold text-2xl hover:text-white transition-colors flex items-center gap-2">
              <Phone className="w-6 h-6" />
              502 480 543
            </a>
          </div>

          {placeholders.slice(6).map((p, i) => (
            <div
              key={p.id}
              data-animate="fade-in"
              className="relative aspect-[4/3] bg-[#C8C0B4] rounded-lg overflow-hidden cursor-pointer group"
              role="img"
              aria-label={p.label}
              onClick={() => openLightbox(i + 6)}
            >
              <div className="absolute inset-0 bg-g-gold/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="flex items-center justify-center h-full group-hover:scale-[1.03] transition-transform duration-300">
                <span className="text-sm text-[#6E6560] font-inter">Zdjęcie realizacji {p.id}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={placeholders.map(p => ({ src: '/placeholder.svg', alt: p.label }))}
        styles={{ container: { backgroundColor: '#000000' } }}
      />
    </section>
  );
}
