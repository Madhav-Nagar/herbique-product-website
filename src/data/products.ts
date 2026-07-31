// ── Glutathione images
import glutHero from "@/imports/herbique_hero_main.webp"
import glutAlt from "@/imports/herbique_glow_natural.webp"
import glutTrialCups from "@/imports/file_00000000c97081fb8f438756845257b2.webp"
import glutTrialPieces from "@/imports/file_0000000044e882078ecb044e6917569a.webp"

// ── Red Velvet images
import redHero from "@/imports/file_000000009f488207bf1f545274a3e32a.webp"
import redAlt from "@/imports/file_00000000e8d48207ae143bfc3af502f0.webp"
import redWrapped from "@/imports/file_0000000006b481faba42405e2267de13.webp"

// ── Neem images
import neemHero from "@/imports/file_0000000039f081fabcc14b64b723cfbd.webp"
import neemAlt from "@/imports/file_00000000c43481f8ae17367fe44a6def.webp"
import neemWrapped from "@/imports/file_0000000020d882308a477d88377da537.webp"

export const NAV_LINKS = [
  { label: "Products", href: "#products" },
  { label: "Ingredients", href: "#ingredients" },
  { label: "Benefits", href: "#benefits" },
  { label: "Reviews", href: "#reviews" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
]

export const PRODUCTS = [
  {
    id: "glutathione",
    name: "Glutathione Soap",
    tagline: "Best Seller",
    tagBg: "#C8A97E",
    tagText: "#2C1E12",
    heroImg: glutHero,
    altImg: glutAlt,
    extraImgs: [glutTrialCups, glutTrialPieces],
    gradient: "linear-gradient(135deg, #F5EDD8 0%, #E8D9B8 100%)",
    accentColor: "#9A7620",
    accentBg: "#FDF6E3",
    description:
      "Give your skin the care it deserves. Crafted with powerful, skin-loving actives, this soap helps improve the appearance of uneven skin tone while gently cleansing and refreshing — free from harsh chemicals.",
    benefits: [
      "Helps reduce tanning",
      "Helps improve the appearance of pigmentation",
      "Helps with pimples and blemishes",
      "Helps reduce hyperpigmentation",
      "Helps fade the appearance of dark spots",
      "Helps brighten the look of dark circles",
      "Helps improve the appearance of dark underarms",
      "Leaves skin feeling fresh and refreshed head to toe",
    ],
    ingredients: [
      {
        name: "Glutathione",
        benefit:
          "Helps brighten the appearance of the skin and supports a more even-looking skin tone.",
      },
      {
        name: "Kojic Acid",
        benefit:
          "Helps reduce the appearance of tanning, pigmentation and dark spots.",
      },
      {
        name: "Niacinamide",
        benefit:
          "Helps improve the skin barrier, control excess oil and reduce the appearance of pores and blemishes.",
      },
      {
        name: "Zinc",
        benefit:
          "Helps soothe the skin, supports acne-prone skin and promotes healthier-looking skin.",
      },
    ],
    pricing: [
      { label: "1 Bar (100g)", price: "₹270" },
      { label: "2 or more Bars (100g each)", price: "₹250 each" },
      { label: "Trial Pack — 3 × 10g pieces", price: "₹120" },
    ],
    trialNote:
      "Try before you commit — our 10g trial pieces are perfect for first-timers.",
  },
  {
    id: "redvelvet",
    name: "Red Velvet Soap",
    tagline: "Fan Favourite",
    tagBg: "#9B3A3A",
    tagText: "#FFFAF2",
    heroImg: redHero,
    altImg: redAlt,
    extraImgs: [redWrapped],
    gradient: "linear-gradient(135deg, #F5E6E6 0%, #EECFCF 100%)",
    accentColor: "#9B3A3A",
    accentBg: "#FDF0F0",
    description:
      "Specially crafted for open pores. Deeply cleanses the skin and helps improve the appearance of visible pores, leaving your skin feeling smoother, fresher, and healthier after every wash.",
    benefits: [
      "Deeply cleanses open pores",
      "Helps minimise the appearance of visible pores",
      "Leaves skin feeling smoother and fresher",
      "Soothes and refreshes skin",
      "Supports a healthier skin appearance",
    ],
    ingredients: [
      {
        name: "Niacinamide",
        benefit:
          "Minimises the appearance of pores, controls oil and strengthens the skin barrier.",
      },
      {
        name: "Tea Tree Oil",
        benefit:
          "Natural antimicrobial that deep-cleans pores and reduces bacterial build-up.",
      },
      {
        name: "Rosemary Oil",
        benefit:
          "Antioxidant-rich botanical that tones skin and promotes a refreshed, healthy appearance.",
      },
      {
        name: "Aloe Vera Gel",
        benefit:
          "Soothes irritation, provides lightweight hydration and accelerates skin healing.",
      },
      {
        name: "Vitamin E Oil",
        benefit:
          "Protects skin from free radical damage and deeply nourishes for a soft, supple feel.",
      },
      {
        name: "Witch Hazel Extract",
        benefit:
          "Natural astringent that tightens pores, reduces redness and calms inflammation.",
      },
    ],
    pricing: [{ label: "1 Bar (100g)", price: "₹120" }],
    trialNote: null,
  },
  {
    id: "neem",
    name: "Neem Soap",
    tagline: "Newly Launched",
    tagBg: "#3A5C3E",
    tagText: "#F7F2E9",
    heroImg: neemHero,
    altImg: neemAlt,
    extraImgs: [neemWrapped],
    gradient: "linear-gradient(135deg, #E4EDE4 0%, #CDE0CD 100%)",
    accentColor: "#3A5C3E",
    accentBg: "#EAF0EA",
    description:
      "Rooted in Ayurvedic tradition. Neem, Aloe Vera and Tulsi work together to fight acne, soothe itching and protect skin through every season — especially perfect for monsoon skincare.",
    benefits: [
      "Helps with acne & pimples",
      "Relieves itching (Khujli)",
      "Helps with common fungal skin concerns (Daad & Khaaj)",
      "Ideal for oily skin",
      "Perfect for monsoon skincare",
    ],
    ingredients: [
      {
        name: "Neem",
        benefit:
          "Potent antibacterial and antifungal herb used for centuries in Ayurvedic skincare to target acne and infections.",
      },
      {
        name: "Aloe Vera",
        benefit:
          "Soothes irritated skin, delivers deep hydration and accelerates the healing of blemishes.",
      },
      {
        name: "Tulsi (Holy Basil)",
        benefit:
          "Rich in antioxidants and antimicrobial compounds that purify skin, fight bacteria and reduce pimples.",
      },
    ],
    pricing: [{ label: "1 Bar (100g)", price: "₹120" }],
    trialNote: null,
  },
]

export type Product = typeof PRODUCTS[number]
