import { Mic, Rocket } from "lucide-react";

export default function Addons() {
  return (
    <section className="pb-24 pt-0">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-display font-bold text-white">Optional Power-Ups</h3>
          <p className="text-muted-foreground">Add these anytime after the core system is printing money.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Voice AI Card */}
          <div className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-colors group">
            <div className="h-12 w-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors">
              <Mic className="h-6 w-6 text-purple-400" />
            </div>
            <h4 className="text-xl font-bold text-white mb-3">Voice AI Receptionist</h4>
            <p className="text-sm text-muted-foreground mb-6 min-h-[80px]">
              Haki hooks Mira into Quo so inbound calls are answered by a natural-sounding AI. It follows your playbook, books jobs, and takes messages. Never touch the phone again.
            </p>
            <div className="mt-auto pt-4 border-t border-white/5">
              <p className="text-sm font-medium text-purple-300">
                Starts from +$497/mo <span className="text-muted-foreground text-xs">+ one-time setup</span>
              </p>
            </div>
          </div>

          {/* Catalyst Growth Card */}
          <div className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-colors group">
            <div className="h-12 w-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-colors">
              <Rocket className="h-6 w-6 text-cyan-400" />
            </div>
            <h4 className="text-xl font-bold text-white mb-3">Catalyst Growth Engine</h4>
            <p className="text-sm text-muted-foreground mb-6 min-h-[80px]">
              Turns Mira into a growth weapon. Manages lead gen campaigns, retargeting, and remarketing. We plug into social & ads to keep the pipeline overflowing.
            </p>
            <div className="mt-auto pt-4 border-t border-white/5">
              <p className="text-sm font-medium text-cyan-300">
                Starts from +$1,000/mo <span className="text-muted-foreground text-xs">+ build fee</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
