
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import UseCases from "@/components/UseCases";
import ProductShowcase from "@/components/ProductShowcase";
import OfferSection from "@/components/OfferSection";
import OrderForm from "@/components/OrderForm";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <ProductShowcase />
        <OrderForm />
 
      </main>
      <StickyMobileCTA />
      <WhatsAppButton />
    </>
  );
}
