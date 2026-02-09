import { TextField } from "../components/inputs/TextField";
import { Radio } from "../components/inputs/Radio";
export const Checkout = () => {
  return (
    <main className="container">
      <section className="container px-5 p-md-0 headings">
        <h1> CHECKOUT</h1>
        <h6 className="overline">billing details</h6>
      </section>
      <section className="container billing px-5 px-md-0">
        <div className="d-flex flex-column flex-md-row gap-md-5 gap-3">
          <TextField placeholder="Alexie Ward" label="Name"></TextField>
          <TextField
            placeholder="alexie@mail.com"
            label="Email Address"
          ></TextField>
        </div>
        <TextField
          placeholder="+1 202-555-0316"
          label="Phone Number"
        ></TextField>
      </section>

      <section></section>
    </main>
  );
};
