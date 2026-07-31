import { useState } from "react"
import { PRODUCTS } from "@/data/products"
import type { Product } from "@/data/products"

export default function IngredientsSection() {
  const [activeTab, setActiveTab] = useState("glutathione")
  const activeProduct = PRODUCTS.find((p) => p.id === activeTab) || PRODUCTS[0]

  const getIngredientIcon = (name: string, color: string) => {
    const n = name.toLowerCase()
    if (n.includes("glutathione") || n.includes("tulsi")) {
      return (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke={color}
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 3v4M3 5h4M6 17v4M4 19h4M18 13v4M16 15h4M12 7l1.5 3.5L17 12l-3.5 1.5L12 17l-1.5-3.5L7 12l3.5-1.5L12 7z"
          />
        </svg>
      )
    }
    if (
      n.includes("kojic") ||
      n.includes("vitamin e") ||
      n.includes("rosemary")
    ) {
      return (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke={color}
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="4" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"
          />
        </svg>
      )
    }
    if (n.includes("niacinamide") || n.includes("zinc")) {
      return (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke={color}
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      )
    }
    if (n.includes("aloe") || n.includes("oil")) {
      return (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke={color}
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 22a7 7 0 007-7c0-4.3-7-13-7-13S5 10.7 5 15a7 7 0 007 7z"
          />
        </svg>
      )
    }
    return (
      <svg
        className="w-4 h-4"
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v18M12 3c-4 0-7 3-7 7 0 4 3 7 7 11M12 3c4 0 7 3 7 7 0 4-3 7-7 11"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 10c3 1 6 1 7 4M19 10c-3 1-6 1-7 4"
        />
      </svg>
    )
  }

  const getProductSpotlightDetails = (id: string) => {
    switch (id) {
      case "glutathione":
        return {
          skinType: "All Skin Types",
          concern: "Pigmentation, Tanning & Dark Spots",
          aroma: "Rich Warm Honey-Botanical",
        }
      case "redvelvet":
        return {
          skinType: "Oily & Combination Skin",
          concern: "Open Pores & Uneven Texture",
          aroma: "Fresh Tea Tree & Rose Herbal",
        }
      case "neem":
        return {
          skinType: "Acne-Prone & Sensitive Skin",
          concern: "Acne, Itching & Monsoon Skincare",
          aroma: "Traditional Purifying Neem-Tulsi",
        }
      default:
        return {
          skinType: "All Skin Types",
          concern: "General Skincare",
          aroma: "Natural Botanical",
        }
    }
  }

  const spotlight = getProductSpotlightDetails(activeProduct.id)

  return (
    <section id="ingredients" className="py-10 sm:py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <p
            className="text-xs tracking-[0.22em] uppercase font-semibold mb-3"
            style={{ color: "#8FAF7E" }}
          >
            What's Inside
          </p>
          <h2
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "clamp(1.7rem, 5vw, 2.6rem)",
              fontWeight: 700,
              color: "#2C1E12",
            }}
          >
            Ingredients That Actually Work
          </h2>
          <p className="text-xs text-[#7A6A58] mt-2 max-w-sm mx-auto leading-relaxed">
            Select a soap below to explore its active botanical formulation and
            see how it targets your skin concerns.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-8">
          <div className="flex gap-8 border-b border-[#E0D8CC] pb-2 max-w-lg w-full justify-center">
            {PRODUCTS.map((p) => {
              const isActive = activeTab === p.id
              return (
                <button
                  key={p.id}
                  onClick={() => setActiveTab(p.id)}
                  className="px-2 py-1 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer relative"
                  style={{
                    color: isActive ? "#3A5C3E" : "#7A6A58",
                  }}
                >
                  {p.name.split(" ")[0]}
                  {isActive && (
                    <span className="absolute bottom-[-10px] left-0 right-0 h-[2px] bg-[#3A5C3E] rounded-full transition-all duration-300" />
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {/* Spotlight Showcase Grid */}
        <div
          className="rounded-3xl overflow-hidden flex flex-col md:flex-row gap-0 border shadow-lg transition-all duration-500 bg-white"
          style={{ borderColor: "#E0D8CC" }}
        >
          {/* Left Column: Soap Full-Bleed Cover Image */}
          <div className="w-full md:w-[35%] lg:w-[38%] h-64 md:h-auto relative overflow-hidden flex-shrink-0 bg-[#F8F3EA]">
            <img
              src={activeProduct.heroImg}
              alt={activeProduct.name}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent md:hidden" />
            {/* Tagline badge floating on image for mobile view */}
            <span
              className="absolute bottom-4 left-4 text-[9px] font-bold uppercase tracking-[0.15em] px-2.5 py-1 rounded-md inline-block border bg-white/90 backdrop-blur-sm md:hidden"
              style={{
                borderColor: `${activeProduct.accentColor}33`,
                color: activeProduct.accentColor,
              }}
            >
              {activeProduct.tagline}
            </span>
          </div>

          {/* Right Column: Content Details */}
          <div
            className="w-full md:w-[65%] lg:w-[62%] p-6 sm:p-8 md:p-10 flex flex-col justify-between"
            style={{ backgroundColor: "#FBF8F2" }}
          >
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 sm:gap-4">
                <div>
                  <span
                    className="hidden md:inline-block text-[9px] font-bold uppercase tracking-[0.15em] px-2.5 py-1 rounded-md border"
                    style={{
                      borderColor: `${activeProduct.accentColor}33`,
                      color: activeProduct.accentColor,
                      backgroundColor: `${activeProduct.accentColor}0A`,
                    }}
                  >
                    {activeProduct.tagline}
                  </span>
                  <h3
                    style={{
                      fontFamily: "Playfair Display, serif",
                      fontSize: "1.6rem",
                      fontWeight: 700,
                      color: "#2C1E12",
                    }}
                    className="md:mt-3 leading-tight"
                  >
                    {activeProduct.name}
                  </h3>
                </div>
                <span className="text-[10px] tracking-widest text-[#8A7A68] font-mono bg-[#EDE8DF] px-2.5 py-1.5 rounded border border-[#E0D8CC]/50 inline-block self-start">
                  FORMULA:{" "}
                  {activeProduct.id === "glutathione"
                    ? "HERB-GL-01"
                    : activeProduct.id === "redvelvet"
                      ? "HERB-RV-02"
                      : "HERB-NM-03"}
                </span>
              </div>

              <p className="text-xs text-[#5A4A38] mt-3 leading-relaxed font-light font-sans">
                {activeProduct.description}
              </p>

              {/* Specs horizontal bar */}
              <div className="grid grid-cols-3 gap-2 border-y border-[#E0D8CC]/60 py-4 my-6">
                <div className="flex flex-col gap-0.5">
                  <span className="text-[8px] tracking-wider text-[#8A7A68] uppercase font-bold">
                    COMPATIBILITY
                  </span>
                  <span className="text-[11px] text-[#2C1E12] font-semibold leading-tight">
                    {spotlight.skinType}
                  </span>
                </div>
                <div className="flex flex-col gap-0.5 border-x border-[#E0D8CC]/40 px-3">
                  <span className="text-[8px] tracking-wider text-[#8A7A68] uppercase font-bold">
                    PRIMARY TARGET
                  </span>
                  <span className="text-[11px] text-[#2C1E12] font-semibold leading-tight">
                    {spotlight.concern}
                  </span>
                </div>
                <div className="flex flex-col gap-0.5 pl-1">
                  <span className="text-[8px] tracking-wider text-[#8A7A68] uppercase font-bold">
                    AROMA PROFILE
                  </span>
                  <span className="text-[11px] text-[#2C1E12] font-semibold leading-tight">
                    {spotlight.aroma}
                  </span>
                </div>
              </div>

              {/* Active Botanical Ingredients list */}
              <h4 className="text-xs font-bold text-[#7A6A58] uppercase tracking-[0.18em] mb-4">
                Active Botanical Ingredients
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
                {activeProduct.ingredients.map((ing, i) => (
                  <div
                    key={i}
                    className="flex gap-3.5 items-start group transition-all duration-300 hover:translate-x-1"
                  >
                    <span className="text-xs font-serif italic text-[#8A7A68] mt-0.5 tracking-wider font-semibold">
                      0{i + 1}
                    </span>
                    <div className="flex-1">
                      <h5 className="font-bold text-sm text-[#2C1E12] transition-colors group-hover:text-[#3A5C3E]">
                        {ing.name}
                      </h5>
                      <p className="text-[11px] leading-relaxed text-[#5A4A38] mt-1 font-light">
                        {ing.benefit}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-[#E0D8CC]/50 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0 text-[9px] text-[#8A7A68] tracking-[0.15em] uppercase font-semibold text-center">
              <div className="flex items-center gap-1.5">
                <svg
                  className="w-3 h-3 text-[#8FAF7E] fill-none stroke-current stroke-[2]"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 0 9.5a7 7 0 0 1-8 8.5z" />
                </svg>
                <span>BIODEGRADABLE</span>
              </div>
              <span className="hidden sm:inline text-[#D9D0C0]">•</span>
              <div className="flex items-center gap-1.5">
                <svg
                  className="w-3 h-3 text-[#8FAF7E] fill-none stroke-current stroke-[2]"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 0 9.5a7 7 0 0 1-8 8.5z" />
                </svg>
                <span>DERMATOLOGICALLY TESTED</span>
              </div>
              <span className="hidden sm:inline text-[#D9D0C0]">•</span>
              <div className="flex items-center gap-1.5">
                <svg
                  className="w-3 h-3 text-[#8FAF7E] fill-none stroke-current stroke-[2]"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 0 9.5a7 7 0 0 1-8 8.5z" />
                </svg>
                <span>HANDMADE IN INDIA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
