import { PRODUCTS, Product } from "@/data/products";

export default function Footer({
  onOpenProduct,
}: {
  onOpenProduct: (product: Product, sizeIndex?: number) => void;
}) {
  return (
    <footer style={{ backgroundColor: "#2C1E12" }} className="py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row gap-8 justify-between mb-8">
          <div className="max-w-xs">
            <p
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: "1.3rem",
                fontWeight: 700,
                color: "#F7F2E9",
                letterSpacing: "0.08em",
                lineHeight: "1.2",
              }}
            >
              HERBIQUE
            </p>
            <p
              style={{
                fontSize: "0.55rem",
                letterSpacing: "0.25em",
                color: "#8FAF7E",
                textTransform: "uppercase",
                marginTop: "2px",
              }}
            >
              Natural Soap Co.
            </p>
            <p
              className="mt-3 text-xs leading-relaxed"
              style={{ color: "#8A7A68" }}
            >
              Handcrafted botanical soaps for skin that glows naturally. Pure.
              Ethical. Effective. Made with care in every bar.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-12">
            <div>
              <p
                className="text-xs font-semibold tracking-widest uppercase mb-4"
                style={{ color: "#8FAF7E" }}
              >
                Products
              </p>
              {PRODUCTS.map((p) => (
                <button
                  key={p.id}
                  onClick={() => {
                    onOpenProduct(p, 0);
                  }}
                  className="block text-xs mb-2.5 transition-colors hover:text-[#C8A97E] text-left cursor-pointer"
                  style={{ color: "#8A7A68" }}
                >
                  {p.name}
                </button>
              ))}
            </div>
            <div>
              <p
                className="text-xs font-semibold tracking-widest uppercase mb-4"
                style={{ color: "#8FAF7E" }}
              >
                Connect
              </p>
              <a
                href="https://wa.me/918319070306"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-xs mb-2.5 transition-colors hover:text-[#C8A97E] text-left text-[#8A7A68]"
              >
                WhatsApp Support
              </a>
              <a
                href="tel:+918319070306"
                className="block text-xs mb-2.5 transition-colors hover:text-[#C8A97E] text-left text-[#8A7A68]"
              >
                Call Support (+91 8319070306)
              </a>
              <a
                href="mailto:herbique.skin@gmail.com"
                className="block text-xs mb-2.5 transition-colors hover:text-[#C8A97E] text-left text-[#8A7A68]"
              >
                Email Us
              </a>
              <a
                href="https://www.instagram.com/herbique.skin/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-xs mb-2.5 transition-colors hover:text-[#C8A97E] text-left text-[#8A7A68]"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Policy Note */}
        <div
          className="pt-5 pb-4 mb-4"
          style={{ borderTop: "1px solid #3A2E22" }}
        >
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: "#8FAF7E" }}
          >
            Policies
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div
              className="p-3 rounded-xl"
              style={{ backgroundColor: "#352A1E" }}
            >
              <p
                className="text-[11px] font-semibold mb-1"
                style={{ color: "#C8A97E" }}
              >
                Return Policy
              </p>
              <p
                className="text-[10px] leading-relaxed"
                style={{ color: "#8A7A68" }}
              >
                Due to the personal care nature of our products, we do not
                accept returns or exchanges once the soap has been opened or
                used. If you receive a damaged or incorrect item, please
                contact us within 48 hours of delivery and we will resolve it.
              </p>
            </div>
            <div
              className="p-3 rounded-xl"
              style={{ backgroundColor: "#352A1E" }}
            >
              <p
                className="text-[11px] font-semibold mb-1"
                style={{ color: "#C8A97E" }}
              >
                Privacy
              </p>
              <p
                className="text-[10px] leading-relaxed"
                style={{ color: "#8A7A68" }}
              >
                We only collect your name, address, and phone number to
                fulfill orders. We do not sell or share your personal
                information with third parties. Payment data is handled
                securely by our payment partners.
              </p>
            </div>
          </div>
        </div>

        <div
          className="pt-4 flex flex-col sm:flex-row justify-between items-center gap-2"
          style={{ borderTop: "1px solid #3A2E22" }}
        >
          <p style={{ fontSize: "0.68rem", color: "#5A4A38" }}>
            © 2026 HERBIQUE Natural Soap Co. All rights reserved.
          </p>
          <p style={{ fontSize: "0.68rem", color: "#5A4A38" }}>
            Made with ♥ and Botanicals
          </p>
        </div>
      </div>
    </footer>
  );
}
