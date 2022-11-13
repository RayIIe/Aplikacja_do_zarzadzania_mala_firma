import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import blackboard from "../assets/pplblackboard.jpg";
import {Container} from "react-bootstrap";


class About extends Component {
    render() {
        const StyleAbout = {
            height: "800px",
            backgroundImage: `url(${blackboard})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100%",
            marginInline: "60px" ,
            fontFamily: "Copperplate Gothic"
        };
        return (
            <div style={StyleAbout}>
                <h1 className="text-dark" style={{textAlign: "center", padding: "40px", textShadow: "2px 2px #ffffff"}} >About</h1>
                <div className="container text-center">
                    <div className="row">
                        <div className="col">
                <Container className="p-2 bg-white rounded-3 text-dark">
                    <h2>Class aptent taciti sociosqu ad litora</h2>
                    <p>In sed porta mi, sit amet molestie mi. Sed euismod magna in tristique rutrum. Sed mollis dolor ante, a rutrum quam iaculis quis. Curabitur porttitor volutpat lorem et efficitur. Pellentesque ut pellentesque purus. Duis dictum volutpat est, ac vehicula ex ullamcorper elementum. Curabitur semper lectus nulla, ac vestibulum sem auctor sed. Aenean sit amet massa ante. Vivamus porta nunc euismod arcu eleifend faucibus. Suspendisse diam magna, convallis eu leo sed, cursus convallis metus.</p>
                </Container>
                    </div>
                    <div className="col">
                        <Container  className="p-2 bg-white rounded-3 text-dark">
                        <h2>Class aptent taciti sociosqu ad litora</h2>
                        <p>In sed porta mi, sit amet molestie mi. Sed euismod magna in tristique rutrum. Sed mollis dolor ante, a rutrum quam iaculis quis. Curabitur porttitor volutpat lorem et efficitur. Pellentesque ut pellentesque purus. Duis dictum volutpat est, ac vehicula ex ullamcorper elementum. Curabitur semper lectus nulla, ac vestibulum sem auctor sed. Aenean sit amet massa ante. Vivamus porta nunc euismod arcu eleifend faucibus. Suspendisse diam magna, convallis eu leo sed, cursus convallis metus.</p>
                    </Container>
                </div></div></div>
                <Container className="w-75 mt-3 p-2 bg-white rounded-3 text-dark">
                    <h2>Class aptent taciti sociosqu ad litora</h2>
                    <p>In sed porta mi, sit amet molestie mi. Sed euismod magna in tristique rutrum. Sed mollis dolor ante, a rutrum quam iaculis quis. Curabitur porttitor volutpat lorem et efficitur. Pellentesque ut pellentesque purus. Duis dictum volutpat est, ac vehicula ex ullamcorper elementum. Curabitur semper lectus nulla, ac vestibulum sem auctor sed. Aenean sit amet massa ante. Vivamus porta nunc euismod arcu eleifend faucibus. Suspendisse diam magna, convallis eu leo sed, cursus convallis metus.</p>
                </Container>
            </div>
        );
    }
}

export default About;