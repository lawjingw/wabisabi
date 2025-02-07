import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type ProductDetailsProps = {
  params: {
    prodId: number;
  };
};

const ProductDetails = ({ params }: ProductDetailsProps) => {
  return (
    <>
      <Header />
      <main>
        <h2>Product Details - {params.prodId}</h2>
        {/* ...product details go here */}
      </main>
      <Footer />
    </>
  );
};

export default ProductDetails;
