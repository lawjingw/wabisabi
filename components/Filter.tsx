/* eslint-disable @typescript-eslint/no-unused-expressions */
"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

const availableColors = ["blue", "white", "grey", "dark brown", "black"];

const Filter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const includedColorsStr = searchParams.get("colors") || "";
  const includedColors = includedColorsStr ? includedColorsStr.split(",") : [];
  const maxPriceStr = searchParams.get("maxPrice") || "";
  const maxPrice = maxPriceStr ? parseFloat(maxPriceStr) : "";

  const updateIncludedColors = (colors: string[]) => {
    const params = new URLSearchParams(searchParams.toString());
    colors.length > 0
      ? params.set("colors", colors.join(","))
      : params.delete("colors");
    router.push(`/?${params.toString()}`);
  };

  const updateMaxPrice = (price: number | "") => {
    const params = new URLSearchParams(searchParams.toString());
    price !== ""
      ? params.set("maxPrice", price.toString())
      : params.delete("maxPrice");
    router.push(`/?${params.toString()}`);
  };

  const handleColorChange = (color: string) => {
    if (includedColors.includes(color)) {
      updateIncludedColors(includedColors.filter((c) => c !== color));
    } else {
      updateIncludedColors([...includedColors, color]);
    }
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    updateMaxPrice(value === "" ? "" : parseFloat(value));
  };

  return (
    <div className="border-t border-gray-200 py-6">
      <h3 className="text-sm font-medium text-gray-900 mb-4">Filters</h3>
      <div className="space-y-6">
        <div>
          <h4 className="text-xs font-medium text-gray-900 mb-3">Color</h4>
          <div className="space-y-2">
            {availableColors.map((color) => (
              <label key={color} className="flex items-center">
                <input
                  type="checkbox"
                  checked={includedColors.includes(color)}
                  onChange={() => handleColorChange(color)}
                  className="h-4 w-4 rounded border-gray-300 text-gray-900 focus:ring-gray-500"
                />
                <span className="ml-3 text-sm text-gray-600 capitalize">
                  {color}
                </span>
              </label>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-xs font-medium text-gray-900 mb-3">Price</h4>
          <input
            type="number"
            placeholder="Max Price"
            value={maxPrice}
            onChange={handlePriceChange}
            className="w-full border-gray-300 rounded-sm px-3 py-2 text-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;
