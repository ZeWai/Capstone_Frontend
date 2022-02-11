// Other issues page

import React from "react";
import { useForm } from "react-hook-form";

import { useDispatch, useSelector } from "react-redux";
// import { chooseSauce } from "./rootSlice";

export default function Step8() {
  const dispatch = useDispatch();
  const sauce = useSelector((state) => state.sauce);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    // dispatch(chooseSauce(data.sauce));
    // history.push("./result");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Progress bar */}
      <div id="dot-container">
        <span className="dot "></span>
        <span className="dot"></span>
        <span className="dot "></span>
        <span className="dot"></span>
        <span className="dot active"></span>
      </div>
      {/* <!-- page7 --> */}
      <div class="step">
        <div class="main-body-container" id="section7">
          <div>
            <h1 className="section-title">Other Issues</h1>
          </div>
          <div class="section-content">
            <div className="s7q1">
              <p>1. Please write down other issues below if any.</p>
              <textarea name="s7q1"></textarea>
            </div>
            <div className="s7q2_album">
              <p>2. Album</p>
              <p>
                Please upload images to record the zone condition. (You can
                upload multiple images each time)
              </p>
              <input className="upload-input" type="file" />
            </div>
            <div className="s7q2_album">
              <p>3. Image Recognition</p>
              <p>
                Please upload images to check the crop condition. (You can
                upload one image each time)
              </p>
              <input className="upload-input" type="file" />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
