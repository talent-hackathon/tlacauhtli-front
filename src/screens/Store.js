import "../assets/styles/Store.css";
import React from "react";
import ProductList from "../components/Store/ProductList";
import listItems from "../data/products.json";
import Footer from "../components/Footer";
import Navbar from "react-bootstrap/Navbar";

const Store = () => {
  return (
    <>
      <header>
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top" />
      </header>
      <div className="containerStore pt-5">
        <main className="main">
          <div className="cart cart-open">
            <span className="cart-open-btn">
              <div className="cart-icon">
                <span className="cart-image">
                  <span className="cart-image-quantity">{0}</span>
                </span>
              </div>
            </span>
          </div>
          <header className="x-header-landmark x-container">
            <h1 className="h-landmark">
              <span>TIENDA</span>
            </h1>
            <p className="p-landmark-sub">
              <span>BIENVENIDOS A OBIO</span>
            </p>
          </header>
          <ProductList products={listItems.products} />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Store;
