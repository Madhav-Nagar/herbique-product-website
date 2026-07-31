import { useState, useEffect } from "react"
import type { Product } from "@/data/products"
import { supabase } from "@/lib/supabase"
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

export type RatingInfo = { avg: number; count: number }
export type RatingsMap = Record<string, RatingInfo>

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeProduct, setActiveProduct] = useState<Product | null>(null)
  const [modalSizeIndex, setModalSizeIndex] = useState(0)

  // Ratings fetched from Supabase: keyed by product_name
  const [ratingsMap, setRatingsMap] = useState<RatingsMap>({})
  const [ratingsLoaded, setRatingsLoaded] = useState(false)

  const fetchRatings = async () => {
    const { data } = await supabase
      .from("reviews")
      .select("product_name, rating")

    if (data && data.length > 0) {
      const grouped: Record<string, number[]> = {}
      data.forEach((r) => {
        if (!grouped[r.product_name]) grouped[r.product_name] = []
        grouped[r.product_name].push(r.rating)
      })
      const map: RatingsMap = {}
      for (const [name, arr] of Object.entries(grouped)) {
        map[name] = {
          avg: arr.reduce((a, b) => a + b, 0) / arr.length,
          count: arr.length,
        }
      }
      setRatingsMap(map)
    }
    setRatingsLoaded(true)
  }

  useEffect(() => {
    fetchRatings()
  }, [])

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
        <ProductsGrid
          onOpenProduct={handleOpenProduct}
        />
      </FadeIn>
      
      <FadeIn delay={100}>
        <BenefitsSection />
      </FadeIn>
      
      <FadeIn delay={100}>
        <IngredientsSection />
      </FadeIn>
      
      <FadeIn delay={100}>
        <ReviewsSection
          onReviewSubmitted={fetchRatings}
          ratingsMap={ratingsMap}
          ratingsLoaded={ratingsLoaded}
        />
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
          ratingInfo={ratingsLoaded ? (ratingsMap[activeProduct.name] ?? { avg: 0, count: 0 }) : undefined}
        />
      )}
    </div>
  )
}
