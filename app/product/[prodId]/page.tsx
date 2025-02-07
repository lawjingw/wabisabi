import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Product } from "@/lib/types";
import Image from "next/image";

type ProductDetailsProps = {
  params: {
    prodId: number;
  };
};

const sampleProducts: Product[] = [
  {
    id: 1,
    name: "Japanese Tea Set",
    price: 49.99,
    imageUrl:
      "https://cmsbcphmvkaofadmdnyy.supabase.co/storage/v1/object/public/products//product-1.jpg",
  },
  {
    id: 2,
    name: "Ceramic Bowl",
    price: 19.99,
    imageUrl:
      "https://cmsbcphmvkaofadmdnyy.supabase.co/storage/v1/object/public/products//product-2.jpg",
  },
  {
    id: 3,
    name: "Zen Garden",
    price: 29.99,
    imageUrl:
      "https://cmsbcphmvkaofadmdnyy.supabase.co/storage/v1/object/public/products//product-3.jpg",
  },
];

const ProductDetails = ({ params }: ProductDetailsProps) => {
  const productId = Number(params.prodId);
  const product = sampleProducts.find((p) => p.id === productId);

  if (!product) {
    return (
      <>
        <Header />
        <main className="container mx-auto p-4">
          <h2 className="text-2xl">Product Not Found</h2>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="container mx-auto p-4">
        <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
        {product.imageUrl && (
          <Image
            width={500}
            height={300}
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-auto mb-4 rounded-md"
          />
        )}
        <p className="mb-4">{product.description}</p>
        <p className="text-xl font-bold">${product.price.toFixed(2)}</p>
      </main>
      <Footer />
    </>
  );
};

export default ProductDetails;
