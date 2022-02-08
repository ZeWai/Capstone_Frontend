import "./Admin.css";
import { useState } from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Logout from './Logout';
import upload from '../../image/background/upload.png';

export default function Admin() {
    // for testing get all client API
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
    //page state
    const [createClientsForm, setCreateClientsForm] = useState(true)
    const [clientsCreateSuccess, setClientsCreateSuccess] = useState(false)
    const [createFarmerForm, setCreateFarmerForm] = useState(false)
    const [overviewClients, setOverviewClients] = useState(false)
    const [overviewFarmer, setOverviewFarmer] = useState(false)
    //client account reg form
    //handle name change
    const [Name, setName] = useState();
    const nameChange = (event) => {
        setName(event.target.value)
        return Name;
    }
    //handle username change
    const [Username, setUsername] = useState();
    const usernameChange = (event) => {
        setUsername(event.target.value)
        return Username;
    }
    //handle email change
    const [Email, setEmail] = useState();
    const emailChange = (event) => {
        setEmail(event.target.value)
        return Email;
    }
    //handle password change
    const [Password, setPassword] = useState();
    const passwordChange = (event) => {
        setPassword(event.target.value)
        return Password;
    }
    //handle postCode change
    const [PostCode, setPostCode] = useState(852);
    const postCodeChange = (event) => {
        setPostCode(event.target.value)
        return PostCode;
    }
    //handle telephone change
    const [Telephone, setTelephone] = useState();
    const telephoneChange = (event) => {
        setTelephone(event.target.value)
        return Telephone;
    }
    //handle address change
    const [Address, setAddress] = useState();
    const addressChange = (event) => {
        setAddress(event.target.value)
        return Address;
    }
    //handle logo upload
    const [Logo, setLogo] = useState(null);
    const logoUpload = (event) => {
        setLogo(event.target.files[0]);
        return Logo;
    }
    //handle floor plan upload
    const [FloorPlan, setFloorPlan] = useState(null);
    const floorPlanUpload = (event) => {
        setFloorPlan(event.target.files[0]);
        return FloorPlan;
    }
    //handle zone qty change
    let zoneList = [];
    let zoneName = ["A", "B", "C", "D", "E", "F"];
    const [ZoneQty, setQty] = useState();
    const [ZoneList, setZoneList] = useState(zoneList);
    const [ZoneSizeA, setZoneSizeA] = useState(0);
    const [ZoneSizeB, setZoneSizeB] = useState(0);
    const [ZoneSizeC, setZoneSizeC] = useState(0);
    const [ZoneSizeD, setZoneSizeD] = useState(0);
    const [ZoneSizeE, setZoneSizeE] = useState(0);
    const [ZoneSizeF, setZoneSizeF] = useState(0);
    const [errMsg, setErrMsg] = useState();
    const changeZoneQty = (event) => {
        setQty(event.target.value)
        if (event.target.value > zoneList.length) {
            for (let i = 0; i < event.target.value; i++) {
                zoneList.push(
                    zoneName[i]
                )
            }
            setZoneList(zoneList)
            return ZoneList;
        } else {
            zoneList.pop((6 - event.target.value))
            setZoneList(zoneList)
            return ZoneList;
        }
    }
    const zoneSizeChange = (event) => {
        if (event.target.id == "zone_A") {
            if (event.target.value.length > 0) {
                return setZoneSizeA(parseInt(event.target.value));
            } else {
                return setZoneSizeA(0);
            }
        } else if (event.target.id == "zone_B") {
            if (event.target.value.length > 0) {
                return setZoneSizeB(parseInt(event.target.value));
            } else {
                return setZoneSizeB(0);
            }
        } else if (event.target.id == "zone_C") {
            if (event.target.value.length > 0) {
                return setZoneSizeC(parseInt(event.target.value));
            } else {
                return setZoneSizeC(0);
            }
        } else if (event.target.id == "zone_D") {
            if (event.target.value.length > 0) {
                return setZoneSizeD(parseInt(event.target.value));
            } else {
                return setZoneSizeD(0);
            }
        } else if (event.target.id == "zone_E") {
            if (event.target.value.length > 0) {
                return setZoneSizeE(parseInt(event.target.value));
            } else {
                return setZoneSizeE(0);
            }
        } else if (event.target.id == "zone_F") {
            if (event.target.value.length > 0) {
                return setZoneSizeF(parseInt(event.target.value));
            } else {
                return setZoneSizeF(0);
            }
        }
    }
    //clear client form state
    const clearClinetState = () => {
        //clear client form state
        setName();
        setUsername();
        setEmail();
        setPassword();
        setPostCode(852);
        setTelephone();
        setAddress();
        setLogo(null);
        setFloorPlan(null);
        setQty();
        setZoneList([]);
        setZoneSizeA(0);
        setZoneSizeB(0);
        setZoneSizeC(0);
        setZoneSizeD(0);
        setZoneSizeE(0);
        setZoneSizeF(0);
        setErrMsg();
    }
    //handle client create form
    const clientCreate = () => {
        let zoneList = ZoneList;
        let sizeList = [ZoneSizeA, ZoneSizeB, ZoneSizeC, ZoneSizeD, ZoneSizeE, ZoneSizeF]
        let clientForm =
        {
            username: Username,
            email: Email,
            password: Password,
            postCode: PostCode,
            tel: Telephone,
            role: "client",
            status: true,
            name: Name,
            address: Address,
            icon: Logo,
            image: FloorPlan,
            area: zoneList,
            size: sizeList
        }
        //check email valid
        const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g
        //check input
        if (clientForm.name === undefined || clientForm.name.length < 1) {
            return setErrMsg("Company name is empty!");
        } else if (clientForm.username === undefined || clientForm.username.length < 8) {
            return setErrMsg("Username at least 8 characters!");
        } else if (clientForm.email === undefined || !regEx.test(clientForm.email)) {
            return setErrMsg("Email is not valid!");
        } else if (clientForm.password === undefined || clientForm.password.length < 6) {
            return setErrMsg("Password at least 6 characters!");
        } else if (clientForm.postCode === undefined || clientForm.postCode.length < 1) {
            return setErrMsg("Post code is empty!");
        } else if (clientForm.tel === undefined || clientForm.tel.length < 8) {
            return setErrMsg("Telephone at least 8 numbers!");
        } else if (clientForm.address === undefined || clientForm.address.length < 1) {
            return setErrMsg("Address is empty!");
        } else if (clientForm.icon === null) {
            return setErrMsg("Please upload logo!");
        } else if (clientForm.image === null) {
            return setErrMsg("Please upload floor plan!");
        } else if (clientForm.area === undefined || clientForm.area.length < 1) {
            return setErrMsg("Please select at least one zone!");
        } else if (clientForm.area.length > 0) {
            let err;
            for (let i = 0; i < clientForm.area.length; i++) {
                if (clientForm.area[i].length > 0 && clientForm.size[i] < 1) {
                    err = `Please provide zone ${clientForm.area[i]} size!`
                }
            };
            const config = { headers: { 'Content-Type': 'multipart/form-data' } };
            let formData = new FormData();
            for (let field in clientForm) {
                formData.append(field, clientForm[field]);
            }
            axios.post('http://localhost:8080/api/signup', formData, config)
                .then((res) => {
                    return setErrMsg(res.data);
                })
            //clear client form state
            clearClinetState();
            //hidden
            setCreateClientsForm(false);
            //show
            setClientsCreateSuccess(true);
        }
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

    const [adminTitle, setAdminTitle] = useState("Create Clients Account")
    let clientsForm = () => {
        return (
            <>
                <div className="admin-form-upper-wrapper">
                    <div className="admin-form-wrapper row">
                        <p className="admin-input-title col-4">Company Name</p>
                        <input className="admin-input-box col-8" placeholder="Please enter company name..." defaultValue={Name} onChange={nameChange}></input>
                    </div>
                    <div className="admin-form-wrapper row">
                        <p className="admin-input-title col-4">Username</p>
                        <input className="admin-input-box col-8" placeholder="Please enter at least 8 characters username..." defaultValue={Username} onChange={usernameChange}></input>
                    </div>
                    <div className="admin-form-wrapper row">
                        <p className="admin-input-title col-4">Email</p>
                        <input className="admin-input-box col-8" placeholder="Please enter your email..." defaultValue={Email} onChange={emailChange}></input>
                    </div>
                    <div className="admin-form-wrapper row">
                        <p className="admin-input-title col-4">Password</p>
                        <input className="admin-input-box col-8" type="password" placeholder="Please enter at least 6 characters password..." defaultValue={Password} onChange={passwordChange}></input>
                    </div>
                    <div className="admin-form-wrapper row">
                        <p className="admin-input-title col-4">Contact no.</p>
                        <input className="admin-input-box-postCode col-1" type="number" placeholder="Please enter post code..." defaultValue={PostCode} onChange={postCodeChange}></input>
                        <input className="admin-input-box-tel col-7" type="number" placeholder="Please enter your mobile number..." defaultValue={Telephone} onChange={telephoneChange}></input>
                    </div>
                    <div className="admin-form-wrapper row">
                        <p className="admin-input-title col-4">Address</p>
                        <input className="admin-input-box col-8" placeholder="Please enter address..." defaultValue={Address} onChange={addressChange}></input>
                    </div>
                    <div className="admin-input-wrapper row">
                        <p className="admin-input-title col-4">Company Logo</p>
                        <input className="admin-logo-upload col-8" type="file" onChange={logoUpload}></input>
                        {
                            (Logo !== null) ?
                                <img className="admin-logo-image col-12" alt={Logo.name} src={URL.createObjectURL(Logo)} />
                                :
                                <img className="admin-logo-image col-12" alt="upload" src={upload} />
                        }
                    </div>
                    <div className="admin-input-wrapper row">
                        <p className="admin-input-title col-4">Floor Plan</p>
                        <input className="admin-floorPlan-upload col-8" type="file" onChange={floorPlanUpload}></input>
                        {
                            (FloorPlan !== null) ?
                                <img className="admin-logo-image col-12" alt={FloorPlan.name} src={URL.createObjectURL(FloorPlan)} />
                                :
                                <img className="admin-logo-image col-12" alt="upload" src={upload} />
                        }
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
                    <ul >
                        {
                            ZoneList.map((zone) => {
                                return (
                                    <li key={"zone_" + zone + "_wrapper"} className="admin-form-wrapper row">
                                        <p className="admin-input-title col-4">Zone {zone}</p>
                                        <label className="col-8">Size
                                            <input className="admin-input-box" placeholder="Please enter zone size..." onChange={zoneSizeChange} id={"zone_" + zone}></input>
                                            m²
                                        </label>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    {
                        (errMsg === undefined) ?
                            < p className="admin-form-errMsg">{errMsg}</p>
                            :
                            < p className="admin-form-errMsg">Error : {errMsg}</p>
                    }
                    <div className="admin-form-wrapper">
                        <button className="admin-client-create-btn" onClick={clientCreate}>Create</button>
                    </div>
                </div>
            </>
        )
    }
    let clientsSuccess = () => {
        return (
            <>
                <div className="admin-client-form-success-wrapper">
                    <h1 className="col-12 admin-client-form-success-text">Create Success!</h1>
                    <button className="col-12 admin-client-create-btn" onClick={() => {
                        //set title
                        setAdminTitle("Create Clients Account");
                        //show
                        setCreateClientsForm(true);
                        //hidden
                        setClientsCreateSuccess(false);
                        setCreateFarmerForm(false);
                        setOverviewClients(false);
                        setOverviewFarmer(false);
                    }}>Back</button>
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
                        <Link to="/home" className='admin-nav-logout-btn' onClick={Logout}>
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
                                setClientsCreateSuccess(false);
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
                                setClientsCreateSuccess(false);
                                setOverviewClients(false);
                                setOverviewFarmer(false);
                                //clear client form state
                                clearClinetState();
                            }}>Farmer</button>
                            <h1 className="col-12 admin-sub-title">Accounts Overview</h1>
                            <button className="col-12 admin-sub-btn" onClick={() => {
                                //set title
                                setAdminTitle("Clients Overview");
                                //show
                                setOverviewClients(true);
                                //hidden
                                setCreateClientsForm(false);
                                setClientsCreateSuccess(false);
                                setCreateFarmerForm(false);
                                setOverviewFarmer(false);
                                //clear client form state
                                clearClinetState();
                            }}>Client</button>
                            <button className="col-12 admin-sub-btn" onClick={() => {
                                //set title
                                setAdminTitle("Farmer Overview");
                                //show
                                setOverviewFarmer(true);
                                //hidden
                                setCreateClientsForm(false);
                                setClientsCreateSuccess(false);
                                setCreateFarmerForm(false);
                                setOverviewClients(false);
                                //clear client form state
                                clearClinetState();
                            }}>Farmer</button>
                        </div>
                    </div>
                    <div className="col-9 admin-form">
                        <div className="row admin-form-container">
                            <h1 className="col-12 admin-title">{adminTitle}</h1>
                            <div className="col-12 admin-form-body" >
                                {createClientsForm && clientsForm()}
                                {clientsCreateSuccess && clientsSuccess()}
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