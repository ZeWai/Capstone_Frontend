import { Navbar, Container, Offcanvas, Nav} from 'react-bootstrap'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { GetUserThunk } from '../../../store/user/actions';
import { logoutThunk } from '../../../store/auth/action';
import './NavBar.css'

export default function NavBar() {
    const username = useSelector((state) => state.userStore.name);
    const dispatch = useDispatch();
    const [navbarTitle, setNavbarTitle] = useState("")

    useEffect(() => {
        dispatch(GetUserThunk());
    }, []);

    const changenavbarTitle = () => {
        if (window.location.href.slice(22) === "farm_planner") {
            setNavbarTitle("Farmer Planner")
        } else if (window.location.href.slice(22) === "farm_planner/farm_log") {
            setNavbarTitle("Farm Log")
        } else if (window.location.href.slice(22) === "farm_planner/setting") {
            setNavbarTitle("Setting")
        }
    }

    useEffect(() => {
        changenavbarTitle();
    }, [navbarTitle]);

    return <div className='farmer_navbar'>
        <Navbar bg="lg" expand={false} className='navbar'>
            <Container fluid>
                <Navbar.Toggle aria-controls="offcanvasNavbar" className="navbarToggle" />
                <span className='navbar_Title'>{navbarTitle}</span>
                <Navbar.Brand className="testing">
                    <img className='navbar_logo' src='https://cdn.shopify.com/s/files/1/0273/3250/9795/files/Rooftop_Republic_White_Logo_2048x2048.png?v=1584432103' alt="logo" /></Navbar.Brand>
                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="start"
                    className='Offcanvas'
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel">
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <div className='farmer_name'> Welcome <br />{username}</div>
                        <ul>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Link to="/farm_planner"><li>Farmer Planner</li></Link>
                                <Link to="/farm_planner/farm_log"><li>Farm log</li></Link>
                                <Link to="/farm_planner/setting"><li>Setting</li></Link>
                                <li onClick={()=>(dispatch(logoutThunk()))}>Logout</li>
                            </Nav></ul>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    </div>;
}
