import { useState, useEffect, useCallback } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { JOURNEY_STEPS } from '../../../data/experience';
import { cn } from '../../../lib/utils';

const JourneySlider = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setActiveStep((prev) => (prev + 1) % JOURNEY_STEPS.length);
  }, []);

  useEffect(() => {
    let interval: any;
    if (isAutoPlaying) {
      interval = setInterval(nextSlide, 6000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const handleManualSelect = (index: number) => {
    setActiveStep(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 15000); 
  };

  return (
    <section className="bg-gradient-bambuam py-24 overflow-hidden">
      <div className="container-site">
        
        {/* Main Heading */}
        <div className="mb-20 scroll-animate">
          <h2 className="heading-section text-white max-w-4xl">
            My journey to bamboo, or rather <span className="text-italic-accent block mt-2">the journey from bamboo to the Mühlviertel region</span>
          </h2>
        </div>

        {/* Content Area */}
        <div className="grid lg:grid-cols-12 gap-16 items-center min-h-[500px]">
          
          {/* Left Text */}
          <div className="lg:col-span-4 text-white order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-bambuam-sage font-bold text-sm uppercase tracking-[0.2em] mb-6">
                  {JOURNEY_STEPS[activeStep].subtitle}
                </h3>
                <div className="space-y-6 text-bambuam-text-secondary body-text-lg leading-relaxed">
                  <p>{JOURNEY_STEPS[activeStep].description}</p>
                  <p className="italic text-white/60">{JOURNEY_STEPS[activeStep].extraInfo}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Center Image */}
          <div className="lg:col-span-4 flex justify-center order-1 lg:order-2">
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl bg-black/20 border border-white/10">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeStep}
                  src={JOURNEY_STEPS[activeStep].image}
                  initial={{ opacity: 0, scale: 1.15 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-full h-full object-cover"
                  alt={JOURNEY_STEPS[activeStep].subtitle}
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-black/20 pointer-events-none" />
            </div>
          </div>

          {/* Right Bullets */}
          <div className="lg:col-span-4 space-y-8 order-3">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeStep}
                className="space-y-6"
              >
                {JOURNEY_STEPS[activeStep].bullets.map((bullet, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 + 0.3 }}
                    className="flex items-start gap-5 group"
                  >
                    <div className="mt-1 w-6 h-6 rounded-full bg-bambuam-sage/10 flex items-center justify-center group-hover:bg-bambuam-sage/30 transition-colors duration-300">
                      <CheckCircle2 className="w-4 h-4 text-bambuam-sage" />
                    </div>
                    <p className="text-bambuam-text-secondary font-medium leading-snug">{bullet}</p>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Timeline Navigation */}
        <div className="mt-24 relative">
          <div className="absolute top-[4.2rem] left-0 w-full h-[2px] bg-white/10" />
          <div className="grid grid-cols-5 relative z-10">
            {JOURNEY_STEPS.map((step, index) => (
              <button 
                key={index} 
                className="flex flex-col items-center group focus:outline-none" 
                onClick={() => handleManualSelect(index)}
              >
                <div className="h-16 flex items-end justify-center mb-6 px-2">
                  <span className={cn(
                    "text-xs md:text-sm text-center uppercase tracking-widest font-bold transition-all duration-500",
                    activeStep === index ? "text-white" : "text-white/40 group-hover:text-white/60"
                  )}>
                    {step.timelineLabel}
                  </span>
                </div>
                
                <div className="relative flex items-center justify-center">
                  <div className={cn(
                    "w-3 h-3 rounded-full z-10 transition-all duration-500",
                    activeStep === index ? "bg-bambuam-sage scale-150" : "bg-white/20 group-hover:bg-white/40"
                  )} />
                  
                  {activeStep === index && (
                    <motion.div 
                      layoutId="timeline-glow"
                      className="absolute w-8 h-8 bg-bambuam-sage/20 rounded-full blur-md"
                    />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySlider;
