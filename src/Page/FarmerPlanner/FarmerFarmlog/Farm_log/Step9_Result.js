import { React } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { ResetData } from "../../../../store/Farmlog/actions";

export default function Step9(props) {
  const dispatch = useDispatch();

  let s1 = useSelector((state) => state.farmlogStore.farmlogInfo);
  let s2 = useSelector((state) => state.farmlogStore.plantingInfo);
  let s3 = useSelector((state) => state.farmlogStore.irrigationInfo);
  let s4 = useSelector((state) => state.farmlogStore.groomingInfo);
  let s5 = useSelector((state) => state.farmlogStore.harvestInfo);
  let s6 = useSelector((state) => state.farmlogStore.gardenManInfo);
  let s7 = useSelector((state) => state.farmlogStore.otherIssuesInfo);
  let done = useSelector((state) => state.farmlogStore.farmlogDone);

  // Submission Function
  async function onSubmit() {
    let allFarmlogInfo = [s1, s2, s3, s4, s5, s6, s7];
    let id = jwt_decode(localStorage.getItem("LoggedInToken")).id;
    if (done.plantingDone === true && done.harvestDone === false) {
      await axios.post(
        `${process.env.REACT_APP_API_SERVER}/api/farmlog/${id}/planting`,
        { data: allFarmlogInfo }
      );
      dispatch(ResetData());
      return props.setStep(10);
    } else if (done.irrigationDone === true) {
      await axios.post(
        `${process.env.REACT_APP_API_SERVER}/api/farmlog/${id}/irrigation`,
        { data: allFarmlogInfo }
      );
      dispatch(ResetData());
      return props.setStep(10);
    } else if (done.groomingDone === true) {
      await axios.post(
        `${process.env.REACT_APP_API_SERVER}/api/farmlog/${id}/grooming`,
        { data: allFarmlogInfo }
      );
      dispatch(ResetData());
      return props.setStep(10);
    } else if (done.harvestDone === true) {
      await axios.post(
        `${process.env.REACT_APP_API_SERVER}/api/farmlog/${id}/harvest`,
        { data: allFarmlogInfo }
      );
      dispatch(ResetData());
      return props.setStep(10);
    }
  }
  return (
    <>
      <div id="dot-container">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot active"></span>
      </div>
      <div className="step">
        <div className="main-body-container" id="section8">
          <div>
            <h1 className="section-title">Farm Log Review</h1>
          </div>
          <div className="section-content">
            <div className="s1">
              <h1 className="section-title breakLine">Basic Information</h1>
              <p className="step9_Question">Location</p>
              <p className="step9_Answer">{s1.users || "-"}</p>
              <p className="step9_Question">Zone</p>
              <p className="step9_Answer">{s1.zone || "-"}</p>
              <p className="step9_Question">Time</p>
              <p className="step9_Answer">{s1.time || "-"}</p>
              <p className="step9_Question">Date</p>
              <p className="step9_Answer">{s1.date || "-"}</p>
              <p className="step9_Question">Weather</p>
              <p className="step9_Answer">{s1.weather || "-"}</p>
              <p className="step9_Question">Temperature (°C)</p>
              <p className="step9_Answer">{s1.temp || "-"}</p>
            </div>
            {done.plantingDone === true ? (
              <div className="s2">
                <h1 className="section-title breakLine">Planting</h1>
                {/* Planting Q1 */}
                <p className="step9_Question">
                  1. Planters - any special issues?
                </p>
                <p className="step9_Answer">{s2.s2q1 || "-"}</p>
                <p className="step9_Remarks">
                  Remarks: {s2.s2q1_remarks || "-"}
                </p>
                {/* Planting Q2 */}
                <p className="step9_Question">
                  2. Any ploughing and base dressing?
                </p>
                <p className="step9_Answer">{s2.s2q2 || "-"}</p>
                <p className="step9_Dropbox">
                  {s2.s2q2_fertiliser || "Fertiliser Type"}
                </p>
                <p className="step9_Remarks">
                  Remarks: {s2.s2q2_remarks || "-"}
                </p>
                {/* Planting Q3 */}
                <p className="step9_Question">3. Any sowing?</p>
                <p className="step9_Answer">{s2.s2q3 || "-"}</p>
                <p className="step9_Remarks">
                  Remarks: {s2.s2q3_remarks || "-"}
                </p>
                {/* Planting Q4 */}
                <p className="step9_Question">4. Any fertilising?</p>
                <p className="step9_Answer">{s2.s2q4 || "-"}</p>
                <p className="step9_Remarks">
                  Remarks: {s2.s2q4_remarks || "-"}
                </p>
              </div>
            ) : (
              <></>
            )}
            {done.irrigationDone === true ? (
              <div className="s3">
                <h1 className="section-title breakLine">Irrigation</h1>
                {/* Irrigarion Q1 */}
                <p className="step9_Question">
                  1. Auto Irrigation System - any issues?{" "}
                </p>
                <p className="step9_Answer">{s3.s3q1 || "-"}</p>
                <p className="step9_Remarks">
                  Remarks and follow-up: {s3.s3q1_remarks || "-"}
                </p>
                {/* Irrigarion Q2 */}
                <p className="step9_Question">
                  2. Update to the irrigation’s programing？
                </p>
                <p className="step9_Answer">{s3.s3q2 || "-"}</p>
                <div className="step9_row">
                  <p>{s3.s3q2_date_start || "Date Start"}</p>
                  <p>to</p>
                  <p>{s3.s3q2_date_end || "Date End"}</p>
                </div>
                <div className="step9_row">
                  <p>{s3.s3q2_time_start || "Time Start"}</p>
                  <p>to</p>
                  <p>{s3.s3q2_time_end || "Time End"}</p>
                </div>
                <p className="step9_Dropbox">
                  Frequency:
                  {s3.s3q2_frequency || "-"}
                </p>
                <br></br>
                {/* Irrigarion Q3 */}
                <p className="step9_Question">3. Water Usage of the Day</p>
                <p className="step9_Answer">{s3.s3q3 || "-"} Litres</p>
              </div>
            ) : (
              <></>
            )}
            {done.groomingDone === true ? (
              <div className="s4">
                <h1 className="section-title breakLine">Grooming</h1>

                {/* Grooming Q1 */}
                <p className="step9_Question">
                  1. Any pest control substances?
                </p>
                <p className="step9_Answer">{s4.s4q1 || "-"}</p>
                <div className="step9_row">
                  <p className="step9_Dropbox">{s4.s4q1_pest || "PEST Type"}</p>
                  <p className="step9_Dropbox">{s4.s4q1_dosage || "Dosage"}</p>
                </div>
                <p className="step9_Remarks">
                  Remarks: {s4.s4q1_remarks || "-"}
                </p>
                {/* Grooming Q2 */}
                <p className="step9_Question">2. Any pruning?</p>
                <p className="step9_Answer">{s4.s4q2 || "-"}</p>
                <p className="step9_Remarks">
                  Remarks: {s4.s4q2_remarks || "-"}
                </p>
                {/* Grooming Q3 */}
                <p className="step9_Question">3. Any weeding?</p>
                <p className="step9_Answer">{s4.s4q3 || "-"}</p>
                <p className="step9_Remarks">
                  Remarks: {s4.s4q3_remarks || "-"}
                </p>
                {/* Grooming Q4 */}
                <p className="step9_Question">
                  4. Other farm work? (Build trellises, netting bag,
                  pollination, etc.)
                </p>
                <p className="step9_Answer">{s4.s4q4 || "-"}</p>
              </div>
            ) : (
              <></>
            )}
            {done.harvestDone === true ? (
              <div className="s5">
                <h1 className="section-title breakLine">Harvest</h1>
                {/* Harvest Q1 */}
                <p className="step9_Question">Crop Name</p>
                <p className="step9_Answer">{s5.s5q1 || "-"}</p>
                {/* Harvest Q2 */}
                <p className="step9_Question">Weight</p>
                <p className="step9_Answer">{s5.s5q2 || "-"} kg</p>
                {/* Harvest Q3 */}
                <p className="step9_Question">Status</p>
                <p className="step9_Answer">{s5.s5q3 || "-"}</p>
              </div>
            ) : (
              <></>
            )}
            <div className="s6">
              <h1 className="section-title breakLine">Garden Management</h1>
              {/* Garden Management Q1 */}
              <p className="step9_Question">
                1. Composter - any special issues?
              </p>
              <p className="step9_Answer">{s6.s6q1 || "-"} </p>
              <p className="step9_Remarks">Remarks: {s6.s6q1_remarks || "-"}</p>
              {/* Garden Management Q2 */}
              <p className="step9_Question">
                2. No. of garden waste bag(s) collected
              </p>
              <p className="step9_Answer">{s6.s6q2 || "-"} bag</p>
              {/* Garden Management Q3 */}
              <p className="step9_Question">
                3. Farm supplies require any refill?
              </p>
              <p className="step9_Answer">{s6.s6q3 || "-"}</p>
              <div className="step9_row">
                <p>{s6.s6q3_fertiliser || "Fertiliser"}</p>
                <p>{s6.s6q3_quantity || "Quantity"}</p>
              </div>
              <p className="step9_Remarks">Remarks: {s6.s6q3_remarks || "-"}</p>
              {/* Garden Management Q4 */}
              <p className="step9_Question">
                4. Field and Storeroom - any special issues?
              </p>
              <p className="step9_Answer">{s6.s6q4 || "-"}</p>
              <p className="step9_Remarks">Remarks: {s6.s6q4_remarks || "-"}</p>
            </div>
            <div className="s7">
              <h1 className="section-title breakLine">Other issues</h1>
              {/* Other issues Q1 */}
              <p className="step9_Question">
                1. Please write down other issues below if any.
              </p>
              <p className="step9_Answer">{s7.s7q1 || "-"}</p>
            </div>
          </div>
        </div>
        <div className="q-box__buttons ">
          <button
            className="prev_btn"
            onClick={() => props.setStep(props.Step - 1)}
          >
            Previous
          </button>
          <button
            className="next_btn"
            onClick={() => onSubmit(s1, s2, s3, s4, s5, s6, s7)}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
