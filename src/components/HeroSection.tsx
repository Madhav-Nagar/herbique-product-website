import glutHero from "@/imports/herbique_hero_main.webp";
import glutTrialPieces from "@/imports/file_0000000044e882078ecb044e6917569a.webp";
import neemHero from "@/imports/file_0000000039f081fabcc14b64b723cfbd.webp";

// Note: StarRating is presumed to be defined globally or needs its own import if separate
const StarRating = () => (
  <div className="flex gap-0.5 mt-1">
    {[1, 2, 3, 4, 5].map((s) => (
      <svg
        key={s}
        className="w-3 h-3 text-yellow-400 fill-current"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 15% 60%, rgba(143,175,126,0.16) 0%, transparent 55%), radial-gradient(ellipse at 85% 20%, rgba(200,169,126,0.14) 0%, transparent 50%)",
        }}
      />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-8 pb-10 sm:pt-12 sm:pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center">
          {/* copy */}
          <div className="flex flex-col gap-5 text-center sm:text-left order-2 sm:order-1">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <span
                className="h-px w-8 flex-shrink-0"
                style={{ backgroundColor: "#8FAF7E" }}
              />
              <span
                className="text-xs tracking-[0.22em] uppercase font-semibold"
                style={{ color: "#8FAF7E" }}
              >
                Handcrafted in India · Pure · Botanical
              </span>
            </div>

            <h1
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: "clamp(2.2rem, 6vw, 3.4rem)",
                fontWeight: 700,
                color: "#2C1E12",
                lineHeight: 1.15,
              }}
            >
              Unlock Your
              <br />
              <em style={{ color: "#3A5C3E", fontStyle: "italic" }}>
                Radiance
              </em>{" "}
              with
              <br />
              Nature's Best
            </h1>

            <p
              style={{
                fontSize: "0.95rem",
                color: "#5A4A38",
                lineHeight: 1.8,
                maxWidth: "420px",
                margin: "0 auto",
              }}
              className="sm:mx-0"
            >
              Three handcrafted soaps. Potent botanical actives. Zero harsh
              chemicals — from first lather to lasting glow.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 items-center sm:items-start pt-2">
              <a
                href="#products"
                className="px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide transition-all hover:opacity-90 hover:scale-[1.03] active:scale-95 shadow-md"
                style={{ backgroundColor: "#3A5C3E", color: "#F7F2E9" }}
              >
                Explore Soaps
              </a>
              <a
                href="#about"
                className="px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide border transition-all hover:bg-[#EDE8DF]"
                style={{ borderColor: "#D9D0C0", color: "#5A4A38" }}
              >
                Our Story
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 sm:gap-8 pt-4 border-t border-[#E0D8CC]/50 mt-2 max-w-sm sm:max-w-md mx-auto sm:mx-0">
              {[
                ["100%", "Handmade in India"],
                ["100%", "Natural Botanicals"],
                ["0%", "Harsh Chemicals"],
              ].map(([n, l]) => (
                <div key={l} className="text-center flex flex-col items-center">
                  <p
                    style={{
                      fontFamily: "Playfair Display, serif",
                      fontSize: "1.5rem",
                      fontWeight: 700,
                      color: "#3A5C3E",
                    }}
                  >
                    {n}
                  </p>
                  <p
                    style={{
                      fontSize: "0.62rem",
                      color: "#7A6A58",
                      letterSpacing: "0.07em",
                      textTransform: "uppercase",
                      marginTop: "2px",
                    }}
                  >
                    {l}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* hero images */}
          <div className="order-1 sm:order-2 flex justify-center sm:justify-end">
            <div className="relative w-72 sm:w-80">
              {/* main */}
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  border: "3px solid #E8E0D0",
                  boxShadow: "0 8px 32px rgba(44,30,18,0.12)",
                }}
              >
                <img
                  src={glutHero}
                  alt="HERBIQUE Glutathione Soap — best seller"
                  className="w-full object-cover"
                  style={{ height: "320px" }}
                />
              </div>
              {/* floating card — customer review quote */}
              <div
                className="absolute -bottom-5 -left-10 rounded-xl p-3 flex items-center gap-2.5 shadow-lg"
                style={{
                  backgroundColor: "#FBF8F2",
                  border: "1px solid #E0D8CC",
                  minWidth: "185px",
                }}
              >
                <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 bg-[#EDE8DF] border border-[#E0D8CC]">
                  <img
                    src={glutTrialPieces}
                    alt="Herbique customer choice"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "0.62rem",
                      fontWeight: 700,
                      color: "#8FAF7E",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    Customer Voice
                  </p>
                  <p
                    style={{
                      fontSize: "0.75rem",
                      fontFamily: "Work Sans, sans-serif",
                      color: "#2C1E12",
                      lineHeight: 1.3,
                      fontWeight: 600,
                    }}
                  >
                    "Clean & glowing skin!"
                  </p>
                  <StarRating />
                </div>
              </div>
              {/* neem thumbnail */}
              <div
                className="absolute -top-5 -right-5 rounded-xl overflow-hidden shadow-md"
                style={{
                  width: "68px",
                  height: "68px",
                  border: "2px solid #E0D8CC",
                }}
              >
                <img
                  src={neemHero}
                  alt="Neem Soap"
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0 flex items-end justify-center pb-1"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(44,30,18,0.5) 0%, transparent 60%)",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.5rem",
                      color: "#F7F2E9",
                      letterSpacing: "0.1em",
                      fontWeight: 600,
                    }}
                  >
                    NEW
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
