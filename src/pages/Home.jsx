import { Button1 } from "../components/buttons/Button1";
import { Categories } from "../components/Categories";
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

      <section className="categories-section ">
        <Categories></Categories>
      </section>
    </main>
  );
};
