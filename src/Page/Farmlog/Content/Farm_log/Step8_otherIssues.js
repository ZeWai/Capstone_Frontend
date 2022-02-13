// Other issues page
import { React, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AddOtherIssues } from "../../../../store/Farmlog/actions";

export default function Step8(props) {
  const dispatch = useDispatch();
  const { register } = useForm();
  let [otherIssuesInfo, setotherIssuesInfo] = useState({
    s7q1: null,
    s7q2_album: null,
    s7q3_image: null,
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setotherIssuesInfo((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  }

  const onSubmit = () => {
    console.log(otherIssuesInfo);
    dispatch(AddOtherIssues(otherIssuesInfo));
  };

  return (
    <>
      {/* Progress bar */}
      <div id="dot-container">
        <span className="dot "></span>
        <span className="dot"></span>
        <span className="dot "></span>
        <span className="dot"></span>
        <span className="dot active"></span>
      </div>
      {/* <!-- page7 --> */}
      <div className="step">
        <div className="main-body-container" id="section7">
          <div>
            <h1 className="section-title">Other Issues</h1>
          </div>
          <div className="section-content">
            <div className="s7q1">
              <p>1. Please write down other issues below if any.</p>
              <textarea
                name="s7q1"
                onChange={(e) => handleChange(e)}
                {...register("s7q1")}
              ></textarea>
            </div>
            <div className="s7q2_album">
              <p>2. Album</p>
              <p>
                Please upload images to record the zone condition. (You can
                upload multiple images each time)
              </p>
              <input
                className="upload-input"
                type="file"
                onChange={(e) => handleChange(e)}
                {...register("s7q2_album")}
              />
            </div>
            <div className="s7q2_image">
              <p>3. Image Recognition</p>
              <p>
                Please upload images to check the crop condition. (You can
                upload one image each time)
              </p>
              <input
                className="upload-input"
                type="file"
                onChange={(e) => handleChange(e)}
                {...register("s7q2_image")}
              />
            </div>
          </div>
        </div>
      </div>
      <button className="submit_btn" onClick={() => onSubmit()}>
        Submit
      </button>
    </>
  );
}
