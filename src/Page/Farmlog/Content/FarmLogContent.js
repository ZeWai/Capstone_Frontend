import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { AddFarmlogThunk } from "../../../store/Farmlog/actions";
import AddFarmlog from "../../../store/Farmlog/actions";
import Step1 from "./Farm_log/Step1_farmlogInfo";
import Step2 from "./Farm_log/Step2_sectionSelect";
import Step3 from "./Farm_log/Step3_planting";
import Step4 from "./Farm_log/Step4_irrigation";
import Step5 from "./Farm_log/Step5_grooming";
import Step6 from "./Farm_log/Step6_harvest";
import Step7 from "./Farm_log/Step7_gardenManagement";
import Step8 from "./Farm_log/Step8_otherIssues";
import "./Farmlog.css";

export default function Content() {
  const [farmlogCurrentView, setfarmlogCurrentView] = useState(1);

  return (
    <>
      {farmlogCurrentView === 1 ? (
        <Step1 Step={farmlogCurrentView} setStep={setfarmlogCurrentView} />
      ) : (
        <> </>
      )}
      {farmlogCurrentView === 2 ? (
        <Step2 Step={farmlogCurrentView} setStep={setfarmlogCurrentView} />
      ) : (
        <></>
      )}
      {farmlogCurrentView === 3 ? (
        <Step3 Step={farmlogCurrentView} setStep={setfarmlogCurrentView} />
      ) : (
        <></>
      )}
      {farmlogCurrentView === 4 ? (
        <Step4 Step={farmlogCurrentView} setStep={setfarmlogCurrentView} />
      ) : (
        <></>
      )}
      {farmlogCurrentView === 5 ? (
        <Step5 Step={farmlogCurrentView} setStep={setfarmlogCurrentView} />
      ) : (
        <></>
      )}
      {farmlogCurrentView === 6 ? (
        <Step6 Step={farmlogCurrentView} setStep={setfarmlogCurrentView} />
      ) : (
        <></>
      )}
      {farmlogCurrentView === 7 ? (
        <Step7 Step={farmlogCurrentView} setStep={setfarmlogCurrentView} />
      ) : (
        <></>
      )}
      {farmlogCurrentView === 8 ? (
        <Step8 Step={farmlogCurrentView} setStep={setfarmlogCurrentView} />
      ) : (
        <></>
      )}
    </>
  );
}
