import './Content.css'
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetClientNameThunk } from '../../../store/user/actions';

export default function Content() {

    const clientname = useSelector((state) => state.userStore.clientNames);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetClientNameThunk());
    }, []);
    return <div className='farmer_content'>
        <span>Farm Planner | floor plan</span>
        <select name="location" className='dropdown'>
            {clientname && clientname.length > 0 ? clientname.map((client) => <option key={client.username} value={client.username}>{client.username}</option>) : <option>No Client</option>}
        </select>
        <br />
        <div className="slidebtn">
            <button>Overview</button>
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
