import { useState } from "react";
import axios from 'axios';
export const FarmerForm = () => {
    //state
    const [Name, setName] = useState();
    const [Username, setUsername] = useState();
    const [Email, setEmail] = useState();
    const [Password, setPassword] = useState();
    const [PostCode, setPostCode] = useState(852);
    const [Telephone, setTelephone] = useState();
    const [Icon, setIcon] = useState(null);
    //handler
    const valueChange = (event) => {
        if (event.target.id === "create-farmer-name") {
            return setName(event.target.value);
        } else if (event.target.id === "create-farmer-username") {
            return setUsername(event.target.value);
        } else if (event.target.id === "create-farmer-email") {
            return setEmail(event.target.value);
        } else if (event.target.id === "create-farmer-password") {
            return setPassword(event.target.value);
        } else if (event.target.id === "create-farmer-postcode") {
            return setPostCode(event.target.value);
        } else if (event.target.id === "create-farmer-telephone") {
            return setTelephone(event.target.value);
        } else if (event.target.id === "create-farmer-icon") {
            return setIcon(event.target.files[0]);
        }
    }
    return (
        <>
            <div className="admin-farmer-form-upper-wrapper">
                <div className="admin-form-wrapper row">
                    <p className="admin-input-title col-4">Farmer Name</p>
                    <input className="admin-input-box col-8" placeholder="Please enter farmer name..." defaultValue={Name} onChange={valueChange} id="create-farmer-name"></input>
                </div>
                <div className="admin-form-wrapper row">
                    <p className="admin-input-title col-4">Username</p>
                    <input className="admin-input-box col-8" placeholder="Please enter at least 8 characters username..." defaultValue={Username} onChange={valueChange} id="create-farmer-username"></input>
                </div>
                <div className="admin-form-wrapper row">
                    <p className="admin-input-title col-4">Email</p>
                    <input className="admin-input-box col-8" placeholder="Please enter your email..." defaultValue={Email} onChange={valueChange} id="create-farmer-email"></input>
                </div>
                <div className="admin-form-wrapper row">
                    <p className="admin-input-title col-4">Password</p>
                    <input className="admin-input-box col-8" type="password" placeholder="Please enter at least 6 characters password..." defaultValue={Password} onChange={valueChange} id="create-farmer-password"></input>
                </div>
                <div className="admin-form-wrapper row">
                    <p className="admin-input-title col-4">Contact no.</p>
                    <input className="admin-input-box-postCode col-2" type="number" placeholder="Please enter post code..." defaultValue={PostCode} onChange={valueChange} id="create-farmer-postcode"></input>
                    <input className="admin-input-box-tel col-6" type="number" placeholder="Please enter your mobile number..." defaultValue={Telephone} onChange={valueChange} id="create-farmer-telephone"></input>
                </div>
                <div className="admin-input-wrapper row">
                    <p className="admin-input-title col-4">Farmer Icon</p>
                    <input className="admin-logo-upload col-8" type="file" onChange={valueChange} id="create-farmer-icon"></input>
                    {Icon && <img className="admin-logo-image col-12" alt={Icon.name} src={URL.createObjectURL(Icon)} />}
                </div>
                <div className="admin-form-wrapper row">
                    <p className="admin-input-title col-4">Can access to</p>
                    <div className="admin-input-checkbox col-8">
                        <div className="admin-input-checkbox-wrapper row">
                            {/*
                            clientList.map((client) => {
                                return (
                                    <label key={client.id + client.username} className="admin-input-checkbox-label col-6">{client.username}
                                        <input className="admin-input-checkbox-box" type="checkbox" onChange={handleCheckBox} name={client.username} value={client.username}></input>
                                    </label>
                                )
                            })
                        */}
                        </div>
                    </div>
                </div>
                <div className="admin-form-wrapper">
                    {/*<button className="admin-client-create-btn" onClick={clientCreate}>Create</button>*/}
                </div>
            </div>
        </>
    )
}