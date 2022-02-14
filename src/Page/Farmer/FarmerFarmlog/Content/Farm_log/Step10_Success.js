import { React } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export default function Step10(props) {
  return (
    <>
      <div className="step">
        <div className="main-body-container" id="step10">
          <FontAwesomeIcon icon={faCheckCircle} className="fa-circle-check" />
          <h2 className="section-title ">Submission Successful</h2>
          <div className="q-box__buttons"></div>
        </div>
        <button className="submit_btn" onClick={() => props.setStep(1)}>
          Back to home
        </button>
      </div>
    </>
  );
}