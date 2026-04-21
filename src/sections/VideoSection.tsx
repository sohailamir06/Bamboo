import React from "react";

const VideoSection = () => {
  return (
    <section className="py-20 px-6 md:px-16" style={{ background: 'linear-gradient(98.9deg, #111111 0%, #1E241E 62.5%, #242C24 100%)' }}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-[#b7c7be] text-2xl md:text-3xl font-light leading-relaxed italic">
            Proper bamboo care – so your terrace <br />
            stays beautiful for a long time
          </h2>

          <p className="text-white text-sm mt-4">
            Watch it now and easily implement it yourself!
          </p>
        </div>

        {/* RIGHT VIDEO */}
        <div className="relative w-full h-[250px] md:h-[300px] rounded overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/VIDEO_ID"
            title="Bamboo Care Video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>

      </div>
    </section>
  );
};

export default VideoSection;