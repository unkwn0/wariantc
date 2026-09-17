import { HelmetProvider, Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import OfferSection from '@/components/OfferSection';
import WhyUsSection from '@/components/WhyUsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ProcessSection from '@/components/ProcessSection';
import GallerySection from '@/components/GallerySection';
import FaqSection from '@/components/FaqSection';
import ContactSection from '@/components/ContactSection';
import FooterSection from '@/components/FooterSection';
import { useFadeIn } from '@/hooks/useFadeIn';

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "GRANBET Zakład Kamieniarski Henryk Sobczuk",
  "description": "Zakład kamieniarski oferujący nagrobki granitowe, grobowce, fotoceramikę, schody i parapety. Tradycja od 1988 roku.",
  "telephone": "+48502480543",
  "email": "granbet@vp.pl",
  "url": "https://granbet.pl",
  "image": "https://granbet.pl/og-image.jpg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "ul. Hrubieszowska 33",
    "addressLocality": "Kryłów",
    "addressRegion": "lubelskie",
    "postalCode": "22-540",
    "addressCountry": "PL"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": 50.6825, "longitude": 24.0083 },
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "07:00", "closes": "17:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "07:00", "closes": "15:00" }
  ],
  "foundingDate": "1988-01-01",
  "priceRange": "$$",
  "hasMap": "https://maps.google.com/?q=Krylow+ul.+Hrubieszowska+33+gmina+Mircze"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Jak zamówić nagrobek w GRANBET?", "acceptedAnswer": { "@type": "Answer", "text": "Wystarczy zadzwonić pod numer 502 480 543 lub odwiedzić nas w Kryłowie albo Hrubieszowie. Razem omówimy projekt, materiał i termin realizacji." } },
    { "@type": "Question", "name": "Ile kosztuje nagrobek granitowy?", "acceptedAnswer": { "@type": "Answer", "text": "Cena zależy od wybranego granitu, rozmiaru i zdobień. Zapraszamy na bezpłatną konsultację — dopasujemy projekt do budżetu." } },
    { "@type": "Question", "name": "Jak długo czeka się na wykonanie nagrobka?", "acceptedAnswer": { "@type": "Answer", "text": "Standardowy czas realizacji wynosi 4–8 tygodni od zatwierdzenia projektu. Prostsze modele mogą być gotowe szybciej." } },
    { "@type": "Question", "name": "Czy GRANBET wykonuje renowacje starych nagrobków?", "acceptedAnswer": { "@type": "Answer", "text": "Tak — oferujemy czyszczenie, odświeżenie napisów, wymianę elementów i konserwację kamienia." } },
    { "@type": "Question", "name": "Gdzie znajdę zakład kamieniarski w Hrubieszowie?", "acceptedAnswer": { "@type": "Answer", "text": "Biuro handlowe GRANBET przy ul. Nowej 10 w Hrubieszowie. Zakład produkcyjny w Kryłowie przy trasie Hrubieszów–Dołhobyczów." } },
    { "@type": "Question", "name": "Czy GRANBET obsługuje klientów z całego powiatu hrubieszowskiego?", "acceptedAnswer": { "@type": "Answer", "text": "Tak — obsługujemy Hrubieszów, Kryłów, Dołhobyczów i cały powiat hrubieszowski. Dowozimy i montujemy nagrobki na miejscu." } }
  ]
};

export default function Index() {
  useFadeIn();

  return (
    <HelmetProvider>
      <Helmet>
        <title>GRANBET Zakład Kamieniarski | Nagrobki Hrubieszów, Kryłów, Dołhobyczów</title>
        <meta name="description" content="Zakład Kamieniarski GRANBET — nagrobki granitowe, schody, parapety, grobowce i fotoceramika. Własna produkcja od 1988 roku. Kryłów ☎ 502 480 543 | Hrubieszów ☎ 697 994 924" />
        <meta property="og:title" content="GRANBET Zakład Kamieniarski | Nagrobki i Kamieniarstwo" />
        <meta property="og:description" content="Nagrobki, grobowce, fotoceramika, schody granitowe. Tradycja od 1988 roku. Hrubieszów, Kryłów, Dołhobyczów." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://granbet.pl" />
        <meta property="og:locale" content="pl_PL" />
        <meta property="og:image" content="https://granbet.pl/og-image.jpg" />
        <link rel="canonical" href="https://granbet.pl" />
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <OfferSection />
        <WhyUsSection />
        <TestimonialsSection />
        <ProcessSection />
        <GallerySection />
        <FaqSection />
        <ContactSection />
      </main>
      <FooterSection />
    </HelmetProvider>
  );
}
