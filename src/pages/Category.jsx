import { useParams } from "react-router-dom";
import data from "../data.json";
import { Button1 } from "../components/buttons/Button1";
import { Categories } from "../components/Categories";
import { Description } from "../components/Description";

export const Category = () => {
  const { categoryName } = useParams();
  const category = data.filter((item) => item.category === categoryName);

  return (
    <main className="d-flex flex-column gap-4">
      <section className="title-section text-white">
        <div className="p-5 d-flex justify-content-center align-content-center">
          <h1>{categoryName}</h1>
        </div>
      </section>

      <section className="product-section d-flex flex-column gap-4">
        {category.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={item.id}
              className=" container d-flex flex-column flex-md-row  product-description text-center text-md-start "
            >
              <div className={`${isEven ? "order-md-2" : "order-md-1"}`}>
                <img
                  src={item.image.desktop}
                  alt=""
                  className="img-fluid rounded"
                />
              </div>
              <div
                className={`d-flex justify-content-center align-items-center ${isEven ? "order-md-1" : "order-md-2"}`}
              >
                <div className="footer-text">
                  <h6 className="overline">new product</h6>
                  <h1>{item.name}</h1>
                  <p>{item.description}</p>
                  <Button1 text="SEE PRODUCT"></Button1>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      <section className="d-flex flex-column gap-4">
        <Categories></Categories>
        <Description></Description>
      </section>
    </main>
  );
};
