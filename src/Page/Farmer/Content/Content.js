import './Content.css'
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetClientNameThunk } from '../../../store/user/actions';

export default function Content() {
    const [location, setLocation] = useState("")
    const clientname = useSelector((state) => state.userStore.clientNames);
    const clientzone = useSelector((state) => state.userStore.clientZone);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetClientNameThunk());
    }, []);

    const getlocation = ((e) => {
        console.log(e.currentTarget.value)
        setLocation(e.currentTarget.value)
    })
    return <div className='farmer_content'>
        <span>Farm Planner | floor plan</span>
        <select value={location} className='dropdown' onChange={(e) => (getlocation(e))} >
            {clientname && clientname.length > 0 ? clientname.map((client) => <option key={client.username} value={client.username}>{client.username}</option>) : <option>No Client</option>}
        </select>
        <br />
        <div className="slidebtn">
            <button>Overview</button>
            {clientzone && clientzone.length > 0 ? clientzone.map((zone) => <span>{zone.zone}</span>) : <span>No zone</span>}
            {/* <p>{setTest}</p> */}
            {/* {zones && zones.length > 0
                ? zones.map((zones, index) => (
                    <>
                        <button>{zones.name}</button>
                    </>
                )) : <></>
            } */}
        </div>

    </div>;
}
