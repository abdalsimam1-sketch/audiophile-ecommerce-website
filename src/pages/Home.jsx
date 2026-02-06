import { Button1 } from "../components/buttons/Button1";
import { Button2 } from "../components/buttons/Button2";
import { Categories } from "../components/Categories";
import zx9 from "../assets/home/desktop/image-speaker-zx9.png";
export const Home = () => {
  return (
    <main>
      <section className="hero-section text-center text-lg-start  text-white d-flex align-items-center ">
        <div className="container">
          <div className="row">
            <div className="col-8 col-md-6 col-lg-4   mx-auto mx-lg-0">
              <h6>new product</h6>
              <h1>XX99 Mark II Headphones</h1>
              <p>
                Experience natural, lifelike audio and exceptional build quality
                made for the passionate music enthusiast.
              </p>
              <Button1 text="SEE PRODUCT"></Button1>
            </div>
          </div>
        </div>
      </section>

      <section className="categories-section mb-5">
        <Categories></Categories>
      </section>

      <section className=" mx-3 text-center text-md-start pb-5 mb-5">
        <div className="zx9-section container d-flex flex-column flex-md-row align-items-center justify-content-around p-5  rounded ">
          <div className="zx9-img">
            <img src={zx9} alt="zx9 speaker" className="img-fluid" />
          </div>
          <div className="zx9-text text-white ">
            <h1>ZX9 speaker</h1>
            <p>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound. See product
            </p>
            <Button2 text="SEE PRODUCT"></Button2>
          </div>
        </div>
      </section>
    </main>
  );
};
