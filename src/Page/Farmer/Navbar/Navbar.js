import {Navbar, Container, Offcanvas,Nav} from 'react-bootstrap'
import './NavBar.css'

export default function NavBar() {
    return <div className='farmer_navbar'>
        <Navbar bg="lg" expand={false} className='navbar'>
            <Container fluid>
                <Navbar.Toggle aria-controls="offcanvasNavbar" className="navbarToggle"/>
                <span className='navbar_Title'>Farmer Planner</span>
                <Navbar.Brand className="testing">
                    <img className='navbar_logo' src='https://cdn.shopify.com/s/files/1/0273/3250/9795/files/Rooftop_Republic_White_Logo_2048x2048.png?v=1584432103' alt="logo"/></Navbar.Brand>
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
                        
                        <ul>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="/farmer"><li><span>Farmer Planner</span></li></Nav.Link>
                                <Nav.Link href="/farmer/farm_log"><li><span>Farm log</span></li></Nav.Link>
                                <Nav.Link href="/farmer/setting"><li><span>Setting</span></li></Nav.Link>
                                <Nav.Link href="/home"><li><span>Logout</span></li></Nav.Link>
                            </Nav></ul>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
  </div>;
}
