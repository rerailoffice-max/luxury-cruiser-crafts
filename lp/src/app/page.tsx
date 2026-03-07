import Hero from "@/components/Hero";
import Concept from "@/components/Concept";
import Features from "@/components/Features";
import OwnershipFlow from "@/components/OwnershipFlow";
import Experience from "@/components/Experience";
import Fleet from "@/components/Fleet";
import Craft from "@/components/Craft";
import Investment from "@/components/Investment";
import Voice from "@/components/Voice";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Concept />
      <Features />
      <OwnershipFlow />
      <Experience />
      <Fleet />
      <Craft />
      <Investment />
      <Voice />
      <Cta />
      <Footer />
    </main>
  );
}
