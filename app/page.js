
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import ProductShowcase from "@/components/ProductShowcase";
import OfferSection from "@/components/OfferSection";
import OrderForm from "@/components/OrderForm";
import Footer from "@/components/Footer";
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
        <OfferSection />
        <OrderForm />
      </main>
      <Footer />
      <StickyMobileCTA />
      <WhatsAppButton />
    </>
  );
}
