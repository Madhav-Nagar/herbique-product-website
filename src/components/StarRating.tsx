export default function StarRating({ n = 5 }: { n?: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          style={{
            color: i <= n ? "#C8A97E" : "#D9D0C0",
            fontSize: "13px",
            lineHeight: 1,
          }}
        >
          ★
        </span>
      ))}
    </div>
  )
}
