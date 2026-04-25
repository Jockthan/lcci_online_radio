
"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { aiChatAssistant } from "@/ai/flows/ai-chat-assistant";
import { cn } from "@/lib/utils";

type Message = {
  role: "assistant" | "user";
  content: string;
};

export function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hello! I'm your LCCI Assistant. How can I help you today regarding our mission or programs?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo(0, scrollRef.current.scrollHeight);
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMsg }]);
    setIsLoading(true);

    try {
      const result = await aiChatAssistant({ question: userMsg });
      setMessages((prev) => [...prev, { role: "assistant", content: result.answer }]);
    } catch (error) {
      setMessages((prev) => [...prev, { role: "assistant", content: "I'm sorry, I'm having trouble connecting. Please try again or use our contact form." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {isOpen ? (
        <Card className="w-[90vw] sm:w-[400px] h-[500px] flex flex-col border-primary/20 bg-card shadow-2xl animate-in slide-in-from-bottom-8 duration-300 overflow-hidden">
          <CardHeader className="bg-primary p-4 flex flex-row items-center justify-between text-background">
            <div className="flex items-center gap-2">
              <Bot className="h-6 w-6" />
              <div>
                <h3 className="font-bold text-base leading-none">LCCI Assistant</h3>
                <span className="text-[10px] opacity-80 uppercase tracking-widest font-bold">AI Support</span>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="hover:bg-black/10 text-background">
              <X className="h-5 w-5" />
            </Button>
          </CardHeader>
          <CardContent className="flex-1 p-0 overflow-hidden">
            <ScrollArea className="h-full p-4" viewportRef={scrollRef}>
              <div className="space-y-4">
                {messages.map((m, i) => (
                  <div key={i} className={cn("flex", m.role === "user" ? "justify-end" : "justify-start")}>
                    <div className={cn(
                      "max-w-[85%] rounded-2xl px-4 py-2.5 text-sm font-medium",
                      m.role === "user" ? "bg-primary text-background" : "bg-secondary text-foreground border border-white/5"
                    )}>
                      {m.content}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-secondary text-foreground border border-white/5 rounded-2xl px-4 py-2.5 flex gap-1">
                      <div className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                      <div className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                      <div className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>
          </CardContent>
          <CardFooter className="p-4 border-t border-white/5">
            <form 
              onSubmit={(e) => { e.preventDefault(); handleSend(); }}
              className="w-full flex gap-2"
            >
              <Input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about LCCI..." 
                className="flex-1 bg-secondary/50 border-white/10"
              />
              <Button type="submit" size="icon" className="cyan-glow shrink-0" disabled={isLoading}>
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </CardFooter>
        </Card>
      ) : (
        <Button 
          onClick={() => setIsOpen(true)}
          size="lg" 
          className="h-16 w-16 rounded-full shadow-2xl cyan-glow group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-primary/10 group-hover:scale-150 transition-transform duration-500" />
          <MessageCircle className="h-7 w-7 text-background relative z-10" />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center animate-pulse">
            <Sparkles className="h-2 w-2 text-primary" />
          </div>
        </Button>
      )}
    </div>
  );
}
