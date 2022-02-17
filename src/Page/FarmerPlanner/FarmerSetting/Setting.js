import React, { useState } from "react";
import "./Setting.css";
import { useSelector } from "react-redux";
import axios from "axios";
import jwt_decode from "jwt-decode";

export default function Setting() {
  const username = useSelector((state) => state.userStore.name);
  const [show, setShow] = useState(false);
  const [oldpassword, setOldpassword] = useState("");
  const [newpassword, setNewpassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [errmessage, setErrmessage] = useState("");
  let id = jwt_decode(localStorage.getItem("LoggedInToken")).id;

  //password input checking
  const passwordcheck = () => {
    if (
      newpassword === confirmpassword &&
      newpassword !== "" &&
      oldpassword !== ""
    )
      axios
        .post(
          `${process.env.REACT_APP_API_SERVER}/api/users/${id}/passwordchange`,
          { oldpassword, newpassword }
        )
        .then((res) => setErrmessage(res.data));
    if (oldpassword === "") setErrmessage("** Please enter your old password");
    if (newpassword === "" || newpassword.length < 6)
      setErrmessage(
        "** Please enter at least 6 characters for your new password"
      );
    if (confirmpassword === "" || newpassword !== confirmpassword)
      setErrmessage("** Please confirm your new password");

    setOldpassword("");
    setNewpassword("");
    setConfirmpassword("");
  };

  return (
    <div className="setting_base">
      <div className="setting_title">
        <span>Farm Planner | Setting</span>
      </div>
      <div className="farmer-setting">
        <div className="setting-username">{username}</div>
        <br />
        <button
          className="setting-btn"
          onClick={() => (setShow(!show), setErrmessage(""))}
        >
          Change Password
        </button>
        <br />
        <br />
        {show ? (
          <>
            <input
              placeholder="Old password"
              value={oldpassword}
              onChange={(e) => setOldpassword(e.currentTarget.value.trim())}
              type="password"
            />
            <br />
            <br />
            <input
              placeholder="New password"
              value={newpassword}
              onChange={(e) => setNewpassword(e.currentTarget.value.trim())}
              type="password"
            />
            <br />
            <br />
            <input
              placeholder="Confirm password"
              value={confirmpassword}
              onChange={(e) => setConfirmpassword(e.currentTarget.value.trim())}
              type="password"
            />
            <br />
            <br />
            {errmessage === "" ? (
              <></>
            ) : (
              <p className="setting-error">
                {errmessage}
                <br />
                <br />
              </p>
            )}
            <button className="setting-btn" onClick={() => passwordcheck()}>
              Submit
            </button>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
