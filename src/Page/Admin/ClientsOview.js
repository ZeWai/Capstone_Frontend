import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetClientListThunk } from "../../store/Client/actions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

export const ClientsOview = () => {
    //fetch client list for reduers
    const dispatch = useDispatch();
    const clients = useSelector((state) => state.clientStore.ClientList);
    const [FarmerList, setFarmerList] = useState([]);
    useEffect(() => {
        dispatch(GetClientListThunk())
    }, []);
    useEffect(() => {
        setFarmerList(clients);
    }, [clients]);
    return (
        <>
            <div className="admin-list-wrapper">
                <div className="admin-list row" style={{ backgroundColor: "#F5F5F5" }}>
                    <p className="admin-list-item-name col-6">Client Name</p>
                    <p className="admin-list-item-name col-6">no. of farmer assigned</p>
                </div>
            </div>
            {FarmerList && FarmerList[0] !== undefined ? FarmerList.map((Farmer, index) =>
                <div key={Farmer.id}>
                    <div className="admin-client-overview-wrapper">
                        <div className="admin-list row" style={index % 2 === 0 ? { backgroundColor: "#FFFFFF" } : { backgroundColor: "#f5f5f5" }}>
                            <p className="admin-list-item-user col-6">{Farmer.username}</p>
                            <p className="admin-list-item-label col-3">{Farmer.farmer.length}</p>
                            <div className="admin-list-farmer-edit-wrapper col-3">
                                <button style={index % 2 === 0 ? { backgroundColor: "#FFFFFF" } : { backgroundColor: "#f5f5f5" }} className="admin-list-farmer-edit-btn"><FontAwesomeIcon icon={faEdit} /></button>
                                <button style={index % 2 === 0 ? { backgroundColor: "#FFFFFF" } : { backgroundColor: "#f5f5f5" }} className="admin-list-farmer-del-btn"><FontAwesomeIcon icon={faTrash} /></button>
                            </div>
                        </div>
                    </div>
                </div>)
                : <>
                    No Client here
                </>
            }
        </>
    )
}