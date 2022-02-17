import { useState } from "react";
import axios from 'axios';

export const ClientsForm = () => {
    //select
    const octionList = [1, 2, 3, 4, 5, 6];
    //array
    let zoneList = [];
    let sizeList = [];
    let zoneName = ["A", "B", "C", "D", "E", "F"];
    //state
    const [Name, setName] = useState("");
    const [Username, setUsername] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [PostCode, setPostCode] = useState("852");
    const [Telephone, setTelephone] = useState("");
    const [Address, setAddress] = useState("");
    const [Icon, setIcon] = useState(null);
    const [Image, setImage] = useState(null);
    const [ZoneQty, setZoneQty] = useState(0);
    const [ZoneList, setZoneList] = useState(zoneList);
    const [ZoneSizeA, setZoneSizeA] = useState(0);
    const [ZoneSizeB, setZoneSizeB] = useState(0);
    const [ZoneSizeC, setZoneSizeC] = useState(0);
    const [ZoneSizeD, setZoneSizeD] = useState(0);
    const [ZoneSizeE, setZoneSizeE] = useState(0);
    const [ZoneSizeF, setZoneSizeF] = useState(0);
    const [errMsg, setErrMsg] = useState("");
    //handler
    const valueChange = (event) => {
        if (event.target.id === "create-client-name") {
            return setName(event.target.value);
        } else if (event.target.id === "create-client-username") {
            return setUsername(event.target.value);
        } else if (event.target.id === "create-client-email") {
            return setEmail(event.target.value);
        } else if (event.target.id === "create-client-password") {
            return setPassword(event.target.value);
        } else if (event.target.id === "create-client-postcode") {
            return setPostCode(event.target.value);
        } else if (event.target.id === "create-client-telephone") {
            return setTelephone(event.target.value);
        } else if (event.target.id === "create-client-address") {
            return setAddress(event.target.value);
        } else if (event.target.id === "create-client-icon") {
            return setIcon(event.target.files[0]);
        } else if (event.target.id === "create-client-image") {
            return setImage(event.target.files[0]);
        } else if (event.target.id === "create-client-zoneQty") {
            setZoneQty(parseInt(event.target.value));
            if (event.target.value > zoneList.length) {
                for (let i = 0; i < event.target.value; i++) {
                    zoneList.push(
                        zoneName[i]
                    )
                }
                return setZoneList(zoneList);;
            } else {
                zoneList.pop((6 - event.target.value))
                return setZoneList(zoneList);
            }
        } else if (event.target.id === `create-client-zoneA-size`) {
            if (event.target.value > 0) {
                return setZoneSizeA(parseInt(event.target.value));
            } else {
                return setZoneSizeA(0);
            }
        } else if (event.target.id === `create-client-zoneB-size`) {
            if (event.target.value > 0) {
                return setZoneSizeB(parseInt(event.target.value));
            } else {
                return setZoneSizeB(0);
            }
        } else if (event.target.id === `create-client-zoneC-size`) {
            if (event.target.value > 0) {
                return setZoneSizeC(parseInt(event.target.value));
            } else {
                return setZoneSizeC(0);
            }
        } else if (event.target.id === `create-client-zoneD-size`) {
            if (event.target.value > 0) {
                return setZoneSizeD(parseInt(event.target.value));
            } else {
                return setZoneSizeD(0);
            }
        } else if (event.target.id === `create-client-zoneE-size`) {
            if (event.target.value > 0) {
                return setZoneSizeE(parseInt(event.target.value));
            } else {
                return setZoneSizeE(0);
            }
        } else if (event.target.id === `create-client-zoneF-size`) {
            if (event.target.value > 0) {
                return setZoneSizeF(parseInt(event.target.value));
            } else {
                return setZoneSizeF(0);
            }
        }
    }
    //clear client form state
    const clearClinetState = () => {
        setName("");
        setUsername("");
        setEmail("");
        setPassword("");
        setPostCode("852");
        setTelephone("");
        setAddress("");
        setIcon(null);
        setImage(null);
        setZoneQty("");
        setZoneList([]);
        setZoneSizeA(0);
        setZoneSizeB(0);
        setZoneSizeC(0);
        setZoneSizeD(0);
        setZoneSizeE(0);
        setZoneSizeF(0);
        setErrMsg("");
    }
    const clientCreate = () => {
        sizeList = [ZoneSizeA, ZoneSizeB, ZoneSizeC, ZoneSizeD, ZoneSizeE, ZoneSizeF];
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
            icon: Icon,
            image: Image,
            area: ZoneList,
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
        } else if (clientForm.password === undefined || clientForm.password.length < 8) {
            return setErrMsg("Password at least 8 characters!");
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
        } else {
            const config = { headers: { 'Content-Type': 'multipart/form-data' } };
            let formData = new FormData();
            for (let field in clientForm) {
                formData.append(field, clientForm[field]);
            }
            axios.post(`${process.env.REACT_APP_API_SERVER}/api/signup`, formData, config)
                .then((res) => {
                    if (res.data === "Signup success!") {
                        //clear client form state
                        clearClinetState();
                    }
                    return setErrMsg(res.data);
                })
        }
    }
    return (
        <>
            <div className="admin-form-upper-wrapper">
                <div className="admin-form-wrapper row">
                    <p className="admin-input-title col-4">Company Name</p>
                    <input className="admin-input-box col-8" placeholder="Please enter company name..." value={Name} onChange={valueChange} id="create-client-name"></input>
                </div>
                <div className="admin-form-wrapper row">
                    <p className="admin-input-title col-4">Username</p>
                    <input className="admin-input-box col-8" placeholder="Please enter at least 8 characters username..." value={Username} onChange={valueChange} id="create-client-username"></input>
                </div>
                <div className="admin-form-wrapper row">
                    <p className="admin-input-title col-4">Email</p>
                    <input className="admin-input-box col-8" placeholder="Please enter your email..." value={Email} onChange={valueChange} id="create-client-email"></input>
                </div>
                <div className="admin-form-wrapper row">
                    <p className="admin-input-title col-4">Password</p>
                    <input className="admin-input-box col-8" type="password" placeholder="Please enter at least 8 characters password..." value={Password} onChange={valueChange} id="create-client-password"></input>
                </div>
                <div className="admin-form-wrapper row">
                    <p className="admin-input-title col-4">Contact no.</p>
                    <input className="admin-input-box-postCode col-2" placeholder="Please enter post code..." value={PostCode} onChange={valueChange} id="create-client-postcode"></input>
                    <input className="admin-input-box-tel col-6" placeholder="Please enter your mobile number..." value={Telephone} onChange={valueChange} id="create-client-telephone"></input>
                </div>
                <div className="admin-form-wrapper row">
                    <p className="admin-input-title col-4">Address</p>
                    <input className="admin-input-box col-8" placeholder="Please enter address..." value={Address} onChange={valueChange} id="create-client-address"></input>
                </div>
                <div className="admin-input-wrapper row">
                    <p className="admin-input-title col-4">Company Logo</p>
                    <input className="admin-input-upload-title col-8" type="file" onChange={valueChange} id="create-client-icon"></input>
                    {Icon && <img className="admin-logo-image col-12" alt={Icon.name} src={URL.createObjectURL(Icon)} />}
                </div>
                <div className="admin-input-wrapper row">
                    <p className="admin-input-title col-4">Floor Plan</p>
                    <input className="admin-floorPlan-upload col-8" type="file" onChange={valueChange} id="create-client-image"></input>
                    {Image && <img className="admin-logo-image col-12" alt={Image.name} src={URL.createObjectURL(Image)} />}
                </div>
                <div className="admin-form-wrapper row">
                    <p className="admin-input-title col-4">No. of Zone</p>
                    <select className="admin-input-select col-8" onChange={valueChange} id="create-client-zoneQty" value={ZoneQty}>
                        <option hidden value="default">Please Select here</option>
                        {
                            octionList.map((qty) => {
                                return (
                                    <option key={"zone_" + qty}>{qty}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <ul>
                    {
                        ZoneList.map((zone) => {
                            return (
                                <li key={"zone_" + zone + "_wrapper"} className="admin-form-wrapper row">
                                    <p className="admin-input-title col-4">Zone {zone}</p>
                                    <label className="col-8">Size
                                        <input className="admin-input-box" placeholder="Please enter zone size..." onChange={valueChange} defaultValue="0" id={"create-client-zone" + zone + "-size"}></input>
                                        m²
                                    </label>
                                </li>
                            )
                        })
                    }
                </ul>
                <p className="admin-form-errMsg">
                    {errMsg === "Signup success!" || errMsg === "" ? "" : "Error : "}
                    {errMsg}
                </p>
                <div className="admin-form-wrapper">
                    <button className="admin-client-create-btn" onClick={clientCreate}>Create</button>
                </div>
            </div>
        </>
    )
}