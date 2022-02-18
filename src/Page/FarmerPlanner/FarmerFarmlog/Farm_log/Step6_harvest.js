// Harvest page
import { React, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { AddHarvest } from "../../../../store/Farmlog/actions";
import { HarvestDone } from "../../../../store/Farmlog/actions";
import { GetCropThunk } from "../../../../store/Getcrop/actions";

export default function Step6(props) {
  const dispatch = useDispatch();
  const { register } = useForm();
  let [Errmsg, setErrMsg] = useState("");

  const readytoharvest = useSelector((state) => state.cropStore.ReadyToHarvest);

  //  Selected on Farmlog S1 user
  const clientSelected = useSelector(
    (state) => state.farmlogStore.farmlogInfo.users
  );
  //  Selected on Farmlog S1 zone
  const zoneSelected = useSelector(
    (state) => state.farmlogStore.farmlogInfo.zone
  );

  useEffect(() => {
    dispatch(GetCropThunk(clientSelected));
  }, [dispatch, clientSelected, zoneSelected]);

  // Make Today format to yyyy-mm-dd
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  today = parseInt(`${yyyy}${mm}${dd}`);

  const Clientharvest = [];
  chectClientharvest(readytoharvest);

  // check crop which is ready to harvest by client name (i.e H-day < today)
  function chectClientharvest(readytoharvest) {
    for (let i = 0; i < readytoharvest.length; i++) {
      let hyy = readytoharvest[i].harvest_date.slice(0, 4);
      let hmm = readytoharvest[i].harvest_date.slice(5, 7);
      let hdd = readytoharvest[i].harvest_date.slice(8, 10);
      let hdate = parseInt(`${hyy}${hmm}${hdd}`);
      if (hdate <= today && readytoharvest[i].area === zoneSelected) {
        Clientharvest.push(readytoharvest[i]);
      }
    }
    return Clientharvest;
  }

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
    if (
      harvestInfo.s5q1 === "" ||
      harvestInfo.s5q2 === "" ||
      harvestInfo.s5q3 === ""
    ) {
      setErrMsg("** All fields are required");
    } else {
      dispatch(AddHarvest(harvestInfo));
      dispatch(HarvestDone(true));
      props.setStep(7);
    }
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
                <p>Crop Name</p>
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
                    {Clientharvest && Clientharvest[0] !== undefined ? (
                      Clientharvest.map((data) => (
                        <option key={data.name} value={data.name}>
                          {data.name}
                        </option>
                      ))
                    ) : (
                      <option defaultValue>No Harvest Crop</option>
                    )}
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
                      placeholder="0"
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
            {Errmsg ? <p className="errmsg">{Errmsg}</p> : <></>}
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
