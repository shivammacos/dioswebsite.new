import { AnimatedGlassyPricing, type PricingCardProps } from '@/components/ui/animated-glassy-pricing';

const ACCOUNTS: PricingCardProps[] = [
  {
    planName: 'Standard',
    description: 'Ideal for beginners entering global markets.',
    price: '$100',
    priceLabel: 'min. deposit',
    features: [
      'Competitive spreads',
      'No commission',
      'Educational resources',
      'Full asset access',
    ],
    buttonText: 'Open Account',
    isPopular: false,
    accentColor: '#C8102E',
  },
  {
    planName: 'ECN & Raw',
    description: 'Raw spreads and direct market access for active traders.',
    price: '$200',
    priceLabel: 'min. deposit',
    features: [
      'Raw spreads from 0.1',
      'Low commission per lot',
      'Direct market access',
      'Pro charting suite',
    ],
    buttonText: 'Open Account',
    isPopular: true,
    accentColor: '#C8102E',
  },
  {
    planName: 'Pro',
    description: 'Institutional spreads for serious traders.',
    price: '$500',
    priceLabel: 'min. deposit',
    features: [
      'Tight institutional spreads',
      'Priority execution',
      'Advanced API access',
      'Strategy automation',
    ],
    buttonText: 'Open Account',
    isPopular: false,
    accentColor: '#C8102E',
  },
  {
    planName: 'VIP',
    description: 'White-glove service for high-volume accounts.',
    price: '$10K',
    priceLabel: 'min. deposit',
    features: [
      'Institutional pricing',
      'Dedicated account manager',
      'Custom liquidity routing',
      'White-glove onboarding',
    ],
    buttonText: 'Open Account',
    isPopular: false,
    accentColor: '#C8102E',
  },
];

export default function AccountsSection() {
  return (
    <section id="accounts" className="relative z-10 border-t border-white/10 bg-ink-900">
      <AnimatedGlassyPricing
        title={
          <>
            Accounts Designed for{' '}
            <span className="text-[#C8102E]">Every Trader.</span>
          </>
        }
        subtitle="From your first trade to your thousandth — DIOS scales with you. Pick the tier that matches your strategy."
        plans={ACCOUNTS}
        showAnimatedBackground={true}
      />
    </section>
  );
}
