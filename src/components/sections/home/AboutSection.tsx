import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { ABOUT_HOME_CONTENT } from '../../../data/home';

// Swiper CSS imports (handled by Vite)
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const AboutSection = () => {
  const { title, subtitle, paragraphs, cta, images } = ABOUT_HOME_CONTENT;

  return (
    <section className="bg-bambuam-dark section-padding">
      <div className="container-site">
        {/* HEADING */}
        <h2 className="heading-section text-white mb-10 max-w-4xl scroll-animate">
          <span className="text-italic-accent">
            {title}
          </span>{' '}
          {subtitle}
        </h2>

        <div className="grid lg:grid-cols-[2fr_1fr] gap-12 lg:gap-16 pt-8 items-center">

          {/* LEFT SIDE (BIGGER) */}
          <div className="scroll-animate" style={{ transitionDelay: '200ms' }}>
            <div className="grid md:grid-cols-2 gap-8 text-bambuam-text-secondary body-text">
              {paragraphs.map((p, idx) => (
                <p key={idx}>
                  {p.highlight ? (
                    <>
                      {p.text.split(p.highlight)[0]}
                      <span className="text-white font-medium">{p.highlight}</span>
                      {p.text.split(p.highlight)[1]}
                    </>
                  ) : p.text}
                </p>
              ))}
            </div>

            <Link
              to={cta.link}
              className="btn-secondary mt-10 group"
            >
              {cta.text}
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* RIGHT SIDE (CAROUSEL) */}
          <div className="flex justify-center lg:justify-end scroll-animate" style={{ transitionDelay: '400ms' }}>
            <div className="w-full max-w-[420px] shadow-2xl rounded-xl overflow-hidden border border-white/5">
              <Swiper
                modules={[Pagination, Autoplay, EffectFade]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                autoplay={{
                  delay: 4500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                speed={1200}
                loop={true}
                pagination={{ clickable: true }}
                slidesPerView={1}
                className="h-[450px] lg:h-[550px]"
              >
                {images.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={img}
                      alt={`Bamboo decking example ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-[4000ms] hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/10 pointer-events-none" />
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
