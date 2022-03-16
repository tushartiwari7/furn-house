import React from "react";
import "./OurServices.css";
import { BsTruck, BsTrophy, BsShieldCheck, BsCashCoin } from "react-icons/bs";
import { v4 } from "uuid";

export const OurServices = () => {
  const services = [
    {
      Logo: BsTruck,
      title: "Free Delivery Above Rs4999",
      id: v4()
    },
    {
      Logo: BsTrophy,
      title: "Best Quality Products",
      id: v4()
    },
    {
      Logo: BsShieldCheck,
      title: "100% Satisfaction Guarantee",
      id: v4()
    },
    {
      Logo: BsCashCoin,
      title: "Easy Finance Options",
      id: v4()
    },
  ];

  return (
    <section className="my-lg py-lg">
      <h3 className="h2 ubuntu text-center mx-md my-lg">Our Services</h3>
      <section className="featured-products-wrapper flex wrap">
        {services.map(({ Logo, title, id }) => (
          <section className="card" key={id}>
            <div className="services m-md flex flex-center">
              <Logo />
            </div>
            <div className="card-desc services-desc fs-s p-xs fullwidth">
              <div className="card-description ubuntu h4 mx-md text-center">
                {title}
              </div>
            </div>
          </section>
        ))}
      </section>
    </section>
  );
};
