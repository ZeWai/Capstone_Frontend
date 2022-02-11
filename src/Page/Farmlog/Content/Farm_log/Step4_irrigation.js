// Irrigation page

import React from "react";
import { useForm } from "react-hook-form";

import { useDispatch, useSelector } from "react-redux";
// import { chooseSauce } from "./rootSlice";

export default function Step4() {
  const dispatch = useDispatch();
  const sauce = useSelector((state) => state.sauce);
  const { register, handleSubmit } = useForm({ defaultValues: { sauce } });

  const onSubmit = (data) => {
    // dispatch(chooseSauce(data.sauce));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Progress bar */}
      <div id="dot-container">
        <span className="dot "></span>
        <span className="dot"></span>
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
      {/* <!-- page3 --> */}
      <div className="step">
        <div className="main-body-container" id="section3">
          {/* {{!-- Modal S3 Irrigation --}} */}
          <div>
            <h1 className="section-title">Irrigation</h1>
          </div>
          <div className="section-content">
            {/* <!-- S3 - Irrigation : Q1 --> */}
            <div className="s3q1">
              <p>1. Auto Irrigation System - any issues? </p>
              <div className="input_btn">
                <div className="each_question">
                  <input
                    className="question_input"
                    id="s3q1_yes"
                    name="s3q1"
                    type="radio"
                    defaultValue="Yes"
                    {...register("s3q1_yes")}
                  />
                  <label className="question_label" htmlFor="s3q1_yes">
                    <i className="fas fa-check"></i> Yes, state below
                  </label>
                </div>
                <div className="each_question">
                  <input
                    className=" question_input"
                    id="s3q1_no"
                    name="s3q1"
                    type="radio"
                    defaultValue="No"
                    {...register("s3q1_no")}
                  />
                  <label className="question_label" htmlFor="s3q1_no">
                    <i className="fas fa-times"></i> No special issues
                  </label>
                </div>
              </div>
              <div className="question_remarksFollowup">
                <label className="remarks" htmlFor="s3q1_remarks">
                  Remarks and follow-up:
                </label>
                <input
                  className="question_remarks_textInput"
                  id="s3q1_remarks"
                  name="s3q1_remarks"
                  type="text"
                />
              </div>
            </div>
            {/* <!-- S3 - Irrigation : Q2 --> */}
            <div className="s3q2">
              <p>2. Update to the irrigation’s programing？</p>
              <div className="input_btn">
                <div className="each_question">
                  <input
                    className="question_input"
                    id="s3q2_yes"
                    name="s3q2"
                    type="radio"
                    defaultValue="Yes"
                    {...register("s3q2_yes")}
                  />
                  <label className="question_label" htmlFor="s3q2_yes">
                    <i className="fas fa-check"></i> Yes, state below
                  </label>
                </div>
                <div className="each_question">
                  <input
                    className=" question_input"
                    id="s3q2_no"
                    name="s3q2"
                    type="radio"
                    defaultValue="No"
                    {...register("s3q2_no")}
                  />
                  <label className="question_label" htmlFor="s3q2_no">
                    <i className="fas fa-times"></i> No new update
                  </label>
                </div>
              </div>
              <div className="s3question_others">
                <input
                  className="s3input"
                  id="s3q2"
                  name="s3q2_date_start"
                  type="date"
                  {...register("s3q2_date_start")}
                />
                <p>TO</p>
                <input
                  className="s3input"
                  id="s3q2"
                  name="s3q2_date_end"
                  type="date"
                  {...register("s3q2_date_end")}
                />
              </div>
              <div className="s3question_others">
                <input
                  className="s3input"
                  id="s3q2"
                  name="s3q2_date_start"
                  type="time"
                  {...register("s3q2_time_start")}
                />
                <p>TO</p>
                <input
                  className="s3input"
                  id="s3q2"
                  name="s3q2_date_end"
                  type="time"
                  {...register("s3q2_time_end")}
                />
              </div>
              <div className="question_dropdown">
                <select className="custom-select" name="s2q2_fertiliser">
                  <option defaultValue>Frequency</option>
                  <option className="options" defaultValue="1">
                    1
                  </option>
                  <option className="options" defaultValue="2">
                    2
                  </option>
                  <option className="options" defaultValue="3">
                    3
                  </option>
                  <option className="options" defaultValue="4">
                    4
                  </option>
                  <option className="options" defaultValue="5">
                    5
                  </option>
                </select>
              </div>
            </div>

            {/* <!-- S3 - Irrigation : Q3 --> */}
            <div className="s3q3">
              <p>3. Water Usage of the Day</p>
              <div className="question_others">
                <div className="input-group mb-3 litres_input">
                  <input
                    type="text"
                    placeholder="12345678"
                    id="s3q3"
                    name="s3q3"
                  />
                  <p className="litres_input_label">litres</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button>Next</button>
    </form>
  );
}
