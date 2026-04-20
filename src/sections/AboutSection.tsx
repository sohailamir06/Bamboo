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
    <section className="bg-bambuam-dark section-padding">
      <div className="container-site">
        {/* HEADING */}
        <h2 className="heading-section text-white mb-10 max-w-4xl">
          <span className="text-italic-accent">
            The perfect bamboo terrace –
          </span>{' '}
          sustainable, durable & with personal advice
        </h2>

        <div className="grid lg:grid-cols-[2fr_1fr] gap-10 lg:gap-16 pt-8">

          {/* LEFT SIDE (BIGGER) */}
          <div>
            <div className="grid md:grid-cols-2 gap-8 text-bambuam-text-secondary body-text">
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
              to="/about-us"
              className="btn-secondary mt-10 group"
            >
              Learn more about me!
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* RIGHT SIDE (SMALLER) */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[380px]">
              <Swiper
                modules={[Pagination, Autoplay, EffectFade]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                speed={1000}
                loop={true}
                pagination={{ clickable: true }}
                slidesPerView={1}
                className="rounded-lg overflow-hidden"
              >
                {images.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={img}
                      alt="Bamboo decking"
                      className="w-full h-[400px] lg:h-[520px] object-cover"
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