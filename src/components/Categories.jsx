import headphonesDesktop from "../assets/shared/desktop/image-category-thumbnail-headphones.png";

import speakersDesktop from "../assets/shared/desktop/image-category-thumbnail-speakers.png";

import earphonesDesktop from "../assets/shared/desktop/image-category-thumbnail-earphones.png";

import { Button3 } from "../components/buttons/Button3";
import { Link } from "react-router-dom";
export const Categories = ({ closeMenu }) => {
  const categories = [
    {
      images: {
        desktop: headphonesDesktop,
      },
      name: "headphones",
      category: "headphones",
    },

    {
      images: {
        desktop: speakersDesktop,
      },
      name: "speakers",
      category: "speakers",
    },

    {
      images: {
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
                <img
                  src={category.images.desktop}
                  alt={category.name}
                  width="200"
                  height="200"
                  loading="lazy"
                  className="img-fluid"
                />

                <div className="category-card-description d-flex flex-column">
                  <span className="overline text-dark text-capitalize">
                    {category.name}
                  </span>
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
