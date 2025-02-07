import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Product } from "../lib/types";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link href={`/product/${product.id}`}>
      <div className="border rounded-lg p-4 hover:shadow-lg cursor-pointer">
        {product.imageUrl && (
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={300}
            height={200}
            className="w-full h-48 object-cover mb-4 rounded-md"
          />
        )}
        <h2 className="font-bold text-xl mb-2">{product.name}</h2>
        <p className="text-gray-700">${product.price.toFixed(2)}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
