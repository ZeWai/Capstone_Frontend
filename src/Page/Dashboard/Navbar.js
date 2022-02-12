import navlogo from './assets/white-logo.png';
import navlogo2 from './assets/setting-icon.png';
import navlogo3 from './assets/exit-icon.png';
import { logoutThunk } from '../../store/auth/action';
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { useState } from "react";
import { Container, Navbar, NavItem, Nav, NavDropdown } from "react-bootstrap";

export function DashNavbar() {
const Logout = () => {
    const dispatch = useDispatch()
    dispatch(logoutThunk());
}
const [Onview, setOnview] = useState("onBtn")
return(
<div className='dashNav'>
<Navbar bg="black" >
  <Container>
    <Navbar.Brand href="#home"><img src={navlogo} /></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="dashNav_part me-auto">
        <Link to="/dashboard"><li><span><button className={Onview==="onBtn"? "onthisBtn":"notonthisBtn"} onClick={() => setOnview("onBtn")}>Dashboard</button></span></li></Link>
        <Link to="/client_planner"><li><span><button className={Onview==="onthatBtn"? "onthisBtn":"notonthisBtn"} onClick={() => setOnview("onthatBtn")}>Farmer Planner</button></span></li></Link>
        </Nav>
        <Nav>
        <div className='nav-icon justify-content-end'>
       
        <img className="nav-icon-link" src={navlogo2} />
  
        <Link to="/home" onClick={Logout}>
        <img className="nav-icon-link" src={navlogo3}/>
        </Link>
        </div>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</div>
)
}