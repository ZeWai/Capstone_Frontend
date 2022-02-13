import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetFarmerListThunk } from "../../store/Client/actions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

export const FarmerOview = () => {
    //fetch client list for reduers
    const dispatch = useDispatch();
    const farmers = useSelector((state) => state.farmerStore.FarmerList);
    const [ClientList, setClientList] = useState([]);
    useEffect(() => {
        dispatch(GetFarmerListThunk())
    }, []);
    useEffect(() => {
        setClientList(farmers);
    }, [farmers]);
    return (
        <>
            <div className="admin-list-wrapper">
                <div className="admin-list row" style={{ backgroundColor: "#F5F5F5" }}>
                    <p className="admin-list-item-name col-6">Farmer Name</p>
                    <p className="admin-list-item-name col-6">no. of place assigned</p>
                </div>
            </div>
            {ClientList && ClientList[0] !== undefined ? ClientList.map((client, index) =>
                <div key={client.id}>
                    <div className="admin-client-overview-wrapper">
                        <div className="admin-list row" style={index % 2 === 0 ? { backgroundColor: "#FFFFFF" } : { backgroundColor: "#f5f5f5" }}>
                            <p className="admin-list-item-user col-6">{client.username}</p>
                            <p className="admin-list-item-label col-3">{client.client.length}</p>
                            <div className="admin-list-farmer-edit-wrapper col-3">
                                <button style={index % 2 === 0 ? { backgroundColor: "#FFFFFF" } : { backgroundColor: "#f5f5f5" }} className="admin-list-farmer-edit-btn"><FontAwesomeIcon icon={faEdit} /></button>
                                <button style={index % 2 === 0 ? { backgroundColor: "#FFFFFF" } : { backgroundColor: "#f5f5f5" }} className="admin-list-farmer-del-btn"><FontAwesomeIcon icon={faTrash} /></button>
                            </div>
                        </div>
                    </div>
                </div>)
                : <>
                    No Farmer here
                </>
            }
        </>
    )
}