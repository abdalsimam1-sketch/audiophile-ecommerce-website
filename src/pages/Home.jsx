import { Button1 } from "../components/buttons/Button1";

export const Home = () => {
  return (
    <main>
      <section className="hero-section text-center text-lg-start d-flex flex-column flex-md-row  justify-content-center align-items-center justify-content-lg-around text-white ">
        <div className="container">
          {" "}
          <div className="col-8 mx-auto col-md-5 col-lg-3 mx-lg-0 ">
            {" "}
            <h6 className="">new product</h6>
            <h1>XX99 Mark II Headphones</h1>
            <p>
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Button1 text="SEE PRODUCT"></Button1>
          </div>
        </div>
      </section>
    </main>
  );
};
