// Planting page

import React from "react";
import { useForm } from "react-hook-form";

import { useDispatch, useSelector } from "react-redux";
// import { chooseCheese } from "./rootSlice";

export default function Step3() {
  const dispatch = useDispatch();
  // const cheese = useSelector((state) => state.cheese);
  const { register, handleSubmit, watch } = useForm();

  const onSubmit = (data) => {
    // dispatch(chooseCheese(data.cheese));
  };
  const watchShowDropdown = watch("s2q2_yes", false); // you can supply default value as second argument

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
      {/*  ######page2####### */}
      <div className="step">
        <div className="main-body-container" id="section2">
          <div>
            <h1 className="section-title">Planting</h1>
          </div>
          <div className="section-content">
            {/* S2 - Planting : Q1 */}
            <div className="s2q1">
              <p>1. Planters - any special issues?</p>
              <div className="input_btn">
                <div className="each_question">
                  <input
                    className="question_input"
                    id="s2q1_yes"
                    name="s2q1"
                    type="radio"
                    defaultValue="Yes"
                  />
                  <label className="question_label" htmlFor="s2q1_yes">
                    <i className="fas fa-check"></i> Yes, state below
                  </label>
                </div>
                <div className="each_question">
                  <input
                    className="question_input"
                    id="s2q1_no"
                    name="s2q1"
                    type="radio"
                    defaultValue="No"
                  />
                  <label className=" question_label" htmlFor="s2q1_no">
                    <i className="fas fa-times"></i> No special issues
                  </label>
                </div>
              </div>
              <div className="question_remarks">
                <label className="remarks" htmlFor="s2q1_remarks">
                  Remarks:
                </label>
                <input
                  className="question_remarks_textInput"
                  id="s2q1_remarks"
                  name="s2q1_remarks"
                  type="text"
                />
              </div>
            </div>
            {/* S2 Planting : Q2 */}
            <div className="s2q2">
              <p>2. Any ploughing and base dressing?</p>
              <div className="input_btn">
                <div className="each_question">
                  <input
                    className="question_input"
                    id="s2q2_yes"
                    name="s2q2"
                    type="radio"
                    defaultValue="Yes"
                    {...register("s2q2_yes")}
                  />
                  {watchShowDropdown && (
                    <>
                      <label>Age</label>
                      <input type="number" {...register("age", { min: 50 })} />
                    </>
                  )}

                  <label className=" question_label" htmlFor="s2q2_yes">
                    <i className="fas fa-check"></i> Yes, state below
                  </label>
                </div>
                <div className="each_question">
                  <input
                    className="question_input"
                    id="s2q2_no"
                    name="s2q2"
                    type="radio"
                    defaultValue="No"
                  />
                  <label className=" question_label" htmlFor="s2q2_no">
                    <i className="fas fa-times"></i> No ploughing has been done
                  </label>
                </div>
              </div>
              <div className="question_others hide_other">
                <div className="question_dropdown">
                  <select className="custom-select" name="s2q2_fertiliser">
                    <option defaultValue>Fertiliser Type</option>
                    <option className="options" defaultValue="Lime">
                      Lime
                    </option>
                    <option className="options" defaultValue="White Lime">
                      White Lime
                    </option>
                    <option className="options" defaultValue="Bone Meal">
                      Bone Meal
                    </option>
                    <option className="options" defaultValue="poultry litter">
                      poultry litter
                    </option>
                  </select>
                </div>
                <div className="question_remarks">
                  <label className="remarks" htmlFor="s2q3_remarks">
                    Remarks:
                  </label>
                  <input
                    className="question_remarks_textInput"
                    id="s2q2_remarks"
                    name="s2q2_remarks"
                    type="text"
                  />
                </div>
              </div>
            </div>
            {/* <!-- S2 Planting : Q3 --> */}
            <div className="s2q3">
              <p>3. Any sowing?</p>
              <div className="input_btn">
                <div className="each_question">
                  <input
                    className="question_input"
                    id="s2q3_yes"
                    name="s2q3"
                    type="radio"
                    defaultValue="Yes"
                  />
                  <label className=" question_label" htmlFor="s2q3_yes">
                    <i className="fas fa-check"></i> Yes, state below
                  </label>
                </div>
                <div className="each_question">
                  <input
                    className="question_input"
                    id="s2q3_no"
                    name="s2q3"
                    type="radio"
                    defaultValue="No"
                  />
                  <label className=" question_label" htmlFor="s2q3_no">
                    <i className="fas fa-times"></i> No seeds were sowed
                  </label>
                </div>
              </div>
              <div className="question_others hide_other">
                <div className="question_remarks">
                  <label className="remarks" htmlFor="s2q3_remarks">
                    Remarks:
                  </label>
                  <input
                    className="question_remarks_textInput"
                    id="s2q3_remarks"
                    name="s2q3_remarks"
                    type="text"
                  />
                </div>
              </div>
            </div>
            {/* <!-- S2 Planting : Q4 --> */}
            <div className="s2q4">
              <p>4. Any fertilising?</p>
              <div className="input_btn">
                <div className="each_question">
                  <input
                    className="question_input"
                    id="s2q4_yes"
                    name="s2q4"
                    type="radio"
                    defaultValue="Yes"
                  />
                  <label className=" question_label" htmlFor="s2q4_yes">
                    <i className="fas fa-check"></i> Fertilisers applied on all
                    planters
                  </label>
                </div>
                <div className="each_question">
                  <input
                    className="question_input"
                    id="s2q4_no"
                    name="s2q4"
                    type="radio"
                    defaultValue="No"
                  />
                  <label className=" question_label" htmlFor="s2q4_no">
                    <i className="fas fa-times"></i> No fertilising was done
                  </label>
                </div>
              </div>
              <div className="question_remarks">
                <label className="remarks" htmlFor="s2q4_remarks">
                  Remarks:
                </label>
                <input
                  className="question_remarks_textInput"
                  id="s2q4_remarks"
                  name="s2q4_remarks"
                  type="text"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <button>Next</button>
    </form>
  );
}
