import { Button } from "@/components/ui/button";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Intake",
      desc: "Haki interviews you. We download your pricing, services, booking rules, and 'dos and don'ts' into a playbook."
    },
    {
      number: "02",
      title: "Build & Connect",
      desc: "We install Mira OS, connect your phone/text lines, integrate your CRM, and wire up your booking calendar."
    },
    {
      number: "03",
      title: "Go Live & Optimize",
      desc: "We launch quietly. Haki monitors every conversation in real-time, tuning the AI until it sounds exactly like your best employee."
    },
    {
      number: "04",
      title: "Ongoing AI COO",
      desc: "We stay on board. We roll out updates, handle breakages, and keep your front office evolving forever."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-background/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-white mb-16">
          How the Takeover Works
        </h2>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2 z-0" />

          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, i) => (
              <div key={i} className="relative group">
                {/* Number Bubble */}
                <div className="w-12 h-12 mx-auto bg-card border border-primary/30 rounded-full flex items-center justify-center text-lg font-bold text-primary mb-6 shadow-[0_0_15px_rgba(59,130,246,0.3)] group-hover:scale-110 transition-transform duration-300 bg-background">
                  {step.number}
                </div>
                
                <div className="text-center px-2">
                  <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <Button 
            onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
            variant="link" 
            className="text-primary text-lg hover:text-primary/80"
          >
            See what Haki would handle in your business →
          </Button>
        </div>
      </div>
    </section>
  );
}
