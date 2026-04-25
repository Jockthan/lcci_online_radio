"use client";

import { CheckCircle2, Heart, Users, ShieldCheck } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

const VALUES = [
  {
    title: "Empowerment",
    description: "Equipping individuals with the knowledge, tools, and confidence to achieve success in all areas of life.",
    icon: ShieldCheck
  },
  {
    title: "Community",
    description: "Building a supportive network where individuals grow, connect, and uplift one another.",
    icon: Users
  },
  {
    title: "Compassion",
    description: "Reaching out with love and care to meet both spiritual and practical needs.",
    icon: Heart
  }
];

export function Mission() {
  const missionImg = PlaceHolderImages.find(img => img.id === "mission-outreach");

  return (
    <section id="mission" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
            <Image 
              src={missionImg?.imageUrl || ""} 
              alt={missionImg?.description || "Mission"} 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              data-ai-hint="community outreach"
            />
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-background/90 backdrop-blur-md rounded-xl border border-white/10 z-20">
              <p className="text-primary font-bold text-sm tracking-widest uppercase mb-2">Our Mission</p>
              <p className="text-lg font-medium tracking-tight">
                "To foster positive community change and spiritual growth through outreach and media broadcasts."
              </p>
            </div>
          </div>

          <div className="space-y-10">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Our Values & Vision</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground text-lg font-medium leading-relaxed max-w-xl">
                  Our mission is to Engage, Enrich, and Empower individuals through the effective communication of relevant, life-changing information.
                </p>
                <p className="text-muted-foreground text-lg font-medium leading-relaxed max-w-xl">
                  Through this platform, we bring illumination that inspires sound judgment, growth, and advancement in every area of life.
                </p>
              </div>
            </div>

            <div className="grid gap-6">
              {VALUES.map((value) => (
                <div key={value.title} className="flex gap-6 p-6 rounded-2xl border border-white/5 hover:border-primary/20 hover:bg-white/5 transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{value.title}</h3>
                    <p className="text-muted-foreground font-medium leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
