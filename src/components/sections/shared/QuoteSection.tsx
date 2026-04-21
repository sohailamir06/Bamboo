import { cn } from "../../../lib/utils";

interface QuoteSectionProps {
  quote?: string;
  className?: string;
}

const QuoteSection = ({ 
  quote = "A terrace shouldn't just look good – it should also feel good – natural, durable and with a clear conscience.",
  className 
}: QuoteSectionProps) => {
  return (
    <section className={cn("relative section-padding-lg overflow-hidden bg-gradient-bambuam", className)}>
      <div className="container-site">
        <blockquote className="max-w-5xl scroll-animate">
          <p className="text-2xl md:text-3xl lg:text-4xl xl:text-[42px] font-light text-white leading-relaxed md:leading-relaxed lg:leading-[1.4]">
            {quote}
          </p>
          <div className="w-20 h-1 bg-bambuam-sage mt-12 rounded-full" />
        </blockquote>
      </div>
    </section>
  );
};

export default QuoteSection;
