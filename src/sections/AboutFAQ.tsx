import { useState } from 'react';
import { ChevronRight, Plus } from 'lucide-react';

const AboutFAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Why did you choose bamboo in particular?',
      answer:
        'Because I was looking for a durable, low-maintenance patio myself – and couldn\'t find anything that truly convinced me. Bamboo impressed me: sustainable, resilient, simply good.',
    },
    {
      question: ' makes your bamboo decking different from others?',
      answer:
        "I work directly with the manufacturer, am involved in product development, and thoroughly inspect every batch. This ensures that only top quality reaches Austria – without intermediaries, without compromises.",
    },
    {
      question: 'Can I really build my bamboo terrace myself?',
      answer:
        "Yes, that's exactly the plan! I don't just supply materials, but also support you with expertise and honest advice – so that you can happily implement your project yourself.",
    },
    {
      question: 'How sustainable is bamboo really?',
      answer:
        'Bamboo grows rapidly, requires no pesticides, and binds a lot of CO₂. Once thermally treated, it is durable and robust – a strong alternative to tropical wood or WPC.',
    },
  ];

  return (
    <section className="section-padding bg-gradient-bambuam">
      <div className="container-site">
        <div className="text-center mb-12">
          <h2 className="heading-section text-white max-w-7xl mx-auto leading-tight">
            Are you wondering whether bamboo decking is really suitable for our climate – and why bamboo is becoming such a popular alternative to conventional decking materials? Here you'll find answers to the most frequently asked questions about bamboo decking – straight from practical experience and{' '}
            <span className="text-italic-accent">explained honestly.</span>
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
                  <span className="text-lg md:text-xl pr-4 font-medium">{faq.question}</span>
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
            <div className="min-h-[200px] flex items-start">
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

export default AboutFAQ;