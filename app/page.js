import AnnouncementBar from "@/components/AnnouncementBar";
import Hero from "@/components/Hero";
import BenefitStrip from "@/components/BenefitStrip";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import ProductVideo from "@/components/ProductVideo";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import UseCases from "@/components/UseCases";
import ProductShowcase from "@/components/ProductShowcase";
import OfferSection from "@/components/OfferSection";
import OrderForm from "@/components/OrderForm";
import CodTrust from "@/components/CodTrust";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <ProductVideo />
        <HowItWorks />
        <Features />
        <UseCases />
        <ProductShowcase />
        <OfferSection />
        <OrderForm />
 
      </main>
      <StickyMobileCTA />
      <WhatsAppButton />
    </>
  );
}
