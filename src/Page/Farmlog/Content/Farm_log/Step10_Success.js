import { React } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export default function Step10(props) {
  return (
    <>
      <div className="step">
        <div className="main-body-container" id="section9">
          <FontAwesomeIcon icon={faCheckCircle} className="fa-circle-check" />
          <h3 className="section-title ">Submission Successful</h3>
          <div className="q-box__buttons">
            <button className="next_btn" onClick={() => props.setStep(1)}>
              Back to home
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
