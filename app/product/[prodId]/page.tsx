import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { getProductById } from "@/lib/dataApi";

type ProductDetailsProps = {
  params: {
    prodId: string;
  };
};

const ProductDetails = async ({ params }: ProductDetailsProps) => {
  const { prodId } = await params;
  const product = await getProductById(Number(prodId));

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
        {product.imageUrls && product.imageUrls.length > 0 && (
          <Image
            width={500}
            height={400}
            src={product.imageUrls[0]}
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
