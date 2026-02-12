import { Button1 } from "../components/buttons/Button1";
import { Button2 } from "../components/buttons/Button2";
import { Categories } from "../components/Categories";
import { Description } from "../components/Description";
import zx9 from "../assets/home/mobile/image-speaker-zx9.png";

export const Home = () => {
  return (
    <main className="d-flex flex-column gap-4 ">
      <section className="hero-section text-center text-lg-start  text-white d-flex align-items-center ">
        <div className="container">
          <div className="row">
            <div className="col-8 col-md-6 col-lg-4   mx-auto mx-lg-0">
              <span className="overline">NEW PRODUCT</span>
              <h1>XX99 Mark II Headphones</h1>
              <p>
                Experience natural, lifelike audio and exceptional build quality
                made for the passionate music enthusiast.
              </p>
              <Button1
                text="SEE PRODUCT"
                to={`details/xx99-mark-two-headphones`}
              ></Button1>
            </div>
          </div>
        </div>
      </section>

      <section className="categories-section ">
        <Categories></Categories>
      </section>

      <article className="d-flex flex-column gap-4 mx-3">
        <section className="zx9-section container d-flex flex-column flex-md-row text-center text-md-start pb-5 rounded text-white p-5 gap-3">
          <div className="d-flex justify-content-center ">
            <img
              src={zx9}
              alt="zx9 image"
              className="img-fluid"
              style={{ width: "15rem" }}
            />
          </div>
          <div className="d-flex flex-column justify-content-center">
            <h1>ZX9 speaker</h1>
            <p className="zx9-text">
              {" "}
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound. See product
            </p>
            <div>
              <Button2 text="SEE PRODUCT" to="/details/zx9-speaker"></Button2>
            </div>
          </div>
        </section>
        <section className="container zx7-section d-flex text-center text-md-start align-items-center justify-content-center justify-content-md-between ps-5 rounded">
          <div className="zx7-items">
            <h1>zx7 speaker</h1>
            <Button2 text="SEE PRODUCT" to="/details/zx7-speaker">
              {" "}
            </Button2>
          </div>
        </section>
      </article>

      <section className="container p-md-0 yx1-section d-flex flex-column flex-md-row  gap-3 mb-5 text-center ">
        <div className="yx1-left rounded"></div>
        <div className="yx1-right rounded d-flex flex-column justify-content-center">
          <h1>yx1 earphones</h1>
          <Button2 text="SEE PRODUCT" to="/details/yx1-earphones"></Button2>
        </div>
      </section>

      <section>
        <Description></Description>
      </section>
    </main>
  );
};
