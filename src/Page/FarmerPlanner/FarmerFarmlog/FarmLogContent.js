import { useState } from "react";
import Step1 from "./Farm_log/Step1_farmlogInfo";
import Step2 from "./Farm_log/Step2_sectionSelect";
import Step3 from "./Farm_log/Step3_planting";
import Step4 from "./Farm_log/Step4_irrigation";
import Step5 from "./Farm_log/Step5_grooming";
import Step6 from "./Farm_log/Step6_harvest";
import Step7 from "./Farm_log/Step7_gardenManagement";
import Step8 from "./Farm_log/Step8_otherIssues";
import Step9 from "./Farm_log/Step9_Result";
import Step10 from "./Farm_log/Step10_Success";
import "./Farmlog.css";

export default function Content(props) {
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
      {farmlogCurrentView === 9 ? (
        <Step9 Step={farmlogCurrentView} setStep={setfarmlogCurrentView} />
      ) : (
        <></>
      )}
      {farmlogCurrentView === 10 ? (
        <Step10
          Step={farmlogCurrentView}
          setStep={setfarmlogCurrentView}
          setView={props.setView}
        />
      ) : (
        <></>
      )}
    </>
  );
}
