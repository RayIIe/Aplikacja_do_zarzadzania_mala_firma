import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {Nav, Navbar, NavDropdown, Container, Button} from "react-bootstrap";
import Home from "./Home.js";
import Contact from "./Contact.js";
import About from "./About.js";
import LogInC from "./LogInC.js";
import RegisterC from "./RegisterC.js";
import Management from "./Management";
import Calendar from "./Calendar";
import Gallery from "./Gallery";




function NavBarC() {

    const galleryImages = [
        {
            img: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            img: "https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            img: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            img: "https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            img: "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            img: "https://images.pexels.com/photos/1712/sunglasses-apple-iphone-desk.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            img: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },
        {
            img: "https://images.pexels.com/photos/92331/pexels-photo-92331.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },
        {
            img: "https://images.pexels.com/photos/267491/pexels-photo-267491.jpeg?auto=compress&cs=tinysrgb&w=1600"
        }
    ]


    const saved = localStorage.getItem("username");
    const username = JSON.parse(saved);
    console.log(username)

    function handleLogOut(e) {
        // username.email = (null);
        // username.password = (null);
        localStorage.clear();
        window.location.href = "/login"
    };
    // getting stored value


    return (<Router>
            <div>
                <Navbar bg="dark" variant={"dark"} expand="lg">
                    <Container>
                        <Navbar.Brand as={Link} to={"/home"}>Logo</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
                                <Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link>
                                <NavDropdown title="More" id="basic-nav-dropdown">
                                    <NavDropdown.Item as={Link} to={"/gallery"}>Gallery</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Camp</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Pricing</NavDropdown.Item>
                                    <NavDropdown.Divider/>
                                    <NavDropdown.Item as={Link} to={"/management"}>Management</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to={"/calendar"}>Calendar</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                        {username  ? (<div>
                                <Navbar.Text variant={"light"}>{username.email}    </Navbar.Text>
                                <Button onClick={handleLogOut} as={Link} to={"/login"} variant={"danger"}>Log out</Button>
                            </div>) :
                            (<div>
                                <Button as={Link} to={"/login"} variant={"dark"}>Log in</Button>
                                <Button as={Link} to={"/register"} variant={"dark"}>Register</Button>
                            </div>)}
                    </Container>
                </Navbar>
            </div>
            <div>
                <Switch>
                    <Route path={"/home"}>
                        <Home/>
                    </Route>
                    <Route path={"/about"}>
                        <About/>
                    </Route>
                    <Route path={"/contact"}>
                        <Contact/>
                    </Route>
                    <Route path={"/login"}>
                        <LogInC/>
                    </Route>
                    <Route path={"/register"}>
                        <RegisterC/>
                    </Route>
                    <Route path={"/management"}>
                        <Management/>
                    </Route>
                    <Route path={"/calendar"}>
                        <Calendar/>
                    </Route>
                    <Route path={"/gallery"}>
                        <Gallery galleryImages={galleryImages}/>
                    </Route>
                </Switch>

            </div>
        </Router>
    );
}

export default NavBarC;