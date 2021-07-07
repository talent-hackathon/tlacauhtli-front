import React from "react";
import Product from "./Product";
import Container from "react-bootstrap/Container";

const ProductList = (data) => {
  return (
    <Container className="justify-content-center px-0">
      {data.products.map((product) => {
        return <Product key={product.id} data={data} product={product} />;
      })}
    </Container>
  );
};

export default ProductList;
