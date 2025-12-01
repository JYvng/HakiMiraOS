import { CheckCircle, XCircle } from "lucide-react";

export default function WhoIsThisFor() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          
          {/* For You */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="text-green-400">
                <CheckCircle />
              </span>
              This is for you if...
            </h3>
            <ul className="space-y-4">
              {[
                "You run a real home service or trades business.",
                "You're already spending on marketing or getting inbound calls.",
                "You're tired of missed calls, slow replies, and messy follow-up.",
                "You want one partner to own the front office forever."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 p-4 rounded-lg bg-green-500/5 border border-green-500/10">
                  <div className="mt-1 h-2 w-2 rounded-full bg-green-500 shrink-0" />
                  <span className="text-slate-300 text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not For You */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="text-red-400">
                <XCircle />
              </span>
              This is NOT for you if...
            </h3>
            <ul className="space-y-4">
              {[
                "You're still guessing at your pricing.",
                "You want cheap software to play with, not a managed system.",
                "You're not ready to let go of the phones.",
                "You don't have any lead volume yet."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 p-4 rounded-lg bg-red-500/5 border border-red-500/10">
                  <div className="mt-1 h-2 w-2 rounded-full bg-red-500 shrink-0" />
                  <span className="text-slate-300 text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
