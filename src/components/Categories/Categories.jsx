import "./Categories.css";
import { Link } from "react-router-dom";
import { useProductCategory } from "../../context";

export const Categories = () => {
  const categories = useProductCategory();
  return (
    <ul className="list category-list fs-s grid full-width pos-rel">
      {categories.map(({ _id, categoryName, description, img }, idx) => (
        <Link
          to={`/products?categoryName=${categoryName}`}
          key={_id}
          className={`category pos-rel ${idx === 3 ? "category-special" : ""}`}
        >
          <img src={img} alt={categoryName} />
          <div className="pos-abs category-content flex">
            <h3 className="h2">{categoryName}</h3>
            <p className="fs-m">{description}</p>
          </div>
        </Link>
      ))}
      <div className="pos-abs heading-overlay">
        <h1 className="heading">Featured Categories</h1>
      </div>
    </ul>
  );
};
