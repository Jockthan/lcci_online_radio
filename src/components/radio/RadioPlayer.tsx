
"use client";

import { Badge } from "@/components/ui/badge";

export function RadioPlayer() {
  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Decorative Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 rounded-2xl blur opacity-30 animate-pulse-glow" />
      
      <div className="relative bg-card border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col items-center">
        <div className="w-full flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-primary border-primary/30 font-mono tracking-widest text-xs">
              LIVE BROADCAST
            </Badge>
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-muted-foreground uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-green-500/50" />
            Connected
          </div>
        </div>

        {/* Zeno Player Container */}
        <div className="w-full flex flex-col items-center space-y-4">
          <div className="w-full max-w-[575px] rounded-xl overflow-hidden border border-white/5 bg-secondary/30 shadow-2xl">
            <iframe 
              src="https://zeno.fm/player/life-changers-radio" 
              width="100%" 
              height="250" 
              frameBorder="0" 
              scrolling="no"
              className="w-full grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
            />
          </div>
          
          <a 
            href="https://zeno.fm/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors text-xs font-medium tracking-wide uppercase"
          >
            A Zeno.FM Station
          </a>
        </div>

        {/* Branding Subtext */}
        <div className="mt-8 pt-6 border-t border-white/5 w-full text-center">
          <p className="text-sm font-medium text-muted-foreground italic">
            "Empowering the frequency of change, globally."
          </p>
        </div>
      </div>
    </div>
  );
}
