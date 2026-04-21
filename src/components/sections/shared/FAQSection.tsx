import { useState } from 'react';
import { ChevronRight, Plus } from 'lucide-react';
import { FAQS } from '../../../data/shared';
import { cn } from '../../../lib/utils';

interface FAQSectionProps {
  title?: string;
  highlight?: string;
  faqs?: typeof FAQS;
  className?: string;
}

const FAQSection = ({
  title = "Are you looking for a durable, sustainable bamboo terrace that feels good and",
  highlight = "will bring you joy for many years?",
  faqs = FAQS,
  className
}: FAQSectionProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className={cn("section-padding bg-gradient-bambuam", className)}>
      <div className="container-site">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="heading-section text-white max-w-4xl mx-auto">
            {title}{' '}
            <span className="text-italic-accent block mt-2">{highlight}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
          {/* Left - Questions */}
          <div className="scroll-animate" style={{ transitionDelay: '200ms' }}>
            <div className="space-y-0 border-t border-bambuam-border">
              {faqs.map((faq, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className={cn(
                    "w-full text-left py-6 border-b border-bambuam-border flex items-center justify-between group transition-all duration-300",
                    activeIndex === index ? "text-bambuam-sage" : "text-white/70 hover:text-white"
                  )}
                >
                  <span className="text-base md:text-lg pr-4 font-medium">{faq.question}</span>
                  <div className={cn(
                    "w-8 h-8 rounded-full border border-current flex items-center justify-center transition-transform duration-300",
                    activeIndex === index && "rotate-90 bg-bambuam-sage text-white border-bambuam-sage"
                  )}>
                    {activeIndex === index ? (
                      <ChevronRight className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4 group-hover:scale-110" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right - Answer Display */}
          <div className="lg:pl-12 scroll-animate" style={{ transitionDelay: '400ms' }}>
            <div className="relative min-h-[300px] flex items-center p-8 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
              {activeIndex !== null ? (
                <div key={activeIndex} className="animate-fade-in">
                  <h3 className="text-white font-semibold text-xl mb-6 flex items-center gap-3">
                    <span className="w-8 h-1 bg-bambuam-sage rounded-full" />
                    Answer
                  </h3>
                  <p className="text-bambuam-text-secondary body-text-lg leading-relaxed">
                    {faqs[activeIndex].answer}
                  </p>
                </div>
              ) : (
                <div className="text-bambuam-text-muted italic flex flex-col items-center justify-center w-full text-center">
                  <div className="w-12 h-12 border-2 border-dashed border-bambuam-border rounded-full flex items-center justify-center mb-4">
                    <Plus className="w-6 h-6 opacity-40" />
                  </div>
                  <p>Select a question to discover more about bamboo.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
