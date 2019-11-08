import React from 'react';
import { Navbar, Col, Row, Nav } from 'react-bootstrap';
import logo from '../assets/Images/logo.PNG'
import Bio from '../assets/Images/bio.png'
import '../App.css';
import { useHistory } from "react-router-dom";
function LandingPage() {
    let history = useHistory();

    function Login() {
        history.push("/Login");
    }
    function Resgister() {
        history.push("/SignUp");
    }
    return (
        <div className="Landing-page.container">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home"><img className="logo" src={logo} /> </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link onClick={Login}>Login</Nav.Link>
                        <Nav.Link onClick={Resgister} eventKey={2}>
                            Signup
      </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Row className="Row-Background-Color">
                <Col className="Landing-page-left-Col">
                    <img className="Landing-page-image" src={Bio} />
                </Col>

                <Col className="Landing-page-right-Col">
                    <h2 className="Lading-page-heading">Digital Voting Platform</h2>
                </Col>
            </Row>

        </div>
    );
}

export default LandingPage;
