import React, { Fragment } from "react";
import "./Carr.css";

class Carrousel extends React.Component {
  render() {
    const color = { color: "black" };
    const dir = { left: " 0%" };

    return (
      <Fragment>
        <div
          id="carouselExampleSlidesOnly"
          className="carousels slides col-12"
          data-ride="carosusel"
        >
          <div className="carousel-inner">
            <div className="carousels-item active box-center">
              <img src="/img/fondo3.jpg" className="bg-w" alt="..." />
              <div className="container">
                <div className="col-md-6 col-xl-5 md-center md-left">
                  <div className="carousel-caption box-center"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Carrousel;
