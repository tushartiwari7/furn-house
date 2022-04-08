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
    img: "https://www.ikea.com/ext/ingkadam/m/14371c9e839250e2/original/PE817522-crop001.jpg",
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
    img: "https://www.ikea.com/in/en/images/products/vimle-4-seat-sofa-with-chaise-longue-saxemara-light-blue__0949541_pe799799_s5.jpg?f=xxs",
    price: "82000",
    description:
      "The broad seating space and longer length of the 3-seater make it an ideal place for napping or relaxed lounging.",
    categoryName: "Sofas",
    rating: "5",
    images: [
      "https://www.ikea.com/in/en/images/products/vimle-3-seat-sofa-with-chaise-longue-saxemara-light-blue__1014957_ph177998_s5.jpg?f=xxs",
    ],
  },
  {
    _id: uuid(),
    title: "Coffee Table",
    sub_title: "Tempered Glass, Black",
    offer_price: "19499",
    img: "https://www.godrejinterio.com/imagestore/B2C/56121403SD00032/56121403SD00032_01_803x602.png",
    price: "20499",
    description:
      "The coffee table is a versatile piece of furniture that can be used for a variety of purposes.",
    categoryName: "Tables",
    rating: "4",
    images: [""],
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
    title: "Motion High Back Chair",
    sub_title: "Engineered Wood, Oak",
    offer_price: "8900",
    img: "https://res.cloudinary.com/furnhouse/image/upload/v1647537227/chairs/56101522SD03673_01_803x602_khd4jx.png",
    price: "11900",
    description:
      "The unique design construction allows flexing and spring-back motion enabling multi-dimensional movement to suit body posture.",
    categoryName: "Chairs",
    rating: "3",
    images: [""],
  },
  {
    _id: uuid(),
    title: "Linea Sliding Door Wardrobe",
    sub_title: "2 Door, Rustic Almond",
    offer_price: "57490",
    img: "https://res.cloudinary.com/furnhouse/image/upload/v1647523215/56101509SD00462_01_803x602_gjsp9v.png",
    price: "65000",
    description:
      "The sliding wardrobe is a versatile piece of furniture that can be used for a variety of purposes.",
    categoryName: "Wardrobes",
    rating: "4",
    images: [""],
  },
  {
    _id: uuid(),
    title: "Slimline 2 Door steel Wardrobe",
    sub_title: "Locker, Pac Blue Color",
    offer_price: "24500",
    img: "https://res.cloudinary.com/furnhouse/image/upload/v1647523112/SLIM00074_01_803x602_zugiyz.png",
    price: "27000",
    description:
      "The sliding wardrobeThe furniture with which you furnish your home reflects your style and sensibilities.",
    categoryName: "Wardrobes",
    rating: "4",
    images: [""],
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
    title: "Colloseum L Shape Sofa",
    sub_title: "Fabric, Dark Red",
    offer_price: "61999",
    img: "https://res.cloudinary.com/furnhouse/image/upload/v1647523517/sofas/56101502SD01658_02_803x602_kxyib5.png",
    price: "64715",
    description:
      "The sofa is low back in smooth rounded forms with firm support. The firm back supports facilities upright seating or casual seating.",
    categoryName: "Sofas",
    rating: "4",
    images: [""],
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
    title: "Utopia King Bed",
    sub_title: "Natural Brown, Sheesham",
    offer_price: "107000",
    img: "https://res.cloudinary.com/furnhouse/image/upload/v1647522688/56101515SD00324_01_803x602_lwnrgl.png",
    price: "125000",
    description:
      "Due to the well-defined grain of Rosewood, each piece of the Utopia King Bed is unique in coloring, making your bed distinct.",
    categoryName: "Beds",
    rating: "3",
    images: [""],
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
    title: "Aero High Back Synchro Chair",
    sub_title: "Adjustable Armrest, Black",
    offer_price: "13490",
    img: "https://res.cloudinary.com/furnhouse/image/upload/v1647537153/chairs/AERO0001_01_803x602_o13ln0.png",
    price: "14800",
    description:
      "The slightly curved backrest provides support to your back, allowing you or your loved ones to continue conversations for longer periods of time",
    categoryName: "Chairs",
    rating: "3",
    images: [""],
  },
  {
    _id: uuid(),
    title: "Greta Mid Back Mesh Chair",
    sub_title: "Fabric, Grey Mesh With White Body",
    offer_price: "18200",
    img: "https://res.cloudinary.com/furnhouse/image/upload/v1647537265/chairs/56101522SD02032_01_803x602_wp0ckc.png",
    price: "19900",
    description:
      "The chair strikes a perfect balance between indisputable functionality and striking aesthetics.",
    categoryName: "Chairs",
    rating: "3",
    images: [""],
  },
  {
    _id: uuid(),
    title: "Prime High Back Chair",
    sub_title: "Fabric, Black",
    offer_price: "15800",
    img: "https://res.cloudinary.com/furnhouse/image/upload/v1647537299/chairs/ELITE0001_1_803x602_uqpst6.png",
    price: "17000",
    description:
      "The chair strikes a perfect balance between indisputable functionality and striking aesthetics.",
    categoryName: "Chairs",
    rating: "4",
    images: [""],
  },
  {
    _id: uuid(),
    title: "WFH Table",
    sub_title: "Slam Teak Wood",
    offer_price: "8400",
    img: "https://res.cloudinary.com/furnhouse/image/upload/v1647537512/tables/56101519SD01213_02_803x602_baeso3.png",
    price: "9999",
    description:
      "The Upbeat table can be pushed to any part of your home to get that best location from where positive work can happen.",
    categoryName: "Tables",
    rating: "2",
    images: [""],
  },
];
