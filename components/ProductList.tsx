import { getProducts } from "@/lib/dataApi";
import EmptyProductList from "./EmptyProductList";
import ProductCard from "./ProductCard";

type ProductListProps = {
  searchParams: {
    q: string | null;
    colors: string | null;
    maxPrice: string | null;
  };
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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
