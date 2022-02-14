import navlogo from './assets/white-logo.png';
import navlogo2 from './assets/setting-icon.png';
import navlogo3 from './assets/exit-icon.png';
import { logoutThunk } from '../../store/auth/action';
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import { Container, Navbar, Nav} from "react-bootstrap";

export function DashNavbar(props) {
  const dispatch = useDispatch()
  const [modal, setModal] = useState(true);
  const [Opassword, setOpassword] = useState("");
  const [Npassword, setNpassword] = useState([]);
  const [Cpassword, setCpassword] = useState("");

  const addLink = () => {
    console.log("child labor");
    props.onAddLinkProps(Opassword, Npassword, Cpassword);
    setModal(false);
    setOpassword("");
    setNpassword("");
    setCpassword([]);
  };

  

  // const [Onview, setOnview] = useState("onBtn")
  return (
    <div className='dashNav'>
      <Navbar bg="black" >
        <Container>
          <Navbar.Brand href="#home"><img src={navlogo} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="dashNav_part me-auto">
              <Link to="/dashboard"><li><span><button className={props.Onview === "dashboard" ? "onthisBtn" : "notonthisBtn"} >Dashboard</button></span></li></Link>
              <Link to="/client_planner"><li><span><button className={props.Onview === "scheduled" ? "onthisBtn" : "notonthisBtn"} >Farmer Planner</button></span></li></Link>
            </Nav>
            <Nav>
              <div className='nav-icon justify-content-end'>
              <button className="btn" onClick={() => (dispatch(logoutThunk()))}>
              <img className="nav-icon-link" src={navlogo2} />
              </button>
                <button className="btn" onClick={() => setModal(!modal)}>
                  <img className="nav-icon-link" src={navlogo3} />
                </button>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal show={modal}>
        <Modal.Header>Add Link Form</Modal.Header>
        <Modal.Body>
          <label>Old Password:</label>
          <br />
          <input
            type="text"
            value={Opassword}
            onChange={(e) => setOpassword(e.currentTarget.value)}
          />
          <br />
          <label>New Password:</label>
          <br />
          <input
            type="text"
            value={Npassword}
            onChange={(e) => setNpassword(e.currentTarget.value)}
          />
          <br />
          <label>Confirm Password:</label>
          <br />
          <input
            type="text"
            value={Cpassword}
            onChange={(e) => setCpassword(e.currentTarget.value)}
          />
          
          <br />
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={addLink}>
            Submit
          </Button>
          <Button color="danger" onClick={() => setModal(!modal)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}