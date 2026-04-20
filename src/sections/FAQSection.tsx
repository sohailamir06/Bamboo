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
        'Definitely. Bamboo grows incredibly fast, stores a lot of CO₂, and doesn\'t need pesticides. This makes it one of the most sustainable alternatives to tropical and hardwoods.',
    },
    {
      question: 'How do I care for my bamboo terrace?',
      answer:
        'It\'s very simple: sweep regularly, clean occasionally. If desired, oil once a year – or let the patio weather naturally to a grey patina. The surface can be lightly brushed if needed.',
    },
    {
      question: 'How long does a bamboo terrace last?',
      answer:
        'Thanks to special processing, bamboo lasts for many years, often decades. Only select premium planks are imported directly to Bambuam – ensuring the best quality from the start.',
    },
  ];

  return (
    <section className="section-padding" style={{ background: 'linear-gradient(98.9deg, #111111 0%, #1E241E 62.5%, #242C24 100%)' }}>
      <div className="container-custom">
        <div className="text-center mb-12 scroll-animate">
          <h2 className="text-2xl md:text-3xl font-light text-white mb-5">
            Are you looking for a durable, sustainable bamboo terrace that feels good and{' '}
            <span className="italic text-italic-accent">will bring you joy for many years?</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left - Questions */}
          <div className="scroll-animate">
            <div className="space-y-0">
              {faqs.map((faq, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className={`w-full text-left py-5 border-b border-bambuam-border flex items-center justify-between group transition-colors ${
                    activeIndex === index ? 'text-white' : 'text-white/70 hover:text-white'
                  }`}
                >
                  <span className="text-lg pr-4">{faq.question}</span>
                  {activeIndex === index ? (
                    <ChevronRight className="w-5 h-5 flex-shrink-0 rotate-90 transition-transform" />
                  ) : (
                    <Plus className="w-5 h-5 flex-shrink-0 transition-transform group-hover:rotate-90" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Right - Answer Display */}
          <div
            className="scroll-animate lg:pl-8"
            style={{ transitionDelay: '200ms' }}
          >
            <div className="rounded-lg min-h-[300px]">
              {activeIndex !== null ? (
                <div className="animate-fade-in">
                  <p className="text-bambuam-text-muted leading-relaxed">
                    {faqs[activeIndex].answer}
                  </p>
                </div>
              ) : (
                <div className="h-full flex items-center justify-center text-bambuam-text-muted">
                  <p>Wähle eine Frage aus, um die Antwort zu sehen.</p>
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
