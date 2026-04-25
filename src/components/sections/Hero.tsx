"use client";

import { RadioPlayer } from "@/components/radio/RadioPlayer";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === "hero-radio");

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-24 pb-16 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(0,191,255,0.08),transparent_50%)]" />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8 mb-16">
          <div className="space-y-4 animate-in fade-in slide-in-from-top-8 duration-700">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-foreground leading-[1.1]">
              Impact Through <span className="text-primary italic">Frequency</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-medium leading-relaxed">
              Empowering individuals to discover their purpose and transform their lives through faith-based principles and community action.
            </p>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            <Button size="lg" className="px-8 h-12 text-base font-semibold cyan-glow">
              Explore Programs
            </Button>
            <Button size="lg" variant="outline" className="px-8 h-12 text-base font-semibold hover:bg-white/5 border-white/10">
              Our Vision
            </Button>
          </div>
        </div>

        <div className="animate-in fade-in zoom-in-95 duration-1000 delay-300">
          <RadioPlayer />
        </div>
      </div>
    </section>
  );
}
