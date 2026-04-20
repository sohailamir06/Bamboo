import { useEffect, useRef, useState } from 'react';
import { Phone, Mail, MapPin, Send, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import img from "../assets/kontakt-page-banner.jpg"

const KontaktPage = () => {

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 w-full h-[120%] -top-[10%]"
          style={{ willChange: 'transform' }}
        >
          <img
            src={img}
            alt="Bamboo shoot"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 w-full pt-32 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-6"
              >
                Contact 
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default KontaktPage;
