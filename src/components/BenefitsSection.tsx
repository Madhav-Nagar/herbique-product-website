import glutAlt from "@/imports/Gemini_Generated_Image_htpltdhtpltdhtpl.webp";
import redWrapped from "@/imports/file_0000000006b481faba42405e2267de13.webp";
import neemWrapped from "@/imports/file_0000000020d882308a477d88377da537.webp";

export default function BenefitsSection() {
  return (
    <section id="benefits" className="py-10 sm:py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center">
          <div>
            <p
              className="text-xs tracking-[0.22em] uppercase font-semibold mb-3"
              style={{ color: "#8FAF7E" }}
            >
              Why HERBIQUE
            </p>
            <h2
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: "clamp(1.7rem, 5vw, 2.4rem)",
                fontWeight: 700,
                color: "#2C1E12",
                lineHeight: 1.25,
              }}
            >
              Skin That Feels
              <br />
              the Difference
            </h2>
            <p
              className="mt-3 text-sm"
              style={{ color: "#5A4A38", lineHeight: 1.8 }}
            >
              HERBIQUE is built on one principle: if it's not pure enough for
              us, it's not going in the bar. Every ingredient earns its place.
            </p>
            <div className="mt-6 flex flex-col gap-4">
              {[
                [
                  "Handmade with Care",
                  "Every bar is poured, cut and cured by hand in small batches for consistent quality.",
                ],
                [
                  "No Harsh Chemicals",
                  "Zero parabens, sulphates or artificial fragrances. Only botanicals your skin can trust.",
                ],
                [
                  "Suitable for Daily Use",
                  "Gentle enough for everyday washing — designed to support your long-term skin health.",
                ],
                [
                  "Quality Ingredients Only",
                  "We source actives with proven skin benefits and use them at effective concentrations.",
                ],
              ].map(([t, d]) => (
                <div key={t} className="flex gap-3.5 items-start">
                  <div
                    className="w-8 h-8 rounded-xl flex-shrink-0 flex items-center justify-center"
                    style={{ backgroundColor: "#EAF0EA", color: "#3A5C3E" }}
                  >
                    <svg
                      className="w-4 h-4 fill-none stroke-current stroke-[2.5]"
                      viewBox="0 0 24 24"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <p
                      className="text-sm font-semibold mb-0.5"
                      style={{ color: "#2C1E12" }}
                    >
                      {t}
                    </p>
                    <p
                      className="text-xs leading-relaxed"
                      style={{ color: "#5A4A38" }}
                    >
                      {d}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* image mosaic */}
          <div className="grid grid-cols-2 gap-3">
            <div
              className="rounded-2xl overflow-hidden shadow-md"
              style={{ height: "300px" }}
            >
              <img
                src={glutAlt}
                alt="Glutathione soap bars"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="flex flex-col gap-3">
              <div
                className="rounded-2xl overflow-hidden shadow-md"
                style={{ height: "140px" }}
              >
                <img
                  src={redWrapped}
                  alt="Red Velvet soap wrapped"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div
                className="rounded-2xl overflow-hidden shadow-md"
                style={{ height: "140px" }}
              >
                <img
                  src={neemWrapped}
                  alt="Neem soap wrapped"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
