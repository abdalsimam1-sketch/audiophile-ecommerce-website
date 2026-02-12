import headphones from "../assets/shared/mobile/image-xx99-mark-one-headphones.jpg";
import headphonesTablet from "../assets/shared/tablet/image-xx99-mark-one-headphones.jpg";
import headphonesDesktop from "../assets/shared/desktop/image-category-thumbnail-headphones.png";

import speakers from "../assets/shared/mobile/image-zx9-speaker.jpg";
import speakersTablet from "../assets/shared/tablet/image-zx9-speaker.jpg";
import speakersDesktop from "../assets/shared/desktop/image-category-thumbnail-speakers.png";

import earphones from "../assets/shared/desktop/image-category-thumbnail-earphones.png";
import earphonesTablet from "../assets/shared/desktop/image-category-thumbnail-earphones.png";
import earphonesDesktop from "../assets/shared/desktop/image-category-thumbnail-earphones.png";

import { Button3 } from "../components/buttons/Button3";
import { Link } from "react-router-dom";
export const Categories = ({ closeMenu }) => {
  const categories = [
    {
      images: {
        mobile: headphones,
        tablet: headphonesTablet,
        desktop: headphonesDesktop,
      },
      name: "headphones",
      category: "headphones",
    },

    {
      images: {
        mobile: speakers,
        tablet: speakersTablet,
        desktop: speakersDesktop,
      },
      name: "speakers",
      category: "speakers",
    },

    {
      images: {
        mobile: earphones,
        tablet: earphonesTablet,
        desktop: earphonesDesktop,
      },
      name: "earphones",
      category: "earphones",
    },
  ];
  return (
    <main className="d-flex flex-column mt-5">
      <div className="container">
        <div className="row category-row">
          {categories.map((category, index) => (
            <div key={index} className="col-12 col-md-4 col-lg-4 g-4 ">
              <div className="card h-100 category-section d-flex flex-column align-items-center">
                <picture>
                  <source
                    srcSet={category.images.desktop}
                    media="(min-width: 1024px)"
                  />
                  <source
                    srcSet={category.images.tablet}
                    media="(min-width: 768px)"
                  />
                  <img src={category.images.mobile} alt={category.name} />
                </picture>
                <div className="category-card-description d-flex flex-column">
                  <h6>{category.name}</h6>
                  <Link
                    to={`/category/${category.category}`}
                    className="mx-auto "
                    onClick={closeMenu}
                  >
                    <Button3 text="SHOP"></Button3>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
