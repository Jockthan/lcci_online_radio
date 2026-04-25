"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Avoid hydration mismatch by not rendering theme-specific UI until mounted
  if (!mounted) {
    return <div className="w-[100px] h-9" />;
  }

  return (
    <div className="flex items-center space-x-2 bg-secondary/50 px-3 py-1.5 rounded-full border border-white/5">
      <Sun className={`h-4 w-4 ${theme === 'light' ? 'text-primary' : 'text-muted-foreground'}`} />
      <Switch 
        id="theme-mode" 
        checked={theme === "dark"} 
        onCheckedChange={toggleTheme}
        className="data-[state=checked]:bg-primary"
      />
      <Moon className={`h-4 w-4 ${theme === 'dark' ? 'text-primary' : 'text-muted-foreground'}`} />
      <Label htmlFor="theme-mode" className="sr-only">Toggle Theme</Label>
    </div>
  );
}
