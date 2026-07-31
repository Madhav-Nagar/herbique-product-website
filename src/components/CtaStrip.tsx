export default function CtaStrip() {
  return (
    <section style={{ backgroundColor: "#C8A97E" }} className="py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center gap-5">
        <h2
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "clamp(1.4rem, 4vw, 2rem)",
            fontWeight: 700,
            color: "#2C1E12",
          }}
        >
          Ready to Transform Your Skin?
        </h2>
        <p
          className="text-sm max-w-md"
          style={{ color: "#4A3218", lineHeight: 1.75 }}
        >
          Try our best-selling Glutathione Soap, or start with a 10g trial
          pack — just ₹120 for 3 pieces.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="#products"
            className="px-8 py-3.5 rounded-full text-sm font-semibold transition-all hover:opacity-90 hover:scale-[1.02] active:scale-95 shadow-md"
            style={{ backgroundColor: "#2C1E12", color: "#F7F2E9" }}
          >
            Shop All Soaps
          </a>
          <a
            href="#ingredients"
            className="px-8 py-3.5 rounded-full text-sm font-semibold border transition-all hover:bg-[#B8976E]"
            style={{ borderColor: "#2C1E12", color: "#2C1E12" }}
          >
            Learn Ingredients
          </a>
        </div>
      </div>
    </section>
  );
}
