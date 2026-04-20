import profileImage from '../assets/Projectimages/image-a-1.jpg';
import bambooImage from '../assets/productservice/image.jpg';


const AboutMeSection = () => {
  return (
    <div className="bg-[#121212] min-h-screen py-16 px-6 md:px-12 text-[#E5E5E5] font-sans" style={{ background: 'linear-gradient(98.9deg, #111111 0%, #1E241E 62.5%, #242C24 100%)' }}>
      <div className="max-w-6xl mx-auto">
        
        {/* Top Row: Name and Tagline */}
        <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-24 mb-12">
          {/* Name */}
          <div className="md:w-[200px] shrink-0">
            <h2 className="text-[#6B6B6B] text-2xl font-normal leading-tight">
              Andi<br />
              Besenbeck
            </h2>
          </div>
          
          {/* Tagline */}
          <div className="flex-grow max-w-xl">
            <p className="text-[#E5E5E5] text-xl md:text-2xl font-light leading-snug">
              with enthusiasm for honest materials and the courage to build something oneself.
            </p>
          </div>
        </div>
        <div className="relative">
        {/* Images Section */}
        <div className="flex flex-col md:flex-row items-end justify-center gap-6 mb-8">
          {/* Bamboo Image - Left, smaller */}
          <div className="w-[380px] h-[420px] flex-shrink-0 absolute md:relative -top-10 md:top-10 left-0 transform -translate-x-1/2 md:translate-x-0 ">
            <img 
              src={bambooImage} 
              alt="Close-up of bamboo canes" 
              className="w-full h-full object-cover rounded-sm"
            />
          </div>
          
          {/* Profile Image - Right, larger */}
          <div className="w-[500px] h-[600px] flex-shrink-0">
            <img 
              src={profileImage} 
              alt="Man with wood samples" 
              className="w-full h-full object-cover rounded-sm"
            />
            {/* Subtitle */}
            <div className="max-w-4xl mx-auto mb-10 mt-4">
              <p className="text-white text-2xl font-semibold leading-snug">
                Simple, straightforward and honest.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Text Section */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 text-[#9A9A9A] text-sm font-normal leading-relaxed mt-20">
            <p>
              A cozy home is important to me – and bamboo offers exactly that: warmth, naturalness, and durability. With Bambuam, I want to share this feeling – for everyone who wants to feel truly comfortable on their patio. As much as I love to travel, my heart belongs to home. When we were looking for a patio for our own house, I wanted more than just a surface covering: something natural that lasts, looks good, and simply feels good. That's exactly what I found in bamboo – and the more I
learned about it, the greater my enthusiasm became. Today, with Bambuam, I bring high-quality bamboo decking directly to our home in the Mühlviertel region. No middlemen, but with extensive experience, honest advice, and genuine trust in the material. For everyone who wants to get their hands dirty – and enjoy the fruits of their labor.
            </p>
            <p>
               Because the best thing is sitting on your own terrace, walking barefoot across the ground – and simply knowing: This is perfect. Exactly like this.
            </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;