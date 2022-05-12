import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Wardrobes",
    description:
      "A movable cupboard or cabinet designed for storing clothes, particularly as a large piece of bedroom furniture",
    img: "https://www.ikea.com/ext/ingkadam/m/786d9761c9ae9600/original/PH183484-crop001.jpg?imwidth=500",
  },
  {
    _id: uuid(),
    categoryName: "Sofas",
    description:
      "An upholstered seat with a raised back and one or two raised ends, long enough to comfortably accommodate two or more people.",
    img: "https://www.ikea.com/images/a-living-room-is-furnished-for-spring-with-a-vimle-sofa-roed-6c7353b5d1ebc26c4764e367a4df58b2.jpg?imwidth=500",
  },
  {
    _id: uuid(),
    categoryName: "Chairs",
    description:
      "An item of furniture used to sit on or in, comprising a seat, legs, back, and sometimes arm rests, for use by one person.",
    img: "https://www.ikea.com/global/assets/navigation/images/dining-chairs-25219.jpeg?imwidth=500",
  },
  {
    _id: uuid(),
    categoryName: "Beds",
    description:
      "A piece of furniture, usually flat and soft, on which to rest or sleep.",
    img: "https://www.ikea.com/ext/ingkadam/m/6eeb568ce254308f/original/PH171425-crop002.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Tables",
    description:
      "Furniture with a top surface to accommodate a variety of uses.",
    img: "https://www.ikea.com/global/assets/navigation/images/tables-desks-fu004.jpeg?imwidth=500",
  },

  {
    _id: uuid(),
    categoryName: "Dining",
    description:
      "The dining table is the meeting point for the whole family.The chairs can be easily pushed under the table when not in use.",
    img: "https://www.ikea.com/images/a-beige-living-room-with-a-strandtorp-extendable-table-set-f-af586a5a59c71b5c8f0ae144065a0b76.jpg?imwidth=300",
  },
];
