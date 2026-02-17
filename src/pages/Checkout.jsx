import { TextField } from "../components/inputs/TextField";
import { formatCartName } from "../HelperFunctions/NameShortener";
import { useCart } from "../Context/CartContext";
import { useState } from "react";
import { ThankYouModal } from "../components/ThankYouModal";
import cash from "../assets/checkout/icon-cash-on-delivery.svg";

export const Checkout = () => {
  const { cart, total, shipping, vat, grandTotal } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("e-money");
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    zip: "",
    city: "",
    country: "",
    payment: "",
    eMoneyNumber: "",
    eMoneyPin: "",
  });

  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.name) {
      newErrors.name = "Required";
    }
    if (!formData.email.includes("@")) newErrors.email = "Invalid format";
    if (!formData.address) newErrors.address = "Required";
    if (!formData.phoneNumber) newErrors.phoneNumber = "Required";
    if (!formData.zip) newErrors.zip = "Required";
    if (!formData.city) newErrors.city = "Required";
    if (!formData.country) newErrors.country = "Required";

    if (paymentMethod === "e-money") {
      if (!formData.eMoneyNumber) newErrors.eMoneyNumber = "Required";
      if (!formData.eMoneyPin) newErrors.eMoneyPin = "Required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  if (cart.length < 1) {
    return (
      <div
        className="d-flex justify-content-center align-items-center "
        style={{ height: "100vh" }}
      >
        <h1>cart is currently empty please add something</h1>
      </div>
    );
  }

  return (
    <>
      <main className="container ">
        <div className="row gap-3 justify-content-center">
          <div className="col-12 col-lg-6 bg-light shadow rounded p-5 my-5">
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
                    required
                    value={formData.name}
                    onChange={handleChange}
                    name="name"
                    error={errors.name}
                  ></TextField>
                  <TextField
                    label="Email Address"
                    placeholder="alexie@mail.com"
                    className="col-md-6"
                    required
                    onChange={handleChange}
                    error={errors.email}
                    value={formData.email}
                    name="email"
                  ></TextField>
                </div>
                <TextField
                  label="Phone Number"
                  placeholder="+1 202-555-0316"
                  className="col-md-6"
                  required
                  onChange={handleChange}
                  error={errors.phoneNumber}
                  value={formData.phoneNumber}
                  name="phoneNumber"
                ></TextField>
              </section>
              <section className="shipping-section">
                <h6 className="overline">Shipping Details</h6>
                <TextField
                  label="Address"
                  placeholder="1137 Williams Avenue"
                  required
                  onChange={handleChange}
                  error={errors.address}
                  value={formData.address}
                  name="address"
                ></TextField>
                <div className="d-flex flex-column flex-md-row gap-3">
                  <TextField
                    label="ZIP code"
                    placeholder="10001"
                    className="col-md-6"
                    required
                    onChange={handleChange}
                    error={errors.zip}
                    value={formData.zip}
                    name="zip"
                  ></TextField>
                  <TextField
                    label="City"
                    placeholder="New York"
                    className="col-md-6"
                    required
                    onChange={handleChange}
                    error={errors.city}
                    value={formData.city}
                    name="city"
                  ></TextField>
                </div>
                <TextField
                  label="Country"
                  placeholder="United States"
                  className="col-md-6"
                  required
                  onChange={handleChange}
                  error={errors.country}
                  value={formData.country}
                  name="country"
                ></TextField>
              </section>
              <section className="payment-section ">
                <h6 className="overline mt-3">PAYMENT DETAILS</h6>
                <span className="subtitle">Payment Method</span>
                <div className="row col-md-6 ms-auto">
                  <div className="form-control d-flex align-items-center gap-3  mb-3 ">
                    <input
                      type="radio"
                      name="payment"
                      onChange={() => setPaymentMethod("e-money")}
                    />
                    <p className="subtitle m-0 ">e-money</p>
                  </div>
                  <div className="form-control d-flex align-items-center gap-3 ">
                    <input
                      type="radio"
                      name="payment"
                      onChange={() => setPaymentMethod("cash")}
                    />
                    <p className="subtitle m-0 text-capitalize">
                      cash on delivery
                    </p>
                  </div>
                </div>
                {paymentMethod === "e-money" && (
                  <div className="d-flex flex-column flex-md-row gap-3">
                    <TextField
                      label="e-Money Number"
                      placeholder="238521993"
                      className="col-md-6"
                      required
                      onChange={handleChange}
                      error={errors.eMoneyNumber}
                      value={formData.eMoneyNumber}
                      name="eMoneyNumber"
                    ></TextField>
                    <TextField
                      label="e-Money PIN"
                      placeholder="6891"
                      className="col-md-6"
                      required
                      onChange={handleChange}
                      error={errors.eMoneyPin}
                      value={formData.eMoneyPin}
                      name="eMoneyPin"
                    ></TextField>
                  </div>
                )}

                {paymentMethod === "cash" && (
                  <div className="d-flex gap-3 align-items-center">
                    <img
                      src={cash}
                      alt="cash on delivery"
                      width="100"
                      height="100"
                    />
                    <p className="text-muted">
                      The ‘Cash on Delivery’ option enables you to pay in cash
                      when our delivery courier arrives at your residence. Just
                      make sure your address is correct so that your order will
                      not be cancelled.
                    </p>
                  </div>
                )}
              </section>
            </form>
          </div>

          <div
            className="p-5 col-12 col-lg-4 shadow my-5 rounded"
            style={{ height: "auto" }}
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
              <h6 className=" text-muted">Total</h6>
              <h6 className="subtitle">${total().toLocaleString()}</h6>
            </div>
            <div className="d-flex justify-content-between">
              <h6 className=" text-muted">Shipping</h6>
              <h6 className="subtitle">${shipping.toFixed(2)}</h6>
            </div>
            <div className="d-flex justify-content-between">
              <h6 className=" text-muted">vat(included)</h6>
              <h6 className="subtitle">${vat().toLocaleString()}</h6>
            </div>
            <div className="d-flex justify-content-between">
              <h6 className=" text-muted">Grand total</h6>
              <h6 className="grandtotal subtitle">
                ${grandTotal().toLocaleString()}
              </h6>
            </div>

            <button
              type="submit"
              className="btn button1 w-100"
              onClick={() => validate() && setOpenModal(true)}
            >
              CONTINUE & PAY
            </button>
          </div>
        </div>
      </main>

      {openModal && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{ zIndex: 9999, background: "rgba(0,0,0,0.5)" }}
        >
          <ThankYouModal />
        </div>
      )}
    </>
  );
};
