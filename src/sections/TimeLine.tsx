import React from 'react';

const Timeline = () => {
  const events = [
    {
      date: "2019 – First Contact",
      position: "top",
      text: "We wanted a durable, beautiful terrace – but I couldn't find anything that convinced me. So I started researching, came across bamboo – and was immediately fascinated. ",
      subtitle: "In January 2020, I made initial contact with the factory in China. After many hours of research, I imported 60 square meters of bamboo decking – just for my own terrace. In the process, I learned all about shipping, customs, and quality. Without realizing it, I laid the foundation for Bambuam."
    },
    {
      date: "2021–2023 – Development and Partnership",
      position: "bottom",
      text: "I further expanded the collaboration with the production facility in China and am now actively involved in product development. My honest feedback secured me the exclusive import rights for Austria – and allowed me to continuously deepen my expertise in bamboo decking.",
      subtitle: "Today, I am a recognized expert in outdoor bamboo decking – with extensive practical experience."
    },
    {
      date: "2021–2023 – Development",
      position: "top",
      text: "After successfully installing my bamboo terrace and being thrilled with the quality, I wanted to make this material accessible to others. In October 2020, I founded my company, Bambuam. The name, logo, and the idea behind it all stemmed from genuine conviction.",
      subtitle: "Since then, I've been working on building the brand, creating a website, and sharing my knowledge through social media. The response has been overwhelmingly positive – and I am grateful for every customer who has already chosen Bambuam for their terrace project."
    },
    {
      date: "2024 – Full-time for Bambuam",
      position: "bottom",
      text: "On February 29, 2024, after 19 years at Voestalpine, I ended my career and made Bambuam my full-time job.",
      subtitle: "I am excited about the future and look forward to helping many more people create their dream terrace with bamboo decking. For me, Bambuam is not just a business – it's a passion and a commitment to quality, sustainability, and honest materials."

    }
  ];

  return (
    <div className="bg-[#0B0B0B] text-white min-h-[90vh] p-10 font-sans">
      {/* Title */}
      <h2 className="text-center text-[#6B6B6B] font-bold text-2xl mt-10 mb-20 italic">
        That's how Bambuam  <span className="font-bold text-white not-italic pl-2"> came about .</span>
      </h2>

      {/* Timeline Wrapper */}
      <div className="relative max-w-6xl mx-auto">
        
        {/* Horizontal Dotted Line */}
        <div className="absolute top-1/2 w-full h-[1px] border-t border-dashed border-gray-600 transform -translate-y-1/2"></div>

        {/* Items Container */}
        <div className="grid grid-cols-4 gap-8">
          {events.map((event, index) => (
            <div key={index} className="relative flex flex-col items-center">
              
              {/* Content Box */}
              <div className={`w-full px-4 ${event.position === 'top' ? 'mb-96' : 'mt-[25rem]'}`}>
                <h3 className="font-bold text-sm mb-4">{event.date}</h3>
                <p className="text-xs text-gray-300 leading-relaxed text-justify pb-5">
                  {event.text}
                </p>
                <p className="text-xs text-gray-300 leading-relaxed text-justify pb-5">
                  {event.subtitle}
                </p>
              </div>

              {/* Decorative Dot (The Node) */}
              <div className="absolute top-1/2 transform -translate-y-1/2 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full border border-gray-500 flex items-center justify-center bg-[#0B0B0B]">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;