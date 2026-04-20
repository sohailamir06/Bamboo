import Hero from '../sections/Hero';
import AboutSection from '../sections/AboutSection';
import ServicesSection from '../sections/ServicesSection';
import QuoteSection from '../sections/QuoteSection';
import ProductsCarousel from '../sections/ProductsCarousel';
import ContactCTA from '../sections/ContactCTA';
import FAQSection from '../sections/FAQSection';
import ProjectsSection from '../sections/ProjectsSection';
import StorySection from '../sections/StorySection';
import TerraceSection from '../sections/TerraceSection';

const HomePage = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <QuoteSection />
      <ProjectsSection />
      <StorySection />
      <ProductsCarousel />
      <TerraceSection />
      <ContactCTA />
      <FAQSection />
    </>
  );
};

export default HomePage;
