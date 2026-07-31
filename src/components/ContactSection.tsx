export default function ContactSection() {

  return (
    <section
      className="py-10 sm:py-14"
      style={{ backgroundColor: "#FBF8F2" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <p
              className="text-xs tracking-[0.22em] uppercase font-semibold mb-3"
              style={{ color: "#8FAF7E" }}
            >
              Get In Touch
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
              Direct Orders &<br />
              Customer Support
            </h2>
            <p
              className="mt-4 text-sm leading-relaxed"
              style={{ color: "#5A4A38" }}
            >
              Have questions about our ingredients, custom batches, or
              wholesale orders? Or prefer ordering directly over WhatsApp or
              Email? We are always here to help you.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              <a
                href="https://wa.me/918319070306"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl border border-[#D9D0C0] hover:border-[#3A5C3E] hover:bg-[#F1F6F2] transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#EAF0EA] flex items-center justify-center text-[#3A5C3E] group-hover:bg-[#3A5C3E] group-hover:text-white transition-all shadow-sm">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.982L2 22l5.202-1.362a9.92 9.92 0 0 0 4.808 1.236h.005c5.507 0 9.99-4.478 9.99-9.987C22.005 6.479 17.519 2 12.012 2Zm5.82 14.33c-.244.688-1.42 1.312-1.922 1.385-.452.065-.89.068-1.554-.153-2.617-1.01-4.305-3.692-4.437-3.868-.131-.176-1.066-1.42-1.066-2.709 0-1.288.665-1.92.902-2.176.236-.256.513-.32.684-.32l.492.003c.15 0 .285-.01.409.288.156.376.536 1.309.582 1.402.046.094.076.203.013.33-.063.126-.094.204-.189.314-.094.11-.197.246-.282.329-.094.094-.193.197-.083.388.11.19.49 1.83 1.05 2.33.722.643 1.332.843 1.52.923.189.08.3-.01.411-.137.11-.127.48-.56.608-.75.127-.19.255-.16.43-.095.176.065 1.11.524 1.3.618.19.095.317.14.364.223.047.083.047.48-.198 1.168Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#7A6A58] uppercase tracking-wider">
                    WhatsApp Us
                  </p>
                  <p className="text-sm font-bold text-[#2C1E12] mt-0.5">
                    8319070306
                  </p>
                </div>
              </a>

              <a
                href="mailto:herbique.skin@gmail.com"
                className="flex items-center gap-4 p-4 rounded-2xl border border-[#D9D0C0] hover:border-[#3A5C3E] hover:bg-[#F1F6F2] transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#EAF0EA] flex items-center justify-center text-[#3A5C3E] group-hover:bg-[#3A5C3E] group-hover:text-white transition-all shadow-sm">
                  <svg
                    className="w-5 h-5 fill-none stroke-current stroke-2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#7A6A58] uppercase tracking-wider">
                    Email Inquiry
                  </p>
                  <p className="text-sm font-bold text-[#2C1E12] mt-0.5">
                    herbique.skin@gmail.com
                  </p>
                </div>
              </a>
            </div>

          </div>

          {/* Right Column: Beautiful Info Card */}
          <div className="bg-[#3A5C3E] p-8 rounded-2xl text-[#F7F2E9] relative overflow-hidden shadow-lg flex flex-col justify-between min-h-[390px]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#8FAF7E]/10 rounded-full -mr-8 -mt-8 pointer-events-none" />
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C8A97E] bg-[#C8A97E]/10 px-3 py-1 rounded-full">
                Quick Checkout
              </span>
              <h3
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontSize: "1.7rem",
                  fontWeight: 700,
                }}
                className="mt-3 leading-tight"
              >
                Order Seamlessly
                <br />
                in 3 Simple Steps
              </h3>

              {/* Prominent High-Visibility Value Highlights */}
              <div className="mt-4 flex flex-col gap-2.5">
                <div className="bg-white/10 p-3.5 rounded-xl border border-white/10 shadow-sm transition-all hover:bg-white/15 hover:translate-x-1 duration-300">
                  <p className="font-semibold text-xs leading-none text-[#F7F2E9]">
                    Fast Dispatch India-wide
                  </p>
                  <p className="text-[10px] text-[#C8D8C2] mt-1.5 leading-none font-light">
                    Orders shipped within 24-48 hours
                  </p>
                </div>
                <div className="bg-white/10 p-3.5 rounded-xl border border-white/10 shadow-sm transition-all hover:bg-white/15 hover:translate-x-1 duration-300">
                  <p className="font-semibold text-xs leading-none text-[#F7F2E9]">
                    UPI & Bank Transfer Accepted
                  </p>
                  <p className="text-[10px] text-[#C8D8C2] mt-1.5 leading-none font-light">
                    Safe payment details provided on checkout
                  </p>
                </div>
              </div>
            </div>

            {/* Steps at the bottom */}
            <div 
              className="mt-6 p-4 rounded-2xl border border-white/15 bg-white/5 transition-all duration-300 hover:bg-white/10"
              style={{
                boxShadow: "inset 0 1px 1px rgba(255,255,255,0.1)",
              }}
            >
              <p className="text-[10px] font-bold text-[#C8A97E] uppercase tracking-widest mb-3.5 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8A97E]" />
                How It Works
              </p>
              <ol className="flex flex-col gap-3 text-xs text-[#EAF2E6] leading-relaxed">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#C8A97E]/20 border border-[#C8A97E]/30 text-[#C8A97E] flex items-center justify-center font-bold text-[10px]">
                    1
                  </span>
                  <p className="mt-0.5 font-light">
                    Choose your preferred soap variant and click{" "}
                    <strong className="text-white font-semibold">Order via WhatsApp</strong>.
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#C8A97E]/20 border border-[#C8A97E]/30 text-[#C8A97E] flex items-center justify-center font-bold text-[10px]">
                    2
                  </span>
                  <p className="mt-0.5 font-light">
                    A pre-filled message will open directly in your chat application.
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#C8A97E]/20 border border-[#C8A97E]/30 text-[#C8A97E] flex items-center justify-center font-bold text-[10px]">
                    3
                  </span>
                  <p className="mt-0.5 font-light">
                    Confirm your shipping details and complete payment to confirm your order.
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
