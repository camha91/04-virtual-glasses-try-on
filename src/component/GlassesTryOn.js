import React, { Component } from "react";
import dataGlasses from "../Data/dataGlasses.json";

export default class GlassesTryOn extends Component {
  renderGlasses = () => {
    let contentGlasses = dataGlasses.map((glassesItem, index) => {
      return (
        <img
          className="ml-2 p-2 border border-width-1"
          style={{ width: "115px", cursor: "pointer" }}
          key={index}
          src={glassesItem.url}
          alt={glassesItem.name}
        />
      );
    });
    return contentGlasses;
  };

  render() {
    const styledGlasses = {
      width: "150px",
      top: "75px",
      right: "70px",
      opacity: "0.8",
    };

    const infoGlasses = {
      width: "250px",
      top: "200px",
      left: "270px",
      paddingLeft: "15px",
      backgroundColor: "rgba(255,193,193,.5)",
      textAlign: "left",
      height: "105px",
    };

    return (
      <div
        style={{
          backgroundImage: "url(./glassesImage/background.jpg)",
          backgroundSize: "2000px",
          minHeight: "2000px",
        }}
      >
        <div style={{ backgroundColor: "rgba(0,0,0,.5)", minHeight: "2000px" }}>
          <h3
            className="text-center text-light p-5"
            style={{ backgroundColor: "rgba(127,255,212,.3)" }}
          >
            VIRTUAL GLASSES TRY-ON
          </h3>
          <div className="container">
            <div className="row mt-5 text-center">
              <div className="col-6">
                <div className="position-relative">
                  <img
                    className="position-absolute"
                    style={{ width: "250px" }}
                    src="./glassesImage/model.jpg"
                    alt="model.jpg"
                  />
                  <img
                    style={styledGlasses}
                    className="position-absolute"
                    src="./glassesImage/v1.png"
                    alt="sample-glasses"
                  />
                  <div style={infoGlasses} className="position-relative">
                    <span
                      style={{ fontSize: "15px" }}
                      className="font-weight-bold"
                    >
                      Glasses Name
                    </span>
                    <br />
                    <span style={{ fontSize: "13px", fontWeight: "400" }}>
                      Description
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <img
                  style={{ width: "250px" }}
                  src="./glassesImage/model.jpg"
                  alt="model.jpg"
                />
              </div>
            </div>
          </div>
          {/*  Div contains all glasses */}
          <div className="bg-light container text-center mt-5 d-flex justify-content-center p-5">
            {this.renderGlasses()}
          </div>
        </div>
      </div>
    );
  }
}
