import { cn } from "../../../lib/utils";

interface VideoSectionProps {
  title: string;
  highlight?: string;
  subtitle?: string;
  videoUrl: string;
  className?: string;
}

const VideoSection = ({
  title,
  highlight,
  subtitle = "Watch it now and easily implement it yourself!",
  videoUrl,
  className
}: VideoSectionProps) => {
  return (
    <section className={cn("py-24 bg-gradient-bambuam overflow-hidden", className)}>
      <div className="container-site">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <div className="scroll-animate">
            <h2 className="heading-section text-white mb-6 leading-relaxed italic">
              {title}
              {highlight && <span className="text-italic-accent block mt-2">{highlight}</span>}
            </h2>

            <p className="text-bambuam-text-secondary body-text-lg">
              {subtitle}
            </p>
          </div>

          {/* RIGHT VIDEO */}
          <div className="scroll-animate" style={{ transitionDelay: '300ms' }}>
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
              <iframe
                className="w-full h-full"
                src={videoUrl}
                title="Bamboo Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-2xl pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VideoSection;
