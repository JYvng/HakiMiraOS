import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "Is this software or a service?",
      answer: "It's a service powered by software. You are hiring Haki as your AI COO. We use Mira OS as the engine, but we run it for you. You don't log in to configure things; we do."
    },
    {
      question: "Do I still need a receptionist?",
      answer: "Most of our partners replace their receptionist or move them to a higher-value role (like project management). Mira handles the repetitive intake, filtering, and booking."
    },
    {
      question: "How long does the install take?",
      answer: "Typically 7-10 days from the Discovery Call to Go-Live. We need time to build your playbook and test the AI rigorously."
    },
    {
      question: "What happens if I cancel?",
      answer: "If you end the partnership, we shut off your license and automations—like firing your whole office team in one day. Your numbers will feel it immediately."
    },
    {
      question: "Do you work with my CRM?",
      answer: "We integrate with most major home service CRMs (ServiceTitan, Housecall Pro, Jobber, etc.) via webhooks and API connections."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-background/50">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-display font-bold text-center text-white mb-12">
          Frequently Asked Questions
        </h2>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border border-white/10 rounded-xl px-6 bg-white/5 overflow-hidden">
              <AccordionTrigger className="text-left text-white hover:text-primary hover:no-underline py-4 font-medium text-lg">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
