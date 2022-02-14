import { useState, useEffect} from "react";
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { useSelector, useDispatch } from "react-redux";
import { GetZoneThunk } from "../../store/getzone/actions";
import { GetCropstoreThunk ,GetCropinfoThunk} from "../../store/Progress/actions"




export const Clientplanner = () => {
    const [FPzone, setFPzone] = useState("A");
    const [FPcropT, setFPcropT] = useState("");
    const [FPcropN, setFPcropN] = useState("");
    const [FPSowD, setFPSowD] = useState("");
    const [FPIrriD, setFPIrriD] = useState("");
    const [FPHarD, setFPHarD] = useState("");
    const [FPyield, setFPyield] = useState("");
    const [FPContri, setFPContri] = useState("Event");


    const CropFromRedux = useSelector((state) => state.ProgressStore.CropStore);
    const CropinfoFromRedux = useSelector((state) => state.ProgressStore.CropInfo[0]);
    
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

    const handleZoneChange = (e) => {
        console.log(e.target.value)
        setFPzone(e.target.value);
      };
    
    const handleNameChange = (e) => {
    console.log(e.target.value)
    setFPcropN(e.target.value);
    dispatch(GetCropinfoThunk(e.target.value))
    setFPcropT(CropinfoFromRedux.type);
    setFPIrriD(CropinfoFromRedux.Irr_Period);
    };

    const handleContriChange = (e) => {
    console.log(e.target.value)
    setFPContri(e.target.value);
    };

    const GzoneFromRedux = useSelector((state) => state.zoneStore.clientZone);
    let dispatch = useDispatch();

    useEffect(()=>{
        dispatch(GetZoneThunk())
        dispatch(GetCropstoreThunk())
        
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
            image:CropinfoFromRedux.image,
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
                  
                    <select name={FPzone} onChange={handleZoneChange} className="FramPzone">
                        
                    {GzoneFromRedux.length>0?GzoneFromRedux.map((zone) => (<option key={zone.area} value={zone.area}>{zone.area}</option>)):
                       <option>Please contact admin</option>}
                    </select>
                    </td>
                </tr>
                <tr>
                    <td>Crop Name</td>
                    <td>
                    <select name={FPcropN} onChange={handleNameChange} className="FramPcropN">
                    <option>Please select the crop</option>
                    {CropFromRedux.length>0?CropFromRedux.map((l) => (<option key={l.id} value={l.name}>{l.name}</option>)):
                       <option>Please contact admin</option>}
                    </select>
                    </td>
                </tr>
                <tr>
                    <td>Crop Type</td>
                    <td>
                        <input 
                        type="text" 
                        value={FPcropT}
                        onChange={(e) => setFPcropT(e.currentTarget.value)}
                        className="FramPcropT" />
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
                        <select name={FPContri}  onChange={handleContriChange} className="FramPCont">
                            <option value="Event">Event</option>
                            <option value="Donation">Donation</option>
                        </select>
                        
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