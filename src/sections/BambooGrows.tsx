import FixedBgImage from "../assets/banner-image-b.jpg";

export default function BambooGrows() {
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
          Bamboo grows where the climate is harsh and the conditions are demanding – just like here in the Mühlviertel region. I bring you a piece of this powerful nature directly to your home: sustainable, durable, and full of character.
        </h2>
      </div>
    </section>
  );
}