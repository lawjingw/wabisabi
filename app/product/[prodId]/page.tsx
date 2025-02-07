import React from "react";
import { useRouter } from "next/router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ProductDetails: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Header />
      <main>
        <h2>Product Details - {id}</h2>
        {/* ...product details go here */}
      </main>
      <Footer />
    </>
  );
};

export default ProductDetails;
