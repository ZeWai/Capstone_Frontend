// Grooming page
import { React, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AddGrooming } from "../../../../store/Farmlog/actions";
import { GroomingDone } from "../../../../store/Farmlog/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Step5(props) {
  const dispatch = useDispatch();
  const { register } = useForm();
  let [Errmsg, setErrMsg] = useState("");
  let [groomingInfo, setgroomingInfo] = useState({
    s4q1: null,
    s4q1_pest: "",
    s4q1_dosage: "",
    s4q1_remarks: "",
    s4q2: null,
    s4q2_remarks: "",
    s4q3: null,
    s4q3_remarks: "",
    s4q4: "",
  });

  let checkIcon = <FontAwesomeIcon icon={faCheck} className="fa-check" />;
  let crossIcon = <FontAwesomeIcon icon={faTimes} className="fa-times" />;

  function handleChange(e) {
    const { name, value } = e.target;
    setgroomingInfo((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  }

  const onNext = () => {
    console.log(groomingInfo);
    if (
      groomingInfo.s4q1 === null ||
      groomingInfo.s4q2 === null ||
      groomingInfo.s4q3 === null ||
      groomingInfo.s4q4 === null
    ) {
      setErrMsg("** All fields are required");
    } else {
      dispatch(AddGrooming(groomingInfo));
      dispatch(GroomingDone(true));
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
      {/* <!-- page4 --> */}
      <div className="step">
        <div className="main-body-container" id="section4">
          <div className="section-content">
            {/* {{!-- Modal S4 Grooming --}} */}
            <div>
              <h1 className="section-title">Grooming</h1>
            </div>
            {/* <!-- S4 - Grooming : Q1 --> */}
            <div className="s4q1">
              <p>1. Any pest control substances? </p>
              <div className="input_btn">
                <div className="each_questionn">
                  <input
                    className="form-check-input question_input"
                    id="s4q1_yes"
                    name="s4q1"
                    type="radio"
                    defaultValue="Yes"
                    {...register("s4q1")}
                    onChange={(e) => handleChange(e)}
                  />
                  <label
                    className="form-check-label question_label"
                    htmlFor="s4q1_yes"
                  >
                    {checkIcon} Yes, state below
                  </label>
                </div>
                <div className="each_questionn">
                  <input
                    className="form-check-input question_input"
                    id="s4q1_no"
                    name="s4q1"
                    type="radio"
                    defaultValue="No"
                    {...register("s4q1")}
                    onChange={(e) => handleChange(e)}
                  />
                  <label
                    className="form-check-label question_label"
                    htmlFor="s4q1_no"
                  >
                    {crossIcon} No special issues
                  </label>
                </div>
              </div>
              {groomingInfo.s4q1 === "Yes" ? (
                <>
                  <div className="question_others hide_other">
                    <div className="question_dropdown">
                      <select
                        className="custom-select"
                        name="s4q1_pest"
                        value={groomingInfo.s4q1_pest || "NoInput"}
                        {...register("s4q1_pest")}
                        onChange={(e) => handleChange(e)}
                      >
                        <option hidden defaultValue>
                          Pest Control Type
                        </option>
                        <option className="options" value="Disinfectants">
                          Disinfectants
                        </option>
                        <option className="options" value="Fungicides">
                          Fungicides
                        </option>
                        <option className="options" value="Herbicides">
                          Herbicides
                        </option>
                        <option className="options" value="Insecticides">
                          Insecticides
                        </option>
                        <option className="options" value="Miticides">
                          Miticides
                        </option>
                        <option className="options" value="Ovicides">
                          Ovicides
                        </option>
                        <option className="options" value="Repellents">
                          Repellents
                        </option>
                        <option className="options" value="Rodenticides">
                          Rodenticides
                        </option>
                      </select>
                      <select
                        className="custom-select"
                        name="s4q1_dosage"
                        {...register("s4q1_dosage")}
                        onChange={(e) => handleChange(e)}
                      >
                        <option hidden defaultValue>
                          Dosage
                        </option>
                        <option className="options" value="normal">
                          Normal
                        </option>
                        <option className="options" value="strong">
                          Strong
                        </option>
                      </select>
                    </div>
                  </div>
                </>
              ) : (
                <></>
              )}
              <div className="question_remarks">
                <label className="remarks" htmlFor="s4q1_remarks">
                  Remarks:
                </label>
                <input
                  className="question_remarks_textInput"
                  id="s4q1_remarks"
                  name="s4q1_remarks"
                  type="text"
                  {...register("s4q1_remarks")}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
            {/* <!-- S4 - Grooming : Q2 --> */}
            <div className=" s4q2">
              <p>2. Any pruning?</p>
              <div className="input_btn">
                <div className="each_questionn">
                  <input
                    className="form-check-input question_input"
                    id="s4q2_yes"
                    name="s4q2"
                    type="radio"
                    defaultValue="Yes"
                    {...register("s4q2")}
                    onChange={(e) => handleChange(e)}
                  />
                  <label
                    className="form-check-label question_label"
                    htmlFor="s4q2_yes"
                  >
                    {checkIcon} Yes, state below
                  </label>
                </div>
                <div className="each_questionn">
                  <input
                    className="form-check-input question_input"
                    id="s4q2_no"
                    name="s4q2"
                    type="radio"
                    defaultValue="No"
                    {...register("s4q2")}
                    onChange={(e) => handleChange(e)}
                  />
                  <label
                    className="form-check-label question_label"
                    htmlFor="s4q2_no"
                  >
                    {crossIcon} No special issues
                  </label>
                </div>
              </div>
              <div className="question_remarks">
                <label className="remarks" htmlFor="s4q2_remarks">
                  Remarks:
                </label>
                <input
                  className="question_remarks_textInput"
                  id="s4q2_remarks"
                  name="s4q2_remarks"
                  type="text"
                  {...register("s4q2_remarks")}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
            {/* <!-- S4 - Grooming : Q3 --> */}
            <div className=" s4q3">
              <p>3. Any weeding? </p>
              <div className="input_btn">
                <div className="each_questionn">
                  <input
                    className="form-check-input question_input"
                    id="s4q3_yes"
                    name="s4q3"
                    type="radio"
                    defaultValue="Yes"
                    {...register("s4q3")}
                    onChange={(e) => handleChange(e)}
                  />
                  <label
                    className="form-check-label question_label"
                    htmlFor="s4q3_yes"
                  >
                    {checkIcon} Yes, state below
                  </label>
                </div>
                <div className="each_questionn">
                  <input
                    className="form-check-input question_input"
                    id="s4q3_no"
                    name="s4q3"
                    type="radio"
                    defaultValue="No"
                    {...register("s4q3")}
                    onChange={(e) => handleChange(e)}
                  />
                  <label
                    className="form-check-label question_label"
                    htmlFor="s4q3_no"
                  >
                    {crossIcon} No special issues
                  </label>
                </div>
              </div>
              <div className="question_remarks">
                <label className="remarks" htmlFor="s4q3_remarks">
                  Remarks:
                </label>
                <input
                  className="question_remarks_textInput"
                  id="s4q3_remarks"
                  name="s4q3_remarks"
                  type="text"
                  {...register("s4q3_remarks")}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
            {/* <!-- S4 - Grooming : Q4 --> */}
            <div className=" s4q4">
              <p>
                4. Other farm work? (Build trellises, netting bag, pollination,
                etc.)
              </p>
              <div className="question_others">
                <div className="question_remarks">
                  <label className="remarks" htmlFor="s4q4">
                    Remarks:
                  </label>
                  <input
                    className="question_remarks_textInput"
                    id="s4q4"
                    name="s4q4"
                    type="text"
                    {...register("s4q4")}
                    onChange={(e) => handleChange(e)}
                  />
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
