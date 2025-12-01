import { Button } from "@/components/ui/button";
import { ShieldCheck } from "lucide-react";

export default function Guarantee() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto glass-panel rounded-3xl p-8 md:p-16 border-primary/10 text-center relative overflow-hidden">
          
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
          
          <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full text-primary mb-8">
            <ShieldCheck className="h-8 w-8" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-6 tracking-tight">
            The "You'll Feel Dumb You Didn't Do This Sooner" Guarantee
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            After 60 days live, if you don't feel like you've hired the most reliable front office you've ever had, Haki stays in to optimize 1:1 at no extra cost until it does. We win when your front office prints money reliably.
          </p>
          
          <div className="grid sm:grid-cols-3 gap-4 text-left max-w-2xl mx-auto mb-10">
            <div className="flex items-center gap-2 text-sm text-slate-300 hover:text-primary transition-colors duration-300">
              <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 animate-pulse" />
              Every missed call followed up
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-300 hover:text-primary transition-colors duration-300">
              <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 animate-pulse" />
              Every lead quoted & tracked
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-300 hover:text-primary transition-colors duration-300">
              <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 animate-pulse" />
              More 5-star reviews on autopilot
            </div>
          </div>

          <Button 
            onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
            size="lg"
            className="bg-white text-black hover:bg-white/90 font-bold rounded-full px-8 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all hover:scale-105"
          >
            Lock In Founder Pricing
          </Button>
        </div>
      </div>
    </section>
  );
}
