import React from "react";
import "./OurServices.css";
import { v4 } from "uuid";
import Image from "components/atoms/Image/Image";

export const OurServices = () => {
  const services = [
    {
      icon: "https://www.godrejinterio.com/imagestore/B2C/EspotImages/Images/Icons/op-hq-products.png",
      title: "High Quality Products",
      description:
        "Commited to crafting products from the best quality materials to give you furniture that will last a lifetime.",
      id: v4(),
    },
    {
      icon: "https://www.godrejinterio.com/imagestore/B2C/EspotImages/Images/Icons/op-ls-network.png",
      title: "Large Store Network",
      description:
        "We have over 400 stores across 84 cities. Visit us to experience our product first hand or interact with our team.",
      id: v4(),
    },
    {
      icon: "https://www.godrejinterio.com/imagestore/B2C/EspotImages/Images/Icons/op-fd-and-installation.png",
      title: "Free Delivery on Eligible Products",
      description:
        "We will deliver your furniture install it by our technician at no extra cost if that product is eligible.",
      id: v4(),
    },
  ];

  return (
    <ul className="flex services py-md">
      <p className="fs-l p-md services-title">
        We at <strong>FurnHouse</strong> Promises You
      </p>
      <div className="grid service-cards">
        {services.map(({ icon, title, id, description }) => (
          <section className="card full-width" key={id}>
            <div className="m-md flex flex-center">
              <Image className="icon" src={icon} />
            </div>
            <div className="card-desc services-desc fs-s p-xs fullwidth">
              <div className="h4 mx-md text-center">{title}</div>
              <p className="fs-s p-sm">{description}</p>
            </div>
          </section>
        ))}
      </div>
    </ul>
  );
};
