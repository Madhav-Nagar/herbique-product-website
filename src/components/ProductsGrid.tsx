import { useState, useEffect } from "react";
import { PRODUCTS, Product } from "@/data/products";
import { supabase } from "@/lib/supabase";
import ProductCard from "@/components/ProductCard";

type RatingInfo = { avg: number; count: number };
type RatingsMap = Record<string, RatingInfo>;

export default function ProductsGrid({
  onOpenProduct,
}: {
  onOpenProduct: (product: Product, sizeIndex?: number) => void;
}) {
  const [ratingsMap, setRatingsMap] = useState<RatingsMap>({});
  const [ratingsLoaded, setRatingsLoaded] = useState(false);

  useEffect(() => {
    supabase
      .from("reviews")
      .select("product_name, rating")
      .then(({ data }) => {
        if (data && data.length > 0) {
          const grouped: Record<string, number[]> = {};
          data.forEach((r) => {
            if (!grouped[r.product_name]) grouped[r.product_name] = [];
            grouped[r.product_name].push(r.rating);
          });
          const map: RatingsMap = {};
          for (const [name, arr] of Object.entries(grouped)) {
            map[name] = {
              avg: arr.reduce((a, b) => a + b, 0) / arr.length,
              count: arr.length,
            };
          }
          setRatingsMap(map);
        }
        setRatingsLoaded(true);
      });
  }, []);

  return (
    <section
      id="products"
      className="py-10 sm:py-14"
      style={{ backgroundColor: "#F0EAE0" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <p
            className="text-xs tracking-[0.22em] uppercase font-semibold mb-3"
            style={{ color: "#8FAF7E" }}
          >
            Our Collection
          </p>
          <h2
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "clamp(1.7rem, 5vw, 2.6rem)",
              fontWeight: 700,
              color: "#2C1E12",
            }}
          >
            Three Soaps. One Mission.
          </h2>
          <p
            className="mt-3 max-w-sm mx-auto text-sm"
            style={{ color: "#5A4A38", lineHeight: 1.75 }}
          >
            Each bar is formulated with clinically studied botanicals and
            handcrafted to deliver real, visible results.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((p) => {
            const ratingInfo = ratingsLoaded
              ? (ratingsMap[p.name] ?? { avg: 0, count: 0 })
              : undefined;

            return (
              <ProductCard
                key={p.id}
                product={p}
                ratingInfo={ratingInfo}
                onOpen={(product, sizeIdx = 0) => {
                  onOpenProduct(product, sizeIdx);
                }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
