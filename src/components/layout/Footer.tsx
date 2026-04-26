import Link from "next/link";
import { Radio, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary/20 border-t border-white/5 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center cyan-glow">
                <Radio className="text-primary-foreground h-5 w-5" />
              </div>
              <span className="font-headline font-bold text-2xl tracking-tighter">
                Life Changers <span className="text-primary">Radio</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-lg font-medium leading-relaxed max-w-md">
              A global community dedicated to life transformation through faith, outreach, and media. Empowering the frequency of change.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, idx) => (
                <Link key={idx} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-primary hover:text-primary transition-all">
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-lg">Organization</h4>
            <nav className="flex flex-col gap-3">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Our Team</Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Testimonials</Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Annual Report</Link>
            </nav>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-lg">Support</h4>
            <nav className="flex flex-col gap-3">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Donate Now</Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Volunteer</Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Partnership</Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link>
            </nav>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Life Changers Club International. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
