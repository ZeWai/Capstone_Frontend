// Garden Management page
import { React, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AddGardenMan } from "../../../../store/Farmlog/actions";

export default function Step7(props) {
  const dispatch = useDispatch();
  const { register } = useForm();
  let [gardenManInfo, setgardenManInfo] = useState({
    s6q1: null,
    s6q1_remarks: null,
    s6q2: null,
    s6q3: null,
    s6q3_fertiliser: null,
    s6q3_quantity: null,
    s6q3_remarks: null,
    s6q4: null,
    s6q4_remarks: null,
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setgardenManInfo((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  }

  const onNext = () => {
    console.log(gardenManInfo);
    dispatch(AddGardenMan(gardenManInfo));
    props.setStep(7);
  };

  return (
    <>
      {/* Progress bar */}
      <div id="dot-container">
        <span className="dot "></span>
        <span className="dot"></span>
        <span className="dot "></span>
        <span className="dot active"></span>
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
                    onChange={(e) => handleChange(e)}
                    {...register("s6q1")}
                  />
                  <label
                    className="form-check-label question_label"
                    htmlFor="s6q1_yes"
                  >
                    <i className="fas fa-check"></i> Yes, state below
                  </label>
                </div>
                <div className="each_question">
                  <input
                    className="form-check-input question_input"
                    id="s6q1_no"
                    name="s6q1"
                    type="radio"
                    value="No"
                    onChange={(e) => handleChange(e)}
                    {...register("s6q1")}
                  />
                  <label
                    className="form-check-label question_label"
                    htmlFor="s6q1_no"
                  >
                    <i className="fas fa-times"></i> No special issues
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
                    onChange={(e) => handleChange(e)}
                    {...register("s6q1_remarks")}
                  />
                </div>
              </div>
            </div>
            {/* <!-- S6 - Garden Management : Q2 --> */}
            <div className="s6q2">
              <div className="question_others">
                <p>2. No. of garden waste bag(s) collected </p>
                <div className="num_input">
                  <i className="fas fa-minus-circle" id="s6q2-minus"></i>
                  <p id="s6q2_num">0</p>
                  <i className="fas fa-plus-circle" id="s6q2-add"></i>
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
                    onChange={(e) => handleChange(e)}
                    {...register("s6q3")}
                  />
                  <label
                    className="form-check-label question_label"
                    htmlFor="s6q3_yes"
                  >
                    <i className="fas fa-check"></i> Yes, state below
                  </label>
                </div>
                <div className="each_question">
                  <input
                    className="form-check-input question_input"
                    id="s6q3_no"
                    name="s6q3"
                    type="radio"
                    value="No"
                    onChange={(e) => handleChange(e)}
                    {...register("s6q3")}
                  />
                  <label
                    className="form-check-label question_label"
                    htmlFor="s6q3_no"
                  >
                    <i className="fas fa-times"></i> No refill needed
                  </label>
                </div>
              </div>
              <div className="question_others hide_other">
                <div className="question_dropdown">
                  <select
                    className="custom-select"
                    name="s6q3_fertiliser"
                    onChange={(e) => handleChange(e)}
                    {...register("s6q3_fertiliser")}
                  >
                    <option defaultValue>Fertiliser</option>
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
                    onChange={(e) => handleChange(e)}
                    {...register("s6q3_quantity")}
                  >
                    <option selected>Quantity</option>
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
                <div className="question_remarks">
                  <label className="remarks" htmlFor="s6q3_remarks">
                    Remarks:
                  </label>
                  <input
                    className="question_remarks_textInput"
                    id="s6q3_remarks"
                    name="s6q3_remarks"
                    type="text"
                    onChange={(e) => handleChange(e)}
                    {...register("s6q3_remarks")}
                  />
                </div>
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
                    onChange={(e) => handleChange(e)}
                    {...register("s6q4")}
                  />
                  <label
                    className="form-check-label question_label"
                    htmlFor="s6q4_yes"
                  >
                    <i className="fas fa-check"></i> Yes, state below
                  </label>
                </div>
                <div className="each_question">
                  <input
                    className="form-check-input question_input"
                    id="s6q4_no"
                    name="s6q4"
                    type="radio"
                    value="No"
                    onChange={(e) => handleChange(e)}
                    {...register("s6q4")}
                  />
                  <label
                    className="form-check-label question_label"
                    htmlFor="s6q4_no"
                  >
                    <i className="fas fa-times"></i> No special issues
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
                    onChange={(e) => handleChange(e)}
                    {...register("s6q4_remarks")}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className="prev_btn"
        onClick={() => props.setStep(props.Step - 1)}
      >
        Previous
      </button>
      <button className="next_btn" onClick={() => onNext()}>
        Next
      </button>
    </>
  );
}
