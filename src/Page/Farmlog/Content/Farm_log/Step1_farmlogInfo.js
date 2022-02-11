import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import AddFarmlog from "../../../../store/Farmlog/actions";
// import farmlogCurrentView from "../../../../store/Farmlog/actions";
import Step2 from "./Step2_sectionSelect";

// import AddFarmlogThunk from "../store/farmlog/actions";

export default function Step1() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let [farmlogInfo, setfarmlogInfo] = useState();

  function handleChange(e) {
    const { name, value } = e.target;
    setfarmlogInfo((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  }

  const onSubmit = (data) => {
    dispatch(AddFarmlog(data));
    // dispatch(farmlogCurrentView("Step2"));
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Progress bar */}
      <div id="dot-container">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
      {/* main-body */}
      <div id="steps-container">
        {/* ######page1#######  */}
        <div className="step">
          <div className="main-body-container" id="section1">
            <h1 className="section-title">Basic Information</h1>
            <div className="section-content">
              <div className="q-box__question">
                <label
                  className="form-select-label question__label"
                  htmlFor="s1q2"
                >
                  Time
                </label>
                <input
                  className="question__input time-input"
                  type="time"
                  value={farmlogInfo.time}
                />
              </div>
              <div className="q-box__question">
                <label
                  className="form-select-label question__label"
                  htmlFor="s1q3"
                >
                  Date
                </label>
                <input
                  className="question__input date-input"
                  type="date"
                  {...register("date", { required: true })}
                  value={farmlogInfo.date}
                />
              </div>
              <div className="q-box__question">
                <label
                  className="form-select-label question__label"
                  htmlFor="s1q4"
                >
                  Weather
                </label>
                <select
                  className="question__input"
                  {...register("weather", { required: true })}
                  defaultValue="Weather"
                  value={farmlogInfo.weather}
                >
                  <option hidden value="Weather">
                    Weather
                  </option>
                  <option value="sunny">Sunny</option>
                  <option value="partly-cloudy">Partly Cloudy</option>
                  <option value="cloudy">Cloudy</option>
                  <option value="rainy">Rainy</option>
                </select>
              </div>
              <div className="q-box__question">
                <label
                  className="form-select-label question__label"
                  htmlFor="s1q5"
                >
                  Temperature (°C)
                </label>
                <input
                  className="question__input temp-input"
                  id="s1q5"
                  name="s1q5"
                  type="number"
                  defaultValue="25"
                  {...register("temp", { required: true })}
                  value={farmlogInfo.temp}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <button type="submit">Next</button>
    </form>
  );
}
