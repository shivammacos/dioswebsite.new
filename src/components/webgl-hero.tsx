import Hero from '@/components/ui/animated-shader-hero';

export default function WebGLHero() {
  return (
    <Hero
      trustBadge={{
        icon: '🔴',
        text: 'Regulated · Transparent · Trusted by 50,000+ active traders worldwide',
      }}
      headline={{
        line1: 'Trade With',
        line2: 'Precision.',
      }}
      subtitle="Precision execution. Zero compromise. Access 500+ instruments across every major asset class — through infrastructure trusted by professionals worldwide."
      buttons={{
        primary: {
          text: 'Open Account',
          onClick: () => { window.location.hash = 'open-account'; },
        },
        secondary: {
          text: 'Explore Markets',
          onClick: () => { window.location.hash = 'markets'; },
        },
      }}
    />
  );
}
