import { Link } from "react-router-dom";

export const Button1 = ({ text, to }) => {
  return (
    <Link to={to}>
      <button className="btn button1 align-self-start">{text}</button>
    </Link>
  );
};
