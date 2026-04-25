"use client";

import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, HeartHandshake, GraduationCap, Mic2 } from "lucide-react";

const PROGRAMS = [
  {
    title: "Community Outreach",
    description: "Providing essential resources like food and shelter to underserved areas.",
    icon: HeartHandshake,
    imgId: "mission-outreach",
    category: "Service"
  },
  {
    title: "Youth Mentorship",
    description: "Guiding young leaders through academic success and personal growth.",
    icon: GraduationCap,
    imgId: "youth-mentorship",
    category: "Education"
  },
  {
    title: "Vocational Training",
    description: "Skills-based workshops for sustainable livelihoods and careers.",
    icon: Briefcase,
    imgId: "hero-radio",
    category: "Skills"
  },
  {
    title: "Media Broadcasts",
    description: "Daily spiritual guidance and community talk shows.",
    icon: Mic2,
    imgId: "family-support",
    category: "Broadcast"
  }
];

export function Programs() {
  return (
    <section id="programs" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="outline" className="text-primary border-primary/30 px-4 py-1">INITIATIVES</Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Transforming Lives, Together</h2>
          <p className="text-muted-foreground text-lg font-medium">
            Our multi-faceted programs are designed to uplift communities and individual spirits through practical and faith-based support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROGRAMS.map((program) => {
            const img = PlaceHolderImages.find(p => p.id === program.imgId);
            return (
              <Card key={program.title} className="group overflow-hidden border-white/5 bg-secondary/20 hover:border-primary/30 transition-all duration-500">
                <div className="relative h-48 overflow-hidden">
                  <Image 
                    src={img?.imageUrl || ""} 
                    alt={program.title} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-primary/90 text-background font-bold">{program.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <program.icon className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-bold tracking-tight">{program.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm font-medium leading-relaxed">
                    {program.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
