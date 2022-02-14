import { useState, useEffect} from "react";
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { useSelector, useDispatch } from "react-redux";
import { GetZoneThunk } from "../../store/getzone/actions"




export const Clientplanner = () => {
    const [FPzone, setFPzone] = useState("hi");
    const [FPcropT, setFPcropT] = useState("");
    const [FPcropN, setFPcropN] = useState("");
    const [FPSowD, setFPSowD] = useState("");
    const [FPIrriD, setFPIrriD] = useState("");
    const [FPHarD, setFPHarD] = useState("");
    const [FPyield, setFPyield] = useState("");
    const [FPContri, setFPContri] = useState("");

    const clearPlannerState = () => {
        setFPzone("");
        setFPcropT("");
        setFPcropN("");
        setFPSowD("");
        setFPIrriD("");
        setFPHarD("");
        setFPyield("");
        setFPContri("");
    }

    const handleChange = (e) => {
        console.log(e.target.value)
        setFPzone(e.target.value);
        
      };

    const GzoneFromRedux = useSelector((state) => state.zoneStore.clientZone);
    let dispatch = useDispatch();

    useEffect(()=>{
        console.log("on dispatch")
        dispatch(GetZoneThunk())
    }, [dispatch])

    const plannerSubmit = () => {
        console.log("whatip")
        let PlannerForm =
        {
            zone: FPzone,
            cropT: FPcropT,
            cropN: FPcropN,
            SowD: FPSowD,
            IrriD: FPIrriD,
            HarD:FPHarD,
            yield: FPyield,
            Contri: FPContri,
        }
        let id = jwt_decode(localStorage.getItem("LoggedInToken")).id
 
        axios.post(`${process.env.REACT_APP_API_SERVER}/api/planner/${id}`,{
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
                  
                    <select name={FPzone} onChange={handleChange} className="FramPzone">
                    {GzoneFromRedux.length>0?GzoneFromRedux.map((zone) => (<option key={zone} value={zone.area}>{zone.area}</option>)):
                       <option>Please contact admin</option>}
                    </select>
                        {/* <input 
                        type="text" 
                        value={FPzone}
                        onChange={(e) => setFPzone(e.currentTarget.value)}
                        className="FramPzone" /> */}
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
                    <td>Irrigation Period</td>
                    <td>
                        <input 
                        type="number" 
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
                        value={FPHarD}
                        onChange={(e) => setFPHarD(e.currentTarget.value)}
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