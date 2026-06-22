import HeroSection from '../components/HeroSection.jsx';
import { useSEO } from '../hooks/useSEO.js';

export default function Home() {
  useSEO({
    title: 'HypeFinds | Best SHEIN Finds for Outfits',
    description:
      'Discover curated SHEIN outfit ideas, accessories and essentials with quick shop links.',
  });

  return (
    <HeroSection />
  );
}
