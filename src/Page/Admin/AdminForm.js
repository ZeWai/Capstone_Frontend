import { useState } from "react";
import axios from 'axios';

export const AdminForm = () => {
    //state
    const [AdminName, setAdminName] = useState("");
    const [AdminUsername, setAdminUsername] = useState("");
    const [AdminEmail, setAdminEmail] = useState("");
    const [AdminPassword, setAdminPassword] = useState("");
    const [AdminPostCode, setAdminPostCode] = useState("852");
    const [AdminTelephone, setAdminTelephone] = useState("");
    const [errMsg, setErrMsg] = useState("");
    //handler
    const valueChange = (event) => {
        if (event.target.id === "create-admin-name") {
            return setAdminName(event.target.value);
        } else if (event.target.id === "create-admin-username") {
            return setAdminUsername(event.target.value);
        } else if (event.target.id === "create-admin-email") {
            return setAdminEmail(event.target.value);
        } else if (event.target.id === "create-admin-password") {
            return setAdminPassword(event.target.value);
        } else if (event.target.id === "create-admin-postcode") {
            return setAdminPostCode(event.target.value);
        } else if (event.target.id === "create-admin-telephone") {
            return setAdminTelephone(event.target.value);
        }
    }
    //clear Admin form state
    const clearAdminState = () => {
        setAdminName("");
        setAdminUsername("");
        setAdminEmail("");
        setAdminPassword("");
        setAdminPostCode("852");
        setAdminTelephone("");
        setErrMsg("");
    }
    const adminCreate = () => {
        let adminForm =
        {
            username: AdminUsername,
            email: AdminEmail,
            password: AdminPassword,
            postCode: AdminPostCode,
            tel: AdminTelephone,
            role: "admin",
            status: true,
            name: AdminName,
            address: "Rooftop Limited",
            icon: "uploads/admin.jpg",
            image: "uploads/admin.jpg"
        }
        //check email valid
        const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g
        //check input
        if (adminForm.name === undefined || adminForm.name.length < 1) {
            return setErrMsg("Admin name is empty!");
        } else if (adminForm.username === undefined || adminForm.username.length < 8) {
            return setErrMsg("Username at least 8 characters!");
        } else if (adminForm.email === undefined || !regEx.test(adminForm.email)) {
            return setErrMsg("Email is not valid!");
        } else if (adminForm.password === undefined || adminForm.password.length < 8) {
            return setErrMsg("Password at least 8 characters!");
        } else if (adminForm.postCode === undefined || adminForm.postCode.length < 1) {
            return setErrMsg("Post code is empty!");
        } else if (adminForm.tel === undefined || adminForm.tel.length < 8) {
            return setErrMsg("Telephone at least 8 numbers!");
        } else {
            axios.post(`${process.env.REACT_APP_API_SERVER}/api/signupAdmin`, adminForm)
                .then((res) => {
                    if (res.data === "Signup success!") {
                        //clear admin form state
                        clearAdminState();
                    }
                    return setErrMsg(res.data);
                })
        }
    }
    return (
        <>
            <div className="admin-form-upper-wrapper">
                <div className="admin-form-wrapper row">
                    <p className="admin-input-title col-4">Admin Name</p>
                    <input className="admin-input-box col-8" placeholder="Please enter name..." value={AdminName} onChange={valueChange} id="create-admin-name"></input>
                </div>
                <div className="admin-form-wrapper row">
                    <p className="admin-input-title col-4">Username</p>
                    <input className="admin-input-box col-8" placeholder="Please enter at least 8 characters username..." value={AdminUsername} onChange={valueChange} id="create-admin-username"></input>
                </div>
                <div className="admin-form-wrapper row">
                    <p className="admin-input-title col-4">Email</p>
                    <input className="admin-input-box col-8" placeholder="Please enter your email..." value={AdminEmail} onChange={valueChange} id="create-admin-email"></input>
                </div>
                <div className="admin-form-wrapper row">
                    <p className="admin-input-title col-4">Password</p>
                    <input className="admin-input-box col-8" type="password" placeholder="Please enter at least 8 characters password..." value={AdminPassword} onChange={valueChange} id="create-admin-password"></input>
                </div>
                <div className="admin-form-wrapper row">
                    <p className="admin-input-title col-4">Contact no.</p>
                    <input className="admin-input-box-postCode col-2" placeholder="Please enter post code..." value={AdminPostCode} onChange={valueChange} id="create-admin-postcode"></input>
                    <input className="admin-input-box-tel col-6" placeholder="Please enter your mobile number..." value={AdminTelephone} onChange={valueChange} id="create-admin-telephone"></input>
                </div>
                <p className="admin-form-errMsg">
                    {errMsg === "Signup success!" || errMsg === "" ? "" : "Error : "}
                    {errMsg}
                </p>
                <div className="admin-form-wrapper">
                    <button className="admin-create-btn" onClick={adminCreate}>Create</button>
                </div>
            </div>
        </>
    )
}