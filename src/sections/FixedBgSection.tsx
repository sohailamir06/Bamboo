import FixedBgImage from "../assets/productservice/service-page-banner-1-1536x775.jpg";

export default function FixedBgSection() {
  return (
    <section
      className="relative bg-fixed bg-center bg-cover min-h-[700px] flex items-center"
      style={{
        backgroundImage:
          `url(${FixedBgImage})`,
      }}
    >
      {/* Dark Overlay (important for readability) */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-white">
        <h2 className="text-white font-serif leading-relaxed text-2xl md:text-3xl lg:text-4xl font-medium md:leading-[3.5rem] lg:leading-[5rem]
                        sm:text-4xl lg:text-[56px] tracking-tight">
          Whether terrace, pool or privacy screen: With bamboo you not only bring durable quality, but also a piece of nature and tranquility into your home.
        </h2>
      </div>
    </section>
  );
}