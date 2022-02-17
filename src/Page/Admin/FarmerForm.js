import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetClientListThunk } from "../../store/Client/actions";
import axios from 'axios';

export const FarmerForm = () => {
    //fetch client list for reduers
    const dispatch = useDispatch();
    const clients = useSelector((state) => state.clientStore.ClientList);
    const [clientList, setClientList] = useState([]);

    useEffect(() => {
        dispatch(GetClientListThunk())
    }, [dispatch]);
    useEffect(() => {
        setClientList(clients);
    }, [clients]);
    //state
    const [FarmerName, setFarmerName] = useState("");
    const [FarmerUsername, setFarmerUsername] = useState("");
    const [FarmerEmail, setFarmerEmail] = useState("");
    const [FarmerPassword, setFarmerPassword] = useState("");
    const [FarmerPostCode, setFarmerPostCode] = useState("852");
    const [FarmerTelephone, setFarmerTelephone] = useState("");
    const [FarmerIcon, setFarmerIcon] = useState(null);
    const [errMsg, setErrMsg] = useState("");
    //handler
    const valueChange = (event) => {
        if (event.target.id === "create-farmer-name") {
            return setFarmerName(event.target.value);
        } else if (event.target.id === "create-farmer-username") {
            return setFarmerUsername(event.target.value);
        } else if (event.target.id === "create-farmer-email") {
            return setFarmerEmail(event.target.value);
        } else if (event.target.id === "create-farmer-password") {
            return setFarmerPassword(event.target.value);
        } else if (event.target.id === "create-farmer-postcode") {
            return setFarmerPostCode(event.target.value);
        } else if (event.target.id === "create-farmer-telephone") {
            return setFarmerTelephone(event.target.value);
        } else if (event.target.id === "create-farmer-icon") {
            return setFarmerIcon(event.target.files[0]);
        }
    }
    //clear farmer form state
    const clearFarmerState = () => {
        setFarmerName("");
        setFarmerUsername("");
        setFarmerEmail("");
        setFarmerPassword("");
        setFarmerPostCode("852");
        setFarmerTelephone("");
        setFarmerIcon(null);
        setClientList(clientList.map(c => ({
            ...c,
            checked: false,
        })));
        setErrMsg("");
    }
    //create farmer
    const farmerCreate = (event) => {
        let access = clientList.filter(c => c.checked).map(c => c.username);
        let farmerForm =
        {
            username: FarmerUsername,
            email: FarmerEmail,
            password: FarmerPassword,
            postCode: FarmerPostCode,
            tel: FarmerTelephone,
            role: "farmer",
            status: true,
            name: FarmerName,
            address: "Rooftop Limited",
            icon: FarmerIcon,
            image: "uploads/farmer.jpg",
            access: access
        }
        //check email valid
        const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g
        //check input
        if (farmerForm.name === undefined || farmerForm.name.length < 1) {
            return setErrMsg("Farmer name is empty!");
        } else if (farmerForm.username === undefined || farmerForm.username.length < 8) {
            return setErrMsg("Farmer username at least 8 characters!");
        } else if (farmerForm.email === undefined || !regEx.test(farmerForm.email)) {
            return setErrMsg("Email is not valid!");
        } else if (farmerForm.password === undefined || farmerForm.password.length < 8) {
            return setErrMsg("Password at least 8 characters!");
        } else if (farmerForm.postCode === undefined || farmerForm.postCode.length < 1) {
            return setErrMsg("Post code is empty!");
        } else if (farmerForm.tel === undefined || farmerForm.tel.length < 8) {
            return setErrMsg("Telephone at least 8 numbers!");
        } else if (farmerForm.icon === null) {
            return setErrMsg("Please upload farmer icon!");
        } else {
            const config = { headers: { 'Content-Type': 'multipart/form-data' } };
            let formData = new FormData();
            for (let field in farmerForm) {
                formData.append(field, farmerForm[field]);
            }
            axios.post(`${process.env.REACT_APP_API_SERVER}/api/signupFarmer`, formData, config)
                .then((res) => {
                    if (res.data === "Signup success!") {
                        //clear Farmer form state
                        clearFarmerState();
                    }
                    return setErrMsg(res.data);
                })
        }
    }
    return (
        <>
            <div className="admin-farmer-form-upper-wrapper">
                <div className="admin-form-wrapper row">
                    <p className="admin-input-title col-4">Farmer Name</p>
                    <input className="admin-input-box col-8" placeholder="Please enter farmer name..." value={FarmerName} onChange={valueChange} id="create-farmer-name"></input>
                </div>
                <div className="admin-form-wrapper row">
                    <p className="admin-input-title col-4">Username</p>
                    <input className="admin-input-box col-8" placeholder="Please enter at least 8 characters username..." value={FarmerUsername} onChange={valueChange} id="create-farmer-username"></input>
                </div>
                <div className="admin-form-wrapper row">
                    <p className="admin-input-title col-4">Email</p>
                    <input className="admin-input-box col-8" placeholder="Please enter farmer email..." value={FarmerEmail} onChange={valueChange} id="create-farmer-email"></input>
                </div>
                <div className="admin-form-wrapper row">
                    <p className="admin-input-title col-4">Password</p>
                    <input className="admin-input-box col-8" type="password" placeholder="Please enter at least 8 characters password..." value={FarmerPassword} onChange={valueChange} id="create-farmer-password"></input>
                </div>
                <div className="admin-form-wrapper row">
                    <p className="admin-input-title col-4">Contact no.</p>
                    <input className="admin-input-box-postCode col-2" placeholder="Please enter post code..." value={FarmerPostCode} onChange={valueChange} id="create-farmer-postcode"></input>
                    <input className="admin-input-box-tel col-6" placeholder="Please enter farmer mobile number..." value={FarmerTelephone} onChange={valueChange} id="create-farmer-telephone"></input>
                </div>
                <div className="admin-input-wrapper row">
                    <p className="admin-input-title col-4">Farmer Icon</p>
                    <input className="admin-logo-upload col-8" type="file" onChange={valueChange} id="create-farmer-icon"></input>
                    {FarmerIcon && <img className="admin-logo-image col-12" alt={FarmerIcon.name} src={URL.createObjectURL(FarmerIcon)} />}
                </div>
                <div className="admin-form-wrapper row">
                    <p className="admin-input-title col-4">Can access to</p>
                    <div className="admin-input-checkbox col-8">
                        <div className="admin-input-checkbox-wrapper row">
                            {
                                clientList && Array.isArray(clientList)
                                    ?
                                    clientList.map((client) => {
                                        return (
                                            <div key={"client_" + client.username} className="admin-input-checkbox-li col-6">
                                                <div className="admin-input-checkbox-linner row">
                                                    <p className="admin-input-checkbox-label col-lg-6 col-8">{client.username}</p>
                                                    <input className="admin-input-checkbox-box col-lg-6 col-4" type="checkbox" onChange={(e) => {
                                                        // clone the clientlist to a new array
                                                        let list = [...clientList];
                                                        // find out the index of the client by filtering username
                                                        let exists = list.reduce((res, c, i) => {
                                                            if (c.username === e.target.value) {
                                                                res = i;
                                                            }
                                                            return res;
                                                        }, -1);
                                                        // if the username can be found from the clientlist
                                                        if (exists >= 0) {
                                                            // change the checked status of that row/record
                                                            list[exists].checked = e.target.checked;
                                                        }
                                                        // update the latest/updated list by replacing list to clientlist
                                                        setClientList(list);
                                                    }} value={client.username} checked={client.checked} id={"create-farmer-checkbox-" + client.username}></input>
                                                </div>
                                            </div>
                                        )
                                    })
                                    :
                                    <>
                                        <p className="admin-form-errMsg">No client here!</p>
                                    </>
                            }
                        </div>
                    </div>
                </div>
                <p className="admin-form-errMsg">
                    {errMsg === "Signup success!" || errMsg === "" ? "" : "Error : "}
                    {errMsg}
                </p>
                <div className="admin-form-wrapper">
                    <button className="admin-farmer-create-btn" onClick={farmerCreate}>Create</button>
                </div>
            </div>
        </>
    )
}