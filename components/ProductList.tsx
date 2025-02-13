import { getProducts } from "@/lib/dataApi";
import EmptyProductList from "./EmptyProductList";
import ProductCard from "./ProductCard";

type TsearchParams = {
  q: string | null;
  colors: string | null;
  maxPrice: string | null;
};

type ProductListProps = {
  searchParams: Promise<TsearchParams>;
};

async function ProductList({ searchParams }: ProductListProps) {
  const products = await getProducts();

  if (!products) {
    return <p>Error loading products.</p>;
  }

  const { q, colors, maxPrice } = await searchParams;
  const searchQuery = q || "";
  const includedColorsStr = colors || "";
  const includedColors = includedColorsStr ? includedColorsStr.split(",") : [];
  const maxPriceStr = maxPrice || "";
  const includedMaxPrice = maxPriceStr ? parseFloat(maxPriceStr) : "";

  // Inline filterProducts implementation.
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesColor =
      includedColors.length === 0 ||
      (product.color && includedColors.includes(product.color));
    const matchesPrice =
      includedMaxPrice === "" || product.price <= includedMaxPrice;
    return matchesSearch && matchesColor && matchesPrice;
  });

  if (!filteredProducts || filteredProducts.length < 0) {
    return <EmptyProductList />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
