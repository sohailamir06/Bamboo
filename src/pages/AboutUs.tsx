import AboutHero from "../components/sections/about/AboutHero";
import AboutAdvice from "../components/sections/about/AboutAdvice";
import AboutMe from "../components/sections/about/AboutMe";
import Timeline from "../components/sections/about/Timeline";
import BambooBenefits from "../components/sections/about/BambooBenefits";
import QuickAccess from "../components/sections/about/QuickAccess";
import BambooPhilosophy from "../components/sections/about/BambooPhilosophy";
import FAQSection from "../components/sections/shared/FAQSection";
import { ABOUT_FAQS } from "../data/about";

const AboutUs = () => {
  return (
    <>
      <AboutHero />
      <AboutAdvice />
      <AboutMe />
      <Timeline />
      <BambooBenefits />
      <QuickAccess />
      <BambooPhilosophy />
      <FAQSection 
        title="Common questions about"
        highlight="bamboo decking"
        faqs={ABOUT_FAQS}
      />
    </>
  );
};

export default AboutUs;
