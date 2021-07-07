import React from "react";
import { Row, Button, Image } from "react-bootstrap";
import HeaderHome from "./HeaderHome";

const Board = () => {
  return (
    <>
      <div className="section vh-100 background-image">
        <div className="containerBackground">
          <HeaderHome />
        </div>
        <div className="w-100 h-100 d-flex justify-content-center align-items-center text-center containerBackground">
          <div className="text-white animated zoomIn delay-1s">
            <Image
              alt="logo"
              src={
                "https://www.obioorganico.com/wp-content/uploads/2021/02/logo-obio.png"
              }
              className="imgLogo fas fa-acorn fa-10x mb-2 animated rubberBand delay-2s "
            />
            <h1 className="text-uppercase text-white h1Obio">Obio Orgánico</h1>
            <div className="d-none d-sm-block mt w-100 animated bounceInUp delay-2s containerSBIO">
              Biológico • Biovida • Biosfera
            </div>
            <Row className="justify-content-center mt-5 mx-0">
              <Button className="animated delay-3s zoomIn fast mb-3 btnBuyNow">
                Comprar ahora
              </Button>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default Board;
