import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard, { Product } from "../components/ProductCard";

const sampleProducts: Product[] = [
  {
    id: 1,
    name: "Japanese Tea Set",
    price: 49.99,
    imageUrl: "/images/tea-set.jpg",
  },
  {
    id: 2,
    name: "Ceramic Bowl",
    price: 19.99,
    imageUrl: "/images/bowl.jpg",
  },
  {
    id: 3,
    name: "Zen Garden",
    price: 29.99,
    imageUrl: "/images/zen-garden.jpg",
  },
];

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <h2>Welcome to My E-commerce App</h2>
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-4">Our Products</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {sampleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
