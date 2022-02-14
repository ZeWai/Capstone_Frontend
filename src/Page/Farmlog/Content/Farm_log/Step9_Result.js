import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddFarmlogThunk } from "../../../../store/Farmlog/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

export default function Step9(props) {
  const dispatch = useDispatch();

  let [shows1, setshows1] = useState(false);
  let [shows2, setshows2] = useState(false);
  let [shows3, setshows3] = useState(false);
  let [shows4, setshows4] = useState(false);
  let [shows5, setshows5] = useState(false);
  let [shows6, setshows6] = useState(false);
  let [shows7, setshows7] = useState(false);

  let s1 = useSelector((state) => state.farmlogStore.farmlogInfo);
  let s2 = useSelector((state) => state.farmlogStore.plantingInfo);
  let s3 = useSelector((state) => state.farmlogStore.irrigationInfo);
  let s4 = useSelector((state) => state.farmlogStore.groomingInfo);
  let s5 = useSelector((state) => state.farmlogStore.harvestInfo);
  let s6 = useSelector((state) => state.farmlogStore.gardenManInfo);
  let s7 = useSelector((state) => state.farmlogStore.otherIssuesInfo);
  let allFarmlogInfo = [s1, s2, s3, s4, s5, s6, s7];

  let ArrowDownIcon = (
    <FontAwesomeIcon icon={faAngleDown} className="fa-angle-down" />
  );
  let ArrowUpIcon = (
    <FontAwesomeIcon icon={faAngleUp} className="fa-angle-up" />
  );

  function onSubmit() {
    dispatch(AddFarmlogThunk(allFarmlogInfo));
    props.setStep(10);
  }
  return (
    <>
      <div id="dot-container">
        <span className="dot "></span>
        <span className="dot"></span>
        <span className="dot "></span>
        <span className="dot"></span>
        <span className="dot active"></span>
      </div>
      <div className="step">
        <div className="main-body-container" id="section8">
          <div>
            <h1 className="section-title">Farm Log Overview</h1>
          </div>
          <div className="section-content">
            <div className="s1">
              <h1 className="section-title breakLine">Basic Information</h1>
              {shows1 ? (
                <>
                  <p className="step9_Question">Time</p>
                  <p className="step9_Answer">{s1.time || "-"}</p>
                  <p className="step9_Question">Date</p>
                  <p className="step9_Answer">{s1.date || "-"}</p>
                  <p className="step9_Question">Weather</p>
                  <p className="step9_Answer">{s1.weather || "-"}</p>
                  <p className="step9_Question">Temperature (°C)</p>
                  <p className="step9_Answer">{s1.temp || "-"}</p>
                  <div className="step9_arrow">
                    <button onClick={() => setshows1(false)}>
                      {ArrowUpIcon}
                    </button>
                  </div>
                </>
              ) : (
                <div className="step9_arrow">
                  <button onClick={() => setshows1(true)}>
                    {ArrowDownIcon}
                  </button>
                </div>
              )}
            </div>
            <div className="s2">
              <h1 className="section-title breakLine">Planting</h1>
              {shows2 ? (
                <>
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
                  <div className="step9_arrow">
                    <button onClick={() => setshows2(false)}>
                      {ArrowUpIcon}
                    </button>
                  </div>
                </>
              ) : (
                <div className="step9_arrow">
                  <button onClick={() => setshows2(true)}>
                    {ArrowDownIcon}
                  </button>
                </div>
              )}
            </div>
            <div className="s3">
              <h1 className="section-title breakLine">Irrigarion</h1>
              {shows3 ? (
                <>
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
                  <div className="step9_arrow">
                    <button onClick={() => setshows3(false)}>
                      {ArrowUpIcon}
                    </button>
                  </div>
                </>
              ) : (
                <div className="step9_arrow">
                  <button onClick={() => setshows3(true)}>
                    {ArrowDownIcon}
                  </button>
                </div>
              )}
            </div>
            <div className="s4">
              <h1 className="section-title breakLine">Grooming</h1>
              {shows4 ? (
                <>
                  {/* Grooming Q1 */}
                  <p className="step9_Question">
                    1. Any pest control substances?
                  </p>
                  <p className="step9_Answer">{s4.s4q1 || "-"}</p>
                  <div className="step9_row">
                    <p className="step9_Dropbox">
                      {s4.s4q1_pest || "PEST Type"}
                    </p>
                    <p className="step9_Dropbox">
                      {s4.s4q1_dosage || "Dosage"}
                    </p>
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
                  <div className="step9_arrow">
                    <button onClick={() => setshows4(false)}>
                      {ArrowUpIcon}
                    </button>
                  </div>
                </>
              ) : (
                <div className="step9_arrow">
                  <button onClick={() => setshows4(true)}>
                    {ArrowDownIcon}
                  </button>
                </div>
              )}
            </div>
            <div className="s5">
              <h1 className="section-title breakLine">Harvest</h1>
              {shows5 ? (
                <>
                  {/* Harvest Q1 */}
                  <p className="step9_Question">Crop Type</p>
                  <p className="step9_Answer">{s5.s5q1 || "-"}</p>
                  {/* Harvest Q2 */}
                  <p className="step9_Question">Weight</p>
                  <p className="step9_Answer">{s5.s5q2 || "-"} kg</p>
                  {/* Harvest Q3 */}
                  <p className="step9_Question">Status</p>
                  <p className="step9_Answer">{s5.s5q3 || "-"}</p>
                  <div className="step9_arrow">
                    <button onClick={() => setshows5(false)}>
                      {ArrowUpIcon}
                    </button>
                  </div>
                </>
              ) : (
                <div className="step9_arrow">
                  <button onClick={() => setshows5(true)}>
                    {ArrowDownIcon}
                  </button>
                </div>
              )}
            </div>
            <div className="s6">
              <h1 className="section-title breakLine">Garden Management</h1>
              {shows6 ? (
                <>
                  {/* Garden Management Q1 */}
                  <p className="step9_Question">
                    1. Composter - any special issues?
                  </p>
                  <p className="step9_Answer">{s6.s6q1 || "-"} </p>
                  <p className="step9_Remarks">
                    Remarks: {s6.s6q1_remarks || "-"}
                  </p>
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
                  <p className="step9_Remarks">
                    Remarks: {s6.s6q3_remarks || "-"}
                  </p>
                  {/* Garden Management Q4 */}
                  <p className="step9_Question">
                    4. Field and Storeroom - any special issues?
                  </p>
                  <p className="step9_Answer">{s6.s6q4 || "-"}</p>
                  <p className="step9_Remarks">
                    Remarks: {s6.s6q4_remarks || "-"}
                  </p>
                  <div className="step9_arrow">
                    <button onClick={() => setshows6(false)}>
                      {ArrowUpIcon}
                    </button>
                  </div>
                </>
              ) : (
                <div className="step9_arrow">
                  <button onClick={() => setshows6(true)}>
                    {ArrowDownIcon}
                  </button>
                </div>
              )}
            </div>
            <div className="s7">
              <h1 className="section-title breakLine">Other issues</h1>
              {shows7 ? (
                <>
                  {/* Other issues Q1 */}
                  <p className="step9_Question">
                    1. Please write down other issues below if any.
                  </p>
                  <p className="step9_Answer">{s7.s7q1 || "-"}</p>
                  {/* Other issues Q2 */}
                  <p className="step9_Question">2. Album</p>
                  <p className="step9_Photo">{s7.s7q2_album || "-"}</p>
                  {/* Other issues Q3 */}
                  <p className="step9_Question">3. Image</p>
                  <p className="step9_Photo">{s7.s7q3_image || "-"}</p>
                  <div className="step9_arrow">
                    <button onClick={() => setshows7(false)}>
                      {ArrowUpIcon}
                    </button>
                  </div>
                </>
              ) : (
                <div className="step9_arrow">
                  <button onClick={() => setshows7(true)}>
                    {ArrowDownIcon}
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="q-box__buttons ">
            <button
              className="prev_btn"
              onClick={() => props.setStep(props.Step - 1)}
            >
              Previous
            </button>
            <button className="next_btn" onClick={() => onSubmit()}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
