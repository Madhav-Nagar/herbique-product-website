import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"
import { getDeviceId } from "@/lib/deviceId"
import type { Review } from "@/types/review"

export default function ReviewsSection() {
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

  // Fetch reviews from Supabase on mount
  useEffect(() => {
    async function fetchReviews() {
      setLoading(true)
      const { data, error } = await supabase
        .from("reviews")
        .select("*")
        .order("created_at", { ascending: false })
      if (!error && data) setReviews(data as Review[])
      setLoading(false)
    }
    fetchReviews()
  }, [])

  // Check if this device already reviewed the selected product
  useEffect(() => {
    async function checkDuplicate() {
      const deviceId = getDeviceId()
      const { data } = await supabase
        .from("reviews")
        .select("id")
        .eq("device_id", deviceId)
        .eq("product_name", productName)
        .maybeSingle()
      setAlreadyReviewed(!!data)
    }
    checkDuplicate()
  }, [productName])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !comment.trim()) return
    setSubmitting(true)
    setSubmitError(null)

    const deviceId = getDeviceId()
    const { data, error } = await supabase
      .from("reviews")
      .insert({
        device_id: deviceId,
        name: name.trim(),
        product_name: productName,
        rating,
        comment: comment.trim(),
      })
      .select()
      .single()

    setSubmitting(false)

    if (error) {
      // Postgres unique violation code = 23505
      if (error.code === "23505") {
        setAlreadyReviewed(true)
      } else {
        setSubmitError("Something went wrong. Please try again.")
      }
      return
    }

    // Optimistically prepend the new review
    if (data) setReviews((prev) => [data as Review, ...prev])
    setAlreadyReviewed(true)

    // Reset form fields
    setName("")
    setComment("")
    setRating(5)
    setSubmittedSuccess(true)
    setTimeout(() => setSubmittedSuccess(false), 5000)
  }

  return (
    <section
      id="reviews"
      className="py-10 sm:py-14"
      style={{ backgroundColor: "#F0EAE0" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Left Column: Review Form */}
          <div className="md:col-span-1 bg-[#FBF8F2] p-6 rounded-2xl border border-[#E0D8CC] shadow-sm">
            <h3
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: "1.4rem",
                fontWeight: 700,
                color: "#2C1E12",
              }}
              className="mb-2"
            >
              Share Your Experience
            </h3>
            <p className="text-xs text-[#7A6A58] mb-6 leading-relaxed">
              Your honest feedback helps us maintain our quality and helps
              others choose the right soap.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#5A4A38] uppercase tracking-wider mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#D9D0C0] text-sm bg-white focus:outline-none focus:border-[#3A5C3E]"
                  style={{ color: "#2C1E12" }}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#5A4A38] uppercase tracking-wider mb-1">
                  Select Soap
                </label>
                <select
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#D9D0C0] text-sm bg-white focus:outline-none focus:border-[#3A5C3E] cursor-pointer"
                  style={{ color: "#2C1E12" }}
                >
                  <option value="Glutathione Soap">Glutathione Soap</option>
                  <option value="Red Velvet Soap">Red Velvet Soap</option>
                  <option value="Neem Soap">Neem Soap</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#5A4A38] uppercase tracking-wider mb-1">
                  Rating
                </label>
                <div className="flex gap-1 items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(null)}
                      className="text-2xl transition-all focus:outline-none hover:scale-110 active:scale-95 cursor-pointer"
                      style={{
                        color:
                          star <= (hoverRating ?? rating)
                            ? "#C8A97E"
                            : "#D9D0C0",
                      }}
                    >
                      ★
                    </button>
                  ))}
                  <span className="text-xs text-[#7A6A58] ml-2">
                    ({hoverRating ?? rating}/5 stars)
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#5A4A38] uppercase tracking-wider mb-1">
                  Your Review
                </label>
                <textarea
                  required
                  rows={4}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Tell us about the lather, fragrance, and how your skin feels..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#D9D0C0] text-sm bg-white focus:outline-none focus:border-[#3A5C3E] resize-none"
                  style={{ color: "#2C1E12" }}
                />
              </div>

              {alreadyReviewed ? (
                <div className="w-full py-3 px-4 rounded-xl text-xs font-medium text-center bg-[#FEF9EC] border border-[#C8A97E]/40 text-[#7A5C1E] leading-relaxed flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 flex-shrink-0 fill-current" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <span>
                    You have already submitted a review for <strong>{productName}</strong> from this device. Select a different soap to review it.
                  </span>
                </div>
              ) : (
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 rounded-xl text-sm font-semibold tracking-wide transition-all duration-200 hover:opacity-90 active:scale-[0.98] cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{
                    backgroundColor: "#3A5C3E",
                    color: "#F7F2E9",
                    fontFamily: "Work Sans, sans-serif",
                  }}
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

          {/* Right Column: Reviews List */}
          <div className="md:col-span-2 flex flex-col">
            <div className="mb-6 flex justify-between items-end">
              <div>
                <p
                  className="text-xs tracking-[0.22em] uppercase font-semibold mb-2"
                  style={{ color: "#8FAF7E" }}
                >
                  Customer Voice
                </p>
                <h3
                  style={{
                    fontFamily: "Playfair Display, serif",
                    fontSize: "1.8rem",
                    fontWeight: 700,
                    color: "#2C1E12",
                  }}
                >
                  Live Reviews
                </h3>
              </div>
              <span className="text-xs font-semibold text-[#7A6A58] bg-[#EDE8DF] px-3 py-1.5 rounded-full border border-[#E0D8CC]">
                {loading ? "…" : `${reviews.length} ${reviews.length === 1 ? "Review" : "Reviews"}`}
              </span>
            </div>

            {loading ? (
              <div className="flex-1 flex flex-col gap-4">
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
              <div className="flex-1 flex flex-col items-center justify-center text-center p-8 bg-[#FBF8F2] rounded-2xl border border-[#E0D8CC] border-dashed">
                <span className="text-4xl mb-3">✍</span>
                <h4 className="font-semibold text-[#2C1E12] text-sm">
                  No reviews yet
                </h4>
                <p className="text-xs text-[#7A6A58] mt-1 max-w-xs leading-relaxed">
                  Be the first to review one of our soaps and help others make the right choice!
                </p>
              </div>
            ) : (
              <div className="flex-1 overflow-y-auto max-h-[520px] flex flex-col gap-4 pr-1">
                {reviews.map((r) => (
                  <div
                    key={r.id}
                    className="p-5 rounded-2xl bg-[#FBF8F2] border border-[#E0D8CC] shadow-sm flex flex-col gap-3 transition-all hover:border-[#3A5C3E]/30"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center gap-2">
                          <p
                            className="font-semibold text-sm"
                            style={{ color: "#2C1E12" }}
                          >
                            {r.name}
                          </p>
                          <span className="text-[10px] font-medium bg-[#EDE8DF] text-[#7A6A58] px-2 py-0.5 rounded-full flex items-center gap-1 border border-[#D9D0C0]">
                            ✎ Customer Review
                          </span>
                        </div>
                        <p className="text-[11px] text-[#7A6A58] mt-0.5">
                          Reviewed:{" "}
                          <strong className="text-[#5A4A38]">
                            {r.product_name}
                          </strong>
                        </p>
                      </div>
                      <p className="text-[10px] text-[#8A7A68]">
                        {new Date(r.created_at).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                      </p>
                    </div>

                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span
                          key={star}
                          style={{
                            color: star <= r.rating ? "#C8A97E" : "#D9D0C0",
                            fontSize: "13px",
                          }}
                        >
                          ★
                        </span>
                      ))}
                    </div>

                    <p
                      className="text-xs leading-relaxed"
                      style={{ color: "#4A3C2C" }}
                    >
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
