import ExperienceSection from '../sections/ExperienceSection';
import ExperienceAdviceSection from '@/sections/ExperienceAdviceSection';
import JourneySlider from '@/sections/JourneySlider';
import SampleTerraceSection from '@/sections/SampleTerraceSection';
import ExperienceYourself from '@/sections/ExperienceYourself'; 
import RealRelationships from '@/sections/RealRelationships';
import BambooGrows from '@/sections/BambooGrows';
import BambooCare from '@/sections/BambooCare';
import VideoSection from '@/sections/VideoSection';

const ExperienceBamboo = () => {
  return (
    <>
      <ExperienceSection />
      <ExperienceAdviceSection />
      <JourneySlider />
      <SampleTerraceSection />
      <ExperienceYourself />
      <RealRelationships />
      <BambooGrows />
      <BambooCare />
      <VideoSection />
    </>
  );
};

export default ExperienceBamboo;
