import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="pt-24 pb-12 bg-background border-t border-white/5 relative overflow-hidden">
      
      <div id="booking" className="container mx-auto px-4 relative z-10 text-center mb-24">
        <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">
          The next missed call <br/>
          <span className="text-primary">could have been a booked job.</span>
        </h2>
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Hire Haki once and your front office headaches are gone for good.
        </p>
        
        <div className="flex flex-col items-center gap-4">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full px-12 h-16 text-xl shadow-[0_0_40px_rgba(59,130,246,0.4)] hover:shadow-[0_0_60px_rgba(59,130,246,0.6)] transition-all scale-105"
          >
            Book Your Haki Front Office Takeover Call
          </Button>
          <span className="text-sm text-muted-foreground/60 mt-4">
            Limited spots for December onboarding.
          </span>
        </div>
      </div>

      <div className="container mx-auto px-4 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-white font-display font-bold text-lg">
          Haki <span className="text-primary">/ Mira OS</span>
        </div>
        <p className="text-sm text-muted-foreground/60 text-center md:text-right">
          © {new Date().getFullYear()} Haki · Mira OS. Built to turn missed calls into booked jobs, forever.
        </p>
      </div>
    </footer>
  );
}
