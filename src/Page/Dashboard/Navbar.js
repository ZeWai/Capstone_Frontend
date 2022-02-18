import navlogo from "./assets/white-logo.png";
import navlogo2 from "./assets/setting-icon.png";
import navlogo3 from "./assets/exit-icon.png";
import { logoutThunk } from "../../store/auth/action";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

export function DashNavbar(props) {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [oldpassword, setOpassword] = useState("");
  const [newpassword, setNpassword] = useState([]);
  const [Cpassword, setCpassword] = useState("");
  const [errmessage, setErrmessage] = useState("");
  let id = jwt_decode(localStorage.getItem("LoggedInToken")).id;

  const ChangePassword = () => {
    if (newpassword === Cpassword && newpassword !== "" && newpassword !== "") {
      axios
        .post(
          `${process.env.REACT_APP_API_SERVER}/api/users/${id}/passwordchange`,
          { oldpassword, newpassword }
        )
        .then((res) => setErrmessage(res.data));
      if (errmessage === "Password changed") {
        setModal(false);
      }
    } else if (oldpassword === "") {
      setErrmessage("** Please enter your old password");
    } else if (newpassword === "" || newpassword.length < 6) {
      setErrmessage(
        "** Please enter at least 6 characters for your new password"
      );
    } else if (Cpassword === "" || newpassword !== Cpassword) {
      setErrmessage("** Please confirm your new password");
    }
    setOpassword("");
    setNpassword("");
    setCpassword("");
  };

  return (
    <div className="dashNav">
      <Navbar className="navBar-base">
        <Container>
          <Navbar.Brand>
            <img src={navlogo} alt="rooftop-logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="dashNav_part me-auto">
              <Link to="/dashboard">
                <li>
                  <span>
                    <button
                      className={
                        props.Onview === "dashboard"
                          ? "onthisBtn"
                          : "notonthisBtn"
                      }
                    >
                      Dashboard
                    </button>
                  </span>
                </li>
              </Link>
              <Link to="/client_planner">
                <li>
                  <span>
                    <button
                      className={
                        props.Onview === "scheduled"
                          ? "onthisBtn"
                          : "notonthisBtn"
                      }
                    >
                      Farm Planner
                    </button>
                  </span>
                </li>
              </Link>
            </Nav>
            <Nav>
              <div className="nav-icon ">
                <button className="navbtn" onClick={() => setModal(!modal)}>
                  <img className="nav-icon-link" src={navlogo2} alt="setting" />
                </button>
                <button
                  className="navbtn"
                  onClick={() => dispatch(logoutThunk())}
                >
                  <img className="nav-icon-link" src={navlogo3} alt="logout" />
                </button>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal show={modal} className="ChangePwModal">
        <Modal.Header>
          <h1>Change Password</h1>
        </Modal.Header>
        <Modal.Body>
          <label>Old Password:</label>
          <br />
          <input
            type="password"
            value={oldpassword}
            onChange={(e) => setOpassword(e.currentTarget.value)}
          />
          <br />
          <label>New Password:</label>
          <br />
          <input
            type="password"
            value={newpassword}
            onChange={(e) => setNpassword(e.currentTarget.value)}
          />
          <br />
          <label>Confirm Password:</label>
          <br />
          <input
            type="password"
            value={Cpassword}
            onChange={(e) => setCpassword(e.currentTarget.value)}
          />

          <br />
          <h3 className="PWerrormsg">{errmessage} </h3>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="ChangePwBtn ChangePwBtn-submit"
            onClick={ChangePassword}
          >
            Submit
          </button>
          <button
            className="ChangePwBtn ChangePwBtn-cancel"
            onClick={() => setModal(!modal)}
          >
            Cancel
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
