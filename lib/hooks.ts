import { useSearchParams } from "next/navigation";
import { Product } from "./types";

export const useFilteredProducts = (products: Product[]) => {
  const searchParams = useSearchParams();

  const searchQuery = searchParams.get("q") || "";
  const includedColorsStr = searchParams.get("colors") || "";
  const includedColors = includedColorsStr ? includedColorsStr.split(",") : [];
  const maxPriceStr = searchParams.get("maxPrice") || "";
  const maxPrice = maxPriceStr ? parseFloat(maxPriceStr) : "";

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const includedColor =
      includedColors.length === 0 ||
      !product.color ||
      includedColors.includes(product.color);
    const withinPrice = maxPrice === "" || product.price <= maxPrice;

    return matchesSearch && includedColor && withinPrice;
  });

  return filteredProducts;
};
