import ServicesHero from '../components/sections/services/ServicesHero';
import ServicesAdvice from '../components/sections/services/ServicesAdvice';
import BambooFloors from '../components/sections/services/BambooFloors';
import ServiceDetail from '../components/sections/services/ServiceDetail';
import ParallaxBanner from '../components/sections/shared/ParallaxBanner';
import ContactCTA from '../components/sections/shared/ContactCTA';
import InfoSection from '../components/sections/shared/InfoSection';
import ProjectsSection from '../components/sections/home/ProjectsSection';
import { 
  BAMBOO_SUBSTRUCTURES_CONTENT, 
  POOL_COVERS_CONTENT, 
  FENCING_CONTENT 
} from '../data/services';
import bannerImg from '../assets/productservice/service-page-banner-1-1536x775.jpg';
import bringImg from "../assets/productservice/115-768x616.jpg";

const ServicesPage = () => {
  return (
    <>
      <ServicesHero />
      <ServicesAdvice />
      <BambooFloors />
      
      <ServiceDetail 
        {...BAMBOO_SUBSTRUCTURES_CONTENT}
        reverse 
      />
      
      <ServiceDetail 
        {...POOL_COVERS_CONTENT}
      />
      
      <ServiceDetail 
        {...FENCING_CONTENT}
        reverse
      />

      <ParallaxBanner 
        image={bannerImg}
        text="Whether terrace, pool or privacy screen: With bamboo you not only bring durable quality, but also a piece of nature and tranquility into your home."
      />

      <ProjectsSection />

      <InfoSection 
        title="I bring bamboo directly from China to our home in the Mühlviertel region –"
        highlight="Andi from Bambuam"
        image={bringImg}
        paragraphs={[
          "It all started with the search for a terrace that was durable, natural, and sustainable. Like many others, I was looking for the 'jack-of-all-trades' – a terrace that could do everything.",
          "It's not that simple, but bamboo fulfills many of these criteria: robust, sustainable, splinter-free, and beautiful. My own needs and many hours of research led me down this path – and ultimately to my company, Bambuam.",
          "Today I import high-quality bamboo decking directly from China to Austria – without intermediaries, but with genuine conviction. From my own experience, I know what really matters – and I will support you honestly and personally with your project."
        ]}
      />

      <ContactCTA 
        title="Ready for your own"
        highlight="bamboo project?"
        secondaryText="Whether it's a terrace, fence, pool cover or initial planning idea – I'm happy to be by your side."
        description="With honest advice, extensive experience and high-quality materials, we will find the solution that suits you – durable, natural and simply beautiful."
        ctaText="Enquire now!"
      />
    </>
  );
};

export default ServicesPage;
