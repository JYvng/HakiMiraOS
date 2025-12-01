import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Phone, ShieldCheck } from "lucide-react";
import bgImage from "@assets/generated_images/dark_abstract_tech_background_with_blue_glows.png";
import statsImage from "@assets/generated_images/futuristic_glass_ui_stats_card_abstract.png";

export default function Hero() {
  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };
  
  const scrollToHowItWorks = () => {
    document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImage} 
          alt="Background" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background" />
      </div>

      <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            NEW · Done-For-You AI COO for Home Service
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-white leading-none tracking-tight mb-6">
            Your AI COO for home service—<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              installed and run for you.
            </span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
            Never miss a lead again. We install Mira OS and run it as your permanent front office. Haki answers every call, filters spam, prices jobs, and books your calendar—so you don't have to.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button 
              onClick={scrollToBooking}
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full px-8 h-14 text-lg shadow-[0_0_25px_rgba(59,130,246,0.5)] hover:shadow-[0_0_40px_rgba(59,130,246,0.7)] transition-all duration-300 hover:scale-105"
            >
              Book a Front Office Takeover Call
            </Button>
            <Button 
              onClick={scrollToHowItWorks}
              variant="outline" 
              size="lg" 
              className="bg-white/5 border-white/10 hover:bg-white/10 text-white rounded-full px-8 h-14 text-lg backdrop-blur-sm transition-all hover:scale-105"
            >
              See How It Works
            </Button>
          </div>

          <p className="text-sm text-muted-foreground/60">
            * December Founders: grandfathered pricing for life. Rates rise 25–50% in January.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 animate-[float_6s_ease-in-out_infinite]">
            <div className="glass-panel rounded-2xl p-6 bg-gradient-to-br from-slate-900/90 to-slate-900/40 border-t border-l border-white/10 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="font-mono text-sm text-green-400">Monitored by Haki Live</span>
                </div>
                <span className="text-xs text-muted-foreground uppercase tracking-widest">Mira OS v2.4</span>
              </div>
              
              <div className="space-y-5">
                <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded bg-blue-500/20 text-blue-400"><Phone size={18} /></div>
                    <span className="text-sm text-slate-300">Leads Saved (Today)</span>
                  </div>
                  <span className="text-2xl font-bold text-white">14</span>
                </div>
                
                <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded bg-purple-500/20 text-purple-400"><CheckCircle2 size={18} /></div>
                    <span className="text-sm text-slate-300">Jobs Quoted</span>
                  </div>
                  <span className="text-2xl font-bold text-white">$4,250</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded bg-red-500/20 text-red-400"><ShieldCheck size={18} /></div>
                    <span className="text-sm text-slate-300">Spam Blocked</span>
                  </div>
                  <span className="text-2xl font-bold text-white">32</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 text-center">
                <p className="text-xs text-muted-foreground italic">"You never have to look at this. We do."</p>
              </div>
            </div>
          </div>

          {/* Decor elements behind card */}
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -z-10" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-[80px] -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
