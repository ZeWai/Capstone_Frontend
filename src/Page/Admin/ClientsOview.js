import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetClientListThunk } from "../../store/Client/actions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

export const ClientsOview = () => {
    //fetch client list for reduers
    const dispatch = useDispatch();
    const clients = useSelector((state) => state.clientStore.ClientList);
    useEffect(() => {
        dispatch(GetClientListThunk())
    }, []);
    console.log(clients)
    console.log(clients[0].username)
    return (
        <>
            <div className="admin-list-wrapper">
                <div className="admin-list row" style={{ backgroundColor: "#F5F5F5" }}>
                    <p className="admin-list-item-name col-6">Client Name</p>
                    <p className="admin-list-item-name col-6">no. of farmer assigned</p>
                </div>
            </div>
            {clients[0] !== "" ?
                <>
                    {clients.map((client, index) => {
                        <>
                            <div className="admin-client-overview-wrapper">
                                {
                                    <div className="admin-list row" style={{ backgroundColor: "#FFFFFF" }}>
                                        <p className="admin-list-item-user col-6">{client.username}</p>
                                        <lable className="admin-list-item-label col-3">123</lable>
                                        <div className="admin-list-farmer-edit-wrapper col-3">
                                            <button style={{ backgroundColor: "#FFFFFF" }} className="admin-list-farmer-edit-btn"><FontAwesomeIcon icon={faEdit} /></button>
                                            <button style={{ backgroundColor: "#FFFFFF" }} className="admin-list-farmer-del-btn"><FontAwesomeIcon icon={faTrash} /></button>
                                        </div>
                                    </div>

                                }
                            </div>
                        </>
                    }
                    )}
                </>
                : <>

                </>
            }
        </>
    )
}