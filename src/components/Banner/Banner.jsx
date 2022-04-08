import { Link } from "react-router-dom";
import "./Banner.css";
export const Banner = () => {
  return (
    <section className="flex banner full-width">
      <div className="flex flex-center flex-col p-md banner-content">
        <p className="title text-center">Give your Home a New look. </p>
        <p className="subtitle fs-m">
          Top Quality products that's build to last.
        </p>
        <Link
          to="/products"
          title="See All Products"
          className="btn btn-primary m-md px-md py-xs fs-m rounded-circle"
        >
          Shop Now
        </Link>
      </div>
      <div className="banner-video">
        <video
          muted
          autoPlay
          loop
          src="https://res.cloudinary.com/furnhouse/video/upload/eo_030,so_0/v1649419573/e-commerce/ecom-banner-1.webm"
        ></video>
      </div>
    </section>
  );
};

/**
 * 
    <Link to='/products'>
      <img src="https://godrejinterio.com/imagestore/B2C/EspotImages/Images/Banners/Q4_HomePage-01.webp" alt="Sofa_Sets"
      width={'100%'}
      className="banner-img"
      ></img>
    </Link>
 */
