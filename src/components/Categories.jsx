import headphones from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakers from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphones from "../assets/shared/desktop/image-category-thumbnail-earphones.png";
import { Button3 } from "../components/buttons/Button3";
import { Link } from "react-router-dom";
export const Categories = ({ closeMenu }) => {
  const categoires = [
    {
      image: headphones,
      name: "headphones",
      category: "headphones",
    },
    {
      image: speakers,
      name: "speakers",
      category: "speakers",
    },
    {
      image: earphones,
      name: "earphones",
      category: "earphones",
    },
  ];
  return (
    <main className="d-flex flex-column mt-5">
      <div className="container">
        <div className="row category-row">
          {categoires.map((category, index) => (
            <div key={index} className="col-12 col-md-4 col-lg-4 g-4 ">
              <div className="card h-100 category-section d-flex flex-column align-items-center">
                <img
                  src={category.image}
                  alt={category.name}
                  className="img-fluid category-img h-100 "
                />
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
