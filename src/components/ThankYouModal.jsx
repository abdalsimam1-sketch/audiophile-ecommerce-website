import { useState } from "react";
import tick from "../assets/checkout/icon-order-confirmation.svg";
import { useCart } from "../Context/CartContext";
import { formatCartName } from "../HelperFunctions/NameShortener";
import { Link } from "react-router-dom";

export const ThankYouModal = () => {
  const { cart, grandTotal } = useCart();
  const first = cart[0];
  const theRest = cart.length - 1;

  return (
    <>
      <main className="p-5 container shadow">
        <img src={tick} alt="" />
        <h1>thank you for your order</h1>
        <p className="text-muted ">
          You will recieve an email confirmation shortly
        </p>

        <div className="rounded" style={{ overflow: "hidden" }}>
          <article className="grey-section p-5 ">
            <section className=" d-flex align-items-center justify-content-between  ">
              <div className="d-flex align-items-center ">
                <img
                  src={first.image}
                  alt={first.name}
                  style={{ width: "5rem" }}
                  className="rounded"
                />
                <div>
                  <h6 className="subtitle m-0">{formatCartName(first.name)}</h6>
                  <p className="subtitle text-muted m-0">${first.price}</p>
                </div>
              </div>
              <span className="text-muted subtitle">X{first.quantity}</span>
            </section>
            <div className="border-bottom"></div>
            <div className="d-flex justify-content-center">
              <p className="text-muted">and {theRest} other (item)s</p>
            </div>
          </article>
          <section className="black-section p-5 rounded-bottom">
            <h6 className="text-secondary">grand total</h6>
            <span className="subtitle text-white">${grandTotal()}</span>
          </section>
          <section className="mt-3">
            <Link to="/">
              <button className="btn button1 w-100">BACK TO HOME</button>
            </Link>
          </section>
        </div>
      </main>
    </>
  );
};
