import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';

// Swiper CSS
// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/pagination';
// @ts-ignore
import 'swiper/css/effect-fade';

// Images
import img1 from '../assets/side-banner/105-imageslider-a.jpg';
import img2 from '../assets/side-banner/106-imageslider-b-1.jpg';

const AboutSection = () => {
  const images = [img1, img2];

  return (
    <section className="bg-bambuam-dark/95 py-20 min-h-[80vh]">
      <div className="max-w-8xl mx-80 px-4">

        {/* HEADING */}
        <h2 className="text-3xl lg:text-4xl text-white font-semibold leading-tight mb-10">
          <span className="italic text-italic-accent">
            The perfect bamboo terrace –
          </span>{' '}
          sustainable, durable & with personal advice
        </h2>

        <div className="grid lg:grid-cols-[2.5fr_1fr] gap-10 pt-10">

          {/* LEFT SIDE (BIGGER) */}
          <div>

            <div className="grid md:grid-cols-2 gap-10 text-[#cfcfcf] text-lg leading-relaxed">

              <p>
                Bamboo is the perfect choice for your patio: extremely robust, weather-resistant, and sustainable.
                With{' '}
                <span className="text-white font-medium">Bambuam</span>, you get
                top quality – honest advice, personal support, and delivery
                directly from Austria.
              </p>

              <p>
                Our bamboo decking boards are exceptionally durable, slip-resistant, and virtually non-split.
                I'll guide you with honest advice and genuine expertise – ensuring your project is a success and you can be proud of the result.
                Whether you're building a new home or renovating, with the right materials and clear tips, constructing your bamboo terrace will be an experience you'll enjoy for years to come.
              </p>

            </div>

            <Link
              to="/uber-uns"
              className="inline-flex items-center gap-3 mt-10 px-6 py-3 rounded-lg bg-[#415540]/90 hover:bg-[#415540] text-white transition"
            >
              Learn more about me!
              <ArrowRight className="w-4 h-4" />
            </Link>

          </div>

          {/* RIGHT SIDE (SMALLER) */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-[340px] lg:w-[380px]">

              <Swiper
                modules={[Pagination, Autoplay, EffectFade]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                speed={1000}
                loop={true}
                pagination={{ clickable: true }}
                slidesPerView={1}
                className="rounded-md overflow-hidden"
              >
                {images.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={img}
                      alt="Bamboo decking"
                      className="w-full h-[520px] object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;