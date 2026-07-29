import { useState } from 'react'

// ── Glutathione images
import glutHero from '@/imports/Gemini_Generated_Image_u4xtjeu4xtjeu4xt.png'
import glutAlt from '@/imports/Gemini_Generated_Image_htpltdhtpltdhtpl.png'
import glutTrialCups from '@/imports/file_00000000c97081fb8f438756845257b2.png'
import glutTrialPieces from '@/imports/file_0000000044e882078ecb044e6917569a.png'

// ── Red Velvet images
import redHero from '@/imports/file_000000009f488207bf1f545274a3e32a.png'
import redAlt from '@/imports/file_00000000e8d48207ae143bfc3af502f0.png'
import redWrapped from '@/imports/file_0000000006b481faba42405e2267de13.png'

// ── Neem images
import neemHero from '@/imports/file_0000000039f081fabcc14b64b723cfbd.png'
import neemAlt from '@/imports/file_00000000c43481f8ae17367fe44a6def.png'
import neemWrapped from '@/imports/file_0000000020d882308a477d88377da537.png'

const NAV_LINKS = [
  { label: 'Products', href: '#products' },
  { label: 'Ingredients', href: '#ingredients' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'About', href: '#about' },
]

const PRODUCTS = [
  {
    id: 'glutathione',
    name: 'Glutathione Soap',
    tagline: 'Best Seller',
    tagBg: '#C8A97E',
    tagText: '#2C1E12',
    heroImg: glutHero,
    altImg: glutAlt,
    extraImgs: [glutTrialCups, glutTrialPieces],
    gradient: 'linear-gradient(135deg, #F5EDD8 0%, #E8D9B8 100%)',
    accentColor: '#9A7620',
    accentBg: '#FDF6E3',
    description:
      'Give your skin the care it deserves. Crafted with powerful, skin-loving actives, this soap helps improve the appearance of uneven skin tone while gently cleansing and refreshing — free from harsh chemicals.',
    benefits: [
      'Helps reduce tanning',
      'Helps improve the appearance of pigmentation',
      'Helps with pimples and blemishes',
      'Helps reduce hyperpigmentation',
      'Helps fade the appearance of dark spots',
      'Helps brighten the look of dark circles',
      'Helps improve the appearance of dark underarms',
      'Leaves skin feeling fresh and refreshed head to toe',
    ],
    ingredients: [
      {
        name: 'Glutathione',
        benefit:
          'Helps brighten the appearance of the skin and supports a more even-looking skin tone.',
      },
      {
        name: 'Kojic Acid',
        benefit:
          'Helps reduce the appearance of tanning, pigmentation and dark spots.',
      },
      {
        name: 'Niacinamide',
        benefit:
          'Helps improve the skin barrier, control excess oil and reduce the appearance of pores and blemishes.',
      },
      {
        name: 'Zinc',
        benefit:
          'Helps soothe the skin, supports acne-prone skin and promotes healthier-looking skin.',
      },
    ],
    pricing: [
      { label: '1 Bar (100g)', price: '₹270' },
      { label: '2 or more Bars (100g each)', price: '₹250 each' },
      { label: 'Trial Pack — 3 × 10g pieces', price: '₹120' },
    ],
    trialNote: 'Try before you commit — our 10g trial pieces are perfect for first-timers.',
  },
  {
    id: 'redvelvet',
    name: 'Red Velvet Soap',
    tagline: 'Fan Favourite',
    tagBg: '#9B3A3A',
    tagText: '#FFFAF2',
    heroImg: redHero,
    altImg: redAlt,
    extraImgs: [redWrapped],
    gradient: 'linear-gradient(135deg, #F5E6E6 0%, #EECFCF 100%)',
    accentColor: '#9B3A3A',
    accentBg: '#FDF0F0',
    description:
      'Specially crafted for open pores. Deeply cleanses the skin and helps improve the appearance of visible pores, leaving your skin feeling smoother, fresher, and healthier after every wash.',
    benefits: [
      'Deeply cleanses open pores',
      'Helps minimise the appearance of visible pores',
      'Leaves skin feeling smoother and fresher',
      'Soothes and refreshes skin',
      'Supports a healthier skin appearance',
    ],
    ingredients: [
      {
        name: 'Niacinamide',
        benefit:
          'Minimises the appearance of pores, controls oil and strengthens the skin barrier.',
      },
      {
        name: 'Tea Tree Oil',
        benefit:
          'Natural antimicrobial that deep-cleans pores and reduces bacterial build-up.',
      },
      {
        name: 'Rosemary Oil',
        benefit:
          'Antioxidant-rich botanical that tones skin and promotes a refreshed, healthy appearance.',
      },
      {
        name: 'Aloe Vera Gel',
        benefit:
          'Soothes irritation, provides lightweight hydration and accelerates skin healing.',
      },
      {
        name: 'Vitamin E Oil',
        benefit:
          'Protects skin from free radical damage and deeply nourishes for a soft, supple feel.',
      },
      {
        name: 'Witch Hazel Extract',
        benefit:
          'Natural astringent that tightens pores, reduces redness and calms inflammation.',
      },
    ],
    pricing: [
      { label: '1 Bar (100g)', price: '₹120' },
    ],
    trialNote: null,
  },
  {
    id: 'neem',
    name: 'Neem Soap',
    tagline: 'Newly Launched',
    tagBg: '#3A5C3E',
    tagText: '#F7F2E9',
    heroImg: neemHero,
    altImg: neemAlt,
    extraImgs: [neemWrapped],
    gradient: 'linear-gradient(135deg, #E4EDE4 0%, #CDE0CD 100%)',
    accentColor: '#3A5C3E',
    accentBg: '#EAF0EA',
    description:
      'Rooted in Ayurvedic tradition. Neem, Aloe Vera and Tulsi work together to fight acne, soothe itching and protect skin through every season — especially perfect for monsoon skincare.',
    benefits: [
      'Helps with acne & pimples',
      'Relieves itching (Khujli)',
      'Helps with common fungal skin concerns (Daad & Khaaj)',
      'Ideal for oily skin',
      'Perfect for monsoon skincare',
    ],
    ingredients: [
      {
        name: 'Neem',
        benefit:
          'Potent antibacterial and antifungal herb used for centuries in Ayurvedic skincare to target acne and infections.',
      },
      {
        name: 'Aloe Vera',
        benefit:
          'Soothes irritated skin, delivers deep hydration and accelerates the healing of blemishes.',
      },
      {
        name: 'Tulsi (Holy Basil)',
        benefit:
          'Rich in antioxidants and antimicrobial compounds that purify skin, fight bacteria and reduce pimples.',
      },
    ],
    pricing: [
      { label: '1 Bar (100g)', price: '₹120' },
    ],
    trialNote: null,
  },
]

function StarRating({ n = 5 }: { n?: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <span key={i} style={{ color: i <= n ? '#C8A97E' : '#D9D0C0', fontSize: '13px', lineHeight: 1 }}>
          ★
        </span>
      ))}
    </div>
  )
}

// ─── Product Card ──────────────────────────────────────────────
function ProductCard({
  product,
  onOpen,
}: {
  product: (typeof PRODUCTS)[0]
  onOpen: (p: (typeof PRODUCTS)[0]) => void
}) {
  return (
    <div
      className="rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:translate-y-[-4px] hover:shadow-xl"
      style={{
        backgroundColor: '#FBF8F2',
        border: '1px solid #E0D8CC',
        boxShadow: '0 2px 12px rgba(44,30,18,0.06)',
      }}
    >
      {/* image */}
      <div className="relative overflow-hidden" style={{ height: '260px', background: product.gradient }}>
        <img
          src={product.heroImg}
          alt={`HERBIQUE ${product.name}`}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(44,30,18,0.18) 0%, transparent 55%)' }} />
        <span
          className="absolute top-3 left-3 text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full shadow-sm"
          style={{ backgroundColor: product.tagBg, color: product.tagText, fontFamily: 'Work Sans, sans-serif' }}
        >
          {product.tagline}
        </span>
      </div>

      {/* body */}
      <div className="p-5 flex flex-col flex-1 gap-3.5">
        <div>
          <p className="text-xs tracking-[0.18em] uppercase mb-1 font-semibold" style={{ color: '#8FAF7E', fontFamily: 'Work Sans, sans-serif' }}>
            HERBIQUE
          </p>
          <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.25rem', fontWeight: 700, color: '#2C1E12', lineHeight: 1.25 }}>
            {product.name}
          </h3>
        </div>

        <p style={{ fontSize: '0.83rem', color: '#5A4A38', lineHeight: 1.7 }} className="flex-1">
          {product.description}
        </p>

        {/* Highlight trial soap on card if glutathione */}
        {product.id === 'glutathione' && (
          <div className="bg-[#FAF5ED] border border-[#EBE3D5] rounded-xl p-2.5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg overflow-hidden flex-shrink-0 bg-[#EDE8DF] border border-[#E0D8CC]">
                <img src={glutTrialPieces} alt="Trial Pack" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] font-extrabold uppercase tracking-wider text-[#9A7620] leading-none mb-0.5">Trial Soap Available</span>
                <span className="text-[11px] text-[#2C1E12] font-semibold leading-none">3 × 10g set · ₹120</span>
              </div>
            </div>
            <span className="text-[9px] font-bold bg-[#E8D9B8] text-[#2C1E12] px-2 py-1 rounded-full uppercase tracking-wider">
              Try First
            </span>
          </div>
        )}

        {/* ingredient pills */}
        <div className="flex flex-wrap gap-1.5 pt-0.5">
          {product.ingredients.slice(0, 3).map(ing => (
            <span
              key={ing.name}
              className="text-xs px-2.5 py-1 rounded-full transition-colors hover:bg-[#3A5C3E]/10"
              style={{ backgroundColor: product.accentBg, color: product.accentColor, border: `1px solid ${product.accentColor}22` }}
            >
              {ing.name}
            </span>
          ))}
          {product.ingredients.length > 3 && (
            <span className="text-xs px-2.5 py-1 rounded-full" style={{ backgroundColor: '#EDE8DF', color: '#7A6A58' }}>
              +{product.ingredients.length - 3}
            </span>
          )}
        </div>

        {/* price row */}
        <div className="flex items-end justify-between pt-1 border-t border-[#E0D8CC]/50">
          <div>
            <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', fontWeight: 700, color: '#2C1E12' }}>
              {product.pricing[0].price}
            </p>
            <p style={{ fontSize: '0.7rem', color: '#7A6A58', marginTop: '1px' }}>
              {product.pricing[0].label} {product.id === 'glutathione' && ' (Best Value)'}
            </p>
          </div>
          <StarRating />
        </div>

        <button
          onClick={() => onOpen(product)}
          className="w-full py-3.5 rounded-xl text-sm font-semibold tracking-wide transition-all duration-200 hover:opacity-90 active:scale-[0.98] shadow-sm cursor-pointer"
          style={{ backgroundColor: '#3A5C3E', color: '#F7F2E9', fontFamily: 'Work Sans, sans-serif', letterSpacing: '0.04em' }}
        >
          View Details & Pricing
        </button>
      </div>
    </div>
  )
}

// ─── Product Modal ─────────────────────────────────────────────
function ProductModal({ product, onClose }: { product: (typeof PRODUCTS)[0]; onClose: () => void }) {
  const [imgIndex, setImgIndex] = useState(0)
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0)
  const allImgs = [product.heroImg, product.altImg, ...product.extraImgs]

  const getWhatsAppLink = () => {
    let text = ''
    if (product.id === 'glutathione') {
      if (selectedSizeIndex === 0) {
        text = "Hi HERBIQUE! I would like to order 1 Bar of Glutathione Soap (100g) for ₹270."
      } else if (selectedSizeIndex === 1) {
        text = "Hi HERBIQUE! I would like to order 2 or more Bars of Glutathione Soap (100g) for ₹250 each."
      } else {
        text = "Hi HERBIQUE! I would like to order the Glutathione Soap Trial Pack (3 × 10g pieces) for ₹120."
      }
    } else {
      text = `Hi HERBIQUE! I would like to order 1 Bar of ${product.name} (100g) for ${product.pricing[0].price}.`
    }
    return `https://wa.me/918319070306?text=${encodeURIComponent(text)}`
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
      style={{ backgroundColor: 'rgba(44,30,18,0.55)', backdropFilter: 'blur(6px)' }}
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg rounded-t-3xl sm:rounded-2xl overflow-hidden flex flex-col shadow-2xl transition-all"
        style={{ backgroundColor: '#FBF8F2', maxHeight: '92vh' }}
        onClick={e => e.stopPropagation()}
      >
        {/* image carousel */}
        <div className="relative overflow-hidden flex-shrink-0" style={{ height: '260px', background: product.gradient }}>
          <img
            src={allImgs[imgIndex]}
            alt={`HERBIQUE ${product.name}`}
            className="w-full h-full object-cover transition-opacity duration-300"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(44,30,18,0.25) 0%, transparent 55%)' }} />

          {/* close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-all hover:bg-black/30 hover:scale-105 active:scale-95"
            style={{ backgroundColor: 'rgba(44,30,18,0.45)', color: '#F7F2E9', fontSize: '18px', lineHeight: 1 }}
          >
            ×
          </button>

          {/* badge */}
          <span
            className="absolute top-4 left-4 text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full shadow-sm"
            style={{ backgroundColor: product.tagBg, color: product.tagText }}
          >
            {product.tagline}
          </span>

          {/* thumbnail dots */}
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
            {allImgs.map((_, i) => (
              <button
                key={i}
                onClick={() => setImgIndex(i)}
                className="rounded-full transition-all cursor-pointer"
                style={{
                  width: i === imgIndex ? '20px' : '6px',
                  height: '6px',
                  backgroundColor: i === imgIndex ? '#F7F2E9' : 'rgba(247,242,233,0.5)',
                }}
              />
            ))}
          </div>
        </div>

        {/* scrollable content */}
        <div className="overflow-y-auto flex-1 p-5 flex flex-col gap-6">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase mb-1 font-semibold" style={{ color: '#8FAF7E' }}>HERBIQUE</p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', fontWeight: 700, color: '#2C1E12' }}>
              {product.name}
            </h2>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: '#5A4A38' }}>{product.description}</p>
          </div>

          {/* pricing/variant selector */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.18em] uppercase mb-3" style={{ color: '#7A6A58' }}>
              📦 Select Size / Option
            </h3>
            
            {product.id === 'glutathione' ? (
              <div className="flex flex-col gap-2.5">
                {[
                  { id: '1bar', label: '1 Bar (100g)', price: '₹270', desc: 'Standard full-sized bar for daily skincare.', imgIdx: 0 },
                  { id: '2bars', label: '2 or more Bars', price: '₹250 each', desc: 'Saves ₹20 per bar. Best value for regular use.', imgIdx: 1 },
                  { id: 'trial', label: 'Trial Pack (3 × 10g pieces)', price: '₹120', desc: 'Perfect mini-bars to test skin compatibility before buying full size.', imgIdx: 3 },
                ].map((opt, i) => {
                  const isSelected = selectedSizeIndex === i
                  return (
                    <button
                      key={opt.id}
                      onClick={() => {
                        setSelectedSizeIndex(i)
                        setImgIndex(opt.imgIdx)
                      }}
                      className="text-left p-3.5 rounded-xl border transition-all flex justify-between items-start gap-4 cursor-pointer"
                      style={{
                        borderColor: isSelected ? '#3A5C3E' : '#E0D8CC',
                        backgroundColor: isSelected ? '#F1F6F2' : '#FBF8F2',
                        boxShadow: isSelected ? '0 4px 12px rgba(58,92,62,0.05)' : 'none',
                      }}
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="w-4 h-4 rounded-full border flex items-center justify-center flex-shrink-0"
                            style={{ borderColor: isSelected ? '#3A5C3E' : '#D9D0C0', backgroundColor: isSelected ? '#3A5C3E' : 'transparent' }}
                          >
                            {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#F7F2E9]" />}
                          </span>
                          <span className="font-semibold text-sm" style={{ color: '#2C1E12' }}>{opt.label}</span>
                          {opt.id === 'trial' && (
                            <span className="text-[9px] bg-[#E8D9B8] text-[#2C1E12] font-extrabold uppercase px-1.5 py-0.5 rounded">Popular</span>
                          )}
                        </div>
                        <p className="text-xs mt-1 leading-relaxed" style={{ color: '#5A4A38' }}>{opt.desc}</p>
                      </div>
                      <span className="font-bold text-sm" style={{ color: isSelected ? '#3A5C3E' : '#2C1E12' }}>{opt.price}</span>
                    </button>
                  )
                })}
              </div>
            ) : (
              // For Red Velvet & Neem (only 1 size option available)
              <div className="p-3.5 rounded-xl border flex justify-between items-center" style={{ borderColor: '#E0D8CC', backgroundColor: '#FBF8F2' }}>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-[#3A5C3E] flex items-center justify-center flex-shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F7F2E9]" />
                    </span>
                    <p className="font-semibold text-sm" style={{ color: '#2C1E12' }}>1 Bar (100g)</p>
                  </div>
                  <p className="text-xs mt-1 text-[#5A4A38]">Premium handcrafted organic formulation curing for 4 weeks.</p>
                </div>
                <p className="font-bold text-base" style={{ color: product.accentColor }}>{product.pricing[0].price}</p>
              </div>
            )}
            
            {product.id === 'glutathione' && selectedSizeIndex === 2 && (
              <p className="text-xs text-[#9A7620] mt-2 leading-relaxed bg-[#FDF6E3] p-3 rounded-lg border border-[#F5EDD8]">
                💡 <strong>Trial Pack Note</strong>: Features 3 mini cubes (10g each). Essential for first-timers to perform a patch test or try out the soap texture.
              </p>
            )}
          </div>

          {/* benefits with premium checkmarks */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.18em] uppercase mb-3" style={{ color: '#7A6A58' }}>
              ✨ Key Benefits
            </h3>
            <div className="flex flex-col gap-2">
              {product.benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-3 text-sm animate-fadeIn" style={{ color: '#3A2C20' }}>
                  <span className="flex-shrink-0 mt-0.5 text-[#3A5C3E]">
                    <svg className="w-4 h-4 fill-none stroke-current stroke-[2.5]" viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span style={{ lineHeight: 1.5 }}>{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ingredients */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.18em] uppercase mb-3" style={{ color: '#7A6A58' }}>
              🌿 Key Actives & Benefits
            </h3>
            <div className="flex flex-col gap-2.5">
              {product.ingredients.map((ing, i) => (
                <div
                  key={i}
                  className="flex gap-3 p-3 rounded-xl transition-all hover:bg-white/50"
                  style={{ backgroundColor: product.accentBg, border: `1px solid ${product.accentColor}1A` }}
                >
                  <div
                    className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold"
                    style={{ backgroundColor: product.accentColor, color: '#FBF8F2', marginTop: '1px' }}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-0.5" style={{ color: '#2C1E12' }}>{ing.name}</p>
                    <p className="text-xs leading-relaxed" style={{ color: '#5A4A38' }}>{ing.benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* why herbique card */}
          <div className="rounded-xl p-4" style={{ backgroundColor: '#EDE8DF' }}>
            <p className="text-xs font-semibold tracking-[0.15em] uppercase mb-2.5" style={{ color: '#7A6A58' }}>
              🤍 Why Choose HERBIQUE?
            </p>
            <div className="grid grid-cols-2 gap-2">
              {['Handmade with care', 'Organic ingredients', 'No harsh chemicals', 'Daily cleansing safe'].map(w => (
                <div key={w} className="flex items-center gap-2 text-xs text-[#3A2C20]">
                  <span className="text-[#3A5C3E] flex-shrink-0">
                    <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-[2.5]" viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span>{w}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex gap-3 pb-1 mt-2">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3.5 rounded-xl text-sm font-semibold tracking-wide transition-all hover:opacity-90 flex items-center justify-center gap-2 cursor-pointer"
              style={{ backgroundColor: '#3A5C3E', color: '#F7F2E9', fontFamily: 'Work Sans, sans-serif' }}
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.665.988 3.3 1.488 5.27 1.489 5.372 0 9.742-4.368 9.745-9.743.001-2.602-1.011-5.05-2.854-6.895C16.896 2.16 14.444.996 11.84.996c-5.38 0-9.75 4.369-9.754 9.746-.002 1.843.479 3.645 1.393 5.244l-1.01 3.689 3.782-.992zm13.596-7.8c-.28-.14-1.65-.81-1.91-.9-.26-.1-.45-.15-.64.15-.19.3-.73.9-.9.1-.16.2-.33.1-.61-.04-.27-.14-1.163-.428-2.11-.926-.733-.655-1.178-.987-1.18-.33-.002-.66-.3-.66-.6 0-.27.1-.5.25-.67.14-.17.38-.45.57-.67.19-.23.25-.33.38-.56.13-.23.06-.43-.03-.57-.09-.14-.64-1.54-.88-2.11-.23-.56-.47-.48-.64-.49-.17-.01-.36-.01-.56-.01-.2 0-.52.07-.79.37-.27.3-1.03 1.01-1.03 2.47s1.06 2.87 1.21 3.07c.15.2 2.09 3.19 5.06 4.48.7.3 1.26.49 1.69.63.71.22 1.35.19 1.86.12.57-.08 1.65-.67 1.88-1.32.23-.65.23-1.21.16-1.32-.07-.11-.26-.19-.54-.33z"/>
              </svg>
              Order via WhatsApp
            </a>
            <button
              onClick={onClose}
              className="px-5 py-3.5 rounded-xl text-sm font-semibold tracking-wide border transition-all hover:bg-[#EDE8DF] cursor-pointer"
              style={{ borderColor: '#D9D0C0', color: '#5A4A38' }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Live Reviews Section ──────────────────────────────────────────
type Review = {
  id: string
  name: string
  productName: string
  rating: number
  comment: string
  date: string
}

function ReviewsSection() {
  const [reviews, setReviews] = useState<Review[]>(() => {
    try {
      const saved = localStorage.getItem('herbique_reviews')
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  const [name, setName] = useState('')
  const [productName, setProductName] = useState('Glutathione Soap')
  const [rating, setRating] = useState(5)
  const [comment, setComment] = useState('')
  const [hoverRating, setHoverRating] = useState<number | null>(null)
  const [submittedSuccess, setSubmittedSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !comment.trim()) return

    const newReview: Review = {
      id: Date.now().toString(),
      name: name.trim(),
      productName,
      rating,
      comment: comment.trim(),
      date: new Date().toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      })
    }

    const updated = [newReview, ...reviews]
    setReviews(updated)
    localStorage.setItem('herbique_reviews', JSON.stringify(updated))

    // Reset form
    setName('')
    setComment('')
    setRating(5)
    setSubmittedSuccess(true)
    setTimeout(() => setSubmittedSuccess(false), 4000)
  }

  return (
    <section id="reviews" className="py-16 sm:py-20" style={{ backgroundColor: '#F0EAE0' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Left Column: Review Form */}
          <div className="md:col-span-1 bg-[#FBF8F2] p-6 rounded-2xl border border-[#E0D8CC] shadow-sm">
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', fontWeight: 700, color: '#2C1E12' }} className="mb-2">
              Share Your Experience
            </h3>
            <p className="text-xs text-[#7A6A58] mb-6 leading-relaxed">
              Your honest feedback helps us maintain our quality and helps others choose the right soap.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#5A4A38] uppercase tracking-wider mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#D9D0C0] text-sm bg-white focus:outline-none focus:border-[#3A5C3E]"
                  style={{ color: '#2C1E12' }}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#5A4A38] uppercase tracking-wider mb-1">Select Soap</label>
                <select
                  value={productName}
                  onChange={e => setProductName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#D9D0C0] text-sm bg-white focus:outline-none focus:border-[#3A5C3E] cursor-pointer"
                  style={{ color: '#2C1E12' }}
                >
                  <option value="Glutathione Soap">Glutathione Soap</option>
                  <option value="Red Velvet Soap">Red Velvet Soap</option>
                  <option value="Neem Soap">Neem Soap</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#5A4A38] uppercase tracking-wider mb-1">Rating</label>
                <div className="flex gap-1 items-center">
                  {[1, 2, 3, 4, 5].map(star => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(null)}
                      className="text-2xl transition-all focus:outline-none hover:scale-110 active:scale-95 cursor-pointer"
                      style={{
                        color: star <= (hoverRating ?? rating) ? '#C8A97E' : '#D9D0C0'
                      }}
                    >
                      ★
                    </button>
                  ))}
                  <span className="text-xs text-[#7A6A58] ml-2">({hoverRating ?? rating}/5 stars)</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#5A4A38] uppercase tracking-wider mb-1">Your Review</label>
                <textarea
                  required
                  rows={4}
                  value={comment}
                  onChange={e => setComment(e.target.value)}
                  placeholder="Tell us about the lather, fragrance, and how your skin feels..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#D9D0C0] text-sm bg-white focus:outline-none focus:border-[#3A5C3E] resize-none"
                  style={{ color: '#2C1E12' }}
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl text-sm font-semibold tracking-wide transition-all duration-200 hover:opacity-90 active:scale-[0.98] cursor-pointer"
                style={{ backgroundColor: '#3A5C3E', color: '#F7F2E9', fontFamily: 'Work Sans, sans-serif' }}
              >
                Submit Review
              </button>

              {submittedSuccess && (
                <p className="text-xs text-[#3A5C3E] font-medium text-center bg-[#F1F6F2] py-2 rounded-lg border border-[#3A5C3E]/20">
                  ✓ Review submitted and saved to database!
                </p>
              )}
            </form>
          </div>

          {/* Right Column: Reviews List */}
          <div className="md:col-span-2 flex flex-col">
            <div className="mb-6 flex justify-between items-end">
              <div>
                <p className="text-xs tracking-[0.22em] uppercase font-semibold mb-2" style={{ color: '#8FAF7E' }}>Customer Voice</p>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', fontWeight: 700, color: '#2C1E12' }}>
                  Live Reviews
                </h3>
              </div>
              <span className="text-xs font-semibold text-[#7A6A58] bg-[#EDE8DF] px-3 py-1.5 rounded-full border border-[#E0D8CC]">
                {reviews.length} {reviews.length === 1 ? 'Review' : 'Reviews'}
              </span>
            </div>

            {reviews.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center p-8 bg-[#FBF8F2] rounded-2xl border border-[#E0D8CC] border-dashed">
                <span className="text-4xl mb-3">✍</span>
                <h4 className="font-semibold text-[#2C1E12] text-sm">No reviews yet</h4>
                <p className="text-xs text-[#7A6A58] mt-1 max-w-xs leading-relaxed">
                  Be the first to review one of our soaps! Fill out the form on the left to save your feedback in our database.
                </p>
              </div>
            ) : (
              <div className="flex-1 overflow-y-auto max-h-[520px] flex flex-col gap-4 pr-1">
                {reviews.map(r => (
                  <div
                    key={r.id}
                    className="p-5 rounded-2xl bg-[#FBF8F2] border border-[#E0D8CC] shadow-sm flex flex-col gap-3 transition-all hover:border-[#3A5C3E]/30"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-semibold text-sm" style={{ color: '#2C1E12' }}>{r.name}</p>
                          <span className="text-[10px] font-medium bg-[#EAF0EA] text-[#3A5C3E] px-2 py-0.5 rounded-full flex items-center gap-1 border border-[#3A5C3E]/10">
                            ✓ Verified Buyer
                          </span>
                        </div>
                        <p className="text-[11px] text-[#7A6A58] mt-0.5">Reviewed: <strong className="text-[#5A4A38]">{r.productName}</strong></p>
                      </div>
                      <p className="text-[10px] text-[#8A7A68]">{r.date}</p>
                    </div>

                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map(star => (
                        <span key={star} style={{ color: star <= r.rating ? '#C8A97E' : '#D9D0C0', fontSize: '13px' }}>
                          ★
                        </span>
                      ))}
                    </div>

                    <p className="text-xs leading-relaxed" style={{ color: '#4A3C2C' }}>
                      "{r.comment}"
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
          
        </div>
      </div>
    </section>
  )
}

// ─── Ingredients Spotlight Section (Editorial Design) ──────────
function IngredientsSection() {
  const [activeTab, setActiveTab] = useState('glutathione')
  const activeProduct = PRODUCTS.find(p => p.id === activeTab) || PRODUCTS[0]

  const getIngredientIcon = (name: string, color: string) => {
    const n = name.toLowerCase()
    if (n.includes('glutathione') || n.includes('tulsi')) {
      return (
        <svg className="w-4 h-4" fill="none" stroke={color} strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4M4 19h4M18 13v4M16 15h4M12 7l1.5 3.5L17 12l-3.5 1.5L12 17l-1.5-3.5L7 12l3.5-1.5L12 7z" />
        </svg>
      )
    }
    if (n.includes('kojic') || n.includes('vitamin e') || n.includes('rosemary')) {
      return (
        <svg className="w-4 h-4" fill="none" stroke={color} strokeWidth="2.5" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="4" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
      )
    }
    if (n.includes('niacinamide') || n.includes('zinc')) {
      return (
        <svg className="w-4 h-4" fill="none" stroke={color} strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
    if (n.includes('aloe') || n.includes('oil')) {
      return (
        <svg className="w-4 h-4" fill="none" stroke={color} strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 22a7 7 0 007-7c0-4.3-7-13-7-13S5 10.7 5 15a7 7 0 007 7z" />
        </svg>
      )
    }
    return (
      <svg className="w-4 h-4" fill="none" stroke={color} strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M12 3c-4 0-7 3-7 7 0 4 3 7 7 11M12 3c4 0 7 3 7 7 0 4-3 7-7 11" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 10c3 1 6 1 7 4M19 10c-3 1-6 1-7 4" />
      </svg>
    )
  }

  const getProductSpotlightDetails = (id: string) => {
    switch (id) {
      case 'glutathione':
        return {
          skinType: 'All Skin Types',
          concern: 'Pigmentation, Tanning & Dark Spots',
          aroma: 'Rich Warm Honey-Botanical',
        }
      case 'redvelvet':
        return {
          skinType: 'Oily & Combination Skin',
          concern: 'Open Pores & Uneven Texture',
          aroma: 'Fresh Tea Tree & Rose Herbal',
        }
      case 'neem':
        return {
          skinType: 'Acne-Prone & Sensitive Skin',
          concern: 'Acne, Itching & Monsoon Skincare',
          aroma: 'Traditional Purifying Neem-Tulsi',
        }
      default:
        return {
          skinType: 'All Skin Types',
          concern: 'General Skincare',
          aroma: 'Natural Botanical',
        }
    }
  }

  const spotlight = getProductSpotlightDetails(activeProduct.id)

  return (
    <section id="ingredients" className="py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <p className="text-xs tracking-[0.22em] uppercase font-semibold mb-3" style={{ color: '#8FAF7E' }}>What's Inside</p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.7rem, 5vw, 2.6rem)', fontWeight: 700, color: '#2C1E12' }}>
            Ingredients That Actually Work
          </h2>
          <p className="text-xs text-[#7A6A58] mt-2 max-w-sm mx-auto leading-relaxed">
            Select a soap below to explore its active botanical formulation and see how it targets your skin concerns.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="flex gap-8 border-b border-[#E0D8CC] pb-2 max-w-lg w-full justify-center">
            {PRODUCTS.map(p => {
              const isActive = activeTab === p.id
              return (
                <button
                  key={p.id}
                  onClick={() => setActiveTab(p.id)}
                  className="px-2 py-1 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer relative"
                  style={{
                    color: isActive ? '#3A5C3E' : '#7A6A58',
                  }}
                >
                  {p.name.split(' ')[0]}
                  {isActive && (
                    <span
                      className="absolute bottom-[-10px] left-0 right-0 h-[2px] bg-[#3A5C3E] rounded-full transition-all duration-300"
                    />
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {/* Spotlight Showcase Grid */}
        <div
          className="rounded-3xl overflow-hidden flex flex-col md:flex-row gap-0 border shadow-lg transition-all duration-500 bg-white"
          style={{ borderColor: '#E0D8CC' }}
        >
          {/* Left Column: Soap Full-Bleed Cover Image */}
          <div className="w-full md:w-[35%] lg:w-[38%] h-64 md:h-auto relative overflow-hidden flex-shrink-0 bg-[#F8F3EA]">
            <img src={activeProduct.heroImg} alt={activeProduct.name} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent md:hidden" />
            {/* Tagline badge floating on image for mobile view */}
            <span
              className="absolute bottom-4 left-4 text-[9px] font-bold uppercase tracking-[0.15em] px-2.5 py-1 rounded-md inline-block border bg-white/90 backdrop-blur-sm md:hidden"
              style={{ borderColor: `${activeProduct.accentColor}33`, color: activeProduct.accentColor }}
            >
              {activeProduct.tagline}
            </span>
          </div>

          {/* Right Column: Content Details */}
          <div className="w-full md:w-[65%] lg:w-[62%] p-6 sm:p-8 md:p-10 flex flex-col justify-between" style={{ backgroundColor: '#FBF8F2' }}>
            <div>
              <div className="flex justify-between items-start gap-4">
                <div>
                  <span
                    className="hidden md:inline-block text-[9px] font-bold uppercase tracking-[0.15em] px-2.5 py-1 rounded-md border"
                    style={{ borderColor: `${activeProduct.accentColor}33`, color: activeProduct.accentColor, backgroundColor: `${activeProduct.accentColor}0A` }}
                  >
                    {activeProduct.tagline}
                  </span>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.6rem', fontWeight: 700, color: '#2C1E12' }} className="mt-3 leading-tight">
                    {activeProduct.name}
                  </h3>
                </div>
                <span className="text-[10px] tracking-widest text-[#8A7A68] font-mono mt-2 bg-[#EDE8DF] px-2.5 py-1 rounded border border-[#E0D8CC]/50">
                  FORMULA: {activeProduct.id === 'glutathione' ? 'HERB-GL-01' : activeProduct.id === 'redvelvet' ? 'HERB-RV-02' : 'HERB-NM-03'}
                </span>
              </div>
              
              <p className="text-xs text-[#5A4A38] mt-3 leading-relaxed font-light font-sans">
                {activeProduct.description}
              </p>

              {/* Specs horizontal bar */}
              <div className="grid grid-cols-3 gap-2 border-y border-[#E0D8CC]/60 py-4 my-6">
                <div className="flex flex-col gap-0.5">
                  <span className="text-[8px] tracking-wider text-[#8A7A68] uppercase font-bold">COMPATIBILITY</span>
                  <span className="text-[11px] text-[#2C1E12] font-semibold leading-tight">{spotlight.skinType}</span>
                </div>
                <div className="flex flex-col gap-0.5 border-x border-[#E0D8CC]/40 px-3">
                  <span className="text-[8px] tracking-wider text-[#8A7A68] uppercase font-bold">PRIMARY TARGET</span>
                  <span className="text-[11px] text-[#2C1E12] font-semibold leading-tight">{spotlight.concern}</span>
                </div>
                <div className="flex flex-col gap-0.5 pl-1">
                  <span className="text-[8px] tracking-wider text-[#8A7A68] uppercase font-bold">AROMA PROFILE</span>
                  <span className="text-[11px] text-[#2C1E12] font-semibold leading-tight">{spotlight.aroma}</span>
                </div>
              </div>

              {/* Active Botanical Ingredients list */}
              <h4 className="text-xs font-bold text-[#7A6A58] uppercase tracking-[0.18em] mb-4">
                Active Botanical Ingredients
              </h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
                {activeProduct.ingredients.map((ing, i) => (
                  <div
                    key={i}
                    className="flex gap-3.5 items-start group transition-all duration-300 hover:translate-x-1"
                  >
                    <span className="text-xs font-serif italic text-[#8A7A68] mt-0.5 tracking-wider font-semibold">
                      0{i + 1}
                    </span>
                    <div className="flex-1">
                      <h5 className="font-bold text-sm text-[#2C1E12] transition-colors group-hover:text-[#3A5C3E]">
                        {ing.name}
                      </h5>
                      <p className="text-[11px] leading-relaxed text-[#5A4A38] mt-1 font-light">
                        {ing.benefit}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-8 pt-5 border-t border-[#E0D8CC]/50 flex justify-between items-center text-[9px] text-[#8A7A68] tracking-[0.15em] uppercase font-semibold">
              <span>BIODEGRADABLE</span>
              <span>•</span>
              <span>DERMATOLOGICALLY TESTED</span>
              <span>•</span>
              <span>HANDMADE IN INDIA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── App ───────────────────────────────────────────────────────
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeProduct, setActiveProduct] = useState<(typeof PRODUCTS)[0] | null>(null)

  return (
    <div style={{ fontFamily: 'Work Sans, sans-serif', backgroundColor: '#F7F2E9', minHeight: '100vh' }}>

      {/* ── ANNOUNCEMENT BAR ────────────────────── */}
      <div
        className="w-full text-center py-2.5 px-4 text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase flex items-center justify-center gap-2 border-b border-[#3A5C3E]/10"
        style={{ backgroundColor: '#3A5C3E', color: '#F7F2E9' }}
      >
        <span>🇮🇳</span> Handcrafted with care in India
        <span className="opacity-50">•</span>
        <span>100% Natural Botanicals</span>
      </div>

      {/* ── NAV ───────────────────────────────────── */}
      <header
        className="sticky top-0 z-40 w-full"
        style={{
          backgroundColor: 'rgba(247,242,233,0.94)',
          backdropFilter: 'blur(14px)',
          borderBottom: '1px solid #E0D8CC',
        }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex flex-col select-none">
            <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', fontWeight: 700, color: '#3A5C3E', letterSpacing: '0.08em', lineHeight: '1.2' }}>
              HERBIQUE
            </span>
            <span style={{ fontSize: '0.55rem', letterSpacing: '0.28em', color: '#8FAF7E', textTransform: 'uppercase', marginTop: '2px' }}>
              Natural Soap Co.
            </span>
          </a>

          <nav className="hidden sm:flex items-center gap-7">
            {NAV_LINKS.map(l => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm font-medium transition-colors hover:text-[#3A5C3E]"
                style={{ color: '#5A4A38' }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="#products"
            className="hidden sm:inline-flex px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:opacity-90 hover:scale-[1.02] active:scale-95 shadow-sm"
            style={{ backgroundColor: '#3A5C3E', color: '#F7F2E9' }}
          >
            Shop Now
          </a>

          {/* hamburger */}
          <button
            className="sm:hidden flex flex-col justify-center items-end gap-1.5 w-10 h-10 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map(i => (
              <span
                key={i}
                className="block h-0.5 transition-all duration-200"
                style={{
                  backgroundColor: '#3A5C3E',
                  width: i === 1 ? '16px' : '24px',
                  ...(menuOpen && i === 0 ? { transform: 'rotate(45deg) translate(4px, 4px)', width: '24px' } : {}),
                  ...(menuOpen && i === 1 ? { opacity: 0 } : {}),
                  ...(menuOpen && i === 2 ? { transform: 'rotate(-45deg) translate(4px, -4px)', width: '24px' } : {}),
                }}
              />
            ))}
          </button>
        </div>

        {menuOpen && (
          <div className="sm:hidden px-4 py-3 flex flex-col gap-1" style={{ borderTop: '1px solid #E0D8CC', backgroundColor: '#FBF8F2' }}>
            {NAV_LINKS.map(l => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="py-3 px-4 rounded-xl text-sm font-medium hover:bg-[#EDE8DF] transition-colors"
                style={{ color: '#2C1E12' }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#products"
              onClick={() => setMenuOpen(false)}
              className="mt-1 py-3 px-4 rounded-xl text-sm font-semibold text-center"
              style={{ backgroundColor: '#3A5C3E', color: '#F7F2E9' }}
            >
              Shop Now
            </a>
          </div>
        )}
      </header>

      {/* ── HERO ──────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 15% 60%, rgba(143,175,126,0.16) 0%, transparent 55%), radial-gradient(ellipse at 85% 20%, rgba(200,169,126,0.14) 0%, transparent 50%)',
          }}
        />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-14 sm:pt-16 sm:pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center">
            {/* copy */}
            <div className="flex flex-col gap-5 text-center sm:text-left order-2 sm:order-1">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className="h-px w-8 flex-shrink-0" style={{ backgroundColor: '#8FAF7E' }} />
                <span className="text-xs tracking-[0.22em] uppercase font-semibold" style={{ color: '#8FAF7E' }}>
                  Handcrafted in India · Pure · Botanical
                </span>
              </div>

              <h1
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: 'clamp(2.2rem, 6vw, 3.4rem)',
                  fontWeight: 700,
                  color: '#2C1E12',
                  lineHeight: 1.15,
                }}
              >
                Unlock Your<br />
                <em style={{ color: '#3A5C3E', fontStyle: 'italic' }}>Radiance</em> with<br />
                Nature's Best
              </h1>

              <p style={{ fontSize: '0.95rem', color: '#5A4A38', lineHeight: 1.8, maxWidth: '420px', margin: '0 auto' }} className="sm:mx-0">
                Three handcrafted soaps. Potent botanical actives. Zero harsh chemicals — from first lather to lasting glow.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 items-center sm:items-start pt-2">
                <a
                  href="#products"
                  className="px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide transition-all hover:opacity-90 hover:scale-[1.03] active:scale-95 shadow-md"
                  style={{ backgroundColor: '#3A5C3E', color: '#F7F2E9' }}
                >
                  Explore Soaps
                </a>
                <a
                  href="#about"
                  className="px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide border transition-all hover:bg-[#EDE8DF]"
                  style={{ borderColor: '#D9D0C0', color: '#5A4A38' }}
                >
                  Our Story
                </a>
              </div>

              <div className="flex gap-8 justify-center sm:justify-start pt-4 border-t border-[#E0D8CC]/50 mt-2">
                {[
                  ['100%', 'Handmade in India'],
                  ['100%', 'Natural Botanicals'],
                  ['0%', 'Harsh Chemicals']
                ].map(([n, l]) => (
                  <div key={l} className="text-center sm:text-left">
                    <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', fontWeight: 700, color: '#3A5C3E' }}>{n}</p>
                    <p style={{ fontSize: '0.62rem', color: '#7A6A58', letterSpacing: '0.07em', textTransform: 'uppercase', marginTop: '2px' }}>{l}</p>
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
                  style={{ border: '3px solid #E8E0D0', boxShadow: '0 8px 32px rgba(44,30,18,0.12)' }}
                >
                  <img
                    src={glutHero}
                    alt="HERBIQUE Glutathione Soap — best seller"
                    className="w-full object-cover"
                    style={{ height: '320px' }}
                  />
                </div>
                {/* floating card — red velvet */}
                <div
                  className="absolute -bottom-5 -left-10 rounded-xl p-3 flex items-center gap-2.5 shadow-lg"
                  style={{ backgroundColor: '#FBF8F2', border: '1px solid #E0D8CC', minWidth: '168px' }}
                >
                  <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0">
                    <img src={redAlt} alt="Red Velvet Soap" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p style={{ fontSize: '0.65rem', fontWeight: 600, color: '#9B3A3A', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                      Red Velvet
                    </p>
                    <p style={{ fontSize: '0.78rem', fontFamily: 'Playfair Display, serif', color: '#2C1E12', lineHeight: 1.3 }}>
                      Open Pore Expert
                    </p>
                    <StarRating />
                  </div>
                </div>
                {/* neem thumbnail */}
                <div
                  className="absolute -top-5 -right-5 rounded-xl overflow-hidden shadow-md"
                  style={{ width: '68px', height: '68px', border: '2px solid #E0D8CC' }}
                >
                  <img src={neemHero} alt="Neem Soap" className="w-full h-full object-cover" />
                  <div
                    className="absolute inset-0 flex items-end justify-center pb-1"
                    style={{ background: 'linear-gradient(to top, rgba(44,30,18,0.5) 0%, transparent 60%)' }}
                  >
                    <span style={{ fontSize: '0.5rem', color: '#F7F2E9', letterSpacing: '0.1em', fontWeight: 600 }}>NEW</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ──────────────────────────────── */}
      <section id="products" className="py-16 sm:py-20" style={{ backgroundColor: '#F0EAE0' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.22em] uppercase font-semibold mb-3" style={{ color: '#8FAF7E' }}>Our Collection</p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.7rem, 5vw, 2.6rem)', fontWeight: 700, color: '#2C1E12' }}>
              Three Soaps. One Mission.
            </h2>
            <p className="mt-3 max-w-sm mx-auto text-sm" style={{ color: '#5A4A38', lineHeight: 1.75 }}>
              Each bar is formulated with clinically studied botanicals and handcrafted to deliver real, visible results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.map(p => (
              <ProductCard key={p.id} product={p} onOpen={setActiveProduct} />
            ))}
          </div>
        </div>
      </section>

      {/* ── INGREDIENTS SPOTLIGHT ─────────────────── */}
      <IngredientsSection />

      {/* ── PRICING TABLE (BALANCED HEIGHTS) ─────────── */}
      <section className="py-16 sm:py-20" style={{ backgroundColor: '#F0EAE0' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.22em] uppercase font-semibold mb-3" style={{ color: '#8FAF7E' }}>Transparent Pricing</p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.7rem, 5vw, 2.6rem)', fontWeight: 700, color: '#2C1E12' }}>
              Premium Botanicals,<br />
              <em style={{ color: '#3A5C3E' }}>Honest Prices</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {PRODUCTS.map(p => (
              <div
                key={p.id}
                className="rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg hover:border-[#3A5C3E]/20"
                style={{ backgroundColor: '#FBF8F2', border: '1.5px solid #E0D8CC' }}
              >
                <div style={{ height: '6px', background: p.gradient }} />
                <div className="p-5 flex flex-col flex-1 gap-4">
                  {/* image + name */}
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 border border-[#E0D8CC]">
                      <img src={p.heroImg} alt={p.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '1rem', fontWeight: 700, color: '#2C1E12', lineHeight: 1.25 }}>
                        {p.name}
                      </p>
                      <span
                        className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full inline-block mt-0.5"
                        style={{ backgroundColor: p.tagBg, color: p.tagText }}
                      >
                        {p.tagline}
                      </span>
                    </div>
                  </div>

                  {/* pricing lines (aligned heights using fillers for Red Velvet and Neem) */}
                  <div className="flex flex-col gap-0 rounded-xl overflow-hidden" style={{ border: '1px solid #E8E0D0' }}>
                    {p.pricing.map((pr, i) => (
                      <div
                        key={i}
                        className="flex justify-between items-center px-3.5 py-3"
                        style={{
                          borderBottom: i < p.pricing.length - 1 ? '1px solid #E8E0D0' : 'none',
                          backgroundColor: i === 0 ? '#F5F0E8' : '#FBF8F2',
                        }}
                      >
                        <p className="text-xs leading-snug font-medium text-[#2C1E12]" style={{ maxWidth: '65%' }}>{pr.label}</p>
                        <p style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, color: p.accentColor, fontSize: '0.95rem', flexShrink: 0 }}>
                          {pr.price}
                        </p>
                      </div>
                    ))}
                    
                    {/* Balanced heights: Add consistent placeholders for products with single pricing variant */}
                    {p.id !== 'glutathione' && (
                      <>
                        <div
                          className="flex justify-between items-center px-3.5 py-3"
                          style={{
                            borderBottom: '1px solid #E8E0D0',
                            backgroundColor: '#FBF8F2',
                          }}
                        >
                          <p className="text-[11px] leading-snug text-[#7A6A58] italic font-normal">Trial pack size</p>
                          <p className="text-xs text-[#8A7A68]">—</p>
                        </div>
                        <div
                          className="flex justify-between items-center px-3.5 py-3"
                          style={{
                            backgroundColor: '#FBF8F2',
                          }}
                        >
                          <p className="text-[11px] leading-snug text-[#7A6A58] font-medium">Standard size: 100g Bar</p>
                          <p className="text-[10px] text-[#3A5C3E] font-bold">100g</p>
                        </div>
                      </>
                    )}
                  </div>

                  {p.trialNote ? (
                    <p className="text-xs text-[#7A6A58] italic">💡 {p.trialNote}</p>
                  ) : (
                    <p className="text-xs text-[#7A6A58] italic">✨ Cured for 4 weeks in small batches for lasting hardness.</p>
                  )}

                  <button
                    onClick={() => setActiveProduct(p)}
                    className="mt-auto w-full py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-all hover:opacity-90 cursor-pointer shadow-sm"
                    style={{ backgroundColor: '#3A5C3E', color: '#F7F2E9' }}
                  >
                    View Size details & order
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFITS WITH PREMIUM ICONS ──────────────── */}
      <section id="benefits" className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs tracking-[0.22em] uppercase font-semibold mb-3" style={{ color: '#8FAF7E' }}>Why HERBIQUE</p>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.7rem, 5vw, 2.4rem)', fontWeight: 700, color: '#2C1E12', lineHeight: 1.25 }}>
                Skin That Feels<br />the Difference
              </h2>
              <p className="mt-3 text-sm" style={{ color: '#5A4A38', lineHeight: 1.8 }}>
                HERBIQUE is built on one principle: if it's not pure enough for us, it's not going in the bar. Every ingredient earns its place.
              </p>
              <div className="mt-6 flex flex-col gap-4">
                {[
                  ['Handmade with Care', 'Every bar is poured, cut and cured by hand in small batches for consistent quality.'],
                  ['No Harsh Chemicals', 'Zero parabens, sulphates or artificial fragrances. Only botanicals your skin can trust.'],
                  ['Suitable for Daily Use', 'Gentle enough for everyday washing — designed to support your long-term skin health.'],
                  ['Quality Ingredients Only', 'We source actives with proven skin benefits and use them at effective concentrations.'],
                ].map(([t, d]) => (
                  <div key={t} className="flex gap-3.5 items-start">
                    <div
                      className="w-8 h-8 rounded-xl flex-shrink-0 flex items-center justify-center"
                      style={{ backgroundColor: '#EAF0EA', color: '#3A5C3E' }}
                    >
                      <svg className="w-4 h-4 fill-none stroke-current stroke-[2.5]" viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold mb-0.5" style={{ color: '#2C1E12' }}>{t}</p>
                      <p className="text-xs leading-relaxed" style={{ color: '#5A4A38' }}>{d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* image mosaic */}
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl overflow-hidden shadow-md" style={{ height: '300px' }}>
                <img src={glutAlt} alt="Glutathione soap bars" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
              <div className="flex flex-col gap-3">
                <div className="rounded-2xl overflow-hidden shadow-md" style={{ height: '140px' }}>
                  <img src={redWrapped} alt="Red Velvet soap wrapped" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md" style={{ height: '140px' }}>
                  <img src={neemWrapped} alt="Neem soap wrapped" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CUSTOMER REVIEWS (LIVE DATABASE SECTION) ── */}
      <ReviewsSection />

      {/* ── ABOUT ─────────────────────────────────── */}
      <section id="about" className="py-16 sm:py-20" style={{ backgroundColor: '#3A5C3E' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center">
            {/* image grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl overflow-hidden shadow-md" style={{ height: '180px' }}>
                <img src={glutTrialCups} alt="HERBIQUE trial pieces" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md" style={{ height: '180px' }}>
                <img src={glutTrialPieces} alt="HERBIQUE trial soap pieces" className="w-full h-full object-cover" />
              </div>
              <div className="col-span-2 rounded-2xl overflow-hidden shadow-md" style={{ height: '160px' }}>
                <img src={neemAlt} alt="Neem bars with botanicals" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-xs tracking-[0.22em] uppercase font-semibold mb-3" style={{ color: '#8FAF7E' }}>Our Story</p>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.7rem, 5vw, 2.4rem)', fontWeight: 700, color: '#F7F2E9', lineHeight: 1.25 }}>
                Born from Nature,<br />
                <em style={{ color: '#C8A97E' }}>Crafted for You</em>
              </h2>
              <p className="mt-4 text-sm" style={{ color: '#C8D8C2', lineHeight: 1.85 }}>
                HERBIQUE began with a simple belief: your skin deserves what the earth already provides. We source the finest botanical actives — glutathione, neem, tulsi, rose botanicals — and blend them into bars that nourish while they cleanse.
              </p>
              <p className="mt-3 text-sm" style={{ color: '#C8D8C2', lineHeight: 1.85 }}>
                Every batch is small. Every formula is intentional. Every bar is a promise to your skin.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4 border-t border-[#8FAF7E]/20 pt-6">
                {[['100%', 'Natural'], ['0', 'Harsh Actives'], ['3', 'Variants']].map(([n, l]) => (
                  <div key={l} className="text-center">
                    <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', fontWeight: 700, color: '#F7F2E9' }}>{n}</p>
                    <p style={{ fontSize: '0.62rem', color: '#8FAF7E', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: '2px' }}>{l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DIRECT ORDERS & CONTACT DETAILS ─────────── */}
      <section className="py-16 sm:py-20" style={{ backgroundColor: '#FBF8F2' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <p className="text-xs tracking-[0.22em] uppercase font-semibold mb-3" style={{ color: '#8FAF7E' }}>Get In Touch</p>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.7rem, 5vw, 2.4rem)', fontWeight: 700, color: '#2C1E12', lineHeight: 1.25 }}>
                Direct Orders &<br />Customer Support
              </h2>
              <p className="mt-4 text-sm leading-relaxed" style={{ color: '#5A4A38' }}>
                Have questions about our ingredients, custom batches, or wholesale orders? Or prefer ordering directly over call or WhatsApp? We are always here to help you.
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
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.665.988 3.3 1.488 5.27 1.489 5.372 0 9.742-4.368 9.745-9.743.001-2.602-1.011-5.05-2.854-6.895C16.896 2.16 14.444.996 11.84.996c-5.38 0-9.75 4.369-9.754 9.746-.002 1.843.479 3.645 1.393 5.244l-1.01 3.689 3.782-.992zm13.596-7.8c-.28-.14-1.65-.81-1.91-.9-.26-.1-.45-.15-.64.15-.19.3-.73.9-.9.1-.16.2-.33.1-.61-.04-.27-.14-1.163-.428-2.11-.926-.733-.655-1.178-.987-1.18-.33-.002-.66-.3-.66-.6 0-.27.1-.5.25-.67.14-.17.38-.45.57-.67.19-.23.25-.33.38-.56.13-.23.06-.43-.03-.57-.09-.14-.64-1.54-.88-2.11-.23-.56-.47-.48-.64-.49-.17-.01-.36-.01-.56-.01-.2 0-.52.07-.79.37-.27.3-1.03 1.01-1.03 2.47s1.06 2.87 1.21 3.07c.15.2 2.09 3.19 5.06 4.48.7.3 1.26.49 1.69.63.71.22 1.35.19 1.86.12.57-.08 1.65-.67 1.88-1.32.23-.65.23-1.21.16-1.32-.07-.11-.26-.19-.54-.33z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#7A6A58] uppercase tracking-wider">WhatsApp Us</p>
                    <p className="text-sm font-bold text-[#2C1E12] mt-0.5">8319070306</p>
                  </div>
                </a>

                <a
                  href="tel:8319070306"
                  className="flex items-center gap-4 p-4 rounded-2xl border border-[#D9D0C0] hover:border-[#3A5C3E] hover:bg-[#F1F6F2] transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#EAF0EA] flex items-center justify-center text-[#3A5C3E] group-hover:bg-[#3A5C3E] group-hover:text-white transition-all shadow-sm">
                    <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#7A6A58] uppercase tracking-wider">Call Directly</p>
                    <p className="text-sm font-bold text-[#2C1E12] mt-0.5">8319070306</p>
                  </div>
                </a>

                <a
                  href="mailto:havranalwala@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-2xl border border-[#D9D0C0] hover:border-[#3A5C3E] hover:bg-[#F1F6F2] transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#EAF0EA] flex items-center justify-center text-[#3A5C3E] group-hover:bg-[#3A5C3E] group-hover:text-white transition-all shadow-sm">
                    <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#7A6A58] uppercase tracking-wider">Email Inquiry</p>
                    <p className="text-sm font-bold text-[#2C1E12] mt-0.5">havranalwala@gmail.com</p>
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
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.7rem', fontWeight: 700 }} className="mt-3 leading-tight">
                  Order Seamlessly<br />in 3 Simple Steps
                </h3>
                
                {/* Prominent High-Visibility Value Highlights with SVGs instead of emojis */}
                <div className="mt-4 flex flex-col gap-2.5">
                  <div className="flex items-center gap-3 bg-white/10 p-3 rounded-xl border border-white/10 shadow-sm transition-all hover:bg-white/15 hover:translate-x-1 duration-300">
                    <svg className="w-5 h-5 text-[#C8A97E] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-xs leading-none">Fast Dispatch India-wide</p>
                      <p className="text-[10px] text-[#C8D8C2] mt-1.5 leading-none">Orders shipped within 24-48 hours</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-white/10 p-3 rounded-xl border border-white/10 shadow-sm transition-all hover:bg-white/15 hover:translate-x-1 duration-300">
                    <svg className="w-5 h-5 text-[#C8A97E] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    <div>
                      <p className="font-semibold text-xs leading-none">UPI & Bank Transfer Accepted</p>
                      <p className="text-[10px] text-[#C8D8C2] mt-1.5 leading-none">Safe payment details provided on checkout</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Steps at the bottom (original descriptive phrasing for better UX) */}
              <div className="border-t border-[#8FAF7E]/20 pt-4 mt-4">
                <p className="text-[10px] font-bold text-[#C8A97E] uppercase tracking-widest mb-2.5">How It Works</p>
                <ol className="flex flex-col gap-3 text-xs text-[#C8D8C2] list-decimal pl-4 leading-relaxed font-light">
                  <li>Choose your preferred soap variant and click <strong>Order via WhatsApp</strong>.</li>
                  <li>A pre-filled message will open directly in your chat application.</li>
                  <li>Confirm your shipping details and complete payment to confirm your order.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ─────────────────────────────── */}
      <section style={{ backgroundColor: '#C8A97E' }} className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center gap-5">
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.4rem, 4vw, 2rem)', fontWeight: 700, color: '#2C1E12' }}>
            Ready to Transform Your Skin?
          </h2>
          <p className="text-sm max-w-md" style={{ color: '#4A3218', lineHeight: 1.75 }}>
            Try our best-selling Glutathione Soap, or start with a 10g trial pack — just ₹120 for 3 pieces.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#products"
              className="px-8 py-3.5 rounded-full text-sm font-semibold transition-all hover:opacity-90 hover:scale-[1.02] active:scale-95 shadow-md"
              style={{ backgroundColor: '#2C1E12', color: '#F7F2E9' }}
            >
              Shop All Soaps
            </a>
            <a
              href="#ingredients"
              className="px-8 py-3.5 rounded-full text-sm font-semibold border transition-all hover:bg-[#B8976E]"
              style={{ borderColor: '#2C1E12', color: '#2C1E12' }}
            >
              Learn Ingredients
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────── */}
      <footer style={{ backgroundColor: '#2C1E12' }} className="py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row gap-8 justify-between mb-8">
            <div className="max-w-xs">
              <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.3rem', fontWeight: 700, color: '#F7F2E9', letterSpacing: '0.08em', lineHeight: '1.2' }}>
                HERBIQUE
              </p>
              <p style={{ fontSize: '0.55rem', letterSpacing: '0.25em', color: '#8FAF7E', textTransform: 'uppercase', marginTop: '2px' }}>
                Natural Soap Co.
              </p>
              <p className="mt-3 text-xs leading-relaxed" style={{ color: '#8A7A68' }}>
                Handcrafted botanical soaps for skin that glows naturally. Pure. Ethical. Effective. Made with care in every bar.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 sm:gap-12">
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#8FAF7E' }}>Products</p>
                {PRODUCTS.map(p => (
                  <button
                    key={p.id}
                    onClick={() => setActiveProduct(p)}
                    className="block text-xs mb-2.5 transition-colors hover:text-[#C8A97E] text-left cursor-pointer"
                    style={{ color: '#8A7A68' }}
                  >
                    {p.name}
                  </button>
                ))}
              </div>
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#8FAF7E' }}>Connect</p>
                <a href="https://wa.me/918319070306" target="_blank" rel="noopener noreferrer" className="block text-xs mb-2.5 transition-colors hover:text-[#C8A97E] text-left text-[#8A7A68]">
                  WhatsApp Support
                </a>
                <a href="tel:8319070306" className="block text-xs mb-2.5 transition-colors hover:text-[#C8A97E] text-left text-[#8A7A68]">
                  Call Support (8319070306)
                </a>
                <a href="mailto:havranalwala@gmail.com" className="block text-xs mb-2.5 transition-colors hover:text-[#C8A97E] text-left text-[#8A7A68]">
                  Email Us
                </a>
              </div>
            </div>
          </div>

          <div
            className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-2"
            style={{ borderTop: '1px solid #3A2E22' }}
          >
            <p style={{ fontSize: '0.68rem', color: '#5A4A38' }}>© 2026 HERBIQUE Natural Soap Co. All rights reserved.</p>
            <p style={{ fontSize: '0.68rem', color: '#5A4A38' }}>Made with ♥ and Botanicals</p>
          </div>
        </div>
      </footer>

      {/* ── MODAL ─────────────────────────────────── */}
      {activeProduct && (
        <ProductModal product={activeProduct} onClose={() => setActiveProduct(null)} />
      )}
    </div>
  )
}
