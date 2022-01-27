import "./Admin.css";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

export default function Admin() {
    // for testing get all client API.
    let clientList = [
        { id: 1, username: "test1", admin: "client", farmerAssigned: ["test4", "test5"] },
        { id: 2, username: "test2", admin: "client", farmerAssigned: ["test6"] },
        { id: 3, username: "test3", admin: "client", farmerAssigned: ["test4", "test5", "test6"] },
    ]
    // for testing get all farmer API.
    let farmerList = [
        { id: 4, username: "test4", admin: "farmer", placeAssigned: ["test1"] },
        { id: 5, username: "test5", admin: "farmer", placeAssigned: ["test1", "test2"] },
        { id: 6, username: "test6", admin: "farmer", placeAssigned: ["test1", "test2", "test3"] },
        { id: 7, username: "test6", admin: "farmer", placeAssigned: ["test1"] },
        { id: 8, username: "test6", admin: "farmer", placeAssigned: ["test1"] },
    ]
    //handle checkbox
    let access = [];
    const handleCheckBox = (event) => {
        let exist = access.includes(event.target.value);
        if (!exist) {
            access.push(event.target.value);
            access.sort();
        } else {
            let idx = access.indexOf(event.target.value);
            while (idx >= 0) {
                access.splice(idx, 1);
                idx = access.indexOf(event.target.value);
            }
        }
    }
    const [adminTitle, setAdminTitle] = useState("Create Clients Account")
    let clientsForm = () => {
        return (
            <>
                <div className="admin-form-wrapper row">
                    <p className="admin-input-title col-4">Company Name</p>
                    <input className="admin-input-box col-8" placeholder="Please enter company name..."></input>
                </div>
                <div className="admin-form-wrapper row">
                    <p className="admin-input-title col-4">Username</p>
                    <input className="admin-input-box col-8" placeholder="Please enter at least 8 characters username..."></input>
                </div>
                <div className="admin-form-wrapper row">
                    <p className="admin-input-title col-4">Email</p>
                    <input className="admin-input-box col-8" placeholder="Please enter your email..."></input>
                </div>
                <div className="admin-form-wrapper row">
                    <p className="admin-input-title col-4">Password</p>
                    <input className="admin-input-box col-8" type="password" placeholder="Please enter at least 6 characters password..."></input>
                </div>
                <div className="admin-form-wrapper row">
                    <p className="admin-input-title col-4">Contact no.</p>
                    <input className="admin-input-box-postCode col-1" placeholder="Please enter post code..." defaultValue="852"></input>
                    <input className="admin-input-box-tel col-7" placeholder="Please enter your mobile number..."></input>
                </div>
                <div className="admin-form-wrapper row">
                    <p className="admin-input-title col-4">Address</p>
                    <input className="admin-input-box col-8" placeholder="Please enter address..."></input>
                </div>
                <div className="admin-input-wrapper row">
                    <p className="admin-input-title col-4">Company Logo</p>
                    <p className="admin-logo-name col-4">Please upload a logo here</p>
                    <button className="admin-logo-select-btn col-4">Choose File</button>
                </div>
                <div className="admin-input-wrapper row">
                    <p className="admin-input-title col-4">Floor Plan</p>
                    <p className="admin-logo-name col-4">Please upload a floor plan here</p>
                    <button className="admin-logo-select-btn col-4">Choose File</button>
                </div>
                <div className="admin-form-wrapper">
                    <button className="admin-client-create-btn">Create</button>
                </div>
            </>
        )
    }
    let farmerForm = () => {
        return (
            <>
                <div className="admin-form-wrapper row">
                    <p className="admin-input-title col-4">Username</p>
                    <input className="admin-input-box col-8" placeholder="Please enter at least 8 characters username..."></input>
                </div>
                <div className="admin-form-wrapper row">
                    <p className="admin-input-title col-4">Email</p>
                    <input className="admin-input-box col-8" placeholder="Please enter your email..."></input>
                </div>
                <div className="admin-form-wrapper row">
                    <p className="admin-input-title col-4" type="password">Password</p>
                    <input className="admin-input-box col-8" placeholder="Please enter at least 6 characters password..."></input>
                </div>
                <div className="admin-form-wrapper row">
                    <p className="admin-input-title col-4">Contact no.</p>
                    <input className="admin-input-box-postCode col-1" placeholder="Please enter post code..." defaultValue="852"></input>
                    <input className="admin-input-box-tel col-7" placeholder="Please enter your mobile number..."></input>
                </div>
                <div className="admin-form-wrapper row">
                    <p className="admin-input-title col-4">Can access to</p>
                    <div className="admin-input-checkbox col-8">
                        <div className="admin-input-checkbox-wrapper row">
                            {
                                clientList.map((client) => {
                                    return (
                                        <label key={client.id + client.username} className="admin-input-checkbox-label col-6">{client.username}
                                            <input className="admin-input-checkbox-box" type="checkbox" onChange={handleCheckBox} name={client.username} value={client.username}></input>
                                        </label>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="admin-form-wrapper">
                    <button className="admin-farmer-create-btn">Create</button>
                </div>
            </>
        )
    }
    let clientsOview = () => {
        return (
            <>
                <div className="admin-list-wrapper row">
                    <p className="admin-list-item-name col-6">Client Name</p>
                    <p className="admin-list-item-name col-6">no. of farmer assigned</p>
                </div>
                {
                    clientList.map((client, index) => {
                        return (
                            <>
                                {(index % 2 === 0
                                    ?
                                    <div className="admin-list row" style={{ backgroundColor: "#FFFFFF" }}>
                                        <p className="admin-list-item-user col-6">{client.username}</p>
                                        <lable className="admin-list-item-label col-3">{client.farmerAssigned.length}</lable>
                                        <div className="admin-list-farmer-edit-wrapper col-3">
                                            <button style={{ backgroundColor: "#FFFFFF" }} className="admin-list-farmer-edit-btn"><FontAwesomeIcon icon={faEdit} /></button>
                                        </div>
                                    </div>
                                    :
                                    <div className="admin-list row" style={{ backgroundColor: "#F5F5F5" }}>
                                        <p className="admin-list-item-user col-6">{client.username}</p>
                                        <lable className="admin-list-item-label col-3">{client.farmerAssigned.length}</lable>
                                        <div className="admin-list-farmer-edit-wrapper col-3">
                                            <button style={{ backgroundColor: "#F5F5F5" }} className="admin-list-farmer-edit-btn"><FontAwesomeIcon icon={faEdit} /></button>
                                        </div>
                                    </div>)}
                            </>
                        )
                    })
                }

            </>
        )
    }
    let farmerOview = () => {
        return (
            <>
                <div className="admin-list-wrapper row">
                    <p className="admin-list-item-name col-6">Farmer Name</p>
                    <p className="admin-list-item-name col-6">no. of place assigned</p>
                </div>
                {
                    farmerList.map((farmer, index) => {
                        return (
                            <>
                                {(index % 2 === 0
                                    ?
                                    <div className="admin-list row" style={{ backgroundColor: "#FFFFFF" }}>
                                        <p className="admin-list-item-user col-6">{farmer.username}</p>
                                        <lable className="admin-list-item-label col-3">{farmer.placeAssigned.length}</lable>
                                        <div className="admin-list-farmer-edit-wrapper col-3">
                                            <button style={{ backgroundColor: "#FFFFFF" }} className="admin-list-farmer-edit-btn"><FontAwesomeIcon icon={faEdit} /></button>
                                        </div>
                                    </div>
                                    :
                                    <div className="admin-list row" style={{ backgroundColor: "#F5F5F5" }}>
                                        <p className="admin-list-item-user col-6">{farmer.username}</p>
                                        <lable className="admin-list-item-label col-3">{farmer.placeAssigned.length}</lable>
                                        <div className="admin-list-farmer-edit-wrapper col-3">
                                            <button style={{ backgroundColor: "#F5F5F5" }} className="admin-list-farmer-edit-btn"><FontAwesomeIcon icon={faEdit} /></button>
                                        </div>
                                    </div>)}
                            </>
                        )
                    })
                }

            </>
        )
    }
    const [createClientsForm, setCreateClientsForm] = useState(true)
    const [createFarmerForm, setCreateFarmerForm] = useState(false)
    const [overviewClients, setOverviewClients] = useState(false)
    const [overviewFarmer, setOverviewFarmer] = useState(false)
    return (
        <>
            <div className="admin-body container-fluid">
                <div className="row">
                    <div className="col-3 admin-control">
                        <div className="row admin-btn-wrapper">
                            <h1 className="col-12 admin-sub-title">Create Accounts</h1>
                            <button className="col-12 admin-sub-btn" onClick={() => {
                                //set title
                                setAdminTitle("Create Clients Account");
                                //show
                                setCreateClientsForm(true);
                                //hidden
                                setCreateFarmerForm(false);
                                setOverviewClients(false);
                                setOverviewFarmer(false);
                            }}>Client</button>
                            <button className="col-12 admin-sub-btn" onClick={() => {
                                //set title
                                setAdminTitle("Create Farmer Account");
                                //show
                                setCreateFarmerForm(true);
                                //hidden
                                setCreateClientsForm(false);
                                setOverviewClients(false);
                                setOverviewFarmer(false);
                            }}>Farmer</button>
                            <h1 className="col-12 admin-sub-title">Accounts Overview</h1>
                            <button className="col-12 admin-sub-btn" onClick={() => {
                                //set title
                                setAdminTitle("Clients Overview");
                                //show
                                setOverviewClients(true);
                                //hidden
                                setCreateClientsForm(false);
                                setCreateFarmerForm(false);
                                setOverviewFarmer(false);
                            }}>Client</button>
                            <button className="col-12 admin-sub-btn" onClick={() => {
                                //set title
                                setAdminTitle("Farmer Overview");
                                //show
                                setOverviewFarmer(true);
                                //hidden
                                setCreateClientsForm(false);
                                setCreateFarmerForm(false);
                                setOverviewClients(false);
                            }}>Farmer</button>
                        </div>
                    </div>
                    <div className="col-9 admin-form">
                        <div className="row admin-form-container">
                            <h1 className="col-12 admin-title">{adminTitle}</h1>
                            <div className="col-12 admin-form-body" >
                                {createClientsForm && clientsForm()}
                                {createFarmerForm && farmerForm()}
                                {overviewClients && clientsOview()}
                                {overviewFarmer && farmerOview()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}