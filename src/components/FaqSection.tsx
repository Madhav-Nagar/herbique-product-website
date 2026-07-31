import { useState } from "react";

const FAQ_ITEMS = [
  {
    question: "Are Herbique soaps suitable for sensitive skin?",
    answer: "Yes, absolutely. All our soaps are handcrafted using natural, skin-loving botanical actives and are completely free from harsh synthetic detergents, parabens, and sulfates. For highly sensitive skin, we recommend starting with our Neem Soap or testing with our 3 × 10g Trial Pack first.",
  },
  {
    question: "What makes Herbique soaps different from commercial soaps?",
    answer: "Commercial soaps often strip the skin of its natural moisture barrier using cheap chemical surfactants. Herbique soaps are handcrafted in small batches, loaded with concentrated skin-active ingredients (like Glutathione, Niacinamide, Kojic Acid, Witch Hazel, and Tulsi), and cured for 4 weeks to ensure a gentle, non-stripping lather and high durability.",
  },
  {
    question: "How long does a single bar of soap last?",
    answer: "A standard 100g bar will last approximately 3 to 4 weeks of daily use, provided it is kept in a dry, draining soap dish between uses. Allowing the bar to dry between lathers maximizes its lifespan.",
  },
  {
    question: "How do I place an order and make a payment?",
    answer: "Clicking the 'Order via WhatsApp' button on any product opens a pre-filled chat message directly with our customer support. We will confirm your shipping address and share secure UPI, Google Pay, or Bank Transfer details to finalize your order. Orders are processed immediately upon confirmation.",
  },
  {
    question: "Do you ship pan-India and what are the delivery times?",
    answer: "Yes, we ship to all major pincodes across India. Once payment is confirmed, orders are dispatched within 24-48 hours. Delivery typically takes 3 to 5 business days depending on your location.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-10 sm:py-14"
      style={{ backgroundColor: "#F7F2E9" }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <p
            className="text-xs tracking-[0.22em] uppercase font-semibold mb-3"
            style={{ color: "#8FAF7E" }}
          >
            Got Questions?
          </p>
          <h2
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "clamp(1.7rem, 5vw, 2.6rem)",
              fontWeight: 700,
              color: "#2C1E12",
            }}
          >
            Frequently Asked Questions
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border transition-all duration-300 overflow-hidden"
                style={{
                  borderColor: isOpen ? "#3A5C3E" : "#E0D8CC",
                  backgroundColor: isOpen ? "#FBF8F2" : "#FBF8F2",
                  boxShadow: isOpen ? "0 4px 14px rgba(58, 92, 62, 0.04)" : "none",
                }}
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full text-left px-5 py-4.5 flex justify-between items-center gap-4 cursor-pointer focus:outline-none"
                >
                  <span
                    className="font-semibold text-sm sm:text-base transition-colors"
                    style={{ color: isOpen ? "#3A5C3E" : "#2C1E12" }}
                  >
                    {item.question}
                  </span>
                  <span
                    className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 flex-shrink-0"
                    style={{
                      backgroundColor: isOpen ? "#3A5C3E" : "#EDE8DF",
                      color: isOpen ? "#F7F2E9" : "#5A4A38",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    ▼
                  </span>
                </button>

                <div
                  className="transition-all duration-300 overflow-hidden"
                  style={{
                    maxHeight: isOpen ? "200px" : "0px",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div
                    className="px-5 pb-5 pt-0 text-xs sm:text-sm leading-relaxed"
                    style={{ color: "#5A4A38" }}
                  >
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
