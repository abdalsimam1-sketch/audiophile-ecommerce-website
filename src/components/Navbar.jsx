import logo from "../assets/shared/desktop/logo.svg";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <header className="">
      <nav className="bg-dark text-white d-flex fs-3 justify-content-around d-md-none d-lg-none ">
        <div>
          <i className="bi bi-list"></i>
        </div>
        <div>
          {" "}
          <img src={logo} alt="audiophile logo" />
        </div>
        <div>
          <i className="bi bi-cart "></i>
        </div>
      </nav>
      <nav className="bg-dark text-white d-flex fs-3 justify-content-around d-none d-md-flex d-lg-none">
        <div className="d-flex gap-3 align-items-center">
          <i className="bi bi-list"></i>
          <img
            src={logo}
            alt="audiophile logo"
            style={{ width: "7rem", height: "2rem" }}
          />
        </div>

        <div>
          <i className="bi bi-cart "></i>
        </div>
      </nav>
      <nav className="bg-dark text-white  d-none d-md-none d-lg-flex justify-content-lg-around align-items-lg-center  ">
        <div>
          <img src={logo} alt="audiophile logo" />
        </div>
        <div className="nav-links d-flex align-items-center gap-5">
          <Link>HOME</Link>
          <Link>HEADPHONES</Link>
          <Link>SPEAKERS</Link>
          <Link>EARPHONES</Link>
        </div>
        <div>
          <i className="bi bi-cart fs-3"></i>
        </div>
      </nav>
    </header>
  );
};
