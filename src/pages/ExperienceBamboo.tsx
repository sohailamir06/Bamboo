import ExperienceHero from '../components/sections/experience/ExperienceHero';
import JourneySlider from '../components/sections/experience/JourneySlider';
import SampleTerrace from '../components/sections/experience/SampleTerrace';
import RealRelationships from '../components/sections/experience/RealRelationships';
import QuoteSection from '../components/sections/shared/QuoteSection';
import ContactCTA from '../components/sections/shared/ContactCTA';
import ParallaxBanner from '../components/sections/shared/ParallaxBanner';
import InfoSection from '../components/sections/shared/InfoSection';
import ProductsCarousel from '../components/sections/shared/ProductsCarousel';
import VideoSection from '../components/sections/shared/VideoSection';
import bannerImg from '../assets/productservice/service-page-banner-2-1536x775.jpg';
import growsImg from '../assets/productservice/uber-uns-banner-1536x775.jpg';
import { PRODUCTS_HOME_CONTENT } from '../data/home';

const ExperienceBamboo = () => {
  return (
    <>
      <ExperienceHero />
      
      <QuoteSection 
        quote="A terrace shouldn't just look good – it should also feel good – natural, durable and with a clear conscience."
      />

      <JourneySlider />

      <SampleTerrace />

      <ParallaxBanner 
        image={bannerImg}
        text="Experience quality that lasts – because your terrace is part of your home."
      />

      <RealRelationships />

      <ProductsCarousel 
        title="Products related to bamboo &"
        highlight="bamboo care"
        products={PRODUCTS_HOME_CONTENT.products}
      />

      <InfoSection 
        title="How bamboo grows and"
        highlight="becomes your terrace."
        image={growsImg}
        paragraphs={[
          "Bamboo is one of the fastest growing plants on earth. It stores enormous amounts of CO2 and regenerates completely within a few years without having to be replanted.",
          "Our special processing makes this natural wonder a high-performance material for your outdoor area. Through thermal treatment and high-pressure compression, we create a durability and stability that is even superior to many tropical woods.",
          "The result is a product that is not only sustainable but also technically convincing – for a terrace that will bring you joy for many years."
        ]}
      />

      <VideoSection 
        title="Proper bamboo care – so your terrace"
        highlight="stays beautiful for a long time"
        videoUrl="https://www.youtube.com/embed/Z0oD93YqW8Y"
      />

      <ContactCTA 
        title="Do you really want to experience bamboo?"
        highlight="Then come and see for yourself!"
        secondaryText="On my sample terrace in Kaltenberg, you can not only look at different bamboo decking boards, but actually touch, compare, and feel them."
        description="Experience for yourself what quality feels like – in a relaxed atmosphere, with honest advice and without obligation."
        ctaText="Learn More!"
      />
    </>
  );
};

export default ExperienceBamboo;
