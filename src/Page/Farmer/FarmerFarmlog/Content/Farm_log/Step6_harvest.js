// Harvest page
import { React, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AddHarvest } from "../../../../../store/Farmlog/actions";

export default function Step6(props) {
  const dispatch = useDispatch();
  const { register } = useForm();
  let [harvestInfo, setharvestInfo] = useState({
    s5q1: "",
    s5q2: "",
    s5q3: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setharvestInfo((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  }

  const onNext = () => {
    console.log(harvestInfo);
    dispatch(AddHarvest(harvestInfo));
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
        <span className="dot"></span>
      </div>
      {/* <!-- page5 --> */}
      <div className="step">
        <div className="main-body-container" id="section5">
          {/* {{!-- Modal S5 Harvest --}} */}
          <div>
            <h1 className="section-title">Harvest</h1>
          </div>
          <div className="section-content">
            {/* <!-- S5 - Harvest : Q1 --> */}
            <div className="question_others question_harvest_row s5q1">
              <div>
                <p>Crop Type</p>
                <div className="question_dropdown">
                  <select
                    className="custom-select"
                    id="s5q1"
                    {...register("s5q1")}
                    onChange={(e) => handleChange(e)}
                  >
                    <option hidden defaultValue>
                      Please select
                    </option>
                    <option className="options" value="Beet">
                      Beet
                    </option>
                    <option className="options" value="Bak Choi">
                      Bak Choi
                    </option>
                    <option className="options" value="Choi Sum">
                      Choi Sum
                    </option>
                  </select>
                </div>
              </div>
              {/* <!-- S5 - Harvest : Q2 --> */}
              <div>
                <p>Weight</p>
                <div>
                  <div className="input-group mb-3 litres_input s5q2">
                    <input
                      type="text"
                      placeholder="2.13"
                      name="s5q2"
                      {...register("s5q2")}
                      onChange={(e) => handleChange(e)}
                    />
                    <div>
                      <p className="litres_input_label" id="basic-addon2">
                        kg
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- S5 - Harvest : Q3 --> */}
            <div className="question_others question_harvest_12row s5q3">
              <div>
                <p>Status</p>
                <div className="question_dropdown">
                  <select
                    className="custom-select"
                    name="s5q3"
                    id="s5q3"
                    {...register("s5q3")}
                    onChange={(e) => handleChange(e)}
                  >
                    <option hidden defaultValue>
                      Please select
                    </option>
                    <option className="options" value="end-cycle">
                      End Cycle
                    </option>
                    <option className="options" value="harvested">
                      Harvested
                    </option>
                  </select>
                </div>
              </div>
            </div>
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
