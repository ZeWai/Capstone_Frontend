import { useState} from "react";
import axios from 'axios';




export const Clientplanner = () => {
    const [FPzone, setFPzone] = useState("hi");
    const [FPcropT, setFPcropT] = useState("");
    const [FPcropN, setFPcropN] = useState("");
    const [FPSowD, setFPSowD] = useState("");
    const [FPIrriD, setFPIrriD] = useState("");
    const [FPyield, setFPyield] = useState("");
    const [FPContri, setFPContri] = useState("");

    const clearPlannerState = () => {
        setFPzone("");
        setFPcropT("");
        setFPcropN("");
        setFPSowD("");
        setFPIrriD("");
        setFPyield("");
        setFPContri("");
    }

    const plannerSubmit = () => {
        console.log("whatip")
        let PlannerForm =
        {
            zone: FPzone,
            cropT: FPcropT,
            cropN: FPcropN,
            SowD: FPSowD,
            IrriD: FPIrriD,
            yield: FPyield,
            Contri: FPContri,
        }
        let token = localStorage.getItem("LoggedInToken");
        console.log(token)
        axios.post(`${process.env.REACT_APP_API_SERVER}/api/planner`,{
            headers: {
                Authorization: `Bearer ${token}`,
              },
            PlannerForm
        })
        .then((res) => {
            return res.data;
        })
        clearPlannerState();
    }
    return(
        <>
        <div className="FarmP">
        <div className='container FarmPcard'>
            <div className="FarmPheader">
                <div >Farmer Planner</div>
            </div>
            <table className="FarmPtable">
                <tbody>
                <tr>
                    <td>Zone</td>
                    <td>
                        <input 
                        type="text" 
                        value={FPzone}
                        onChange={(e) => setFPzone(e.currentTarget.value)}
                        className="FramPzone" />
                    </td>
                </tr>
                <tr>
                    <td>Crop Type</td>
                    <td><input 
                    type="text" 
                    value={FPcropT} 
                    onChange={(e) => setFPcropT(e.currentTarget.value)}
                    className="FramPcropT" />
                    </td>
                </tr>
                <tr>
                    <td>Crop Name</td>
                    <td>
                        <input 
                        type="text" 
                        value={FPcropN}
                        onChange={(e) => setFPcropN(e.currentTarget.value)}
                        className="FramPcropN" />
                    </td>
                </tr>
                <tr>
                    <td>Sowing Date</td>
                    <td>
                        <input 
                        type="date" 
                        value={FPSowD}
                        onChange={(e) => setFPSowD(e.currentTarget.value)}
                        className="FramPsowD" />
                    </td>
                </tr>
                <tr>
                    <td>Irrigation Date</td>
                    <td>
                        <input 
                        type="date" 
                        value={FPIrriD}
                        onChange={(e) => setFPIrriD(e.currentTarget.value)}
                        className="FramPirrD" />
                    </td>
                </tr>
                <tr>
                    <td>Harvest Date</td>
                    <td>
                        <input 
                        type="date" 
                        value={FPIrriD}
                        onChange={(e) => setFPIrriD(e.currentTarget.value)}
                        className="FramPirrD" />
                    </td>
                </tr>
                <tr>
                    <td>Yield</td>
                    <td>
                        <input 
                        type="text" 
                        value={FPyield}
                        onChange={(e) => setFPyield(e.currentTarget.value)}
                        className="FramPzone" /> kg
                    </td>
                </tr>
                <tr>
                    <td>Contribution</td>
                    <td>
                        <input 
                        type="text" 
                        value={FPContri}
                        onChange={(e) => setFPContri(e.currentTarget.value)}
                        className="FramPCont" />
                    </td>
                </tr>
                </tbody>
            </table>
            <div className="Frambtn">
            <button type="button" onClick={plannerSubmit}>Create</button>
            </div>
            
        </div>
        </div>
        </>
    )
}