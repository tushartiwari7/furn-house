import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Wardrobes",
  },
  {
    _id: uuid(),
    categoryName: "Sofas",
  },
  {
    _id: uuid(),
    categoryName: "Beds",
  },
  {
    _id: uuid(),
    categoryName: "Chairs",
  },
  {
    _id: uuid(),
    categoryName: "Tables",
  },
];
