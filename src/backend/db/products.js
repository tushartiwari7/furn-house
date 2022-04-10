import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "2 Seat Sofa",
    sub_title: "Dark Grey",
    offer_price: "8999",
    img: "https://www.ikea.com/ext/ingkadam/m/14371c9e839250e2/original/PE817522-crop001.jpg?f=xxxs",
    price: "17900",
    description:
      "Simple design which is also comfortable with its thick seat, padded armrests and soft back cushions that sit firmly in place.",
    categoryName: "Sofas",
    rating: "5",
    images: [
      "https://www.ikea.com/in/en/images/products/glostad-2-seat-sofa-knisa-dark-grey__0987395_pe817517_s5.jpg?f=xxxs",
    ],
  },
  {
    _id: uuid(),
    title: "3 Seat Sofa",
    sub_title: "grey",
    offer_price: "19999",
    img: "https://www.ikea.com/in/en/images/products/gammalbyn-3-seat-sofa-grey__0868927_pe781435_s5.jpg?f=xxs",
    price: "27000",
    description:
      "A simple yet sophisticated blue fabric best suits formal living rooms and contemporarily styled decors, adds a soft touch to your urban living space.",
    categoryName: "Sofas",
    rating: "5",
    images: [
      "https://www.ikea.com/in/en/images/products/ormaryd-3-seat-sofa-dark-blue__0919667_pe786707_s5.jpg?f=xxs",
    ],
  },
  {
    _id: uuid(),
    title: "4 Seat Sofa with Chaise Lounge",
    sub_title: "Fabric, Denim",
    offer_price: "75000",
    img: "https://www.ikea.com/in/en/images/products/vimle-4-seat-sofa-with-chaise-longue-saxemara-light-blue__0949541_pe799799_s5.jpg?f=xxxs",
    price: "82000",
    description:
      "The broad seating space and longer length of the 3-seater make it an ideal place for napping or relaxed lounging.",
    categoryName: "Sofas",
    rating: "5",
    images: [
      "https://www.ikea.com/in/en/images/products/vimle-3-seat-sofa-with-chaise-longue-saxemara-light-blue__1014957_ph177998_s5.jpg?f=xxxs",
    ],
  },
  {
    _id: uuid(),
    title: "Coffee Table",
    sub_title: "Footstool with Storage",
    offer_price: "7490",
    img: "https://www.ikea.com/in/en/images/products/gamlehult-footstool-with-storage-rattan-anthracite__0842809_pe719505_s5.jpg?f=xxxs",
    price: "10000",
    description:
      "The coffee table is a versatile piece of furniture that can be used for a variety of purposes.",
    categoryName: "Tables",
    rating: "4",
    images: [
      "https://www.ikea.com/in/en/images/products/gamlehult-footstool-with-storage-rattan-anthracite__0672900_pe716937_s5.jpg?f=xxxs",
      "https://www.ikea.com/in/en/images/products/gamlehult-footstool-with-storage-rattan-anthracite__0842801_pe716938_s5.jpg?f=xxxs",
    ],
  },
  {
    _id: uuid(),
    title: "Upholstered bed",
    sub_title: "grey",
    offer_price: "25490",
    img: "https://www.ikea.com/ext/ingkadam/m/7cfa80ec3ebd74a6/original/PH172880-crop002.jpg?f=xxs",
    price: "33799",
    description:
      "The king size bed is a versatile piece of furniture that can be used for a variety of purposes.",
    categoryName: "Beds",
    rating: "5",
    images: [
      "https://www.ikea.com/in/en/images/products/hauga-upholstered-bed-2-storage-boxes-vissle-grey__1101333_pe866597_s5.jpg?f=xxxs",
    ],
  },
  {
    _id: uuid(),
    title: "Office Chair",
    sub_title: "Black and White",
    offer_price: "8900",
    img: "https://www.ikea.com/in/en/images/products/utespelare-gaming-chair-bomstad-black__0997900_pe822868_s5.jpg?f=xxxs",
    price: "11000",
    description:
      "The unique design construction allows flexing and spring-back motion enabling multi-dimensional movement to suit body posture.",
    categoryName: "Chairs",
    rating: "3",
    images: [
      "https://www.ikea.com/in/en/images/products/utespelare-gaming-chair-bomstad-black__0984822_pe816425_s5.jpg?f=xxxs",
    ],
  },
  {
    _id: uuid(),
    title: "Sliding Wardrobe",
    sub_title: "2 Door, Rustic Almond",
    offer_price: "23490",
    img: "https://www.ikea.com/in/en/images/products/hauga-wardrobe-with-sliding-doors-beige__0977722_pe813902_s5.jpg?f=xxxs",
    price: "28000",
    description:
      "The sliding wardrobe is a versatile piece of furniture that can be used for a variety of purposes.",
    categoryName: "Wardrobes",
    rating: "4",
    images: [
      "https://www.ikea.com/in/en/images/products/hauga-wardrobe-with-sliding-doors-beige__0977719_pe813899_s5.jpg?f=xxxs",
    ],
  },
  {
    _id: uuid(),
    title: "Glass Cabinet",
    sub_title: "Locker, White Color",
    offer_price: "24500",
    img: "https://www.ikea.com/in/en/images/products/syvde-cabinet-with-glass-doors-white__0720836_pe740014_s5.jpg?f=xxxs",
    price: "27000",
    description:
      "The sliding wardrobeThe furniture with which you furnish your home reflects your style and sensibilities.",
    categoryName: "Wardrobes",
    rating: "4",
    images: [
      "https://www.ikea.com/in/en/images/products/syvde-cabinet-with-glass-doors-white__0720833_pe740011_s5.jpg?f=xxxs",
    ],
  },
  {
    _id: uuid(),
    title: "4 Door Wardrobe",
    sub_title: "white",
    offer_price: "56000",
    img: "https://www.ikea.com/ext/ingkadam/m/786d9761c9ae9600/original/PH183484-crop001.jpg?f=xxxs",
    price: "59900",
    description:
      "The sliding wardrobe furniture with which you furnish your home reflects your style and sensibilities.",
    categoryName: "Wardrobes",
    rating: "5",
    images: [
      "https://www.ikea.com/in/en/images/products/pax-hokksund-wardrobe-combination-white-high-gloss-light-grey__0935369_pe792786_s5.jpg?f=xxxs",
    ],
  },

  {
    _id: uuid(),
    title: "L Shape Sofa",
    sub_title: "Fabric, OffWhite Color",
    offer_price: "61999",
    img: "https://www.ikea.com/images/a-beige-vimle-sofa-bed-with-chaise-longue-against-a-blue-wal-4c63b7a888bfa121ceed5324dc27254d.jpg?f=xxxs",
    price: "64715",
    description:
      "The sofa is low back in smooth rounded forms with firm support. The firm back supports facilities upright seating or casual seating.",
    categoryName: "Sofas",
    rating: "4",
    images: [
      "https://www.ikea.com/in/en/images/products/vimle-3-seat-sofa-with-chaise-longue-with-wide-armrests-gunnared-beige__0952032_pe801518_s5.jpg?f=xxxs",
    ],
  },
  {
    _id: uuid(),
    title: "Gaming Chair",
    sub_title: "Bomstard Grey",
    offer_price: "10490",
    img: "https://www.ikea.com/in/en/images/products/utespelare-gaming-chair-bomstad-grey__0997779_pe822756_s5.jpg?f=xxxs",
    price: "19500",
    description:
      "gaming chair gives your body a nice support with a synchronised seat and back tilt that precisely follows your movements during the entire match.",
    categoryName: "Chairs",
    rating: "5",
    images: [
      "https://www.ikea.com/in/en/images/products/utespelare-gaming-chair-bomstad-grey__1004702_pe825131_s5.jpg?f=xxxs",
    ],
  },
  {
    _id: uuid(),
    title: "Upholstered Bed",
    sub_title: "Dark Green, Bed Frame",
    offer_price: "47000",
    img: "https://www.ikea.com/in/en/images/products/tufjord-upholstered-bed-frame-djuparp-dark-green__0859749_pe781086_s5.jpg?f=xxxs",
    price: "55000",
    description:
      "Due to the well-defined grain of Rosewood, each piece of the Utopia King Bed is unique in coloring, making your bed distinct.",
    categoryName: "Beds",
    rating: "4",
    images: [
      "https://www.ikea.com/in/en/images/products/tufjord-upholstered-bed-frame-djuparp-dark-green__0966519_ph175103_s5.jpg?f=xxxs",
    ],
  },
  {
    _id: uuid(),
    title: "8 Seat Dining Table",
    sub_title: "Table and 8 chairs, Dark Brown",
    offer_price: "106400",
    img: "https://www.ikea.com/in/en/images/products/strandtorp-odger-table-and-8-chairs-brown-anthracite__0946320_ph172863_s5.jpg?f=xxxs",
    price: "144999",
    description:
      "A stable construction in solid wood that makes each table unique, with varying grain patterns and natural colour shifts that are part of the charm of wood.",
    categoryName: "Dining",
    rating: "4",
    images: [
      "https://www.ikea.com/in/en/images/products/strandtorp-odger-table-and-8-chairs-brown-anthracite__1097884_pe865164_s5.jpg?f=xxxs",
    ],
  },
  {
    _id: uuid(),
    title: "Chocolate Study Table",
    sub_title: "Chocolate, Black",
    offer_price: "12490",
    img: "https://www.ikea.com/in/en/images/products/micke-corner-workstation-black-brown__0921922_pe788004_s5.jpg?f=xxxs",
    price: "25000",
    description:
      "The wide berth of the table top can hold everything from your laptop to your books and that too, at the same time!",
    categoryName: "Tables",
    rating: "5",
    images: [
      "https://www.ikea.com/in/en/images/products/micke-corner-workstation-black-brown__0734327_pe739443_s5.jpg?f=xxxs",
    ],
  },
  {
    _id: uuid(),
    title: "6 Seat Dining Table",
    sub_title: "Table and 6 chairs, Dark Grey",
    offer_price: "80400",
    img: "https://www.ikea.com/in/en/images/products/skogsta-bergmund-table-and-6-chairs-acacia-kolboda-beige-dark-grey__1015064_ph176248_s5.jpg?f=xxxs",
    price: "4999",
    description:
      "A stable construction in solid wood that makes each table unique, with varying grain patterns and natural colour shifts that are part of the charm of wood.",
    categoryName: "Dining",
    rating: "5",
    images: [""],
  },
  {
    _id: uuid(),
    title: "Simple Chair",
    sub_title: "Black and White Color",
    offer_price: "3490",
    img: "https://www.ikea.com/in/en/images/products/svenbertil-chair-black-broringe-white__0873395_pe620801_s5.jpg?f=xxxs",
    price: "14800",
    description:
      "The slightly curved backrest provides support to your back, allowing you or your loved ones to continue conversations for longer periods of time",
    categoryName: "Chairs",
    rating: "3",
    images: [
      "https://www.ikea.com/in/en/images/products/svenbertil-chair-black-broringe-white__0483262_pe620777_s5.jpg?f=xxxs",
    ],
  },
  {
    _id: uuid(),
    title: "Bar Stool",
    sub_title: "Bar stool, anthracite",
    offer_price: "6200",
    img: "https://www.ikea.com/in/en/images/products/yngvar-bar-stool-anthracite__0929674_ph170546_s5.jpg?f=xxxs",
    price: "9900",
    description:
      "The chair strikes a perfect balance between indisputable functionality and striking aesthetics.",
    categoryName: "Chairs",
    rating: "3",
    images: [
      "https://www.ikea.com/in/en/images/products/yngvar-bar-stool-anthracite__0742485_pe742619_s5.jpg?f=xxxs",
    ],
  },
  {
    _id: uuid(),
    title: "Prime High Armchair",
    sub_title: "Armchair, Dark grey",
    offer_price: "15800",
    img: "https://www.ikea.com/in/en/images/products/remsta-armchair-hakebo-dark-grey__0908604_pe783333_s5.jpg?f=xxxs",
    price: "17000",
    description:
      "The chair strikes a perfect balance between indisputable functionality and striking aesthetics.",
    categoryName: "Chairs",
    rating: "4",
    images: [
      "https://www.ikea.com/in/en/images/products/remsta-armchair-hakebo-dark-grey__0908603_pe783326_s5.jpg?f=xxxs",
    ],
  },
  {
    _id: uuid(),
    title: "Laptop Table",
    sub_title: "Ideal for Work from Home Setup",
    offer_price: "3400",
    img: "https://www.ikea.com/in/en/images/products/vittsjoe-laptop-stand-black-brown-glass__0855294_pe564652_s5.jpg?f=xxxs",
    price: "4999",
    description:
      "The Upbeat table can be pushed to any part of your home to get that best location from where positive work can happen.",
    categoryName: "Tables",
    rating: "2",
    images: [
      "https://www.ikea.com/in/en/images/products/vittsjoe-laptop-stand-black-brown-glass__0176250_pe329143_s5.jpg?f=xxxs",
    ],
  },
];
