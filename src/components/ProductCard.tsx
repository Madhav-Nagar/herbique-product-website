import type { Product } from "@/data/products"
import StarRating from "@/components/StarRating"
import glutTrialPieces from "@/imports/file_0000000044e882078ecb044e6917569a.webp"

export default function ProductCard({
  product,
  ratingInfo,
  onOpen,
}: {
  product: Product
  ratingInfo?: { avg: number; count: number }
  onOpen: (p: Product, initialSizeIndex?: number) => void
}) {
  return (
    <div
      className="rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:translate-y-[-4px] hover:shadow-xl"
      style={{
        backgroundColor: "#FBF8F2",
        border: "1px solid #E0D8CC",
        boxShadow: "0 2px 12px rgba(44,30,18,0.06)",
      }}
    >
      {/* image */}
      <div
        className="relative overflow-hidden"
        style={{ height: "260px", background: product.gradient }}
      >
        <img
          src={product.heroImg}
          alt={`HERBIQUE ${product.name}`}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(44,30,18,0.18) 0%, transparent 55%)",
          }}
        />
        <span
          className="absolute top-3 left-3 text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full shadow-sm"
          style={{
            backgroundColor: product.tagBg,
            color: product.tagText,
            fontFamily: "Work Sans, sans-serif",
          }}
        >
          {product.tagline}
        </span>
      </div>

      {/* body */}
      <div className="p-5 flex flex-col flex-1 gap-3.5">
        <div>
          <p
            className="text-xs tracking-[0.18em] uppercase mb-1 font-semibold"
            style={{ color: "#8FAF7E", fontFamily: "Work Sans, sans-serif" }}
          >
            HERBIQUE
          </p>
          <h3
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "1.25rem",
              fontWeight: 700,
              color: "#2C1E12",
              lineHeight: 1.25,
            }}
          >
            {product.name}
          </h3>
        </div>

        <p
          style={{ fontSize: "0.83rem", color: "#5A4A38", lineHeight: 1.7 }}
          className="flex-1"
        >
          {product.description}
        </p>

        {/* Highlight trial soap on card if glutathione */}
        {product.id === "glutathione" && (
          <button
            onClick={() => onOpen(product, 2)}
            className="w-full bg-[#FAF5ED] border border-[#EBE3D5] rounded-xl p-2.5 flex items-center justify-between hover:bg-[#F3EBE0] transition-colors cursor-pointer group text-left"
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg overflow-hidden flex-shrink-0 bg-[#EDE8DF] border border-[#E0D8CC]">
                <img
                  src={glutTrialPieces}
                  alt="Trial Pack"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] font-extrabold uppercase tracking-wider text-[#9A7620] leading-none mb-0.5">
                  Trial Soap Available
                </span>
                <span className="text-[11px] text-[#2C1E12] font-semibold leading-none">
                  3 × 10g set · ₹120
                </span>
              </div>
            </div>
            <span className="text-[9px] font-bold bg-[#E8D9B8] text-[#2C1E12] px-2.5 py-1 rounded-full uppercase tracking-wider group-hover:bg-[#E0CCA4] transition-colors">
              Try First
            </span>
          </button>
        )}

        {/* ingredient pills */}
        <div className="flex flex-wrap gap-1.5 pt-0.5">
          {product.ingredients.slice(0, 3).map((ing) => (
            <span
              key={ing.name}
              className="text-xs px-2.5 py-1 rounded-full transition-colors hover:bg-[#3A5C3E]/10"
              style={{
                backgroundColor: product.accentBg,
                color: product.accentColor,
                border: `1px solid ${product.accentColor}22`,
              }}
            >
              {ing.name}
            </span>
          ))}
          {product.ingredients.length > 3 && (
            <span
              className="text-xs px-2.5 py-1 rounded-full"
              style={{ backgroundColor: "#EDE8DF", color: "#7A6A58" }}
            >
              +{product.ingredients.length - 3}
            </span>
          )}
        </div>

        {/* price row */}
        <div className="flex items-end justify-between pt-1 border-t border-[#E0D8CC]/50">
          <div>
            <p
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: "1.5rem",
                fontWeight: 700,
                color: "#2C1E12",
              }}
            >
              {product.pricing[0].price}
            </p>
            <p
              style={{ fontSize: "0.7rem", color: "#7A6A58", marginTop: "1px" }}
            >
              {product.pricing[0].label}{" "}
              {product.id === "glutathione" && " (Best Value)"}
            </p>
          </div>
          <StarRating rating={ratingInfo?.avg} count={ratingInfo?.count} />
        </div>

        <button
          onClick={() => onOpen(product)}
          className="w-full py-3.5 rounded-xl text-sm font-semibold tracking-wide transition-all duration-200 hover:opacity-90 active:scale-[0.98] shadow-sm cursor-pointer"
          style={{
            backgroundColor: "#3A5C3E",
            color: "#F7F2E9",
            fontFamily: "Work Sans, sans-serif",
            letterSpacing: "0.04em",
          }}
        >
          View Details & Pricing
        </button>
      </div>
    </div>
  )
}
