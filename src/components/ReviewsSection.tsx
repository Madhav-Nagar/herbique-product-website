import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"
import { getDeviceId } from "@/lib/deviceId"
import { PRODUCTS } from "@/data/products"
import type { Review } from "@/types/review"
import type { RatingsMap } from "@/App"

const STAR_PATH =
  "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"

// ── Mini star row helper ──────────────────────────────────────
function MiniStars({ filled, size = "w-3 h-3" }: { filled: number; size?: string }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} className={`${size} fill-current ${s <= filled ? "text-yellow-400" : "text-[#D9D0C0]"}`} viewBox="0 0 20 20">
          <path d={STAR_PATH} />
        </svg>
      ))}
    </div>
  )
}

// ── Per-soap rating card ──────────────────────────────────────
function SoapRatingCard({ product, info }: {
  product: typeof PRODUCTS[0]
  info: { avg: number; count: number } | null
}) {
  const filled = info && info.count > 0 ? Math.round(info.avg) : 0

  return (
    <div className="flex flex-col items-center text-center gap-1.5 p-4 rounded-2xl bg-[#FBF8F2] border border-[#E0D8CC]">
      <p className="text-[10px] font-bold uppercase tracking-widest leading-tight" style={{ color: product.accentColor }}>
        {product.name.replace(" Soap", "")}
      </p>
      <p className="text-[9px] uppercase tracking-wider text-[#8A7A68]">Soap</p>

      {info === null ? (
        /* Loading skeleton */
        <>
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((s) => <div key={s} className="w-2.5 h-2.5 rounded-sm bg-[#E0D8CC] animate-pulse" />)}
          </div>
          <div className="w-10 h-3 bg-[#E0D8CC] rounded animate-pulse" />
        </>
      ) : info.count > 0 ? (
        /* Has reviews */
        <>
          <MiniStars filled={filled} size="w-3 h-3" />
          <p className="text-lg font-bold leading-none" style={{ fontFamily: "Playfair Display, serif", color: "#2C1E12" }}>
            {info.avg.toFixed(1)}
          </p>
          <p className="text-[9px] text-[#7A6A58]">{info.count} {info.count === 1 ? "review" : "reviews"}</p>
        </>
      ) : (
        /* No reviews yet */
        <>
          <MiniStars filled={0} size="w-3 h-3" />
          <p className="text-[9px] italic text-[#8A7A68]">No reviews yet</p>
        </>
      )}
    </div>
  )
}

// ── Main component ────────────────────────────────────────────
export default function ReviewsSection({
  onReviewSubmitted,
  ratingsMap = {},
  ratingsLoaded = false,
}: {
  onReviewSubmitted?: () => void
  ratingsMap?: RatingsMap
  ratingsLoaded?: boolean
}) {
  const [reviews, setReviews] = useState<Review[]>([])
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [submittedSuccess, setSubmittedSuccess] = useState(false)
  const [alreadyReviewed, setAlreadyReviewed] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const [name, setName] = useState("")
  const [productName, setProductName] = useState("Glutathione Soap")
  const [rating, setRating] = useState(5)
  const [comment, setComment] = useState("")
  const [hoverRating, setHoverRating] = useState<number | null>(null)

  // Fetch all reviews on mount
  useEffect(() => {
    supabase
      .from("reviews")
      .select("*")
      .order("created_at", { ascending: false })
      .then(({ data, error }) => {
        if (!error && data) setReviews(data as Review[])
        setLoading(false)
      })
  }, [])

  // Check duplicate on product change
  useEffect(() => {
    const deviceId = getDeviceId()
    supabase
      .from("reviews")
      .select("id")
      .eq("device_id", deviceId)
      .eq("product_name", productName)
      .maybeSingle()
      .then(({ data }) => setAlreadyReviewed(!!data))
  }, [productName])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !comment.trim()) return
    setSubmitting(true)
    setSubmitError(null)

    const { data, error } = await supabase
      .from("reviews")
      .insert({ device_id: getDeviceId(), name: name.trim(), product_name: productName, rating, comment: comment.trim() })
      .select()
      .single()

    setSubmitting(false)

    if (error) {
      if (error.code === "23505") setAlreadyReviewed(true)
      else setSubmitError("Something went wrong. Please try again.")
      return
    }

    if (data) setReviews((prev) => [data as Review, ...prev])
    setAlreadyReviewed(true)
    onReviewSubmitted?.()
    setName("")
    setComment("")
    setRating(5)
    setSubmittedSuccess(true)
    setTimeout(() => setSubmittedSuccess(false), 5000)
  }

  return (
    <section id="reviews" className="py-10 sm:py-14" style={{ backgroundColor: "#F0EAE0" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* ── Left: Review Form ── */}
          <div className="md:col-span-1 bg-[#FBF8F2] p-6 rounded-2xl border border-[#E0D8CC] shadow-sm">
            <h3 className="mb-2" style={{ fontFamily: "Playfair Display, serif", fontSize: "1.4rem", fontWeight: 700, color: "#2C1E12" }}>
              Share Your Experience
            </h3>
            <p className="text-xs text-[#7A6A58] mb-6 leading-relaxed">
              Your honest feedback helps us maintain our quality and helps others choose the right soap.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Name */}
              <div>
                <label className="block text-xs font-semibold text-[#5A4A38] uppercase tracking-wider mb-1">Your Name</label>
                <input
                  type="text" required value={name} onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#D9D0C0] text-sm bg-white focus:outline-none focus:border-[#3A5C3E]"
                  style={{ color: "#2C1E12" }}
                />
              </div>

              {/* Soap selector */}
              <div>
                <label className="block text-xs font-semibold text-[#5A4A38] uppercase tracking-wider mb-1">Select Soap</label>
                <select
                  value={productName} onChange={(e) => setProductName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#D9D0C0] text-sm bg-white focus:outline-none focus:border-[#3A5C3E] cursor-pointer"
                  style={{ color: "#2C1E12" }}
                >
                  <option value="Glutathione Soap">Glutathione Soap</option>
                  <option value="Red Velvet Soap">Red Velvet Soap</option>
                  <option value="Neem Soap">Neem Soap</option>
                </select>
              </div>

              {/* Star rating picker */}
              <div>
                <label className="block text-xs font-semibold text-[#5A4A38] uppercase tracking-wider mb-1">Rating</label>
                <div className="flex gap-1 items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star} type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(null)}
                      className="text-2xl transition-all focus:outline-none hover:scale-110 active:scale-95 cursor-pointer"
                      style={{ color: star <= (hoverRating ?? rating) ? "#C8A97E" : "#D9D0C0" }}
                    >★</button>
                  ))}
                  <span className="text-xs text-[#7A6A58] ml-2">({hoverRating ?? rating}/5 stars)</span>
                </div>
              </div>

              {/* Comment */}
              <div>
                <label className="block text-xs font-semibold text-[#5A4A38] uppercase tracking-wider mb-1">Your Review</label>
                <textarea
                  required rows={4} value={comment} onChange={(e) => setComment(e.target.value)}
                  placeholder="Tell us about the lather, fragrance, and how your skin feels..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#D9D0C0] text-sm bg-white focus:outline-none focus:border-[#3A5C3E] resize-none"
                  style={{ color: "#2C1E12" }}
                />
              </div>

              {/* Submit / already reviewed */}
              {alreadyReviewed ? (
                <div className="w-full py-3 px-4 rounded-xl text-xs font-medium text-center bg-[#FEF9EC] border border-[#C8A97E]/40 text-[#7A5C1E] leading-relaxed flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 flex-shrink-0 fill-current" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <span>Already reviewed <strong>{productName}</strong> from this device. Pick a different soap.</span>
                </div>
              ) : (
                <button
                  type="submit" disabled={submitting}
                  className="w-full py-3 rounded-xl text-sm font-semibold tracking-wide transition-all duration-200 hover:opacity-90 active:scale-[0.98] cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ backgroundColor: "#3A5C3E", color: "#F7F2E9", fontFamily: "Work Sans, sans-serif" }}
                >
                  {submitting ? "Submitting…" : "Submit Review"}
                </button>
              )}

              {submittedSuccess && (
                <p className="text-xs text-[#3A5C3E] font-medium text-center bg-[#F1F6F2] py-2 rounded-lg border border-[#3A5C3E]/20">
                  ✓ Review submitted! It is now live for everyone to see.
                </p>
              )}
              {submitError && (
                <p className="text-xs text-red-600 font-medium text-center bg-red-50 py-2 rounded-lg border border-red-200">
                  ✗ {submitError}
                </p>
              )}
            </form>
          </div>

          {/* ── Right: Per-Soap Averages + Reviews List ── */}
          <div className="md:col-span-2 flex flex-col gap-6">

            {/* Per-soap rating summary */}
            <div>
              <p className="text-xs tracking-[0.22em] uppercase font-semibold mb-3" style={{ color: "#8FAF7E" }}>
                Customer Voice
              </p>
              <div className="grid grid-cols-3 gap-3">
                {PRODUCTS.map((p) => (
                  <SoapRatingCard
                    key={p.id}
                    product={p}
                    info={ratingsLoaded ? (ratingsMap[p.name] ?? { avg: 0, count: 0 }) : null}
                  />
                ))}
              </div>
            </div>

            {/* Reviews list */}
            <div className="flex flex-col flex-1">
              <div className="mb-4 flex justify-between items-center">
                <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.8rem", fontWeight: 700, color: "#2C1E12" }}>
                  Live Reviews
                </h3>
                <span className="text-xs font-semibold text-[#7A6A58] bg-[#EDE8DF] px-3 py-1.5 rounded-full border border-[#E0D8CC]">
                  {loading ? "…" : `${reviews.length} ${reviews.length === 1 ? "Review" : "Reviews"}`}
                </span>
              </div>

              {loading ? (
                <div className="flex flex-col gap-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="p-5 rounded-2xl bg-[#FBF8F2] border border-[#E0D8CC] animate-pulse">
                      <div className="h-3 bg-[#E0D8CC] rounded w-1/3 mb-3" />
                      <div className="h-2 bg-[#E0D8CC] rounded w-1/2 mb-4" />
                      <div className="h-2 bg-[#E0D8CC] rounded w-full mb-2" />
                      <div className="h-2 bg-[#E0D8CC] rounded w-3/4" />
                    </div>
                  ))}
                </div>
              ) : reviews.length === 0 ? (
                <div className="flex-1 flex flex-col items-center justify-center text-center p-8 bg-[#FBF8F2] rounded-2xl border border-dashed border-[#E0D8CC]">
                  <span className="text-4xl mb-3">✍</span>
                  <h4 className="font-semibold text-[#2C1E12] text-sm">No reviews yet</h4>
                  <p className="text-xs text-[#7A6A58] mt-1 max-w-xs leading-relaxed">
                    Be the first to review one of our soaps!
                  </p>
                </div>
              ) : (
                <div className="overflow-y-auto max-h-[520px] flex flex-col gap-4 pr-1">
                  {reviews.map((r) => (
                    <div key={r.id} className="p-5 rounded-2xl bg-[#FBF8F2] border border-[#E0D8CC] shadow-sm flex flex-col gap-3 transition-all hover:border-[#3A5C3E]/30">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="font-semibold text-sm" style={{ color: "#2C1E12" }}>{r.name}</p>
                            <span className="text-[10px] font-medium bg-[#EDE8DF] text-[#7A6A58] px-2 py-0.5 rounded-full border border-[#D9D0C0]">
                              ✎ Customer Review
                            </span>
                          </div>
                          <p className="text-[11px] text-[#7A6A58] mt-0.5">
                            Reviewed: <strong className="text-[#5A4A38]">{r.product_name}</strong>
                          </p>
                        </div>
                        <p className="text-[10px] text-[#8A7A68]">
                          {new Date(r.created_at).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                        </p>
                      </div>
                      <div className="flex gap-0.5">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <span key={s} style={{ color: s <= r.rating ? "#C8A97E" : "#D9D0C0", fontSize: "13px" }}>★</span>
                        ))}
                      </div>
                      <p className="text-xs leading-relaxed" style={{ color: "#4A3C2C" }}>"{r.comment}"</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
