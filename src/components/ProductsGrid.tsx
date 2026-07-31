import { PRODUCTS, Product } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function ProductsGrid({
  onOpenProduct,
}: {
  onOpenProduct: (product: Product, sizeIndex?: number) => void;
}) {
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
          {PRODUCTS.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              onOpen={(product, sizeIdx = 0) => {
                onOpenProduct(product, sizeIdx);
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
