
"use client";

import { Badge } from "@/components/ui/badge";

export function RadioPlayer() {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Decorative Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 rounded-2xl blur opacity-30 animate-pulse-glow" />
      
      <div className="relative bg-card border border-white/10 rounded-2xl p-4 md:p-6 shadow-2xl overflow-hidden">
        <div className="w-full flex items-center justify-between mb-6 px-2">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-primary border-primary/30 font-mono tracking-widest text-xs">
              LIVE BROADCAST
            </Badge>
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
          </div>
          <div className="hidden sm:flex items-center gap-2 text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
            Zeno Media Network
          </div>
        </div>

        <div className="w-full flex justify-center bg-black/20 rounded-xl p-2 border border-white/5">
          <div className="w-full max-w-[575px]">
            <iframe 
              src="https://zeno.fm/player/life-changers-radio" 
              width="100%" 
              height="250" 
              frameBorder="0" 
              scrolling="no"
              className="rounded-lg shadow-inner"
              title="LCCI Live Radio Player"
            />
          </div>
        </div>

        <div className="mt-4 text-center">
          <a 
            href="https://zeno.fm/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[10px] text-muted-foreground hover:text-primary transition-colors font-mono uppercase tracking-widest opacity-60"
          >
            A Zeno.FM Station
          </a>
        </div>
      </div>
    </div>
  );
}
