const QuoteSection = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden min-h-[50vh]">
      
      {/* Background Gradient */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(98.9deg, #111111 0%, #1E241E 62.5%, #242C24 100%)' }} />

      {/* Content */}
      <div className="relative z-10 max-w-8xl mx-80 px-4">
        <h2 className="text-white font-serif leading-relaxed text-2xl md:text-3xl lg:text-4xl font-medium md:leading-[4.5rem] lg:leading-[6rem]
                        sm:text-4xl lg:text-[56px] tracking-tight">
          
          A terrace shouldn't just look good – it should also <br /> feel good – natural, durable and with a clear <br /> conscience.
        
        </h2>
      </div>
    </section>
  );
};

export default QuoteSection;
