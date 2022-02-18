import { Navbar, Container, Offcanvas, Nav } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetUserThunk } from "../../../store/user/actions";
import { logoutThunk } from "../../../store/auth/action";
import "./NavBar.css";

export default function NavBar(props) {
  const username = useSelector((state) => state.userStore.name);
  const dispatch = useDispatch();
  const [navbarTitle, setNavbarTitle] = useState("Farmer Planner");
  const [expanded, setExpanded] = useState(false);

  //Getusername
  useEffect(() => {
    dispatch(GetUserThunk());
  }, [dispatch]);

  return (
    <div className="farmer_navbar">
      <Navbar bg="lg" expand={false} className="navbar" expanded={expanded}>
        <Container fluid>
          <Navbar.Toggle
            aria-controls="offcanvasNavbar"
            className="navbarToggle"
            onClick={() => setExpanded(expanded ? false : "expanded")}
          />
          <span className="navbar_Title">{navbarTitle}</span>
          <Navbar.Brand className="testing">
            <img
              className="navbar_logo"
              src="https://cdn.shopify.com/s/files/1/0273/3250/9795/files/Rooftop_Republic_White_Logo_2048x2048.png?v=1584432103"
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
            className="Offcanvas"
          >
            <Offcanvas.Header closeButton onClick={() => setExpanded(expanded ? false : true)}>
              <Offcanvas.Title id="offcanvasNavbarLabel"></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div className="farmer_name">
                {" "}
                Welcome <br />
                {username}
              </div>
              <ul>
                <Nav className="farmer_sidebar">
                  <li
                    onClick={() => (
                      props.setView("Overview"),
                      setExpanded(false),
                      setNavbarTitle("Farmer Planner")
                    )}
                  >
                    Farmer Planner
                  </li>
                  <li
                    onClick={() => (
                      props.setView("Farm_log"),
                      setExpanded(false),
                      setNavbarTitle("Farm Log")
                    )}
                  >
                    Farm log
                  </li>
                  <li
                    onClick={() => (
                      props.setView("Setting"),
                      setExpanded(false),
                      setNavbarTitle("Setting")
                    )}
                  >
                    Setting
                  </li>
                  <li onClick={() => dispatch(logoutThunk())}>Logout</li>
                </Nav>
              </ul>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}
