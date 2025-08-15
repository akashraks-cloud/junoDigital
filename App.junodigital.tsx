import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { createCache } from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import theme from './src/theme';
import Navigation from './src/components/Navigation';
import HeroSection from './src/components/HeroSection';
import FeaturesSection from './src/components/FeaturesSection';
import TestimonialsSection from './src/components/TestimonialsSection';
import PricingSection from './src/components/PricingSection';
import AboutSection from './src/components/AboutSection';
import ContactSection from './src/components/ContactSection';
import Footer from './src/components/Footer';

const createEmotionCache = () => {
  return createCache({
    key: "mui",
    prepend: true,
  });
};

const emotionCache = createEmotionCache();

function JunoDigitalApp() {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navigation />
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <PricingSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default JunoDigitalApp;