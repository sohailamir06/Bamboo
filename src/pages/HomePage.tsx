import Hero from '../components/sections/home/Hero';
import AboutSection from '../components/sections/home/AboutSection';
import ServicesSection from '../components/sections/home/ServicesSection';
import QuoteSection from '../components/sections/shared/QuoteSection';
import ContactCTA from '../components/sections/shared/ContactCTA';
import ProductsCarousel from '../components/sections/shared/ProductsCarousel';
import FAQSection from '../components/sections/shared/FAQSection';
import ProjectsSection from '../components/sections/home/ProjectsSection';
import StorySection from '../components/sections/home/StorySection';
import TerraceSection from '../components/sections/home/TerraceSection';
import { PRODUCTS_HOME_CONTENT } from '../data/home';

const HomePage = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <QuoteSection />
      <ProjectsSection />
      <StorySection />
      <ProductsCarousel 
        {...PRODUCTS_HOME_CONTENT}
      />
      <TerraceSection />
      <ContactCTA />
      <FAQSection />
    </>
  );
};

export default HomePage;
