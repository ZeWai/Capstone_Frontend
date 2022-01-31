import "./Admin.css";
import { useState } from "react";
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
// import logoutBtn from '../../image/btn/logout.png';
import { logoutThunk } from '../../store/auth/action';
import { fireEvent } from "@testing-library/react";


export default function Admin() {
    const dispatch = useDispatch()
    // for testing get all client API.
    let clientList = [
        { id: 1, username: "test1", admin: "client", status: true, assigned: ["test4", "test5"], },
        { id: 2, username: "test2", admin: "client", status: true, assigned: ["test6"] },
        { id: 3, username: "test3", admin: "client", status: true, assigned: ["test4", "test5", "test6"] },
    ]
    // for testing get all farmer API.
    let farmerList = [
        { id: 4, username: "test4", admin: "farmer", status: true, assigned: ["test1"] },
        { id: 5, username: "test5", admin: "farmer", status: true, assigned: ["test1", "test2"] },
        { id: 6, username: "test6", admin: "farmer", status: true, assigned: ["test1", "test2", "test3"] },
        { id: 7, username: "test6", admin: "farmer", status: true, assigned: ["test1"] },
        { id: 8, username: "test6", admin: "farmer", status: true, assigned: ["test1"] },
    ]
    //handle logout
    const logout = () => {
        dispatch(logoutThunk());
    }
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
    //handle zone qty change
    let zoneList = [];
    let zoneName = ["A", "B", "C", "D", "E", "F"]
    const [ZoneQty, SetQty] = useState();
    const [ZoneList, SetZoneList] = useState(zoneList);
    const changeZoneQty = (event) => {
        SetQty(event.target.value)
        for (let i = 0; i < event.target.value; i++) {
            zoneList.push({ zone: (zoneName[i]) })
        }
        return SetZoneList(zoneList);
    }

    const [adminTitle, setAdminTitle] = useState("Create Clients Account")
    let clientsForm = () => {
        return (
            <>
                <div className="admin-form-upper-wrapper">
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
                        <input className="admin-logo-upload col-8" type="file"></input>
                    </div>
                    <div className="admin-input-wrapper row">
                        <p className="admin-input-title col-4">Floor Plan</p>
                        <input className="admin-floorPlan-upload col-8" type="file"></input>
                    </div>
                </div>
                <div className="admin-form-lower-wrapper">
                    <div className="admin-form-wrapper row">
                        <p className="admin-input-title col-4">No. of Zone</p>
                        <select className="admin-input-select col-8" defaultValue={ZoneQty} onChange={changeZoneQty} >
                            <option>0</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                        </select>
                    </div>
                    {
                        ZoneList.map((zone) => {
                            return (
                                <>
                                    <div className="admin-form-wrapper row">
                                        <p className="admin-input-title col-4">Zone {zone.zone}</p>
                                        <label className="col-8">Size<input className="admin-input-box" placeholder="Please enter zone size..."></input>m²</label>
                                    </div>
                                </>
                            )
                        })
                    }
                    <div className="admin-form-wrapper">
                        <button className="admin-client-create-btn">Create</button>
                    </div>
                </div>

            </>
        )
    }
    let farmerForm = () => {
        return (
            <>
                <div className="admin-form-wrapper row">
                    <p className="admin-input-title col-4">Farmer Name</p>
                    <input className="admin-input-box col-8" placeholder="Please enter farmer name..."></input>
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
                    <p className="admin-input-title col-4" type="password">Password</p>
                    <input className="admin-input-box col-8" placeholder="Please enter at least 6 characters password..."></input>
                </div>
                <div className="admin-form-wrapper row">
                    <p className="admin-input-title col-4">Contact no.</p>
                    <input className="admin-input-box-postCode col-1" placeholder="Please enter post code..." defaultValue="852"></input>
                    <input className="admin-input-box-tel col-7" placeholder="Please enter farmer mobile number..."></input>
                </div>
                <div className="admin-input-wrapper row">
                    <p className="admin-input-title col-4">User Icon</p>
                    <input className="admin-logo-upload col-8" type="file"></input>
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
                                <div className="admin-client-overview-wrapper">
                                    {(index % 2 === 0
                                        ?
                                        <div className="admin-list row" style={{ backgroundColor: "#FFFFFF" }}>
                                            <p className="admin-list-item-user col-6">{client.username}</p>
                                            <lable className="admin-list-item-label col-3">{client.assigned.length}</lable>
                                            <div className="admin-list-farmer-edit-wrapper col-3">
                                                <button style={{ backgroundColor: "#FFFFFF" }} className="admin-list-farmer-edit-btn"><FontAwesomeIcon icon={faEdit} /></button>
                                                <button style={{ backgroundColor: "#FFFFFF" }} className="admin-list-farmer-del-btn"><FontAwesomeIcon icon={faTrash} /></button>
                                            </div>
                                        </div>
                                        :
                                        <div className="admin-list row" style={{ backgroundColor: "#F5F5F5" }}>
                                            <p className="admin-list-item-user col-6">{client.username}</p>
                                            <lable className="admin-list-item-label col-3">{client.assigned.length}</lable>
                                            <div className="admin-list-farmer-edit-wrapper col-3">
                                                <button style={{ backgroundColor: "#F5F5F5" }} className="admin-list-farmer-edit-btn"><FontAwesomeIcon icon={faEdit} /></button>
                                                <button style={{ backgroundColor: "#F5F5F5" }} className="admin-list-farmer-del-btn"><FontAwesomeIcon icon={faTrash} /></button>
                                            </div>
                                        </div>)}
                                </div>

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
                                        <lable className="admin-list-item-label col-3">{farmer.assigned.length}</lable>
                                        <div className="admin-list-farmer-edit-wrapper col-3">
                                            <button style={{ backgroundColor: "#FFFFFF" }} className="admin-list-farmer-edit-btn"><FontAwesomeIcon icon={faEdit} /></button>
                                            <button style={{ backgroundColor: "#FFFFFF" }} className="admin-list-farmer-del-btn"><FontAwesomeIcon icon={faTrash} /></button>
                                        </div>
                                    </div>
                                    :
                                    <div className="admin-list row" style={{ backgroundColor: "#F5F5F5" }}>
                                        <p className="admin-list-item-user col-6">{farmer.username}</p>
                                        <lable className="admin-list-item-label col-3">{farmer.assigned.length}</lable>
                                        <div className="admin-list-farmer-edit-wrapper col-3">
                                            <button style={{ backgroundColor: "#F5F5F5" }} className="admin-list-farmer-edit-btn"><FontAwesomeIcon icon={faEdit} /></button>
                                            <button style={{ backgroundColor: "#F5F5F5" }} className="admin-list-farmer-del-btn"><FontAwesomeIcon icon={faTrash} /></button>
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
            <div className="admin-nav container-fluid">
                <div className="admin-wrapper row">
                    <div className="admin-nav-logo-wrapper col-4">
                        <img className="admin-nav-logo" alt='logo' src='https://cdn.shopify.com/s/files/1/0273/3250/9795/files/Rooftop_Republic_White_Logo_2048x2048.png?v=1584432103'></img>
                    </div>
                    <div className="admin-nav-title-wrapper col-4">
                        <p className="admin-nav-title">Admin Control Panel</p>
                    </div>
                    <div className="admin-nav-logout-btn-wrapper col-4">
                        <Link to="/home" className='admin-nav-logout-btn' onClick={logout}>
                            {/* <img alt='logout' src={logoutBtn}></img> */}
                            <FontAwesomeIcon className='nav-logout-btn' icon={faSignOutAlt} size="2x" />
                        </Link>
                    </div>
                </div>
            </div >
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