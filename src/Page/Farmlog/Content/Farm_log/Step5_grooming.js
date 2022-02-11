// Grooming page

import React from "react";
import { useForm } from "react-hook-form";

import { useDispatch, useSelector } from "react-redux";
// import { chooseSauce } from "./rootSlice";

export default function Step5() {
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
                    value="Yes"
                  />
                  <label class="form-check-label question_label" for="s4q1_yes">
                    <i class="fas fa-check"></i> Yes, state below
                  </label>
                </div>
                <div class="each_questionn">
                  <input
                    class="form-check-input question_input"
                    id="s4q1_no"
                    name="s4q1"
                    type="radio"
                    value="No"
                  />
                  <label class="form-check-label question_label" for="s4q1_no">
                    <i class="fas fa-times"></i> No special issues
                  </label>
                </div>
              </div>
              <div class="question_others hide_other">
                <div class="question_dropdown">
                  <select class="custom-select" name="s4q1_pest">
                    <option selected>Pest Control Type</option>
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
                  <select class="custom-select" name="s4q1_usage">
                    <option selected>Dosage</option>
                    <option class="options" value="normal">
                      Normal
                    </option>
                    <option class="options" value="strong">
                      Strong
                    </option>
                  </select>
                </div>
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
                    value="Yes"
                  />
                  <label class="form-check-label question_label" for="s4q2_yes">
                    <i class="fas fa-check"></i> Yes, state below
                  </label>
                </div>
                <div class="each_questionn">
                  <input
                    class="form-check-input question_input"
                    id="s4q2_no"
                    name="s4q2"
                    type="radio"
                    value="No"
                  />
                  <label class="form-check-label question_label" for="s4q2_no">
                    <i class="fas fa-times"></i> No special issues
                  </label>
                </div>
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
                    value="Yes"
                  />
                  <label class="form-check-label question_label" for="s4q3_yes">
                    <i class="fas fa-check"></i> Yes, state below
                  </label>
                </div>
                <div class="each_questionn">
                  <input
                    class="form-check-input question_input"
                    id="s4q3_no"
                    name="s4q3"
                    type="radio"
                    value="No"
                  />
                  <label class="form-check-label question_label" for="s4q3_no">
                    <i class="fas fa-times"></i> No special issues
                  </label>
                </div>
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
            {/* <!-- S4 - Grooming : Q4 --> */}
            <div class=" s4q4">
              <p>
                4. Other farm work? (Build trellises, netting bag, pollination,
                etc.)
              </p>
              <div class="question_others">
                <div class="question_remarks">
                  <label class="remarks" for="s4q4">
                    Remarks:
                  </label>
                  <input
                    class="question_remarks_textInput"
                    id="s4q4"
                    name="s4q4"
                    type="text"
                  />
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
