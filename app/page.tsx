import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <h2>Welcome to My E-commerce App</h2>
        {/* ...product listing goes here */}
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
