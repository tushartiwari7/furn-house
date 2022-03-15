import React from "react";
import "./OurServices.css";
import { BsTruck, BsTrophy, BsShieldCheck, BsCashCoin } from "react-icons/bs";

export const OurServices = () => {
  const services = [
    {
      Logo: BsTruck,
      title: "Free Delivery Above Rs4999",
    },
    {
      Logo: BsTrophy,
      title: "Best Quality Products",
    },
    {
      Logo: BsShieldCheck,
      title: "100% Satisfaction Guarantee",
    },
    {
      Logo: BsCashCoin,
      title: "Easy Finance Options",
    },
  ];

  return (
    <section className="my-lg py-lg">
      <h3 className="h2 ubuntu text-center mx-md my-lg">Our Services</h3>
      <section className="featured-products-wrapper flex wrap">
        {services.map(({ Logo, title }) => (
          <section className="card">
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
