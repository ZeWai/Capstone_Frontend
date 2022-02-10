import { Navbar, Container, Offcanvas, Nav } from 'react-bootstrap'
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetUserThunk } from '../../../store/user/actions';
import './NavBar.css'

export default function NavBar() {
    const username = useSelector((state) => state.userStore.name);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetUserThunk());
    }, []);
    return <div className='farmer_navbar'>
        <Navbar bg="lg" expand={false} className='navbar'>
            <Container fluid>
                <Navbar.Toggle aria-controls="offcanvasNavbar" className="navbarToggle" />
                <span className='navbar_Title'>Farmer Planner</span>
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
                                <Nav.Link href="/farme_planner"><li><span>Farmer Planner</span></li></Nav.Link>
                                <Nav.Link href="/farme_planner/farm_log"><li><span>Farm log</span></li></Nav.Link>
                                <Nav.Link href="/farm_planner/setting"><li><span>Setting</span></li></Nav.Link>
                                <Nav.Link href="/home"><li><span>Logout</span></li></Nav.Link>
                            </Nav></ul>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    </div>;
}
