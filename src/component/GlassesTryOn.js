import React, { Component } from "react";
import dataGlasses from "../Data/dataGlasses.json";

export default class GlassesTryOn extends Component {
  state = {
    glassesCurrent: {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./glassesImage/v2.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with another of pearl effect tip. ",
    },
  };

  renderGlasses = () => {
    let contentGlasses = dataGlasses.map((glassesItem, index) => {
      return (
        <img
          onClick={() => {
            this.changedGlasses(glassesItem);
          }}
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

  changedGlasses = (newGlasses) => {
    this.setState({
      glassesCurrent: newGlasses,
    });
  };

  render() {
    const keyFrame = `@keyframes animChangeGlasses${Date.now()} {
        from {
            width: 0;
            transform: rotate(45deg);
            opacity: 0;
        }
        to {
            width: 150px;
            transform: rotate(0deg);
            opacity: 0.8;
        }
    }`;

    const styledGlasses = {
      width: "150px",
      top: "75px",
      right: "70px",
      opacity: "0.8",
      tranform: "rotate(0deg)",
      animation: `animChangeGlasses${Date.now()} 1s`,
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
        <style>{keyFrame}</style>
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
                    className="position-absolute glassesStyle"
                    src={this.state.glassesCurrent.url}
                    alt={this.state.glassesCurrent.name}
                  />
                  <div style={infoGlasses} className="position-relative">
                    <span
                      style={{ fontSize: "15px", color: "#00CED1" }}
                      className="font-weight-bold"
                    >
                      {this.state.glassesCurrent.name}
                    </span>
                    <br />
                    <span style={{ fontSize: "13px", fontWeight: "400" }}>
                      {this.state.glassesCurrent.desc}
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
