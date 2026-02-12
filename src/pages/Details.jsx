import { useParams, useNavigate } from "react-router-dom";
import data from "../data.json";
import { Categories } from "../components/Categories";
import { Description } from "../components/Description";
import { Button1 } from "../components/buttons/Button1";
import { useCart } from "../Context/CartContext";
import { useState, useEffect } from "react";
import { QuantitySelector } from "../components/QuantitySelector";

export const Details = () => {
  const { addToCart, cart } = useCart();
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

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const [count, setCount] = useState(1);
  const handleAdd = () => {
    setCount((prev) => prev + 1);
  };
  const handleRemove = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };
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
            <QuantitySelector
              addBtn="true"
              handleAdd={handleAdd}
              handleRemove={handleRemove}
              filteredProduct={filteredProduct}
              count={count}
              addToCart={addToCart}
            ></QuantitySelector>
          </div>
        </div>
      </section>
      <article className="px-md-3">
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
              alt={filteredProduct.gallery.first.mobile}
              className="rounded img-fluid h-100 w-100  "
            />
          </div>
          <div className=" flex-grow-1">
            <img
              src={filteredProduct.gallery.second.mobile}
              alt={filteredProduct.gallery.second.mobile}
              className="rounded img-fluid h-100 w-100 "
            />
          </div>
        </div>
        <div style={{ overflow: "hidden" }}>
          <img
            src={filteredProduct.gallery.third.mobile}
            alt={filteredProduct.gallery.third.mobile}
            className="rounded img-fluid h-100 w-100 "
          />
        </div>
      </section>

      <section className="you-may-like-section container text-center">
        <div className="row">
          {filteredProduct.others.map((item, index) => (
            <div className="col-12 col-md-6 col-lg-4 g-3" key={index}>
              <div className="card">
                <img src={item.image.desktop} alt={item.name} />
                <h3>{item.name}</h3>
                <Button1
                  to={`/details/${item.slug}`}
                  text="SEE PRODUCT"
                ></Button1>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="categories-description d-flex flex-column gap-4">
        <Categories></Categories>
        <Description></Description>
      </section>
    </main>
  );
};
