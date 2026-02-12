import { useCart } from "../Context/CartContext";
import { QuantitySelector } from "../components/QuantitySelector";

export const Cart = () => {
  const { cart, increase, decrease, clear } = useCart();
  return (
    <main
      className=" me-md-5 modal-section  rounded shadow p-5 d-flex flex-column position-fixed bg-light "
      style={{ zIndex: "9999" }}
    >
      <div className="d-flex justify-content-between ">
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
                <div>
                  <span className="subtitle">{item.name}</span>
                  <span>{item.price}</span>
                </div>
              </div>
              <div className="flex-nowrap">
                <QuantitySelector
                  handleAdd={increase}
                  handleRemove={decrease}
                  addBtn={false}
                  count={item.quantity}
                ></QuantitySelector>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
