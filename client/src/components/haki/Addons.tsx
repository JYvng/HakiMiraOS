import { Mic, Rocket } from "lucide-react";

export default function Addons() {
  return (
    <section className="pb-24 pt-0">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-display font-bold text-white">Optional Power-Ups</h3>
          <p className="text-muted-foreground">Add these anytime after the core system is printing money.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Voice AI Card */}
          <div className="glass-panel p-10 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all duration-300 hover:scale-[1.02] group">
            <div className="h-12 w-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors">
              <Mic className="h-6 w-6 text-purple-400" />
            </div>
            <h4 className="text-2xl font-bold text-white mb-3">Voice AI Receptionist</h4>
            <p className="text-base text-muted-foreground mb-6 min-h-[80px] leading-relaxed">
              Natural-sounding AI that answers calls 24/7, follows your exact playbook, books jobs directly, and handles message taking. Never miss a ring again.
            </p>
            <div className="mt-auto pt-6 border-t border-white/5">
              <p className="text-lg font-bold text-white mb-1">
                + $497/mo <span className="text-muted-foreground font-normal text-sm">· + $499 one-time setup</span>
              </p>
              <p className="text-xs text-purple-300/80">
                Covers AI voice usage, monitoring, and tuning.
              </p>
            </div>
          </div>

          {/* Catalyst Growth Card */}
          <div className="glass-panel p-10 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all duration-300 hover:scale-[1.02] group">
            <div className="h-12 w-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-colors">
              <Rocket className="h-6 w-6 text-cyan-400" />
            </div>
            <h4 className="text-2xl font-bold text-white mb-3">Catalyst Growth Engine</h4>
            <p className="text-base text-muted-foreground mb-6 min-h-[80px] leading-relaxed">
              Turns Mira into a growth weapon. Runs ads, handles retargeting, scans social trends, and plugs qualified leads directly into your Mira system.
            </p>
            <div className="mt-auto pt-6 border-t border-white/5">
              <p className="text-lg font-bold text-white mb-1">
                + $1,000/mo <span className="text-muted-foreground font-normal text-sm">· + $1,000–$2,000 setup (based on market)</span>
              </p>
              <p className="text-xs text-cyan-300/80">
                Optional — only for businesses serious about scaling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
