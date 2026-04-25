"use client";

import { CheckCircle2, Heart, Users, ShieldCheck } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

const VALUES = [
  {
    title: "Empowerment",
    description: "Equipping individuals with tools for spiritual and practical success.",
    icon: ShieldCheck
  },
  {
    title: "Community",
    description: "Building strong networks of support and shared growth.",
    icon: Users
  },
  {
    title: "Compassion",
    description: "Serving the underserved with unconditional care and love.",
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
              <p className="text-xl font-medium tracking-tight">
                "To foster positive community change and spiritual growth through outreach and media broadcasts."
              </p>
            </div>
          </div>

          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Our Core Values</h2>
              <p className="text-muted-foreground text-lg font-medium leading-relaxed max-w-xl">
                We believe in a holistic approach to life transformation—addressing both spiritual depth and practical needs.
              </p>
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
