
"use client";

import { Calendar, Clock, Mic2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const SCHEDULE = [
  { time: "06:00 AM", title: "Morning Devotion", host: "Pastor David", status: "Past" },
  { time: "09:00 AM", title: "Community Matters", host: "Sister Grace", status: "Past" },
  { time: "01:00 PM", title: "Enrichment Hour", host: "Prophet Samuel", status: "Live" },
  { time: "04:00 PM", title: "Youth Pulse", host: "Deacon John", status: "Upcoming" },
  { time: "07:00 PM", title: "Evening Prayer", host: "Mother Mary", status: "Upcoming" },
];

export function Schedule() {
  return (
    <section id="schedule" className="py-24 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3 space-y-6">
            <div className="inline-flex p-3 rounded-2xl bg-primary/10 text-primary mb-2">
              <Calendar className="h-6 w-6" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Today's Schedule</h2>
            <p className="text-muted-foreground text-lg font-medium leading-relaxed">
              Don't miss out on our daily spiritual broadcasts and community discussions. Tune in live every day.
            </p>
            <div className="pt-4">
              <div className="p-6 rounded-2xl bg-primary border border-primary cyan-glow">
                <p className="text-background/80 font-bold text-sm tracking-widest mb-1 uppercase">Next Major Event</p>
                <h3 className="text-background text-2xl font-bold mb-4">LCCI Global Conference</h3>
                <div className="flex items-center gap-2 text-background/90 font-medium">
                  <Clock className="h-4 w-4" />
                  <span>Starts in 4h 22m</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 space-y-4">
            {SCHEDULE.map((item, idx) => (
              <div 
                key={idx}
                className={`flex flex-col sm:flex-row items-center justify-between p-6 rounded-2xl border transition-all duration-300 ${
                  item.status === 'Live' 
                    ? 'border-primary bg-primary/5 cyan-glow' 
                    : 'border-white/5 bg-secondary/20 grayscale opacity-60 hover:grayscale-0 hover:opacity-100'
                }`}
              >
                <div className="flex items-center gap-6 mb-4 sm:mb-0">
                  <span className="text-xl font-mono font-bold text-primary w-24">{item.time}</span>
                  <div className="h-10 w-[1px] bg-white/10 hidden sm:block" />
                  <div>
                    <h4 className="text-xl font-bold">{item.title}</h4>
                    <p className="text-muted-foreground flex items-center gap-2 text-sm mt-1">
                      <Mic2 className="h-3 w-3" /> Hosted by {item.host}
                    </p>
                  </div>
                </div>
                <div>
                  {item.status === 'Live' ? (
                    <Badge className="bg-primary text-background px-4 py-1 animate-pulse">STREAMING LIVE</Badge>
                  ) : (
                    <Badge variant="outline" className="border-white/20 text-muted-foreground">{item.status}</Badge>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
