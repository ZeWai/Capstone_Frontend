// choose which section of farmlog

import React from "react";
import plantingImg from "../../../../image/farmlog/planting.png";
import irrigationImg from "../../../../image/farmlog/water.png";
import groomingImg from "../../../../image/farmlog/grooming.png";
import harvestImg from "../../../../image/farmlog/harvest.png";

export default function Step2(props) {
  return (
    <>
      {/* Progress bar */}
      <div id="dot-container">
        <span className="dot "></span>
        <span className="dot active"></span>
        <span className="dot "></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
      <div id="steps-container">
        {/* ######page1#######  */}
        <div className="step">
          <div className="main-body-container" id="section2">
            <button className="section_btn" onClick={() => props.setStep(3)}>
              <img className="section_img" src={plantingImg} alt="" />
              Planting
            </button>
            <button className="section_btn" onClick={() => props.setStep(4)}>
              <img className="section_img" src={irrigationImg} alt="" />
              Irrigation
            </button>
            <button className="section_btn" onClick={() => props.setStep(5)}>
              <img className="section_img" src={groomingImg} alt="" />
              Grooming
            </button>
            <button className="section_btn" onClick={() => props.setStep(6)}>
              <img className="section_img" src={harvestImg} alt="" />
              Harvest
            </button>
          </div>
        </div>
        <div className="q-box__buttons">
          <button
            className="prev_btn"
            onClick={() => props.setStep(props.Step - 1)}
          >
            Previous
          </button>
        </div>
      </div>
    </>
  );
}
