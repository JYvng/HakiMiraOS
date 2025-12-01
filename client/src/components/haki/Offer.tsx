import { Button } from "@/components/ui/button";
import { Check, MessageSquare, Phone, Zap } from "lucide-react";

export default function Offer() {
  const features = [
    "Install and configure Mira OS as your 24/7 AI receptionist",
    "Answer every call and text, using your voice and scripts",
    "Filter spam and tire-kickers instantly",
    "Pull pricing from your playbook and send accurate quotes",
    "Push qualified leads straight into your calendar",
    "Trigger follow-up texts until jobs are booked",
    "Ask for 5-star reviews after every job, on autopilot",
    "Maintain a living FAQ so Mira learns your business",
    "Monitor logs, response times, and conversion data",
    "Continuously tune prompts so performance improves"
  ];

  return (
    <section id="offer" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">The Core Offer</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            The Haki Front Office Takeover™
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            One install. One monthly partnership. Your front line handled forever.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-panel rounded-3xl p-8 md:p-12 border-primary/20 relative overflow-hidden">
            {/* Glow effect */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">We do it all for you:</h3>
                <ul className="space-y-4">
                  {features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col justify-between bg-white/5 rounded-2xl p-8 border border-white/10">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Estimated Investment</h4>
                  <p className="text-muted-foreground text-sm mb-6">
                    Pricing depends on call volume & tools.
                  </p>
                  
                  <div className="space-y-6">
                    <div>
                      <span className="block text-xs uppercase text-muted-foreground font-bold tracking-wider mb-1">One-Time Install</span>
                      <div className="text-3xl font-display font-bold text-white">$4,997 – $9,997</div>
                    </div>
                    
                    <div>
                      <span className="block text-xs uppercase text-muted-foreground font-bold tracking-wider mb-1">Monthly Partnership</span>
                      <div className="text-3xl font-display font-bold text-white">$1,497 – $2,997<span className="text-lg font-sans font-normal text-muted-foreground">/mo</span></div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <Button 
                    onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-6 text-lg rounded-xl mb-3 shadow-lg shadow-primary/20"
                  >
                    Book Takeover Call
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    If we can't show ROI on the call, we'll tell you not to buy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
