import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import {
  BsCaretDown,
  BsCircle,
  BsCheckCircleFill,
  BsGrid3X2,
  BsGrid3X3,
  BsGraphDown,
  BsTrophy,
  BsCurrencyDollar,
  BsFillStarFill,
  BsSearch,
  BsFilter,
} from "react-icons/bs";
import { MdOutlineCategory } from "react-icons/md";
import { Filters, Menu, VerticalCard } from "../../components";
import { useProducts } from "../../context";
import "./ProductsPage.css";
import toast from "react-hot-toast";
import { initialFilters } from "../../context/product/ProductReducer";
export const ProductsPage = () => {
  const { products, filters, dispatch, changePage } = useProducts();
  const [isBigView, setBigView] = useState(false);
  const [isSortMenuOpen, setSortMenu] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [page, setPage] = useState(1);

  const sortHandler = (payload) => {
    dispatch({ type: "SORT", payload });
    //shows toast message depending on Sort type
    switch (payload) {
      case "INCREASING":
        return toast(`Sorting in Low to High order.`, { icon: "🚀" });

      case "DECREASING":
        return toast(`Sorting in High to Low order.`, {
          icon: <BsGraphDown />,
        });

      case "POPULARITY":
        return toast(`Sorting by most Popular.`, { icon: <BsTrophy /> });

      case "NAME-ASC":
        return toast(`Sorting by name in ascending order.`, {
          icon: <BsCaretDown />,
        });

      case "NAME-DESC":
        return toast(`Sorting by name in descending order.`, {
          icon: <BsCaretDown />,
        });

      default:
        break;
    }
  };

  const [categories, ...otherFilters] = Object.entries(filters);
  const filtersArr = [
    ...otherFilters,
    ...Object.keys(categories[1]).map((category) => [
      "selectedCategory",
      category,
    ]),
  ];

  const onResetBtnClick = () => {
    toast("Resetted All Filters", { icon: "✨" });
    dispatch({ type: "RESET_FILTERS" });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);
  return (
    <>
      <Filters isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
      <main className="main">
        <div className="pos-rel flex flex-center filter-ui m-sm">
          <div
            className={`sort p-xs fs-m flex flex-center font-bebas pointer pos-rel ${
              isSortMenuOpen ? "color-secondary" : ""
            }`}
            onClick={() => setSortMenu((open) => !open)}
          >
            Sort By <BsCaretDown />
            <Menu open={isSortMenuOpen} className="sort-menu">
              <li
                className="px-md py-xs full-width ubuntu"
                onClick={() => sortHandler("POPULARITY")}
              >
                {filters.sort === "POPULARITY" ? (
                  <BsCheckCircleFill size="1.5rem" />
                ) : (
                  <BsCircle size="1.5rem" />
                )}
                Popularity
              </li>
              <li
                className="px-md py-xs full-width ubuntu"
                onClick={() => sortHandler("INCREASING")}
              >
                {filters.sort === "INCREASING" ? (
                  <BsCheckCircleFill size="1.5rem" />
                ) : (
                  <BsCircle size="1.5rem" />
                )}
                Price: Low to High
              </li>
              <li
                className="px-md py-xs full-width ubuntu"
                onClick={() => sortHandler("DECREASING")}
              >
                {filters.sort === "DECREASING" ? (
                  <BsCheckCircleFill size="1.5rem" />
                ) : (
                  <BsCircle size="1.5rem" />
                )}
                Price: High to Low
              </li>
              <li
                className="px-md py-xs full-width ubuntu"
                onClick={() => sortHandler("NAME-ASC")}
              >
                {filters.sort === "NAME-ASC" ? (
                  <BsCheckCircleFill size="1.5rem" />
                ) : (
                  <BsCircle size="1.5rem" />
                )}
                Name - ( A-Z )
              </li>
              <li
                className="px-md py-xs full-width ubuntu"
                onClick={() => sortHandler("NAME-DESC")}
              >
                {filters.sort === "NAME-DESC" ? (
                  <BsCheckCircleFill size="1.5rem" />
                ) : (
                  <BsCircle size="1.5rem" />
                )}
                Name - ( Z-A )
              </li>
            </Menu>
          </div>
          <div
            className="p-xs fs-m flex flex-center font-bebas pointer all-filter-toggle-btn"
            onClick={() => setSidebarOpen(true)}
          >
            All Filters <BsFilter />
          </div>
          <hr />
          <p className="fs-m">{products?.length} Items</p>
          <BsGrid3X2
            size="2rem"
            color={isBigView ? `var(--text-color)` : `var(--secondary)`}
            onClick={() => setBigView(true)}
          />
          <BsGrid3X3
            size="2rem"
            color={isBigView ? `var(--secondary)` : `var(--text-color)`}
            onClick={() => setBigView(false)}
          />
        </div>
        {JSON.stringify(filters) !== JSON.stringify(initialFilters) && (
          <div className="pos-rel flex flex-center wrap m-sm fs-m ubuntu filters-selected">
            Selected Filters:
            {filtersArr
              ?.filter((item) => item[1])
              .map(([type, value]) => (
                <li
                  key={uuid()}
                  className="p-xs my-xs flex flex-center rating-chip rounded-circle fs-s"
                >
                  {type === "ratingFilterValue" && value}
                  {type === "priceFilterValue" ? (
                    <BsCurrencyDollar />
                  ) : type === "sort" ? (
                    "🚀"
                  ) : type === "ratingFilterValue" ? (
                    <BsFillStarFill color="var(--text-color)" />
                  ) : type === "searchQuery" ? (
                    <BsSearch color="var(--text-color)" />
                  ) : (
                    <MdOutlineCategory color="var(--text-color)" />
                  )}
                  {type === "sort"
                    ? value.toLowerCase()
                    : type === "ratingFilterValue"
                    ? value === 5
                      ? `only`
                      : `&up`
                    : value}
                </li>
              ))}
            <button
              className="pos-abs pointer font-bebas fs-l px-sm py-xs rounded-circle clear-filter-btn"
              onClick={onResetBtnClick}
            >
              Clear Filters
            </button>
          </div>
        )}
        {!products.length && (
          <h3 className="h3 flex flex-center text-center error-msg">
            Oops... No more Products. Please Reset The Filters to access all
            products.
          </h3>
        )}
        <ul
          className={`grid product-list ${isBigView ? "cards-size-big" : ""}`}
        >
          {products &&
            products.map((product) => (
              <VerticalCard key={product._id} product={product} />
            ))}
        </ul>
        {true && (
          <div className="my-sm flex flex-center">
            <button
              className={` paginate-btn`}
              disabled={page === 1}
              onClick={() => changePage(page - 1, setPage)}
            >
              Prev
            </button>
            {[...Array(3)].map((_, index) => (
              <button
                key={index}
                className={`paginate-btn btn ${
                  page === index + 1 ? "btn-primary" : "btn-secondary"
                }`}
                onClick={() => changePage(index + 1, setPage)}
              >
                {index + 1}
              </button>
            ))}
            <button
              disabled={page === 3}
              className={`my-sm paginate-btn`}
              onClick={() => changePage(page + 1, setPage)}
            >
              Next
            </button>
          </div>
        )}
      </main>
    </>
  );
};

export default ProductsPage;
