import React from "react";
import { Image } from "react-bootstrap";

const Product = (item) => {
  return (
    <article className="containerItem" onClick={item.onClick}>
      {item.product.promotion && <div className="promotionItem">Promoción</div>}
      <Image
        src={item.product.image}
        alt={item.product.name}
        className="imgProduct"
      />
      <div className="nameItem">{item.product.name}</div>
      <div className="priceItem">${item.product.price.toFixed(2)}</div>
      <div className="btnAddCart">Añadir al carrito</div>
    </article>
  );
};

export default Product;
