import React, { useState, useEffect } from "react";
import { loginUserThunk } from "../../store/auth/action";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import "./Home.css";

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const auth = useSelector((state) => state.authStore.auth);
  const role = useSelector((state) => state.authStore.role);
  const popMsg = useSelector((state) => state.authStore.Msg[0]);
  let dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    if (auth) {
      if (role === "client") navigate("/dashboard");
      if (role === "admin") navigate("/admin");
      if (role === "farmer") navigate("/farm_planner");
    }
  }, [navigate, auth, role]);

  const login = (e) => {
    e.preventDefault();
    username.length > 0 &&
      password.length > 0 &&
      dispatch(loginUserThunk(username, password));
  };

  const EnterPress = (e) => {
    if (e.key === "Enter") {
      login(e);
    }
  };
  return (
    <div className="content">
      <div className="loginbox">
        <div className="heading1">
          <span className="fontBlack">Rooftop Republic</span>
        </div>
        <div className="heading2">
          <span className="fontBlack">Log In</span>
        </div>
        <div className="form">
          <label className="fontBlack">Username</label>
          <br />
          <div className="input">
            <div className="icon">
              <FontAwesomeIcon icon={faUser} />
            </div>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.currentTarget.value.trim())}
            />
          </div>
          <br />
          <label className="fontBlack">Password</label>
          <br />
          <div className="input">
            <div className="icon">
              <FontAwesomeIcon icon={faLock} />
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
              onKeyPress={EnterPress}
            />
          </div>
        </div>

        {popMsg === [] ? (
          <> </>
        ) : (
          <>
            <br />
            <p className="login-error">{popMsg}</p>
          </>
        )}
        <div className="loginbtn">
          <button className="fontBlack" onClick={login}>
            Log In
          </button>
        </div>
      </div>
    </div>
  );
}
