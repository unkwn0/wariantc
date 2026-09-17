import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { q: 'Jak zamówić nagrobek w GRANBET?', a: 'Wystarczy zadzwonić pod numer 502 480 543 lub odwiedzić nas w Kryłowie albo Hrubieszowie. Razem omówimy projekt, materiał i termin realizacji — bez żadnych zobowiązań.' },
  { q: 'Ile kosztuje nagrobek granitowy?', a: 'Cena zależy od wybranego granitu, rozmiaru i zdobień. Zapraszamy na bezpłatną konsultację — dopasujemy projekt do Twoich potrzeb i budżetu.' },
  { q: 'Jak długo czeka się na wykonanie nagrobka?', a: 'Standardowy czas realizacji wynosi 4–8 tygodni od zatwierdzenia projektu. W przypadku prostszych modeli możemy działać szybciej.' },
  { q: 'Czy GRANBET wykonuje renowacje starych nagrobków?', a: 'Tak — oferujemy pełną renowację: czyszczenie kamienia, odświeżenie napisów, wymianę uszkodzonych elementów oraz konserwację. Skontaktuj się z nami, żeby omówić zakres prac.' },
  { q: 'Gdzie znajdę zakład kamieniarski w Hrubieszowie?', a: 'Biuro handlowe GRANBET mieści się przy ul. Nowej 10 w Hrubieszowie. Zakład produkcyjny działa w Kryłowie przy trasie Hrubieszów–Dołhobyczów, około 20 km od Hrubieszowa.' },
  { q: 'Czy GRANBET obsługuje klientów z całego powiatu hrubieszowskiego?', a: 'Tak — obsługujemy klientów z Hrubieszowa, Kryłowa, Dołhobyczowa i całego powiatu hrubieszowskiego. Dowozimy i montujemy nagrobki bezpośrednio na cmentarzu.' },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-g-warm py-24 scroll-mt-20" aria-label="Najczęściej zadawane pytania">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-playfair text-3xl md:text-4xl text-g-textDark text-center tracking-wide">Najczęściej zadawane pytania</h2>
        <div className="w-10 h-0.5 bg-g-gold mx-auto mt-4 mb-4" />
        <p className="font-inter text-lg text-g-textDarkMuted text-center mb-12">Odpowiedzi na pytania, które słyszymy najczęściej</p>
        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="bg-g-card border border-g-goldSoft rounded-lg overflow-hidden" data-animate="fade-in">
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between p-5 text-left font-playfair text-lg text-g-textDark hover:text-g-goldText transition-colors"
                  aria-expanded={isOpen}
                >
                  {faq.q}
                  <ChevronDown className={`w-5 h-5 text-g-goldText transition-transform duration-300 flex-shrink-0 ml-4 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-5 pb-5">
                    <div className="h-px bg-g-gold/20 mb-4" />
                    <p className="font-inter text-base text-g-textDarkMuted leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
