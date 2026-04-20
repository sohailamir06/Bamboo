import img2 from "../assets/projectimages/107.jpg";
import img3 from "../assets/projectimages/108.jpg";
import img4 from "../assets/projectimages/109.jpg";
import img1 from "../assets/projectimages/image-a-1.jpg";

const StorySection = () => {
  return (
    <section className="relative section-padding-lg bg-gradient-bambuam">
      <div className="container-site">
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT CONTENT */}
          <div className="max-w-2xl">
            
            {/* Heading */}
            <h2 className="heading-subsection text-white mb-8">
              I bring bamboo directly from China to our home in the Mühlviertel region –{" "}
              <span className="text-italic-accent">
                Andi from Bambuam
              </span>
            </h2>

            {/* Paragraphs */}
            <div className="space-y-6 text-bambuam-text-secondary body-text">
              <p>
                It all started with the search for a terrace that was durable, natural, and sustainable. Like many others, I was looking for the "jack-of-all-trades" – a terrace that could do everything.
              </p>

              <p>
                It's not that simple, but bamboo fulfills many of these criteria: robust, sustainable, splinter-free, and beautiful.
                My own needs and many hours of research led me down this path – and ultimately to my company, Bambuam.
              </p>

              <p>
                Today I import high-quality bamboo decking directly from China to Austria – without intermediaries, but with genuine conviction. From my own experience, I know what really matters – and I will support you honestly and personally with your project.
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE GRID */}
          <div className="grid grid-cols-2 gap-4">

            {/* Left tall image */}
            <div className="row-span-2 img-zoom rounded-lg">
              <img
                src={img1}
                className="w-full h-full object-cover min-h-[300px]"
                alt="Bamboo terrace project"
              />
            </div>

            {/* Top right image */}
            <div className="img-zoom rounded-lg">
              <img
                src={img2}
                className="w-full h-[180px] object-cover"
                alt="Bamboo decking detail"
              />
            </div>

            {/* Bottom right image */}
            <div className="row-span-2 img-zoom rounded-lg">
              <img
                src={img3}
                className="w-full h-full object-cover min-h-[200px]"
                alt="Bamboo installation"
              />
            </div>

            {/* Bottom full width image */}
            <div className="img-zoom rounded-lg">
              <img
                src={img4}
                className="w-full h-[180px] object-cover"
                alt="Bamboo terrace finished"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;