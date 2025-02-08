import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Product } from "../lib/types";

type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.id}`}>
      <div className="group relative">
        <div className="aspect-square w-full overflow-hidden bg-gray-50">
          {product.imageUrls && (
            <Image
              src={product.imageUrls[0]}
              alt={product.name}
              width={400}
              height={400}
              className="w-full h-full object-cover object-center 
                group-hover:scale-105 transition-transform duration-300"
            />
          )}
        </div>
        <div className="mt-4 sm:mt-6 space-y-1 sm:space-y-2">
          <h3
            className="text-sm sm:text-base font-medium text-gray-900 
            group-hover:text-gray-700 transition-colors"
          >
            {product.name}
          </h3>
          <p className="text-sm text-gray-500">${product.price.toFixed(2)}</p>
          {product.color && (
            <p className="text-xs sm:text-sm text-gray-400 capitalize">
              {product.color}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
