import { useState, useEffect } from "react"
import type { Product } from "@/data/products"

export default function ProductModal({
  product,
  initialSizeIndex = 0,
  onClose,
}: {
  product: Product
  initialSizeIndex?: number
  onClose: () => void
}) {
  const [imgIndex, setImgIndex] = useState(() => {
    if (product.id === "glutathione" && initialSizeIndex === 2) {
      return 3 // index of trial pieces in allImgs
    }
    return 0
  })
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(initialSizeIndex)
  const allImgs = [product.heroImg, product.altImg, ...product.extraImgs]

  // Auto-play timer for sliding images
  useEffect(() => {
    const timer = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % allImgs.length)
    }, 4500) // Change slide every 4.5 seconds
    return () => clearInterval(timer)
  }, [allImgs.length])

  // Keyboard navigation: Left/Right arrow keys on desktop
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setImgIndex((prev) => (prev - 1 + allImgs.length) % allImgs.length)
      } else if (e.key === "ArrowRight") {
        setImgIndex((prev) => (prev + 1) % allImgs.length)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [allImgs.length])

  // Swipe gesture support for mobile devices
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const diff = touchStart - touchEnd
    const minSwipeDistance = 50
    if (diff > minSwipeDistance) {
      // Swiped left -> show next image
      setImgIndex((prev) => (prev + 1) % allImgs.length)
    } else if (diff < -minSwipeDistance) {
      // Swiped right -> show previous image
      setImgIndex((prev) => (prev - 1 + allImgs.length) % allImgs.length)
    }
    setTouchStart(null)
    setTouchEnd(null)
  }

  const getWhatsAppLink = () => {
    let text = ""
    if (product.id === "glutathione") {
      if (selectedSizeIndex === 0) {
        text =
          "Hi HERBIQUE! I would like to order 1 Bar of Glutathione Soap (100g) for ₹270."
      } else if (selectedSizeIndex === 1) {
        text =
          "Hi HERBIQUE! I would like to order 2 or more Bars of Glutathione Soap (100g) for ₹250 each."
      } else {
        text =
          "Hi HERBIQUE! I would like to order the Glutathione Soap Trial Pack (3 × 10g pieces) for ₹120."
      }
    } else {
      text = `Hi HERBIQUE! I would like to order 1 Bar of ${product.name} (100g) for ${product.pricing[0].price}.`
    }
    return `https://wa.me/918319070306?text=${encodeURIComponent(text)}`
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
      style={{
        backgroundColor: "rgba(44,30,18,0.55)",
        backdropFilter: "blur(6px)",
      }}
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg rounded-t-3xl sm:rounded-2xl overflow-hidden flex flex-col shadow-2xl transition-all"
        style={{ backgroundColor: "#FBF8F2", maxHeight: "92vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* image carousel */}
        <div
          className="relative overflow-hidden flex-shrink-0 select-none touch-pan-y"
          style={{ height: "260px", background: product.gradient }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <img
            src={allImgs[imgIndex]}
            alt={`HERBIQUE ${product.name}`}
            className="w-full h-full object-cover transition-opacity duration-300"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(44,30,18,0.25) 0%, transparent 55%)",
            }}
          />

          {/* navigation arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              setImgIndex(
                (prev) => (prev - 1 + allImgs.length) % allImgs.length,
              )
            }}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-all hover:bg-black/35 hover:scale-105 active:scale-95 bg-black/15 text-[#F7F2E9] focus:outline-none"
            aria-label="Previous image"
          >
            <svg
              className="w-4 h-4 fill-none stroke-current stroke-[2.5]"
              viewBox="0 0 24 24"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              setImgIndex((prev) => (prev + 1) % allImgs.length)
            }}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-all hover:bg-black/35 hover:scale-105 active:scale-95 bg-black/15 text-[#F7F2E9] focus:outline-none"
            aria-label="Next image"
          >
            <svg
              className="w-4 h-4 fill-none stroke-current stroke-[2.5]"
              viewBox="0 0 24 24"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-all hover:bg-black/30 hover:scale-105 active:scale-95 z-10"
            style={{
              backgroundColor: "rgba(44,30,18,0.45)",
              color: "#F7F2E9",
              fontSize: "18px",
              lineHeight: 1,
            }}
          >
            ×
          </button>

          {/* badge */}
          <span
            className="absolute top-4 left-4 text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full shadow-sm"
            style={{ backgroundColor: product.tagBg, color: product.tagText }}
          >
            {product.tagline}
          </span>

          {/* thumbnail dots */}
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-10">
            {allImgs.map((_, i) => (
              <button
                key={i}
                onClick={() => setImgIndex(i)}
                className="rounded-full transition-all cursor-pointer"
                style={{
                  width: i === imgIndex ? "20px" : "6px",
                  height: "6px",
                  backgroundColor:
                    i === imgIndex ? "#F7F2E9" : "rgba(247,242,233,0.5)",
                }}
              />
            ))}
          </div>
        </div>

        {/* scrollable content */}
        <div className="overflow-y-auto flex-1 p-5 flex flex-col gap-6">
          <div>
            <p
              className="text-xs tracking-[0.2em] uppercase mb-1 font-semibold"
              style={{ color: "#8FAF7E" }}
            >
              HERBIQUE
            </p>
            <h2
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: "1.5rem",
                fontWeight: 700,
                color: "#2C1E12",
              }}
            >
              {product.name}
            </h2>
            <p
              className="mt-2 text-sm leading-relaxed"
              style={{ color: "#5A4A38" }}
            >
              {product.description}
            </p>
          </div>

          {/* pricing/variant selector */}
          <div>
            <h3
              className="text-xs font-semibold tracking-[0.18em] uppercase mb-3 flex items-center gap-2"
              style={{ color: "#7A6A58" }}
            >
              <svg
                className="w-3.5 h-3.5 fill-none stroke-current stroke-[1.8]"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
              </svg>
              Select Size / Option
            </h3>

            {product.id === "glutathione" ? (
              <div className="flex flex-col gap-2.5">
                {[
                  {
                    id: "1bar",
                    label: "1 Bar (100g)",
                    price: "₹270",
                    desc: "Standard full-sized bar for daily skincare.",
                    imgIdx: 0,
                  },
                  {
                    id: "2bars",
                    label: "2 or more Bars",
                    price: "₹250 each",
                    desc: "Saves ₹20 per bar. Best value for regular use.",
                    imgIdx: 1,
                  },
                  {
                    id: "trial",
                    label: "Trial Pack (3 × 10g pieces)",
                    price: "₹120",
                    desc: "Perfect mini-bars to test skin compatibility before buying full size.",
                    imgIdx: 3,
                  },
                ].map((opt, i) => {
                  const isSelected = selectedSizeIndex === i
                  return (
                    <button
                      key={opt.id}
                      onClick={() => {
                        setSelectedSizeIndex(i)
                        setImgIndex(opt.imgIdx)
                      }}
                      className="text-left p-3.5 rounded-xl border transition-all flex justify-between items-start gap-4 cursor-pointer"
                      style={{
                        borderColor: isSelected ? "#3A5C3E" : "#E0D8CC",
                        backgroundColor: isSelected ? "#F1F6F2" : "#FBF8F2",
                        boxShadow: isSelected
                          ? "0 4px 12px rgba(58,92,62,0.05)"
                          : "none",
                      }}
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span
                            className="w-4 h-4 rounded-full border flex items-center justify-center flex-shrink-0"
                            style={{
                              borderColor: isSelected ? "#3A5C3E" : "#D9D0C0",
                              backgroundColor: isSelected
                                ? "#3A5C3E"
                                : "transparent",
                            }}
                          >
                            {isSelected && (
                              <span className="w-1.5 h-1.5 rounded-full bg-[#F7F2E9]" />
                            )}
                          </span>
                          <span
                            className="font-semibold text-sm"
                            style={{ color: "#2C1E12" }}
                          >
                            {opt.label}
                          </span>
                          {opt.id === "trial" && (
                            <span className="text-[9px] bg-[#E8D9B8] text-[#2C1E12] font-extrabold uppercase px-1.5 py-0.5 rounded">
                              Popular
                            </span>
                          )}
                        </div>
                        <p
                          className="text-xs mt-1 leading-relaxed"
                          style={{ color: "#5A4A38" }}
                        >
                          {opt.desc}
                        </p>
                      </div>
                      <span
                        className="font-bold text-sm"
                        style={{ color: isSelected ? "#3A5C3E" : "#2C1E12" }}
                      >
                        {opt.price}
                      </span>
                    </button>
                  )
                })}
              </div>
            ) : (
              // For Red Velvet & Neem (only 1 size option available)
              <div
                className="p-3.5 rounded-xl border flex justify-between items-center"
                style={{ borderColor: "#E0D8CC", backgroundColor: "#FBF8F2" }}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-[#3A5C3E] flex items-center justify-center flex-shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F7F2E9]" />
                    </span>
                    <p
                      className="font-semibold text-sm"
                      style={{ color: "#2C1E12" }}
                    >
                      1 Bar (100g)
                    </p>
                  </div>
                  <p className="text-xs mt-1 text-[#5A4A38]">
                    Premium handcrafted organic formulation curing for 4 weeks.
                  </p>
                </div>
                <p
                  className="font-bold text-base"
                  style={{ color: product.accentColor }}
                >
                  {product.pricing[0].price}
                </p>
              </div>
            )}

            {product.id === "glutathione" && selectedSizeIndex === 2 && (
              <p className="text-xs text-[#9A7620] mt-2 leading-relaxed bg-[#FDF6E3] p-3 rounded-lg border border-[#F5EDD8]">
                💡 <strong>Trial Pack Note</strong>: Features 3 mini cubes (10g
                each). Essential for first-timers to perform a patch test or try
                out the soap texture.
              </p>
            )}
          </div>

          {/* benefits with premium checkmarks */}
          <div>
            <h3
              className="text-xs font-semibold tracking-[0.18em] uppercase mb-3 flex items-center gap-2"
              style={{ color: "#7A6A58" }}
            >
              <svg
                className="w-3.5 h-3.5 fill-none stroke-current stroke-[1.8]"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3c.132 4.594 3.406 7.868 8 8-.132.132-4.594 3.406-8 8-.132-.132-3.406-7.868-8-8 .132-.132 4.594-3.406 8-8z" />
              </svg>
              Key Benefits
            </h3>
            <div className="flex flex-col gap-2">
              {product.benefits.map((b, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 text-sm animate-fadeIn"
                  style={{ color: "#3A2C20" }}
                >
                  <span className="flex-shrink-0 mt-0.5 text-[#3A5C3E]">
                    <svg
                      className="w-4 h-4 fill-none stroke-current stroke-[2.5]"
                      viewBox="0 0 24 24"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span style={{ lineHeight: 1.5 }}>{b}</span>
                </div>
              ))}
            </div>
          </div>
          {/* ingredients (compact list) */}
          <div className="border-t border-[#E0D8CC]/50 pt-4">
            <h3
              className="text-xs font-bold tracking-[0.18em] uppercase mb-3.5 flex items-center gap-2"
              style={{ color: "#7A6A58" }}
            >
              <svg
                className="w-3.5 h-3.5 fill-none stroke-current stroke-[1.8]"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 0 9.5a7 7 0 0 1-8 8.5z" />
                <path d="M19 2L11 11" />
              </svg>
              Key Actives & Formulation
            </h3>
            <div className="flex flex-col gap-4">
              {product.ingredients.map((ing, i) => (
                <div key={i} className="flex gap-3.5 items-start group">
                  <span className="text-xs font-serif italic text-[#8A7A68] mt-0.5 font-bold">
                    0{i + 1}
                  </span>
                  <div>
                    <p
                      className="text-xs font-bold"
                      style={{ color: "#2C1E12" }}
                    >
                      {ing.name}
                    </p>
                    <p className="text-[11px] leading-relaxed text-[#5A4A38] mt-0.5 font-light">
                      {ing.benefit}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* why herbique card */}
          <div
            className="rounded-xl p-4"
            style={{ backgroundColor: "#EDE8DF" }}
          >
            <p
              className="text-xs font-semibold tracking-[0.15em] uppercase mb-2.5 flex items-center gap-2"
              style={{ color: "#7A6A58" }}
            >
              <svg
                className="w-3.5 h-3.5 fill-none stroke-current stroke-[1.8]"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              Why Choose HERBIQUE?
            </p>
            <div className="grid grid-cols-2 gap-2">
              {[
                "Handmade with care",
                "Organic ingredients",
                "No harsh chemicals",
                "Daily cleansing safe",
              ].map((w) => (
                <div
                  key={w}
                  className="flex items-center gap-2 text-xs text-[#3A2C20]"
                >
                  <span className="text-[#3A5C3E] flex-shrink-0">
                    <svg
                      className="w-3.5 h-3.5 fill-none stroke-current stroke-[2.5]"
                      viewBox="0 0 24 24"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span>{w}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex gap-3 pb-1 mt-2">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3.5 rounded-xl text-sm font-semibold tracking-wide transition-all hover:opacity-90 flex items-center justify-center gap-2 cursor-pointer"
              style={{
                backgroundColor: "#3A5C3E",
                color: "#F7F2E9",
                fontFamily: "Work Sans, sans-serif",
              }}
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.982L2 22l5.202-1.362a9.92 9.92 0 0 0 4.808 1.236h.005c5.507 0 9.99-4.478 9.99-9.987C22.005 6.479 17.519 2 12.012 2Zm5.82 14.33c-.244.688-1.42 1.312-1.922 1.385-.452.065-.89.068-1.554-.153-2.617-1.01-4.305-3.692-4.437-3.868-.131-.176-1.066-1.42-1.066-2.709 0-1.288.665-1.92.902-2.176.236-.256.513-.32.684-.32l.492.003c.15 0 .285-.01.409.288.156.376.536 1.309.582 1.402.046.094.076.203.013.33-.063.126-.094.204-.189.314-.094.11-.197.246-.282.329-.094.094-.193.197-.083.388.11.19.49 1.83 1.05 2.33.722.643 1.332.843 1.52.923.189.08.3-.01.411-.137.11-.127.48-.56.608-.75.127-.19.255-.16.43-.095.176.065 1.11.524 1.3.618.19.095.317.14.364.223.047.083.047.48-.198 1.168Z" />
              </svg>
              Order via WhatsApp
            </a>
            <button
              onClick={onClose}
              className="px-5 py-3.5 rounded-xl text-sm font-semibold tracking-wide border transition-all hover:bg-[#EDE8DF] cursor-pointer"
              style={{ borderColor: "#D9D0C0", color: "#5A4A38" }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
