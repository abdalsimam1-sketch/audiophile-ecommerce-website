import { useEffect, useState } from "react";
import logo from "../assets/shared/desktop/logo.svg";
import { Link } from "react-router-dom";
import { Categories } from "./Categories";
import { useCart } from "../Context/CartContext";
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toggleCart, modalIsOpen } = useCart();

  const isOverlayOpen = isOpen || modalIsOpen;

  const toggleMenu = () => {
    if (modalIsOpen) {
      toggleCart();
    }
    setIsOpen((prev) => !prev);
  };

  const handleCart = () => {
    if (isOpen) {
      setIsOpen(false);
    }
    toggleCart();
  };
  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOverlayOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOverlayOpen]);

  return (
    <header className="">
      <nav
        className="nav-bar text-white d-flex fs-3 justify-content-around d-md-none d-lg-none  position-fixed w-100"
        style={{ zIndex: "1050" }}
      >
        <div>
          <i
            className="bi bi-list btn btn-outline-dark text-white "
            onClick={toggleMenu}
          ></i>
        </div>
        <div>
          {" "}
          <Link to="/" onClick={closeMenu}>
            {" "}
            <img src={logo} alt="audiophile logo" className="img-fluid" />
          </Link>
        </div>
        <div>
          <i
            className="bi bi-cart  btn btn-outline-dark text-white"
            onClick={handleCart}
          ></i>
        </div>
      </nav>

      <nav className=" nav-bar text-white d-flex fs-3 justify-content-around d-none d-md-flex d-lg-none">
        <div className="d-flex gap-3 align-items-center">
          <i
            className="bi bi-list  btn btn-outline-dark text-white"
            onClick={toggleMenu}
          ></i>
          <Link to="/">
            <img
              src={logo}
              alt="audiophile logo"
              style={{ width: "8rem", height: "2rem" }}
            />
          </Link>
        </div>

        <div>
          <i
            className="bi bi-cart btn btn-outline-dark text-white"
            onClick={toggleCart}
          ></i>
        </div>
      </nav>

      <nav className=" nav-bar text-white  d-none d-md-none d-lg-flex justify-content-lg-around align-items-lg-center  ">
        <div>
          <Link to="/">
            <img src={logo} alt="audiophile logo" />
          </Link>
        </div>
        <div className="nav-links d-flex align-items-center gap-5 ">
          <Link to="/">HOME</Link>
          <Link to="/category/headphones">HEADPHONES</Link>
          <Link to="/category/speakers">SPEAKERS</Link>
          <Link to="/category/earphones">EARPHONES</Link>
        </div>
        <div>
          <i
            className="bi bi-cart fs-5 btn btn-outline-dark text-white"
            onClick={toggleCart}
          ></i>
        </div>
      </nav>
      <div className="d-flex flex-column flex-md-row justify-content-md-center  d-lg-none ">
        {isOpen && (
          <div
            className="position-fixed "
            style={{ top: "1rem", height: "100vh", overflow: "auto" }}
          >
            <Categories closeMenu={closeMenu}></Categories>
          </div>
        )}
      </div>
    </header>
  );
};
