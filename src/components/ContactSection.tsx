import { useState } from 'react';
import { MapPin, Phone, Clock, Mail, CheckCircle } from 'lucide-react';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    try {
      await fetch('https://formspree.io/f/PLACEHOLDER_ID', {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    }
  };

  return (
    <section id="kontakt" className="bg-g-warmAlt py-24 scroll-mt-20" aria-label="Kontakt">
      <div className="h-px bg-g-gold/30" />
      <div className="max-w-7xl mx-auto px-4 pt-12">
        <h2 className="font-playfair text-3xl md:text-4xl text-g-textDark text-center tracking-wide">Skontaktuj się z nami</h2>
        <p className="font-inter text-lg text-g-textDarkMuted text-center mt-2">Chętnie odpowiemy na każde pytanie — bez zobowiązań</p>
        <div className="w-10 h-0.5 bg-g-gold mx-auto mt-4 mb-12" />
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - info */}
          <div className="space-y-8" data-animate="fade-in">
            <div>
              <h3 className="font-cormorant text-xl text-g-gold font-semibold mb-2">Zakład produkcyjny</h3>
              <div className="space-y-1 font-inter text-base text-g-textDark">
                <p className="flex items-center gap-2"><MapPin className="w-5 h-5 text-g-gold flex-shrink-0" />ul. Hrubieszowska 33, Kryłów (gm. Mircze)</p>
                <p className="flex items-center gap-2"><Phone className="w-5 h-5 text-g-gold flex-shrink-0" /><a href="tel:+48502480543" className="font-bold text-g-gold">502 480 543</a></p>
                <p className="flex items-center gap-2"><Clock className="w-5 h-5 text-g-gold flex-shrink-0" />Pon–Pt 7:00–17:00, Sob 7:00–15:00</p>
              </div>
            </div>
            <div>
              <h3 className="font-cormorant text-xl text-g-gold font-semibold mb-2">Biuro handlowe — Hrubieszów</h3>
              <div className="space-y-1 font-inter text-base text-g-textDark">
                <p className="flex items-center gap-2"><MapPin className="w-5 h-5 text-g-gold flex-shrink-0" />ul. Nowa 10, Hrubieszów</p>
                <p className="flex items-center gap-2"><Phone className="w-5 h-5 text-g-gold flex-shrink-0" /><a href="tel:+48697994924" className="font-bold text-g-gold">697 994 924</a></p>
              </div>
            </div>
            <div>
              <h3 className="font-cormorant text-xl text-g-gold font-semibold mb-2">Punkt obsługi — Dołhobyczów</h3>
              <p className="flex items-center gap-2 font-inter text-base text-g-textDark"><MapPin className="w-5 h-5 text-g-gold flex-shrink-0" />ul. Spółdzielcza, Dołhobyczów</p>
            </div>
            <p className="flex items-center gap-2 font-inter text-base text-g-textDark">
              <Mail className="w-5 h-5 text-g-gold flex-shrink-0" />
              <a href="mailto:granbet@vp.pl" className="text-g-gold">granbet@vp.pl</a>
            </p>

            {/* Static map placeholder */}
            <div className="bg-g-warmAlt rounded-xl p-6 border-2 border-g-gold text-center mt-6">
              <MapPin className="w-12 h-12 text-g-gold mx-auto" />
              <p className="font-playfair text-lg text-g-textDark mt-2">Zakład Kamieniarski GRANBET</p>
              <p className="font-inter text-sm text-g-textDarkMuted">ul. Hrubieszowska 33, 22-540 Kryłów</p>
              <a
                href="https://maps.google.com/?q=Krylow+ul.+Hrubieszowska+33+gmina+Mircze"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 bg-g-gold text-g-dark px-5 py-3 rounded-lg text-sm font-inter font-bold inline-block hover:bg-g-goldHover transition-colors"
              >
                Otwórz w Google Maps →
              </a>
            </div>
          </div>

          {/* Right - form */}
          <div data-animate="fade-in">
            {submitted ? (
              <div className="bg-g-darkCard border border-g-gold rounded-xl p-6 text-center" role="alert" aria-live="polite">
                <CheckCircle className="w-10 h-10 text-g-gold mx-auto mb-3" />
                <p className="font-playfair text-lg text-g-textLight">Dziękujemy! Skontaktujemy się wkrótce.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-g-card rounded-xl p-8 shadow-sm border border-g-goldSoft">
                <h3 className="font-playfair text-xl text-g-textDark mb-6">Napisz do nas</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-g-textDarkMuted mb-1 block font-inter">Imię i nazwisko *</label>
                    <input name="name" type="text" required aria-required="true" placeholder="np. Jan Kowalski"
                      className="w-full bg-white text-g-textDark border border-g-goldSoft rounded-lg p-3 text-[17px] font-inter focus:border-g-gold focus:outline-none focus:ring-2 focus:ring-g-gold/20 transition-colors" />
                  </div>
                  <div>
                    <label className="text-sm text-g-textDarkMuted mb-1 block font-inter">Adres e-mail</label>
                    <input name="_replyto" type="email" placeholder="np. jan@email.pl"
                      className="w-full bg-white text-g-textDark border border-g-goldSoft rounded-lg p-3 text-[17px] font-inter focus:border-g-gold focus:outline-none focus:ring-2 focus:ring-g-gold/20 transition-colors" />
                  </div>
                  <div>
                    <label className="text-sm text-g-textDarkMuted mb-1 block font-inter">Numer telefonu</label>
                    <input name="phone" type="tel" inputMode="tel" placeholder="np. 602 123 456"
                      className="w-full bg-white text-g-textDark border border-g-goldSoft rounded-lg p-3 text-[17px] font-inter focus:border-g-gold focus:outline-none focus:ring-2 focus:ring-g-gold/20 transition-colors" />
                  </div>
                  <div>
                    <label className="text-sm text-g-textDarkMuted mb-1 block font-inter">Wiadomość *</label>
                    <textarea name="message" rows={5} required aria-required="true" placeholder="Opisz czego potrzebujesz — odpiszemy lub zadzwonimy…"
                      className="w-full bg-white text-g-textDark border border-g-goldSoft rounded-lg p-3 text-[17px] font-inter focus:border-g-gold focus:outline-none focus:ring-2 focus:ring-g-gold/20 transition-colors resize-none" />
                  </div>
                  <input name="_gotcha" type="text" className="hidden" tabIndex={-1} />
                  <button type="submit"
                    className="w-full bg-g-gold text-g-dark font-inter font-bold py-4 rounded-lg text-[17px] min-h-[52px] hover:bg-g-goldHover hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
                    Wyślij wiadomość
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
