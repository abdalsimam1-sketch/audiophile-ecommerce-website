import { Link } from "react-router-dom";

export const Button2 = ({ text, to }) => {
  return (
    <Link to={to}>
      <button className="btn button2 align-self-center ">{text}</button>
    </Link>
  );
};
