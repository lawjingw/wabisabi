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
    <div className="mb-4 border p-4 rounded">
      <h3 className="text-lg font-semibold mb-2">Inclusion Filters</h3>
      <div className="mb-2">
        <label className="block mb-1">Include Colors:</label>
        <div className="flex flex-wrap gap-2">
          {availableColors.map((color) => (
            <label key={color} className="flex items-center space-x-1">
              <input
                type="checkbox"
                checked={includedColors.includes(color)}
                onChange={() => handleColorChange(color)}
              />
              <span className="capitalize">{color}</span>
            </label>
          ))}
        </div>
      </div>
      <div>
        <label className="block mb-1">
          Max Price (include products below):
        </label>
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={handlePriceChange}
          className="border rounded p-2 w-full"
        />
      </div>
    </div>
  );
};

export default Filter;
