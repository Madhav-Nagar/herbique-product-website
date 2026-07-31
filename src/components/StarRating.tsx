const STAR_PATH =
  "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"

/**
 * Displays star rating.
 *
 * States:
 *  - count === undefined  →  loading / static display (5 gold stars, no label)
 *  - count === 0          →  grey stars + "No reviews yet"
 *  - count  >  0          →  colored stars + "4.8 · 12 reviews"
 */
export default function StarRating({
  rating,
  count,
}: {
  rating?: number
  count?: number
}) {
  const isLoaded = count !== undefined
  const hasReviews = isLoaded && count > 0

  // How many stars to fill:
  //  • Not loaded yet  → 5 (backward-compat golden look)
  //  • Loaded, 0 reviews → 0 (all grey)
  //  • Loaded, has reviews → round avg to nearest whole star
  const filled = !isLoaded ? 5 : hasReviews ? Math.round(rating ?? 0) : 0

  return (
    <div className="flex items-center gap-1.5 mt-1">
      {/* Stars row */}
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((s) => (
          <svg
            key={s}
            className={`w-3 h-3 fill-current transition-colors ${
              s <= filled ? "text-yellow-400" : "text-[#D9D0C0]"
            }`}
            viewBox="0 0 20 20"
          >
            <path d={STAR_PATH} />
          </svg>
        ))}
      </div>

      {/* Label */}
      {hasReviews && (
        <span className="text-[10px] font-semibold text-[#5A4A38]">
          {(rating ?? 0).toFixed(1)}{" "}
          <span className="font-normal text-[#7A6A58]">
            · {count} {count === 1 ? "review" : "reviews"}
          </span>
        </span>
      )}
      {isLoaded && !hasReviews && (
        <span className="text-[10px] italic text-[#8A7A68]">No reviews yet</span>
      )}
    </div>
  )
}
