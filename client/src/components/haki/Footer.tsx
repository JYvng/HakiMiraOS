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
          {/* Calendly Embed Placeholder */}
          <div className="w-full max-w-2xl mb-8">
            <div className="glass-panel rounded-2xl p-8 border border-primary/20 text-center">
              <p className="text-muted-foreground mb-4">
                Replace this section with your Calendly embed code
              </p>
              <div className="bg-white/5 border border-dashed border-white/20 rounded-lg p-12 min-h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <p className="text-white font-mono text-sm mb-2">
                    &lt;Calendly Widget Goes Here&gt;
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Paste your Calendly inline widget code in this div
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <Button 
            size="lg" 
            onClick={() => window.open('https://calendly.com', '_blank')}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full px-12 h-16 text-xl shadow-[0_0_40px_rgba(59,130,246,0.4)] hover:shadow-[0_0_60px_rgba(59,130,246,0.6)] transition-all scale-105 hover:scale-110"
            data-testid="button-book-takeover"
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
