import Navbar from "@/components/haki/Navbar";
import Hero from "@/components/haki/Hero";
import Problem from "@/components/haki/Problem";
import Offer from "@/components/haki/Offer";
import Addons from "@/components/haki/Addons";
import HowItWorks from "@/components/haki/HowItWorks";
import SocialProof from "@/components/haki/SocialProof";
import Guarantee from "@/components/haki/Guarantee";
import WhoIsThisFor from "@/components/haki/WhoIsThisFor";
import FAQ from "@/components/haki/FAQ";
import Footer from "@/components/haki/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Offer />
        <Addons />
        <HowItWorks />
        <SocialProof />
        <Guarantee />
        <WhoIsThisFor />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
