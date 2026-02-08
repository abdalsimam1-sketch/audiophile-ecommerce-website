import { useParams, useNavigate } from "react-router-dom";
import data from "../data.json";

export const Details = () => {
  const navigate = useNavigate();
  const { productName } = useParams();
  const filteredProduct = data.find((product) => product.slug === productName);

  if (!filteredProduct) {
    return (
      <div className="container d-flex justify-content-center align-items-center text-danger">
        Product not found
      </div>
    );
  }
  return (
    <main>
      <div className="container">
        <span onClick={() => navigate(-1)} className="btn">
          Go Back
        </span>
      </div>

      <section className="details-section container d-flex flex-column flex-md-row  text-md-row text-md-row gap-5">
        <div>
          <img
            src={filteredProduct.image.mobile}
            alt={filteredProduct.slug}
            className="img-fluid rounded"
          />
        </div>
        <div className=" d-flex  flex-column justify-content-center align-items-center  ">
          <div className="footer-text">
            <span className="overline">NEW PRODUCT</span>
            <h1>{filteredProduct.name}</h1>
            <p className="text-muted">{filteredProduct.description}</p>
            <h6 className="">${filteredProduct.price}</h6>
            <div className="d-flex gap-4 ">
              <span className="increase-btns h-100 rounded">
                <i className="btn bi bi-dash-lg "></i>
                <i className="btn">{}</i>
                <i className="btn bi bi-plus-lg"></i>
              </span>
              <button className="btn button1">ADD TO CART</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
