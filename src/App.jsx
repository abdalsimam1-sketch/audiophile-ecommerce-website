import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";
import { Category } from "./pages/Category";
import { Details } from "./pages/Details";
import { Checkout } from "./pages/Checkout";
import { PageNotFound } from "./pages/PageNotFound";
import { Scroll } from "./components/Scroll";
import { Cart } from "./components/Cart";
import { useCart } from "./Context/CartContext";

function App() {
  const { modalIsOpen } = useCart();
  return (
    <>
      <Scroll></Scroll>
      <Navbar></Navbar>

      {modalIsOpen && <Cart />}
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/details/:productName"
          element={<Details></Details>}
        ></Route>
        <Route
          path="/category/:categoryName"
          element={<Category></Category>}
        ></Route>
        <Route path="checkout" element={<Checkout></Checkout>}></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
      {/* <Footer></Footer> */}
    </>
  );
}

export default App;
