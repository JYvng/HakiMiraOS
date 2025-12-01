import { Card } from "@/components/ui/card";

export default function SocialProof() {
  const stats = [
    { label: "Missed calls caught", value: "142/mo" },
    { label: "Extra bookings via text", value: "+18" },
    { label: "Avg response time", value: "< 60s" },
  ];

  return (
    <section id="results" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            What it feels like with Haki
          </h2>
          <p className="text-muted-foreground">
            Silence your phone, open your calendar, and see it full.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {stats.map((stat, i) => (
            <Card key={i} className="bg-white/5 border-white/10 p-6 text-center backdrop-blur-sm hover:bg-white/10 transition-colors">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="glass-panel p-8 md:p-10 rounded-2xl text-center relative border border-primary/20 bg-white/5 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
            <div className="text-4xl text-primary absolute top-4 left-6 opacity-50">"</div>
            <p className="text-xl md:text-2xl font-medium text-slate-200 leading-relaxed relative z-10">
              It feels like I hired a world-class office manager who never sleeps, never complains, and works for a fraction of the cost. I finally stopped checking my phone at dinner.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500" />
              <div className="text-left">
                <div className="text-white font-bold text-sm">Apex ProScape Owner</div>
                <div className="text-muted-foreground text-xs">Early Adopter Partner</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
