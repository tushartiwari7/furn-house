import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "./Categories.css";
import { Link } from "react-router-dom";

export const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/categories");
        setCategories(response.data.categories);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="full-width p-sm flex flex-center fs-l categories">
      <ul className="list category-list fs-s flex full-width">
        {categories.map(({ _id, categoryName }) => (
          <Link
            to={`/products?categoryName=${categoryName}`}
            key={_id}
            className="list-item transition p-xs fw-light"
          >
            {categoryName}
          </Link>
        ))}
      </ul>
    </div>
  );
};
