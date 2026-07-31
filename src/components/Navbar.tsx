import { NAV_LINKS } from "@/data/products";

export default function Navbar({ 
  menuOpen, 
  setMenuOpen 
}: { 
  menuOpen: boolean; 
  setMenuOpen: (open: boolean) => void 
}) {
  return (
    <header
      className="sticky top-0 z-40 w-full"
      style={{
        backgroundColor: "rgba(247,242,233,0.94)",
        backdropFilter: "blur(14px)",
        borderBottom: "1px solid #E0D8CC",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex flex-col select-none">
          <span
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "1.4rem",
              fontWeight: 700,
              color: "#3A5C3E",
              letterSpacing: "0.08em",
              lineHeight: "1.2",
            }}
          >
            HERBIQUE
          </span>
          <span
            style={{
              fontSize: "0.55rem",
              letterSpacing: "0.28em",
              color: "#8FAF7E",
              textTransform: "uppercase",
              marginTop: "2px",
            }}
          >
            Natural Soap Co.
          </span>
        </a>

        <nav className="hidden sm:flex items-center gap-7">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-medium transition-colors hover:text-[#3A5C3E]"
              style={{ color: "#5A4A38" }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#products"
          className="hidden sm:inline-flex px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:opacity-90 hover:scale-[1.02] active:scale-95 shadow-sm"
          style={{ backgroundColor: "#3A5C3E", color: "#F7F2E9" }}
        >
          Shop Now
        </a>

        {/* hamburger */}
        <button
          className="sm:hidden flex flex-col justify-center items-end gap-1.5 w-10 h-10 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block h-0.5 transition-all duration-200"
              style={{
                backgroundColor: "#3A5C3E",
                width: i === 1 ? "16px" : "24px",
                ...(menuOpen && i === 0
                  ? {
                      transform: "rotate(45deg) translate(4px, 4px)",
                      width: "24px",
                    }
                  : {}),
                ...(menuOpen && i === 1 ? { opacity: 0 } : {}),
                ...(menuOpen && i === 2
                  ? {
                      transform: "rotate(-45deg) translate(4px, -4px)",
                      width: "24px",
                    }
                  : {}),
              }}
            />
          ))}
        </button>
      </div>

      {menuOpen && (
        <div
          className="sm:hidden px-4 py-3 flex flex-col gap-1"
          style={{
            borderTop: "1px solid #E0D8CC",
            backgroundColor: "#FBF8F2",
          }}
        >
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="py-3 px-4 rounded-xl text-sm font-medium hover:bg-[#EDE8DF] transition-colors"
              style={{ color: "#2C1E12" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#products"
            onClick={() => setMenuOpen(false)}
            className="mt-1 py-3 px-4 rounded-xl text-sm font-semibold text-center"
            style={{ backgroundColor: "#3A5C3E", color: "#F7F2E9" }}
          >
            Shop Now
          </a>
        </div>
      )}
    </header>
  );
}
