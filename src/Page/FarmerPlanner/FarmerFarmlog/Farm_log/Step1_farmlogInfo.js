import { React, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { AddFarmlog } from "../../../../store/Farmlog/actions";
import { GetClientZoneThunk } from "../../../../store/getzone/actions";

export default function Step1(props) {
  const dispatch = useDispatch();
  const { register } = useForm();

  let client = useSelector((state) => state.userStore.clientNames);
  let zone = useSelector((state) => state.zoneStore.clientZone);
  let [Errmsg, setErrMsg] = useState("");
  let [farmlogInfo, setfarmlogInfo] = useState({
    users: null,
    zone: null,
    time: undefined || "",
    date: "",
    weather: null,
    temp: 0,
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setfarmlogInfo((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  }

  function getZone_handleChange(e) {
    const { name, value } = e.target;
    setfarmlogInfo((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
    dispatch(GetClientZoneThunk(e.currentTarget.value));
  }
  console.log(`check`, farmlogInfo.users === null);

  const onNext = () => {
    if (
      farmlogInfo.users === "null" ||
      farmlogInfo.zone === 0 ||
      farmlogInfo.time === "null" ||
      farmlogInfo.date === null ||
      farmlogInfo.weather === null ||
      farmlogInfo.temp === null
    ) {
      setErrMsg("** All fields are required");
    } else {
      dispatch(AddFarmlog(farmlogInfo));
      props.setStep(2);
    }
  };

  return (
    <div className="farmlog_base">
      <div className="farmlog_title">
        <span>Farm Planner | Farm Log</span>
      </div>
      {/* Progress bar */}
      <div id="dot-container">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
      {/* main-body */}
      {/* ######page1#######  */}
      <div className="step">
        <div className="main-body-container" id="section1">
          <h1 className="section-title">Basic Information</h1>
          <div className="section-content">
            {/* Render Client */}
            <div className="q-box__question">
              <label
                className="form-select-label question__label"
                htmlFor="users"
              >
                Location
              </label>
              <select
                className="question__input"
                value={farmlogInfo.users || "NoInput"}
                {...register("users", { required: true })}
                onChange={(e) => getZone_handleChange(e)}
              >
                <option hidden value="Please select">
                  Please select
                </option>
                {client && client[0] !== undefined ? (
                  client.map((client) => (
                    <option key={client.username} value={client.username}>
                      {client.username}
                    </option>
                  ))
                ) : (
                  <option>No Location</option>
                )}
              </select>
            </div>
            {/* Render Zone */}
            <div className="q-box__question">
              <label
                className="form-select-label question__label"
                htmlFor="zone"
              >
                Zone
              </label>
              <select
                className="question__input"
                value={farmlogInfo.zone || "NoInput"}
                {...register("zone", { required: true })}
                onChange={(e) => handleChange(e)}
              >
                <option hidden value="Please select">
                  Please select
                </option>

                {zone && zone[0] !== undefined ? (
                  zone.map((zone) => (
                    <option key={zone.area} value={zone.area}>
                      {zone.area}
                    </option>
                  ))
                ) : (
                  <option>No Zone</option>
                )}
              </select>
            </div>
            {/* Time */}
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
                {...register("time", { required: true })}
                onChange={(e) => handleChange(e)}
              />
            </div>
            {/* Date */}
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
                value={farmlogInfo.date || ""}
                onChange={(e) => handleChange(e)}
              />
            </div>
            {/* Weather */}
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
                value={farmlogInfo.weather || "NoInput"}
                onChange={(e) => handleChange(e)}
              >
                <option hidden value="Please select">
                  Please select
                </option>
                <option value="sunny">Sunny</option>
                <option value="partly-cloudy">Partly Cloudy</option>
                <option value="cloudy">Cloudy</option>
                <option value="rainy">Rainy</option>
              </select>
            </div>
            {/* Temperature */}
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
                {...register("temp", { required: true })}
                value={farmlogInfo.temp}
                onChange={(e) => handleChange(e)}
              />
            </div>
            {Errmsg ? <p className="errmsg">{Errmsg}</p> : <></>}
          </div>
        </div>

        <div className="q-box__buttons toRightBtn">
          <button className="next_btn" onClick={() => onNext()}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
