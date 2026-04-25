
"use client";

import Link from "next/link";
import { Radio, MessageSquare, Info, Calendar, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const NAV_LINKS = [
  { name: "Home", href: "#", icon: Radio },
  { name: "Mission", href: "#mission", icon: Info },
  { name: "Programs", href: "#programs", icon: Info },
  { name: "Schedule", href: "#schedule", icon: Calendar },
  { name: "Contact", href: "#contact", icon: MessageSquare },
];

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center transition-transform group-hover:scale-110 cyan-glow">
            <Radio className="text-primary-foreground h-5 w-5" />
          </div>
          <span className="font-headline font-bold text-xl tracking-tighter text-foreground">
            LCCI<span className="text-primary">LIVE</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Button variant="default" className="cyan-glow" asChild>
            <Link href="#contact">Join LCCI</Link>
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background border-white/10">
              <div className="flex flex-col gap-6 mt-12">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="flex items-center gap-4 text-lg font-medium text-foreground hover:text-primary transition-colors"
                  >
                    <link.icon className="h-5 w-5" />
                    {link.name}
                  </Link>
                ))}
                <Button variant="default" className="w-full mt-4 cyan-glow">
                  Join LCCI
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
