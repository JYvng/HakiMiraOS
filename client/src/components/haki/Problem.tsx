import { AlertTriangle, Ban, Clock, DollarSign } from "lucide-react";

export default function Problem() {
  const problems = [
    {
      icon: <Ban className="h-8 w-8 text-red-400" />,
      title: "Missed calls that never call back",
      description: "62% of calls to home service businesses go unanswered. Those leads call your competitor immediately."
    },
    {
      icon: <Clock className="h-8 w-8 text-orange-400" />,
      title: "Quotes sitting in inboxes",
      description: "Speed to lead is everything. If you take hours to quote, you've already lost the job."
    },
    {
      icon: <DollarSign className="h-8 w-8 text-green-400" />,
      title: "Ad spend into a black hole",
      description: "Paying for clicks but dropping the ball on the phone? That's just lighting money on fire."
    },
    {
      icon: <AlertTriangle className="h-8 w-8 text-yellow-400" />,
      title: "Owner stuck on the phone",
      description: "You should be running the crew or the business, not playing receptionist for tire kickers."
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            Your leads don't wait.<br />
            <span className="text-muted-foreground">Your front office can't either.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Missed calls = lost jobs. Slow replies = lost quotes. Call centers are expensive and generic. 
            DIY software just gives you tools, but nobody actually runs it. You need a system that never sleeps.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((item, i) => (
            <div key={i} className="glass-panel p-6 rounded-xl hover:bg-white/5 transition-colors group">
              <div className="mb-4 p-3 bg-white/5 rounded-lg w-fit group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
