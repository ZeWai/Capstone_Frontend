// Garden Management page
import { React, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AddGardenMan } from "../../../../store/Farmlog/actions";
import { PlantingDone } from "../../../../store/Farmlog/actions";
import { IrrigationDone } from "../../../../store/Farmlog/actions";
import { GroomingDone } from "../../../../store/Farmlog/actions";
import { HarvestDone } from "../../../../store/Farmlog/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Step7(props) {
  const dispatch = useDispatch();
  const { register } = useForm();
  let [Errmsg, setErrMsg] = useState("");
  let [gardenManInfo, setgardenManInfo] = useState({
    s6q1: null,
    s6q1_remarks: "",
    s6q2: null,
    s6q3: null,
    s6q3_fertiliser: "",
    s6q3_quantity: "",
    s6q3_remarks: "",
    s6q4: null,
    s6q4_remarks: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setgardenManInfo((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  }
  const onPrev = () => {
    props.setStep(2);
    dispatch(PlantingDone(false));
    dispatch(IrrigationDone(false));
    dispatch(GroomingDone(false));
    dispatch(HarvestDone(false));
  };

  const onNext = () => {
    if (
      gardenManInfo.s6q1 === null ||
      gardenManInfo.s6q2 === null ||
      gardenManInfo.s6q3 === null ||
      gardenManInfo.s6q4 === null
    ) {
      setErrMsg("** All fields are required");
    } else {
      dispatch(AddGardenMan(gardenManInfo));
      props.setStep(8);
    }
  };

  let checkIcon = <FontAwesomeIcon icon={faCheck} className="fa-check" />;

  let crossIcon = <FontAwesomeIcon icon={faTimes} className="fa-times" />;

  return (
    <>
      {/* Progress bar */}
      <div id="dot-container">
        <span className="dot "></span>
        <span className="dot"></span>
        <span className="dot "></span>
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
      {/* <!-- page6 --> */}
      <div className="step">
        <div className="main-body-container" id="section6">
          {/* {{!-- modal section 6 --}} */}
          <div>
            <h1 className="section-title">Garden Management</h1>
          </div>
          <div className="section-content">
            {/* <!-- S6 - Garden Management : Q1 --> */}
            <div className="s6q1">
              <p>1. Composter - any special issues?</p>
              <div className="input_btn">
                <div className="each_question">
                  <input
                    className="form-check-input question_input"
                    id="s6q1_yes"
                    name="s6q1"
                    type="radio"
                    value="Yes"
                    {...register("s6q1")}
                    onChange={(e) => handleChange(e)}
                  />
                  <label
                    className="form-check-label question_label"
                    htmlFor="s6q1_yes"
                  >
                    {checkIcon} Yes, state below
                  </label>
                </div>
                <div className="each_question">
                  <input
                    className="form-check-input question_input"
                    id="s6q1_no"
                    name="s6q1"
                    type="radio"
                    value="No"
                    {...register("s6q1")}
                    onChange={(e) => handleChange(e)}
                  />
                  <label
                    className="form-check-label question_label"
                    htmlFor="s6q1_no"
                  >
                    {crossIcon} No special issues
                  </label>
                </div>
              </div>
              <div className="question_others hide_other">
                <div className="question_remarks">
                  <label className="remarks" htmlFor="s6q1_remarks">
                    Remarks:
                  </label>
                  <input
                    className="question_remarks_textInput"
                    id="s6q1_remarks"
                    name="s6q1_remarks"
                    type="text"
                    {...register("s6q1_remarks")}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
            </div>
            {/* <!-- S6 - Garden Management : Q2 --> */}
            <div className="s6q2">
              <div className="question_others">
                <p>2. No. of garden waste bag(s) collected </p>
                <div className="question_dropdown">
                  <select
                    className="custom-select"
                    name="s6q2"
                    {...register("s6q2")}
                    onChange={(e) => handleChange(e)}
                  >
                    <option hidden defaultValue>
                      Please select
                    </option>
                    <option className="options" value="0">
                      0
                    </option>
                    <option className="options" value="1">
                      1
                    </option>
                    <option className="options" value="2">
                      2
                    </option>
                    <option className="options" value="3">
                      3
                    </option>
                    <option className="options" value="4">
                      4
                    </option>
                    <option className="options" value="5">
                      5
                    </option>
                  </select>
                </div>
              </div>
            </div>
            {/* <!-- S6 - Garden Management : Q3 --> */}
            <div className="s6q3">
              <p>3. Farm supplies require any refill?</p>
              <div className="input_btn">
                <div className="each_question">
                  <input
                    className="form-check-input question_input"
                    id="s6q3_yes"
                    name="s6q3"
                    type="radio"
                    value="Yes"
                    {...register("s6q3")}
                    onChange={(e) => handleChange(e)}
                  />
                  <label
                    className="form-check-label question_label"
                    htmlFor="s6q3_yes"
                  >
                    {checkIcon} Yes, state below
                  </label>
                </div>
                <div className="each_question">
                  <input
                    className="form-check-input question_input"
                    id="s6q3_no"
                    name="s6q3"
                    type="radio"
                    value="No"
                    {...register("s6q3")}
                    onChange={(e) => handleChange(e)}
                  />
                  <label
                    className="form-check-label question_label"
                    htmlFor="s6q3_no"
                  >
                    {crossIcon} No refill needed
                  </label>
                </div>
              </div>
              {gardenManInfo.s6q3 === "Yes" ? (
                <div className="question_others hide_other">
                  <div className="question_dropdown">
                    <select
                      className="custom-select"
                      name="s6q3_fertiliser"
                      {...register("s6q3_fertiliser")}
                      onChange={(e) => handleChange(e)}
                    >
                      <option hidden defaultValue>
                        Fertiliser
                      </option>
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
                    <select
                      className="custom-select"
                      name="s6q3_quantity"
                      {...register("s6q3_quantity")}
                      onChange={(e) => handleChange(e)}
                    >
                      <option hidden>Quantity</option>
                      <option className="options" value="1">
                        1
                      </option>
                      <option className="options" value="2">
                        2
                      </option>
                      <option className="options" value="3">
                        3
                      </option>
                      <option className="options" value="4">
                        4
                      </option>
                      <option className="options" value="5">
                        5
                      </option>
                      <option className="options" value="6">
                        6
                      </option>
                      <option className="options" value="7">
                        7
                      </option>
                      <option className="options" value="8">
                        8
                      </option>
                      <option className="options" value="9">
                        9
                      </option>
                      <option className="options" value="10">
                        10
                      </option>
                    </select>
                  </div>
                </div>
              ) : (
                <></>
              )}
              <div className="question_remarks">
                <label className="remarks" htmlFor="s6q3_remarks">
                  Remarks:
                </label>
                <input
                  className="question_remarks_textInput"
                  id="s6q3_remarks"
                  name="s6q3_remarks"
                  type="text"
                  {...register("s6q3_remarks")}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
            {/* <!-- S6 - Garden Management : Q4 --> */}
            <div className="s6q4">
              <p>4. Field and Storeroom - any special issues?</p>
              <div className="input_btn">
                <div className="each_question">
                  <input
                    className="form-check-input question_input"
                    id="s6q4_yes"
                    name="s6q4"
                    type="radio"
                    value="Yes"
                    {...register("s6q4")}
                    onChange={(e) => handleChange(e)}
                  />
                  <label
                    className="form-check-label question_label"
                    htmlFor="s6q4_yes"
                  >
                    {checkIcon} Yes, state below
                  </label>
                </div>
                <div className="each_question">
                  <input
                    className="form-check-input question_input"
                    id="s6q4_no"
                    name="s6q4"
                    type="radio"
                    value="No"
                    {...register("s6q4")}
                    onChange={(e) => handleChange(e)}
                  />
                  <label
                    className="form-check-label question_label"
                    htmlFor="s6q4_no"
                  >
                    {crossIcon} No special issues
                  </label>
                </div>
              </div>
              <div className="question_others hide_other">
                <div className="question_remarks">
                  <label className="remarks" htmlFor="s6q4_remarks">
                    Remarks:
                  </label>
                  <input
                    className="question_remarks_textInput"
                    id="s6q4_remarks"
                    name="s6q4_remarks"
                    type="text"
                    {...register("s6q4_remarks")}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
            </div>
            {Errmsg ? <p className="errmsg">{Errmsg}</p> : <></>}
          </div>
        </div>
        <div className="q-box__buttons">
          <button className="prev_btn" onClick={() => onPrev()}>
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
