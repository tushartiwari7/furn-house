import React, { useEffect, useState } from "react";
import axios from "axios";
import "./FeaturedProducts.css";
import { Card } from "../";
export const FeaturedProducts = () => {
  const [featuredproducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/products");
        const featProducts = await response.data.products.slice(0, 3);
        setFeaturedProducts(featProducts);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <section className="m-lg">
      <h3 className="h2 ubuntu text-center mx-md my-lg">Trending Products</h3>
      <section className="featured-products-wrapper flex wrap">
        {featuredproducts.map((product) => (
          <Card key={product._id} {...product} />
        ))}
      </section>
    </section>
  );
};
