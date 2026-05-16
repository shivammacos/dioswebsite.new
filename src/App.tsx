import Navbar from '@/components/navbar';
import WebGLHero from '@/components/webgl-hero';
import HeroScroll from '@/components/hero-scroll';
import AccountsSection from '@/components/accounts-section';
import ToolsSection from '@/components/tools-section';
import SecuritySection from '@/components/security-section';
import GetStartedSection from '@/components/get-started-section';
import AboutSection from '@/components/about-section';
import SupportSection from '@/components/support-section';
import RiskDisclaimer from '@/components/risk-disclaimer';
import Footer from '@/components/footer';

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-ink-900 text-white">
      <Navbar />

      {/* WebGL hero — full viewport, smoke shader as background */}
      <WebGLHero />

      {/* Story-scroll FlowArt sections */}
      <div id="markets" />
      <div id="platforms" />
      <HeroScroll />

      <AccountsSection />
      <ToolsSection />
      <SecuritySection />
      <GetStartedSection />
      <AboutSection />
      <SupportSection />
      <RiskDisclaimer />
      <Footer />
    </div>
  );
}
