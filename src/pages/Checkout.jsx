import { TextField } from "../components/inputs/TextField";
import { formatCartName } from "../HelperFunctions/NameShortener";
import { useCart } from "../Context/CartContext";

export const Checkout = () => {
  const { cart, total, shipping, vat, grandTotal } = useCart();
  return (
    <main className="container ">
      <div className="row gap-3 justify-content-center">
        <div className="col-12 col-md-6 bg-light shadow rounded p-5 my-5">
          <form>
            <section className="heading-section">
              <h1> CHECKOUT</h1>
              <h6 className="overline">billing details</h6>
            </section>
            <section className="billing-section mb-3">
              <div className="d-flex billing-div flex-column flex-md-row gap-3">
                <TextField
                  label="Name"
                  placeholder="Alexie Ward"
                  className="col-md-6"
                ></TextField>
                <TextField
                  label="Email Address"
                  placeholder="alexie@mail.com"
                  className="col-md-6"
                ></TextField>
              </div>
              <TextField
                label="Phone Number"
                placeholder="+1 202-555-0316"
                className="col-md-6"
              ></TextField>
            </section>
            <section className="shipping-section">
              <h6 className="overline">Shipping Details</h6>
              <TextField
                label="Address"
                placeholder="1137 Williams Avenue"
              ></TextField>
              <div className="d-flex flex-column flex-md-row gap-3">
                <TextField
                  label="ZIP code"
                  placeholder="10001"
                  className="col-md-6"
                ></TextField>
                <TextField
                  label="City"
                  placeholder="New York"
                  className="col-md-6"
                ></TextField>
              </div>
              <TextField
                label="Country"
                placeholder="United States"
                className="col-md-6"
              ></TextField>
            </section>
            <section className="payment-section">
              <h6 className="overline mt-3">PAYMENT DETAILS</h6>
              <span className="subtitle">Payment Method</span>
              <div></div>
            </section>
          </form>
        </div>

        <div
          className="p-5 col-12 col-md-4 shadow my-5"
          style={{ maxHeight: "100vh" }}
        >
          <h6>summary</h6>
          <div>
            {cart.map((item) => (
              <div
                key={item.id}
                className="d-flex justify-content-between align-items-center "
              >
                <div className="d-flex gap-3 align-items-center mb-3">
                  <img
                    src={item.image}
                    alt=""
                    style={{ width: "5rem" }}
                    className="rounded"
                  />
                  <div className="d-flex flex-column">
                    <span className="subtitle">
                      {formatCartName(item.name)}
                    </span>
                    <span className="subtitle text-muted">
                      ${item.price.toLocaleString()}
                    </span>
                  </div>
                </div>
                <span className="text-muted fw-bold">X{item.quantity}</span>
              </div>
            ))}
          </div>

          <div className="d-flex justify-content-between">
            <h6 className="subtitle text-muted">Total</h6>
            <h6 className="subtitle">${total().toLocaleString()}</h6>
          </div>
          <div className="d-flex justify-content-between">
            <h6 className="subtitle text-muted">Shipping</h6>
            <h6 className="subtitle">${shipping}</h6>
          </div>
          <div className="d-flex justify-content-between">
            <h6 className="subtitle text-muted">vat(included)</h6>
            <h6 className="subtitle">${vat().toLocaleString()}</h6>
          </div>
          <div className="d-flex justify-content-between">
            <h6 className="subtitle text-muted">Grand total</h6>
            <h6 className="subtitle">${grandTotal().toLocaleString()}</h6>
          </div>
        </div>
      </div>
    </main>
  );
};
