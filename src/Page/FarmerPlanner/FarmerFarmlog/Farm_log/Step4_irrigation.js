// Irrigation page
import { React, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AddIrrigation } from "../../../../store/Farmlog/actions";
import { IrrigationDone } from "../../../../store/Farmlog/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Step4(props) {
  const dispatch = useDispatch();
  const { register } = useForm();
  let [Errmsg, setErrMsg] = useState("");
  let [irrigationInfo, setirrigationInfo] = useState({
    s3q1: null,
    s3q1_remarks: "",
    s3q2: null,
    s3q2_date_start: "",
    s3q2_date_end: "",
    s3q2_time_start: "",
    s3q2_time_end: "",
    s3q2_frequency: "",
    s3q3: 0,
  });

  let checkIcon = <FontAwesomeIcon icon={faCheck} className="fa-check" />;
  let crossIcon = <FontAwesomeIcon icon={faTimes} className="fa-times" />;

  function handleChange(e) {
    const { name, value } = e.target;
    setirrigationInfo((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  }

  const onNext = () => {
    console.log(irrigationInfo);
    if (
      irrigationInfo.s3q1 === null ||
      irrigationInfo.s3q2 === null ||
      irrigationInfo.s3q3 === 0
    ) {
      setErrMsg("** All fields are required");
    } else {
      dispatch(AddIrrigation(irrigationInfo));
      dispatch(IrrigationDone(true));
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
                    {...register("s3q1")}
                    onChange={(e) => handleChange(e)}
                  />
                  <label className="question_label" htmlFor="s3q1_yes">
                    {checkIcon} Yes, state below
                  </label>
                </div>
                <div className="each_question">
                  <input
                    className=" question_input"
                    id="s3q1_no"
                    name="s3q1"
                    type="radio"
                    defaultValue="No"
                    {...register("s3q1")}
                    onChange={(e) => handleChange(e)}
                  />
                  <label className="question_label" htmlFor="s3q1_no">
                    {crossIcon}No special issues
                  </label>
                </div>
              </div>
              {irrigationInfo.s3q1 === "Yes" ? (
                <div className="question_remarksFollowup">
                  <label className="remarks" htmlFor="s3q1_remarks">
                    Remarks and follow-up:
                  </label>
                  <input
                    className="question_remarks_textInput"
                    id="s3q1_remarks"
                    name="s3q1_remarks"
                    type="text"
                    {...register("s3q1_remarks")}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              ) : (
                <></>
              )}
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
                    {...register("s3q2")}
                    onChange={(e) => handleChange(e)}
                  />
                  <label className="question_label" htmlFor="s3q2_yes">
                    {checkIcon} Yes, state below
                  </label>
                </div>
                <div className="each_question">
                  <input
                    className=" question_input"
                    id="s3q2_no"
                    name="s3q2"
                    type="radio"
                    defaultValue="No"
                    {...register("s3q2")}
                    onChange={(e) => handleChange(e)}
                  />
                  <label className="question_label" htmlFor="s3q2_no">
                    {crossIcon}No new update
                  </label>
                </div>
              </div>
              {irrigationInfo.s3q2 === "Yes" ? (
                <>
                  <div className="s3question_others">
                    <input
                      className="s3input"
                      id="s3q2"
                      name="s3q2_date_start"
                      type="date"
                      {...register("s3q2_date_start")}
                      onChange={(e) => handleChange(e)}
                    />
                    <p>TO</p>
                    <input
                      className="s3input"
                      id="s3q2"
                      name="s3q2_date_end"
                      type="date"
                      {...register("s3q2_date_end")}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="s3question_others">
                    <input
                      className="s3input"
                      id="s3q2"
                      name="s3q2_date_start"
                      type="time"
                      {...register("s3q2_time_start")}
                      onChange={(e) => handleChange(e)}
                    />
                    <p>TO</p>
                    <input
                      className="s3input"
                      id="s3q2"
                      name="s3q2_date_end"
                      type="time"
                      {...register("s3q2_time_end")}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="question_dropdown">
                    <select
                      className="custom-select"
                      name="s3q2_frequency"
                      {...register("s3q2_frequency")}
                      onChange={(e) => handleChange(e)}
                    >
                      <option defaultValue>Frequency</option>
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
                </>
              ) : (
                <></>
              )}
            </div>

            {/* <!-- S3 - Irrigation : Q3 --> */}
            <div className="s3q3">
              <p>3. Water Usage of the Day</p>
              <div className="question_others">
                <div className="input-group mb-3 litres_input">
                  <input
                    type="text"
                    placeholder="0"
                    id="s3q3"
                    name="s3q3"
                    {...register("s3q3")}
                    onChange={(e) => handleChange(e)}
                  />
                  <p className="litres_input_label">litres</p>
                </div>
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
