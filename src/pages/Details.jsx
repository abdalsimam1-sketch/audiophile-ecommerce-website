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
    <main className="d-flex flex-column gap-4">
      <div className="container">
        <span onClick={() => navigate(-1)} className="btn">
          Go Back
        </span>
      </div>
      <section className="details-section container d-flex flex-column flex-md-row justify-content-between  text-md-row text-md-row gap-5">
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
      <article className="px-3">
        <section className="container features-section d-flex flex-column flex-md-row gap-md-5 ">
          <div>
            <h2>features</h2>
            <p className="text-muted"> {filteredProduct.features}</p>
          </div>
          <div className=" fw-bold">
            <h2>in the box</h2>
            {filteredProduct.includes.map((item, index) => (
              <p key={index}>
                <span className="overline fw-bold">X{item.quantity}</span>
                {item.item}
              </p>
            ))}
          </div>
        </section>
      </article>

      <section className="container gallery-section d-flex flex-column flex-md-row gap-3">
        <div className="d-flex flex-column gap-3">
          <div className=" flex-grow-1">
            <img
              src={filteredProduct.gallery.first.mobile}
              alt=""
              className="rounded img-fluid h-100 w-100  "
            />
          </div>
          <div className=" flex-grow-1">
            <img
              src={filteredProduct.gallery.second.mobile}
              alt=""
              className="rounded img-fluid h-100 w-100 "
            />
          </div>
        </div>
        <div style={{ overflow: "hidden" }}>
          <img
            src={filteredProduct.gallery.third.mobile}
            alt=""
            className="rounded img-fluid h-100 w-100 "
          />
        </div>
      </section>
    </main>
  );
};
