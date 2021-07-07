import React from "react";

import "../assets/styles/Home.css";
import Footer from "../components/Footer";
import Board from "../components/Home/Board";

const Home = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://kit-pro.fontawesome.com/releases/latest/css/pro.min.css"
        media="all"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"
      />
      <Board />
      <Footer />
    </>
  );
};

export default Home;
