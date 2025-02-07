import { Product } from "@/lib/types";

export const filterProducts = (
  products: (Product & { color?: string })[],
  searchQuery: string,
  includedColors: string[],
  maxPrice: number | ""
): (Product & { color?: string })[] => {
  return products.filter((product) => {
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
};
