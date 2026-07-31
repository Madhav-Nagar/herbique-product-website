import glutTrialCups from "@/imports/file_00000000c97081fb8f438756845257b2.webp";
import glutTrialPieces from "@/imports/file_0000000044e882078ecb044e6917569a.webp";
import neemAlt from "@/imports/file_00000000c43481f8ae17367fe44a6def.webp";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-10 sm:py-14"
      style={{ backgroundColor: "#3A5C3E" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center">
          {/* image grid */}
          <div className="grid grid-cols-2 gap-3">
            <div
              className="rounded-2xl overflow-hidden shadow-md"
              style={{ height: "180px" }}
            >
              <img
                src={glutTrialCups}
                alt="HERBIQUE trial pieces"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="rounded-2xl overflow-hidden shadow-md"
              style={{ height: "180px" }}
            >
              <img
                src={glutTrialPieces}
                alt="HERBIQUE trial soap pieces"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="col-span-2 rounded-2xl overflow-hidden shadow-md"
              style={{ height: "160px" }}
            >
              <img
                src={neemAlt}
                alt="Neem bars with botanicals"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="text-center sm:text-left">
            <p
              className="text-xs tracking-[0.22em] uppercase font-semibold mb-3"
              style={{ color: "#8FAF7E" }}
            >
              Our Story
            </p>
            <h2
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: "clamp(1.7rem, 5vw, 2.4rem)",
                fontWeight: 700,
                color: "#F7F2E9",
                lineHeight: 1.25,
              }}
            >
              Born from Nature,
              <br />
              <em style={{ color: "#C8A97E" }}>Crafted for You</em>
            </h2>
            <p
              className="mt-4 text-sm"
              style={{ color: "#C8D8C2", lineHeight: 1.85 }}
            >
              HERBIQUE began with a simple belief: your skin deserves what the
              earth already provides. We source the finest botanical actives —
              glutathione, neem, tulsi, rose botanicals — and blend them into
              bars that nourish while they cleanse.
            </p>
            <p
              className="mt-3 text-sm"
              style={{ color: "#C8D8C2", lineHeight: 1.85 }}
            >
              Every batch is small. Every formula is intentional. Every bar is
              a promise to your skin.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-[#8FAF7E]/20 pt-6">
              {[
                ["100%", "Natural"],
                ["0", "Harsh Actives"],
                ["3", "Variants"],
              ].map(([n, l]) => (
                <div key={l} className="text-center">
                  <p
                    style={{
                      fontFamily: "Playfair Display, serif",
                      fontSize: "1.5rem",
                      fontWeight: 700,
                      color: "#F7F2E9",
                    }}
                  >
                    {n}
                  </p>
                  <p
                    style={{
                      fontSize: "0.62rem",
                      color: "#8FAF7E",
                      letterSpacing: "0.08em",
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
        </div>
      </div>
    </section>
  );
}
