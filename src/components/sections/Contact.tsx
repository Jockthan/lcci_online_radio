"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent",
        description: "Thank you for reaching out. We'll get back to you soon.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge variant="outline" className="text-primary border-primary/30 px-4 py-1">GET INVOLVED</Badge>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Join the Movement</h2>
                <div className="space-y-4">
                  <p className="text-foreground text-xl font-semibold leading-relaxed max-w-lg">
                    LCCI is driven by a vision to impact lives and communities through meaningful initiatives.
                  </p>
                  <p className="text-muted-foreground text-lg font-medium leading-relaxed max-w-lg">
                    Join us today and become part of a growing movement committed to empowering people and bringing hope to those in need.
                  </p>
                  <p className="text-primary font-bold text-lg flex items-center gap-2">
                    <Sparkles className="h-5 w-5" />
                    Partner with us as a Member, Friend, Sponsor, or Monthly Partner.
                  </p>
                </div>
              </div>
              
              <div className="h-px bg-white/10 w-full" />

              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Connect with Us</h3>
                <div className="space-y-8">
                  {[
                    { icon: Mail, label: "Email Us", value: "info@lcci.org" },
                    { icon: Phone, label: "Call Us", value: "+1 (555) 000-LCCI" },
                    { icon: MapPin, label: "Visit Us", value: "123 Grace Avenue, Community Center" },
                  ].map((item) => (
                    <div key={item.label} className="flex gap-6 items-center group">
                      <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center border border-white/5 group-hover:border-primary/50 transition-colors">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">{item.label}</p>
                        <p className="text-lg font-bold">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-secondary/20 border border-white/5 rounded-3xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-muted-foreground ml-1">Full Name</label>
                  <Input required placeholder="John Doe" className="bg-background/50 border-white/10 h-12 px-4 focus:border-primary" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-muted-foreground ml-1">Email Address</label>
                  <Input required type="email" placeholder="john@example.com" className="bg-background/50 border-white/10 h-12 px-4 focus:border-primary" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-muted-foreground ml-1">Subject</label>
                <Input required placeholder="How can we help?" className="bg-background/50 border-white/10 h-12 px-4 focus:border-primary" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-muted-foreground ml-1">Message</label>
                <Textarea required placeholder="Tell us more..." className="bg-background/50 border-white/10 min-h-[150px] p-4 focus:border-primary" />
              </div>
              <Button disabled={isSubmitting} type="submit" className="w-full h-14 text-lg font-bold cyan-glow gap-2">
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
