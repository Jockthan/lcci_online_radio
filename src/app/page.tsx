
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Mission } from "@/components/sections/Mission";
import { Programs } from "@/components/sections/Programs";
import { Schedule } from "@/components/sections/Schedule";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";
import { ChatAssistant } from "@/components/ai/ChatAssistant";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Mission />
      <Programs />
      <Schedule />
      <Contact />
      <Footer />
      <ChatAssistant />
    </main>
  );
}
