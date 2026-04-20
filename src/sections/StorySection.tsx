import img2 from "../assets/projectimages/107.jpg";
import img3 from "../assets/projectimages/108.jpg";
import img4 from "../assets/projectimages/109.jpg";
import img1 from "../assets/projectimages/image-a-1.jpg";



const StorySection = () => {
  return (
    <section className="relative py-28 px-6" style={{ background: 'linear-gradient(98.9deg, #111111 0%, #1E241E 62.5%, #242C24 100%)' }}>

      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-8 items-start">

        {/* LEFT CONTENT */}
        <div className="max-w-6xl">
          
          {/* Heading */}
          <h2 className="text-xl md:text-2xl lg:text-3xl font-medium md:leading-[2.5rem] lg:leading-[3rem] tracking-tight mb-6">
            I bring bamboo directly from China to our home in the Mühlviertel region –{" "}<br />
            <span className="italic text-italic-accent">
              Andi from Bambuam
            </span>
          </h2>

          {/* Paragraphs */}
          <div className="space-y-6 text-sm text-white font-medium leading-relaxed ">
            <p className="py-5">
              It all started with the search for a terrace that was durable, natural, and sustainable. Like many others, I was looking for the "jack-of-all-trades" – a terrace that could do everything.
            </p>

            <p className="py-5">
              It's not that simple, but bamboo fulfills many of these criteria: robust, sustainable, splinter-free, and beautiful.
              My own needs and many hours of research led me down this path – and ultimately to my company, Bambuam .
            </p>

            <p className="py-5">
              Today I import high-quality bamboo decking directly from China to Austria – without intermediaries, but with genuine conviction. From my own experience, I know what really matters – and I will support you honestly and personally with your project.
            </p>
          </div>
        </div>

        {/* RIGHT IMAGE GRID */}
        <div className="grid grid-cols-2 gap-4">

          {/* Left tall image */}
          <div className="row-span-2 overflow-hidden rounded-md">
            <img
              src={img1}
              className="w-full h-full object-cover hover:scale-105 transition duration-700"
              alt=""
            />
          </div>

          {/* Top right image */}
          <div className="overflow-hidden rounded-md">
            <img
              src={img2}
              className="w-full h-[280px] object-cover hover:scale-105 transition duration-700"
              alt=""
            />
          </div>

          {/* Bottom right image */}
          <div className="row-span-2 overflow-hidden rounded-md">
            <img
              src={img3}
              className="w-full h-full object-cover hover:scale-105 transition duration-700"
              alt=""
            />
          </div>

          {/* Bottom full width image */}
          <div className="overflow-hidden rounded-md">
            <img
              src={img4}
              className="w-full h-[280px] object-cover hover:scale-105 transition duration-700"
              alt=""
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default StorySection;