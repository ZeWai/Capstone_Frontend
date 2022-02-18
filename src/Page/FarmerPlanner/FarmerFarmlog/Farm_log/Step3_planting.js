// Planting page

import { React, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AddPlanting } from "../../../../store/Farmlog/actions";
import { PlantingDone } from "../../../../store/Farmlog/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Step3(props) {
  const dispatch = useDispatch();
  const { register } = useForm();
  let [Errmsg, setErrMsg] = useState("");
  let [plantingInfo, setplantingInfo] = useState({
    s2q1: null,
    s2q1_remarks: "",
    s2q2: null,
    s2q2_fertiliser: "",
    s2q2_remarks: "",
    s2q3: null,
    s2q3_remarks: "",
    s2q4: null,
    s2q4_remarks: "",
  });

  let checkIcon = <FontAwesomeIcon icon={faCheck} className="fa-check" />;

  let crossIcon = <FontAwesomeIcon icon={faTimes} className="fa-times" />;

  function handleChange(e) {
    const { name, value } = e.target;
    setplantingInfo((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  }

  const onNext = () => {
    console.log(plantingInfo,'12312312312123123');
    if (
      plantingInfo.s2q1 === "" &&
      plantingInfo.s2q2 === "" &&
      plantingInfo.s2q3 === "" &&
      plantingInfo.s2q4 === ""
    ) {
      setErrMsg("** All fields are required");
    } else {
      
      dispatch(AddPlanting(plantingInfo));
      dispatch(PlantingDone(true));
      props.setStep(7);
    }
  };

  return (
    <>
      {/* Progress bar */}
      <div id="dot-container">
        <span className="dot "></span>
        <span className="dot"></span>
        <span className="dot active"></span>
        <span className="dot"></span>
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
                    value="Yes"
                    {...register("s2q1")}
                    onChange={(e) => handleChange(e)}
                  />
                  <label className="question_label" htmlFor="s2q1_yes">
                    {checkIcon}
                    Yes, state below
                  </label>
                </div>
                <div className="each_question">
                  <input
                    className="question_input"
                    id="s2q1_no"
                    name="s2q1"
                    type="radio"
                    defaultValue="No"
                    {...register("s2q1")}
                    onChange={(e) => handleChange(e)}
                  />
                  <label className=" question_label" htmlFor="s2q1_no">
                    {crossIcon}
                    No special issues
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
                  {...register("s2q1_remarks")}
                  onChange={(e) => handleChange(e)}
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
                    {...register("s2q2")}
                    onChange={(e) => handleChange(e)}
                  />
                  <label className="question_label" htmlFor="s2q2_yes">
                    {checkIcon} Yes, state below
                  </label>
                </div>
                <div className="each_question">
                  <input
                    className="question_input"
                    id="s2q2_no"
                    name="s2q2"
                    type="radio"
                    defaultValue="No"
                    {...register("s2q2")}
                    onChange={(e) => handleChange(e)}
                  />
                  <label className=" question_label" htmlFor="s2q2_no">
                    {crossIcon} No ploughing has been done
                  </label>
                </div>
              </div>
              {plantingInfo.s2q2 === "Yes" ? (
                <div className="question_others hide_other">
                  <div className="question_dropdown">
                    <select
                      className="custom-select"
                      name="s2q2_fertiliser"
                      {...register("s2q2_fertiliser")}
                      onChange={(e) => handleChange(e)}
                    >
                      <option hidden defaultValue>
                        Fertiliser Type
                      </option>
                      <option className="options" value="Lime">
                        Lime
                      </option>
                      <option className="options" value="White Lime">
                        White Lime
                      </option>
                      <option className="options" value="Bone Meal">
                        Bone Meal
                      </option>
                      <option className="options" value="poultry litter">
                        poultry litter
                      </option>
                    </select>
                  </div>
                </div>
              ) : (
                <></>
              )}
              <div className="question_remarks">
                <label className="remarks" htmlFor="s2q3_remarks">
                  Remarks:
                </label>
                <input
                  className="question_remarks_textInput"
                  id="s2q2_remarks"
                  name="s2q2_remarks"
                  type="text"
                  {...register("s2q2_remarks")}
                  onChange={(e) => handleChange(e)}
                />
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
                    {...register("s2q3")}
                    onChange={(e) => handleChange(e)}
                  />
                  <label className=" question_label" htmlFor="s2q3_yes">
                    {checkIcon} Yes, state below
                  </label>
                </div>
                <div className="each_question">
                  <input
                    className="question_input"
                    id="s2q3_no"
                    name="s2q3"
                    type="radio"
                    defaultValue="No"
                    {...register("s2q3")}
                    onChange={(e) => handleChange(e)}
                  />
                  <label className=" question_label" htmlFor="s2q3_no">
                    {crossIcon} No seeds were sowed
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
                    {...register("s2q3_remarks")}
                    onChange={(e) => handleChange(e)}
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
                    {...register("s2q4")}
                    onChange={(e) => handleChange(e)}
                  />
                  <label className="question_label" htmlFor="s2q4_yes">
                    {checkIcon} Fertilisers applied on all planters
                  </label>
                </div>
                <div className="each_question">
                  <input
                    className="question_input"
                    id="s2q4_no"
                    name="s2q4"
                    type="radio"
                    defaultValue="No"
                    {...register("s2q4")}
                    onChange={(e) => handleChange(e)}
                  />
                  <label className="question_label" htmlFor="s2q4_no">
                    {crossIcon} No fertilising was done
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
                  {...register("s2q4_remarks")}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
            {Errmsg ? <p className="errmsg">{Errmsg}</p> : <></>}
          </div>
        </div>
        <div className="q-box__buttons">
          <button className="prev_btn" onClick={() => props.setStep(2)}>
            Previous
          </button>
          <button className="next_btn" onClick={() => onNext()}>
            Next
          </button>
        </div>
      </div>
    </>
  );
}
