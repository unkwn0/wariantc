import { Check } from 'lucide-react';
import { useCountUp } from '@/hooks/useCountUp';

const stats = [
  { end: 35, suffix: '+', label: 'Lat nieprzerwanej działalności' },
  { end: 500, suffix: '+', label: 'Rodzin, którym pomogliśmy' },
  { end: 3, suffix: '', label: 'Miejsca obsługi klientów' },
  { end: 100, suffix: '%', label: 'Własna produkcja w Kryłowie' },
];

const checks = [
  '35 lat doświadczenia',
  'Setki zrealizowanych nagrobków i pomników',
  'Indywidualne podejście do każdego zlecenia',
  'Terminowość i rzetelność',
  'Obsługa Hrubieszów, Kryłów i Dołhobyczów',
];

function StatItem({ end, suffix, label }: { end: number; suffix: string; label: string }) {
  const { ref, display } = useCountUp(end, suffix);
  return (
    <div className="text-center" data-animate="fade-in">
      <span ref={ref} className="font-playfair text-6xl md:text-7xl text-g-gold font-bold">{display}</span>
      <p className="font-inter text-base text-g-textLight mt-2">{label}</p>
    </div>
  );
}

export default function WhyUsSection() {
  return (
    <section data-reveal="off" className="bg-g-dark py-24">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-playfair text-3xl md:text-4xl text-white text-center tracking-wide">Dlaczego rodziny nam ufają?</h2>
        <p className="font-inter text-lg text-g-textMuted text-center mt-2">Ponad 35 lat budujemy zaufanie jedną realizacją na raz</p>
        <div className="w-10 h-0.5 bg-g-gold mx-auto mt-4 mb-12" />
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-8">
          {stats.map((s, i) => <StatItem key={i} {...s} />)}
        </div>
        <div className="mt-12 grid lg:grid-cols-2 gap-x-12 gap-y-3 max-w-4xl mx-auto">
          {checks.map((c, i) => (
            <div key={i} className="flex items-center gap-3" data-animate="fade-in">
              <Check className="w-5 h-5 text-g-gold flex-shrink-0" />
              <span className="font-inter text-[17px] text-g-textLight">{c}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
