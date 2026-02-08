import { useParams, useNavigate } from "react-router-dom";
import data from "../data.json";

export const Details = () => {
  const navigate = useNavigate();
  const { productName } = useParams();
  const filteredProduct = data.filter(
    (product) => product.slug === productName,
  );
  return (
    <main>
      <div className="container">
        <span onClick={() => navigate(-1)} className="btn">
          Go Back
        </span>
      </div>
    </main>
  );
};
