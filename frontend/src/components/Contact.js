import React from 'react';
import {Form, Button} from 'react-bootstrap';
import blackboard from "../assets/wizytowka.jpg";

function Contact() {

    // function handleSubmit() {
    //     window.location.reload()
    //     alert("Message was sent Successfully!")
    //     }

    const StyleContact = {
        height: "800px",
        backgroundImage: `url(${blackboard})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        marginInline: "60px" ,
        fontFamily: "Copperplate Gothic"}

        return (
            <div style={StyleContact}>
                <div className="container m-auto">
                <h1 className="align-center">Contact Us</h1><br/>

                <Form  style={{ marginLeft: "20%", marginRight: "auto", textShadow: "2px 2px #000000"}}  className="container-fluid ">
                    <Form.Group className="my-3">
                        <Form.Label className="m-3">Subject:</Form.Label>
                        <select className='p-2 rounded'>
                            <option>Basic informations</option>
                            <option>Call request</option>
                            <option>Payments</option>
                            <option>Private Event</option>
                            <option>Other</option>
                        </select><br/>
                    </Form.Group>
                    <Form.Group className="m-3" >
                        <Form.Label className="m-3">First name:</Form.Label>
                        <input className='p-2 rounded' type='text'/><br/>
                    </Form.Group>
                    <Form.Group className="m-3">
                        <Form.Label className="m-3">Email address:</Form.Label>
                        <input className='p-2 rounded' type='email'/><br/>
                    </Form.Group>
                    <Form.Group className="m-3">
                        <Form.Label className="m-3" >Message:</Form.Label>
                        <textarea className='h-20 p-2 rounded' type='text'/><br/>
                    </Form.Group>

                    <div className='m-3 items-center'>
                        <Button className='mb-8 p-1 w-36 bg-[#D286EA] rounded-full'  type="submit">Submit</Button>
                    </div>
                </Form>
                </div>
            </div>
        );

}

export default Contact;