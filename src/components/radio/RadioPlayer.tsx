
"use client";

import { useState, useEffect, useRef } from "react";
import { Play, Pause, Volume2, VolumeX, Radio as RadioIcon, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function RadioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState([80]);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Use a simulated stream URL for the purpose of the prototype
  const STREAM_URL = "https://stream.zeno.fm/f3s3u6u1y0duv"; // Example stream

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.error("Playback error:", e));
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume[0] / 100;
    }
  }, [volume]);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Decorative Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 rounded-2xl blur opacity-30 animate-pulse-glow" />
      
      <div className="relative bg-card border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-8">
        <audio ref={audioRef} src={STREAM_URL} preload="none" />
        
        {/* Visualizer Simulation */}
        <div className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 bg-secondary rounded-xl flex items-center justify-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
          <RadioIcon className={cn("h-16 w-16 text-primary transition-all duration-500", isPlaying ? "scale-110 drop-shadow-[0_0_10px_rgba(0,191,255,0.6)]" : "scale-100")} />
          
          {isPlaying && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-end gap-1 h-6">
              {[0, 1, 2, 3, 4].map((i) => (
                <div 
                  key={i} 
                  className="w-1 bg-primary rounded-full animate-bounce" 
                  style={{ 
                    height: `${Math.random() * 100}%`,
                    animationDelay: `${i * 0.1}s`,
                    animationDuration: `${0.5 + Math.random()}s`
                  }} 
                />
              ))}
            </div>
          )}
        </div>

        {/* Controls and Info */}
        <div className="flex-1 space-y-4 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
            <Badge variant="outline" className="text-primary border-primary/30 font-mono tracking-widest text-xs">
              LIVE BROADCAST
            </Badge>
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
          </div>
          
          <div>
            <h3 className="text-2xl font-bold tracking-tight text-foreground">Spiritual Enrichment Hour</h3>
            <p className="text-muted-foreground text-sm mt-1 font-medium">with Pastor David Williams</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6 pt-2">
            <Button 
              onClick={togglePlay}
              size="lg" 
              className="h-14 w-14 rounded-full p-0 cyan-glow"
            >
              {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6 ml-1" />}
            </Button>

            <div className="flex-1 w-full max-w-[200px] flex items-center gap-4 group">
              <button onClick={toggleMute} className="text-muted-foreground hover:text-primary transition-colors">
                {isMuted || volume[0] === 0 ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
              </button>
              <Slider 
                value={volume} 
                max={100} 
                step={1} 
                onValueChange={setVolume}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="hidden lg:flex flex-col items-end gap-4 border-l border-white/5 pl-8">
          <div className="text-right">
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">Listeners</p>
            <p className="text-2xl font-bold text-primary">1,248</p>
          </div>
          <div className="text-right">
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">Quality</p>
            <p className="text-sm font-medium">320kbps HD</p>
          </div>
        </div>
      </div>
    </div>
  );
}
