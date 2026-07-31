import { useState } from "react"
import { PRODUCTS, type Product } from "@/data/products"
import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import ProductsGrid from "@/components/ProductsGrid"
import IngredientsSection from "@/components/IngredientsSection"
import BenefitsSection from "@/components/BenefitsSection"
import ReviewsSection from "@/components/ReviewsSection"
import AboutSection from "@/components/AboutSection"
import ContactSection from "@/components/ContactSection"
import CtaStrip from "@/components/CtaStrip"
import Footer from "@/components/Footer"
import ProductModal from "@/components/ProductModal"
import FadeIn from "@/components/FadeIn"
import FloatingWhatsApp from "@/components/FloatingWhatsApp"
import FaqSection from "@/components/FaqSection"

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeProduct, setActiveProduct] = useState<Product | null>(null)
  const [modalSizeIndex, setModalSizeIndex] = useState(0)

  const handleOpenProduct = (product: Product, sizeIndex?: number) => {
    setModalSizeIndex(sizeIndex ?? 0)
    setActiveProduct(product)
  }

  return (
    <div
      style={{
        fontFamily: "Work Sans, sans-serif",
        backgroundColor: "#F7F2E9",
        minHeight: "100vh",
      }}
    >
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      
      <FadeIn delay={100}>
        <HeroSection />
      </FadeIn>
      
      <FadeIn delay={100}>
        <ProductsGrid onOpenProduct={handleOpenProduct} />
      </FadeIn>
      
      <FadeIn delay={100}>
        <BenefitsSection />
      </FadeIn>
      
      <FadeIn delay={100}>
        <IngredientsSection />
      </FadeIn>
      
      <FadeIn delay={100}>
        <ReviewsSection />
      </FadeIn>
      
      <FadeIn delay={100}>
        <AboutSection />
      </FadeIn>
      

      <FadeIn delay={100}>
        <FaqSection />
      </FadeIn>
      
      <FadeIn delay={100}>
        <ContactSection />
      </FadeIn>

      <CtaStrip />
      <Footer onOpenProduct={handleOpenProduct} />

      <FloatingWhatsApp />

      {activeProduct && (
        <ProductModal
          product={activeProduct}
          initialSizeIndex={modalSizeIndex}
          onClose={() => setActiveProduct(null)}
        />
      )}
    </div>
  )
}
