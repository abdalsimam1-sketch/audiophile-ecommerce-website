import { useCart } from "../Context/CartContext";
import { QuantitySelector } from "../components/QuantitySelector";
import { Link } from "react-router-dom";
import { formatCartName } from "../HelperFunctions/NameShortener";

export const Cart = () => {
  const { cart, increase, decrease, clear, total } = useCart();

  return (
    <div className="d-flex flex-column align-items-center ">
      <main
        className="  me-md-5 modal-section  rounded shadow  d-flex flex-column  position-fixed bg-light p-5 "
        style={{ zIndex: "9999" }}
      >
        <div className="d-flex justify-content-between align-items-center">
          <h4>cart ({cart.length})</h4>
          <button className="btn" onClick={clear}>
            Remove All{" "}
          </button>
        </div>

        <section className="product-details">
          <div>
            {cart.map((item) => (
              <div
                key={item.id}
                className="d-flex justify-content-between align-items-center mb-3"
              >
                <div className="d-flex align-items-center gap-3 flex-nowrap">
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: "5rem" }}
                    className="rounded"
                  />
                  <div className="d-flex flex-column ">
                    <span className="subtitle">
                      {formatCartName(item.name)}
                    </span>
                    <span className="subtitle text-muted">
                      ${item.price.toLocaleString()}
                    </span>
                  </div>
                </div>
                <div className="flex-nowrap">
                  <QuantitySelector
                    handleAdd={() => increase(item.id)}
                    handleRemove={() => decrease(item.id)}
                    addBtn={false}
                    count={item.quantity}
                  ></QuantitySelector>
                </div>
              </div>
            ))}
            <div className="d-flex justify-content-between px-4 mb-5">
              <span className="subtitle">TOTAL</span>
              <span className="subtitle">${total().toLocaleString()}</span>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <Link to="/checkout" className="w-100">
              <button className="button1 btn  w-100">CHECKOUT</button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};
