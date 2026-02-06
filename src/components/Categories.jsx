import headphones from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakers from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphones from "../assets/shared/desktop/image-category-thumbnail-earphones.png";
import { Button3 } from "../components/buttons/Button3";
export const Categories = () => {
  const categoires = [
    {
      image: headphones,
      name: "headphones",
    },
    {
      image: speakers,
      name: "speakers",
    },
    {
      image: earphones,
      name: "earphones",
    },
  ];
  return (
    <main className="d-flex flex-column mt-5">
      <div className="container">
        <div className="row category-row">
          {categoires.map((category, index) => (
            <div className="col-11 mx-auto col-md-4 col-lg-4 g-4 ">
              <div
                key={index}
                className="card h-100 category-section d-flex flex-column align-items-center"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="img-fluid category-img "
                />
                <div className="category-card-description d-flex flex-column">
                  <h6>{category.name}</h6>
                  <Button3 text="SHOP"></Button3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
