import "./Categories.css";
import { Link } from "react-router-dom";
import { useProductCategory } from "../../context";

export const Categories = () => {
  const categories = useProductCategory();
  return (
    <div className="full-width flex flex-center fs-l categories">
      <ul className="list category-list fs-s flex full-width">
        {categories.map(({ _id, categoryName }) => (
          <Link
            to={`/products?categoryName=${categoryName}`}
            key={_id}
            className="list-item transition px-xs py-sm fw-light"
          >
            {categoryName}
          </Link>
        ))}
      </ul>
    </div>
  );
};
