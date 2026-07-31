import { PRODUCTS, Product } from "@/data/products";

export default function PricingSection({
  onOpenProduct,
}: {
  onOpenProduct: (product: Product, sizeIndex?: number) => void;
}) {
  return (
    <section
      id="pricing"
      className="py-10 sm:py-14"
      style={{ backgroundColor: "#F0EAE0" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <p
            className="text-xs tracking-[0.22em] uppercase font-semibold mb-3"
            style={{ color: "#8FAF7E" }}
          >
            Transparent Pricing
          </p>
          <h2
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "clamp(1.7rem, 5vw, 2.6rem)",
              fontWeight: 700,
              color: "#2C1E12",
            }}
          >
            Premium Botanicals,
            <br />
            <em style={{ color: "#3A5C3E" }}>Honest Prices</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {PRODUCTS.map((p) => (
            <div
              key={p.id}
              className="rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg hover:border-[#3A5C3E]/20"
              style={{
                backgroundColor: "#FBF8F2",
                border: "1.5px solid #E0D8CC",
              }}
            >
              <div style={{ height: "6px", background: p.gradient }} />
              <div className="p-5 flex flex-col flex-1 gap-4">
                {/* title header with a colored bullet point */}
                <div className="flex items-center gap-2.5">
                  <span 
                    className="w-3.5 h-3.5 rounded-full flex-shrink-0 border shadow-sm"
                    style={{ 
                      backgroundColor: p.accentColor, 
                      borderColor: `${p.accentColor}33` 
                    }}
                  />
                  <div>
                    <p
                      style={{
                        fontFamily: "Playfair Display, serif",
                        fontSize: "1.1rem",
                        fontWeight: 700,
                        color: "#2C1E12",
                        lineHeight: 1.25,
                      }}
                    >
                      {p.name}
                    </p>
                    <span
                      className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full inline-block mt-0.5"
                      style={{ backgroundColor: p.tagBg, color: p.tagText }}
                    >
                      {p.tagline}
                    </span>
                  </div>
                </div>

                {/* pricing lines (aligned heights using fillers for Red Velvet and Neem) */}
                <div
                  className="flex flex-col gap-0 rounded-xl overflow-hidden"
                  style={{ border: "1px solid #E8E0D0" }}
                >
                  {p.pricing.map((pr, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center px-3.5 py-3"
                      style={{
                        borderBottom:
                          i < p.pricing.length - 1
                            ? "1px solid #E8E0D0"
                            : "none",
                        backgroundColor: i === 0 ? "#F5F0E8" : "#FBF8F2",
                      }}
                    >
                      <p
                        className="text-xs leading-snug font-medium text-[#2C1E12]"
                        style={{ maxWidth: "65%" }}
                      >
                        {pr.label}
                      </p>
                      <p
                        style={{
                          fontFamily: "Playfair Display, serif",
                          fontWeight: 700,
                          color: p.accentColor,
                          fontSize: "0.95rem",
                          flexShrink: 0,
                        }}
                      >
                        {pr.price}
                      </p>
                    </div>
                  ))}

                  {/* Balanced heights: Add consistent placeholders for products with single pricing variant */}
                  {p.id !== "glutathione" && (
                    <>
                      <div
                        className="flex justify-between items-center px-3.5 py-3"
                        style={{
                          borderBottom: "1px solid #E8E0D0",
                          backgroundColor: "#FBF8F2",
                        }}
                      >
                        <p className="text-[11px] leading-snug text-[#7A6A58] italic font-normal">
                          Trial pack size
                        </p>
                        <p className="text-xs text-[#8A7A68]">—</p>
                      </div>
                      <div
                        className="flex justify-between items-center px-3.5 py-3"
                        style={{
                          backgroundColor: "#FBF8F2",
                        }}
                      >
                        <p className="text-[11px] leading-snug text-[#7A6A58] font-medium">
                          Standard size: 100g Bar
                        </p>
                        <p className="text-[10px] text-[#3A5C3E] font-bold">
                          100g
                        </p>
                      </div>
                    </>
                  )}
                </div>

                {p.trialNote ? (
                  <p className="text-xs text-[#7A6A58] italic">
                    💡 {p.trialNote}
                  </p>
                ) : (
                  <p className="text-xs text-[#7A6A58] italic">
                    ✨ Cured for 4 weeks in small batches for lasting
                    hardness.
                  </p>
                )}

                <button
                  onClick={() => {
                    onOpenProduct(p, 0);
                  }}
                  className="mt-auto w-full py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-all hover:opacity-90 cursor-pointer shadow-sm"
                  style={{ backgroundColor: "#3A5C3E", color: "#F7F2E9" }}
                >
                  View Size details & order
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
