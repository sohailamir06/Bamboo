import { useState } from 'react';
import { ChevronRight, Plus } from 'lucide-react';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Can bamboo withstand the Austrian weather?',
      answer:
        'Yes, no problem. Thanks to the thermal treatment, bamboo remains stable and beautiful – even in rain, snow, and frost. Ideal for the climate here in Austria.',
    },
    {
      question: 'Is bamboo more sustainable than wood?',
      answer:
        "Definitely. Bamboo grows incredibly fast, stores a lot of CO₂, and doesn't need pesticides. This makes it one of the most sustainable alternatives to tropical and hardwoods.",
    },
    {
      question: 'How do I care for my bamboo terrace?',
      answer:
        "It's very simple: sweep regularly, clean occasionally. If desired, oil once a year – or let the patio weather naturally to a grey patina. The surface can be lightly brushed if needed.",
    },
    {
      question: 'How long does a bamboo terrace last?',
      answer:
        'Thanks to special processing, bamboo lasts for many years, often decades. Only select premium planks are imported directly to Bambuam – ensuring the best quality from the start.',
    },
  ];

  return (
    <section className="section-padding bg-gradient-bambuam">
      <div className="container-site">
        <div className="text-center mb-12">
          <h2 className="heading-section text-white max-w-4xl mx-auto">
            Are you looking for a durable, sustainable bamboo terrace that feels good and{' '}
            <span className="text-italic-accent">will bring you joy for many years?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left - Questions */}
          <div>
            <div className="space-y-0">
              {faqs.map((faq, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className={`w-full text-left py-5 border-b border-bambuam-border flex items-center justify-between group transition-colors ${
                    activeIndex === index ? 'text-white' : 'text-white/70 hover:text-white'
                  }`}
                >
                  <span className="text-base md:text-lg pr-4 font-medium">{faq.question}</span>
                  {activeIndex === index ? (
                    <ChevronRight className="w-5 h-5 flex-shrink-0 rotate-90 transition-transform duration-300" />
                  ) : (
                    <Plus className="w-5 h-5 flex-shrink-0 transition-transform duration-300 group-hover:rotate-90" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Right - Answer Display */}
          <div className="lg:pl-8">
            <div className="min-h-[200px] flex items-center">
              {activeIndex !== null ? (
                <div className="animate-fade-in">
                  <p className="text-bambuam-text-secondary body-text-lg">
                    {faqs[activeIndex].answer}
                  </p>
                </div>
              ) : (
                <div className="text-bambuam-text-secondary">
                  <p>Select a question to see the answer.</p>
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
