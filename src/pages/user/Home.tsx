import React from "react";
import FullScreenCarousel from "@/components/user/FullScreenCarousel";
import FeaturedProducts from "@/components/user/FeaturedProducts";


const Home: React.FC = () => {
  return (
    <>
      <FullScreenCarousel />
      <div>
      <FeaturedProducts />
      </div>
    </>
  );
};

export default Home;
