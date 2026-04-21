import { useState, useEffect, useCallback } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Replace these with your actual image paths
import step1Img from "../assets/slider-images/slider-image-a.jpg"; 
import step2Img from "../assets/slider-images/slider-image-b.jpg";
import step3Img from "../assets/slider-images/slider-image-c.jpg";
import step4Img from "../assets/slider-images/slider-image-d.jpg";
import step5Img from "../assets/slider-images/slider-image-e.jpg";

const steps = [
  {
    subtitle: "From bamboo tube to raw material",
    description: "It all starts with the bamboo cane. After harvesting, the canes are split lengthwise, peeled, and then rolled. This process creates uniform strips of raw material that later form the basis for our high-quality bamboo decking.",
    extraInfo: "The strips are then dried to optimally prepare them for further processing – an important step for quality and durability.",
    bullets: [
      "Formation of uniform raw strips – basis for stable bamboo planks",
      "Drying the strips ensures shape stability and longevity",
      "Optimal preparation for thermal treatment – quality from the start"
    ],
    image: step1Img,
    timelineLabel: "From bamboo tube to raw material"
  },
  {
    subtitle: "Heat resistance: Thermal treatment",
    description: "Deprivation of sugar and starch makes bamboo resistant. Protection against pests, fungi and rot – perfect for outdoor use.",
    extraInfo: "The foundation for long-lasting bamboo terraces – natural and robust.",
    bullets: [
      "Thermal treatment process",
      "Sugar and starch removal",
      "Natural pest resistance"
    ],
    image: step2Img,
    timelineLabel: "Heat resistance: Thermal treatment"
  },
  {
    subtitle: "Glued, pressed, damn stable",
    description: "The strips are then pressed into solid sheets under extremely high pressure. The result: a particularly dense, dimensionally stable and durable material.",
    extraInfo: "Ideal for outdoor use and heavy foot traffic.",
    bullets: [
      "High-pressure compression",
      "Maximized density",
      "Structural integrity"
    ],
    image: step3Img,
    timelineLabel: "Glued, pressed, damn stable"
  },
  {
    subtitle: "Tested down to the last detail",
    description: "Every batch undergoes rigorous testing to ensure it meets our standards for the European climate. We leave nothing to chance when it comes to your home.",
    extraInfo: "Final surface finishing and climate adaptation checks.",
    bullets: [
      "Rigorous stress tests",
      "Climate adaptation checks",
      "Final surface finishing"
    ],
    image: step4Img,
    timelineLabel: "Tested down to the last detail"
  },
  {
    subtitle: "Direct to you",
    description: "The final product travels directly from our production site to the Mühlviertel region, ensuring no middleman costs.",
    extraInfo: "Sustainable logistics for a sustainable product.",
    bullets: [
      "Direct shipping",
      "Local distribution",
      "Personal delivery"
    ],
    image: step5Img,
    timelineLabel: "From China to the Mühlviertel"
  }
];

const JourneySlider = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Function to move to next slide
  const nextSlide = useCallback(() => {
    setActiveStep((prev) => (prev + 1) % steps.length);
  }, []);

  // Automatic slide logic
  useEffect(() => {
    let interval: any;
    if (isAutoPlaying) {
      interval = setInterval(nextSlide, 5000); // Changes every 5 seconds
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  // Pause autoplay on user interaction
  const handleManualSelect = (index: number) => {
    setActiveStep(index);
    setIsAutoPlaying(false); // Stops autoplay when user clicks
    // Optional: Restart autoplay after a delay
    setTimeout(() => setIsAutoPlaying(true), 10000); 
  };

  return (
    <section className="relative min-h-[80vh] bg-gradient-bambuam overflow-hidden py-20 font-sans">
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-12">
        
        {/* Main Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold mb-20 text-white"
        >
          My journey to bamboo, or rather <span className="italic text-[#8a9a7f]">the journey from bamboo to the Mühlviertel region</span>
        </motion.h2>

        {/* Content Area */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text: Animated on Step Change */}
          <div className="lg:col-span-4 text-white">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <h3 className="font-bold mb-6 text-sm uppercase tracking-widest text-[#8a9a7f]">
                  {steps[activeStep].subtitle}
                </h3>
                <div className="space-y-6 text-gray-300 text-sm leading-relaxed">
                  <p>{steps[activeStep].description}</p>
                  <p>{steps[activeStep].extraInfo}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Center Image: Smooth Zoom and Fade */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-full h-[200px] aspect-[4/5] lg:aspect-[4/5] overflow-hidden rounded-sm shadow-2xl bg-black/20">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeStep}
                  src={steps[activeStep].image}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8, ease: "anticipate" }}
                  className="w-full h-full object-cover"
                  alt="Process step"
                />
              </AnimatePresence>
            </div>
          </div>

          {/* Right Bullets: Staggered Entrance */}
          <div className="lg:col-span-4 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeStep}
                className="space-y-6"
              >
                {steps[activeStep].bullets.map((bullet, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 + 0.3 }}
                    className="flex items-start gap-4 text-white"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#8a9a7f] flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-300 leading-tight">{bullet}</p>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        <div className="grid grid-cols-5 relative z-10 mt-10">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center group cursor-pointer" 
              onClick={() => handleManualSelect(index)}
            >
              <div className="h-20 flex items-end justify-center mb-6 px-2">
                <span className={`text-sm md:text-md text-center uppercase tracking-tighter transition-all duration-500 text-white ${activeStep === index ? 'text-white font-bold opacity-100' : 'text-gray-500 opacity-60'}`}>
                  {step.timelineLabel}
                </span>
              </div>
              
              <div className="relative flex items-center justify-center">
                {/* Dot */}
                <motion.div 
                  animate={{ 
                    scale: activeStep === index ? 1.5 : 1,
                    backgroundColor: activeStep === index ? "#fff" : "#4b5563"
                  }}
                  className="w-2.5 h-2.5 rounded-full z-10"
                />
                
                {/* Pulse Effect */}
                {activeStep === index && (
                  <motion.div 
                    layoutId="outline"
                    className="absolute w-8 h-8 border border-[#8a9a7f] rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
        {/* Timeline Navigation */}
        <div className="relative">
          {/* Background Track */}
          <div className="absolute -top-[0.29rem] left-0 w-full h-[1px] bg-gray-800 z-0">
             {/* Progress Bar (Shows timing until next slide) */}
             <motion.div 
               key={activeStep + isAutoPlaying.toString()}
               initial={{ width: "0%" }}
               animate={isAutoPlaying ? { width: "100%" } : { width: "0%" }}
               transition={{ duration: 5, ease: "linear" }}
               className="h-full bg-[#8a9a7f]/30"
             />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySlider;