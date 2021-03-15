import React, { Component } from "react";

export default class GlassesTryOn extends Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: "url(./glassesImage/background.jpg)",
          minHeight: "2000px",
        }}
      >
        <div style={{ backgroundColor: "rgba(0,0,0,.5)", minHeight: "2000px" }}>
          <h3 className="text-center">VIRTUAL GLASSES TRY-ON</h3>
        </div>
      </div>
    );
  }
}
