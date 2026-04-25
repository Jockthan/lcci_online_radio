"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";

export function RadioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState([70]);
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const streamUrl = "https://stream.zeno.fm/life-changers-radio";

  useEffect(() => {
    // Initialize audio object
    audioRef.current = new Audio();
    audioRef.current.volume = volume[0] / 100;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume[0] / 100;
    }
  }, [volume]);

  const togglePlay = async () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      // Clearing src prevents the browser from continuing to buffer a live stream in the background
      audioRef.current.src = "";
      setIsPlaying(false);
    } else {
      setIsLoading(true);
      try {
        // Set src right before playing to ensure we get the latest "live edge"
        audioRef.current.src = streamUrl;
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.error("Playback failed:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Decorative Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 rounded-2xl blur opacity-30 animate-pulse-glow" />
      
      <div className="relative bg-card border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col items-center shadow-2xl">
        <div className="w-full flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-primary border-primary/30 font-mono tracking-widest text-xs">
              LIVE BROADCAST
            </Badge>
            <span className={`flex h-2 w-2 rounded-full bg-primary ${isPlaying ? 'animate-pulse' : 'opacity-40'}`} />
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-muted-foreground uppercase tracking-widest">
            <span className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-green-500' : 'bg-orange-500'}`} />
            {isPlaying ? 'Connected' : 'Ready'}
          </div>
        </div>

        <div className="flex flex-col items-center space-y-8 w-full py-4">
          {/* Custom Play Button */}
          <div className="relative group">
            <div className={`absolute -inset-6 bg-primary/20 rounded-full blur-2xl transition-all duration-1000 ${isPlaying ? 'opacity-100 scale-125' : 'opacity-0 scale-90'}`} />
            <Button 
              size="icon" 
              onClick={togglePlay}
              disabled={isLoading}
              className="h-28 w-28 rounded-full shadow-2xl cyan-glow relative z-10 transition-transform hover:scale-105 active:scale-95 bg-primary hover:bg-primary/90"
            >
              {isLoading ? (
                <Loader2 className="h-12 w-12 animate-spin text-primary-foreground" />
              ) : isPlaying ? (
                <Pause className="h-12 w-12 fill-current text-primary-foreground" />
              ) : (
                <Play className="h-12 w-12 fill-current ml-1 text-primary-foreground" />
              )}
            </Button>
          </div>

          <div className="text-center space-y-3">
            <h3 className="text-3xl font-bold tracking-tight text-foreground">Life Changers Radio</h3>
            <p className="text-muted-foreground font-medium italic text-lg tracking-wide">
              "Empowering the frequency of change, globally."
            </p>
          </div>

          {/* Volume Control */}
          <div className="w-full max-w-xs flex items-center gap-4 pt-6">
            <Volume2 className="h-5 w-5 text-muted-foreground shrink-0" />
            <Slider 
              value={volume} 
              onValueChange={setVolume} 
              max={100} 
              step={1} 
              className="cursor-pointer"
            />
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 w-full text-center">
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-[0.3em] opacity-60">
            Zeno Media Network • 24/7 Global Stream
          </p>
        </div>
      </div>
    </div>
  );
}