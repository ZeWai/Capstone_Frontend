// Grooming page
import { React, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AddGrooming } from "../../../../store/Farmlog/actions";

export default function Step5(props) {
  const dispatch = useDispatch();
  const { register } = useForm();
  let [groomingInfo, setgroomingInfo] = useState({
    s4q1: null,
    s4q1_pest: null,
    s4q1_dosage: null,
    s4q1_remarks: null,
    s4q2: null,
    s4q2_remarks: null,
    s4q3: null,
    s4q3_remarks: null,
    s4q4: null,
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setgroomingInfo((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  }

  const onNext = () => {
    console.log(groomingInfo);
    dispatch(AddGrooming(groomingInfo));
    props.setStep(7);
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
      </div>
      {/* <!-- page4 --> */}
      <div class="step">
        <div class="main-body-container" id="section4">
          <div class="section-content">
            {/* {{!-- Modal S4 Grooming --}} */}
            <div>
              <h1 className="section-title">Grooming</h1>
            </div>
            {/* <!-- S4 - Grooming : Q1 --> */}
            <div class="s4q1">
              <p>1. Any pest control substances? </p>
              <div class="input_btn">
                <div class="each_questionn">
                  <input
                    class="form-check-input question_input"
                    id="s4q1_yes"
                    name="s4q1"
                    type="radio"
                    defaultValue="Yes"
                    onChange={(e) => handleChange(e)}
                    {...register("s4q1")}
                  />
                  <label
                    class="form-check-label question_label"
                    htmlFor="s4q1_yes"
                  >
                    <i class="fas fa-check"></i> Yes, state below
                  </label>
                </div>
                <div class="each_questionn">
                  <input
                    class="form-check-input question_input"
                    id="s4q1_no"
                    name="s4q1"
                    type="radio"
                    defaultValue="No"
                    onChange={(e) => handleChange(e)}
                    {...register("s4q1")}
                  />
                  <label
                    class="form-check-label question_label"
                    htmlFor="s4q1_no"
                  >
                    <i class="fas fa-times"></i> No special issues
                  </label>
                </div>
              </div>
              <div class="question_others hide_other">
                <div class="question_dropdown">
                  <select
                    class="custom-select"
                    name="s4q1_pest"
                    value={groomingInfo.s4q1_pest || "NoInput"}
                    onChange={(e) => handleChange(e)}
                    {...register("s4q1_pest")}
                  >
                    <option hidden value="PESTType">
                      Pest Control Type
                    </option>
                    <option class="options" value="Disinfectants">
                      Disinfectants
                    </option>
                    <option class="options" value="Fungicides">
                      Fungicides
                    </option>
                    <option class="options" value="Herbicides">
                      Herbicides
                    </option>
                    <option class="options" value="Insecticides">
                      Insecticides
                    </option>
                    <option class="options" value="Miticides">
                      Miticides
                    </option>
                    <option class="options" value="Ovicides">
                      Ovicides
                    </option>
                    <option class="options" value="Repellents">
                      Repellents
                    </option>
                    <option class="options" value="Rodenticides">
                      Rodenticides
                    </option>
                  </select>
                  <select
                    class="custom-select"
                    name="s4q1_dosage"
                    onChange={(e) => handleChange(e)}
                    {...register("s4q1_dosage")}
                  >
                    <option selected>Dosage</option>
                    <option class="options" defaultValue="normal">
                      Normal
                    </option>
                    <option class="options" defaultValue="strong">
                      Strong
                    </option>
                  </select>
                </div>
              </div>
              <div className="question_remarks">
                <label className="remarks" htmlFor="s4q1_remarks">
                  Remarks:
                </label>
                <input
                  className="question_remarks_textInput"
                  id="s4q1_remarks"
                  name="s4q1_remarks"
                  type="text"
                  onChange={(e) => handleChange(e)}
                  {...register("s4q1_remarks")}
                />
              </div>
            </div>
            {/* <!-- S4 - Grooming : Q2 --> */}
            <div class=" s4q2">
              <p>2. Any pruning?</p>
              <div class="input_btn">
                <div class="each_questionn">
                  <input
                    class="form-check-input question_input"
                    id="s4q2_yes"
                    name="s4q2"
                    type="radio"
                    defaultValue="Yes"
                    onChange={(e) => handleChange(e)}
                    {...register("s4q2")}
                  />
                  <label
                    class="form-check-label question_label"
                    htmlFor="s4q2_yes"
                  >
                    <i class="fas fa-check"></i> Yes, state below
                  </label>
                </div>
                <div class="each_questionn">
                  <input
                    class="form-check-input question_input"
                    id="s4q2_no"
                    name="s4q2"
                    type="radio"
                    defaultValue="No"
                    onChange={(e) => handleChange(e)}
                    {...register("s4q2")}
                  />
                  <label
                    class="form-check-label question_label"
                    htmlFor="s4q2_no"
                  >
                    <i class="fas fa-times"></i> No special issues
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
                  onChange={(e) => handleChange(e)}
                  {...register("s4q2_remarks")}
                />
              </div>
            </div>
            {/* <!-- S4 - Grooming : Q3 --> */}
            <div class=" s4q3">
              <p>3. Any weeding? </p>
              <div class="input_btn">
                <div class="each_questionn">
                  <input
                    class="form-check-input question_input"
                    id="s4q3_yes"
                    name="s4q3"
                    type="radio"
                    defaultValue="Yes"
                    onChange={(e) => handleChange(e)}
                    {...register("s4q3")}
                  />
                  <label
                    class="form-check-label question_label"
                    htmlFor="s4q3_yes"
                  >
                    <i class="fas fa-check"></i> Yes, state below
                  </label>
                </div>
                <div class="each_questionn">
                  <input
                    class="form-check-input question_input"
                    id="s4q3_no"
                    name="s4q3"
                    type="radio"
                    defaultValue="No"
                    onChange={(e) => handleChange(e)}
                    {...register("s4q3")}
                  />
                  <label
                    class="form-check-label question_label"
                    htmlFor="s4q3_no"
                  >
                    <i class="fas fa-times"></i> No special issues
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
                  onChange={(e) => handleChange(e)}
                  {...register("s4q3_remarks")}
                />
              </div>
            </div>
            {/* <!-- S4 - Grooming : Q4 --> */}
            <div class=" s4q4">
              <p>
                4. Other farm work? (Build trellises, netting bag, pollination,
                etc.)
              </p>
              <div class="question_others">
                <div class="question_remarks">
                  <label class="remarks" htmlFor="s4q4">
                    Remarks:
                  </label>
                  <input
                    class="question_remarks_textInput"
                    id="s4q4"
                    name="s4q4"
                    type="text"
                    onChange={(e) => handleChange(e)}
                    {...register("s4q4")}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        className="prev_btn"
        onClick={() => props.setStep(props.Step - 3)}
      >
        Previous
      </button>
      <button className="next_btn" onClick={() => onNext()}>
        Next
      </button>
    </>
  );
}
