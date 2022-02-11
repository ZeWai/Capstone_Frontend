// choose which section of farmlog

import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
// import { chooseCrust } from "./rootSlice";

export default function Step2() {
  const dispatch = useDispatch();
  const crust = useSelector((state) => state.crust);
  const { register, handleSubmit } = useForm({ defaultValues: { crust } });

  const onSubmit = (data) => {
    // dispatch(chooseCrust(data.crust));
    window.location.href = "/step3";
  };

  const toPlanting = () => {
    window.location.href = "/step3";
  };

  const toIrrigation = () => {
    window.location.href = "/step4";
  };

  const toGrooming = () => {
    window.location.href = "/step5";
  };

  const toHarvest = () => {
    window.location.href = "/step6";
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Progress bar */}
      <div id="dot-container">
        <span className="dot "></span>
        <span className="dot active"></span>
        <span className="dot "></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
      <div id="steps-container">
        {/* ######page1#######  */}
        <div className="step">
          <div className="main-body-container" id="section2">
            <button className="section_btn" onClick={toPlanting}>
              Planting
            </button>
            <button className="section_btn" onClick={toIrrigation}>
              Irrigation
            </button>
            <button className="section_btn" onClick={toGrooming}>
              Grooming
            </button>
            <button className="section_btn" onClick={toHarvest}>
              Harvest
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
