import React, {useState} from 'react';
import {Container} from "react-bootstrap"
import axios from "axios";

function RegisterC() {

    const [user, setUser] = useState({
        name:'',
        email: '',
        password: ''
    })

    function handleChange(event) {
        const {name, value} = event.target;

        setUser(prevInput => {
            return {
                ...prevInput, //spread operator
                [name]: value
            }
        })
    }

    function handleClick(event) {
        event.preventDefault();
        console.log(user);
        const newUser = {
            name: user.name,
            email: user.email,
            password: user.password
        }
        const {name, email, password} = user
        if (name && email && password) {
            axios.post('http://localhost:3001/register', newUser)
                .then(res => console.log(res))
            alert("Now you can Log in")

        } else {
            alert("invalid input")
        }
        //window.location.href = "http://localhost:3000/login";
    }

    return (
        <div className="m-4">
            <h1 className="text-center text-dark">Create a new account.</h1>
        <div className="p-4 d-sm-flex">
            <Container className="container-sm w-auto p-5 border rounded-4 bg-light text-dark">
                <div>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="InputName"
                                   className="form-label fs-4">Full name</label>
                            <input onChange={handleChange}
                                   name="name" value={user.name}
                                   type="name"
                                   className="form-control form-control-sm"
                                   id="exampleInputName"
                                   placeholder="Imię i nazwisko"></input>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="InputEmail"
                                   className="form-label fs-4">Email address</label>
                            <input onChange={handleChange}
                                   name="email" value={user.email}
                                   type="email"
                                   className="form-control form-control-sm"
                                   id="exampleInputEmail1"
                                   placeholder="Email"></input>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="InputPassword2"
                                   className="form-label fs-4">Set password</label>
                            <input onChange={handleChange}
                                   value={user.password}
                                   name="password"
                                   type="password"
                                   className="form-control"
                                   id="exampleInputPassword"
                                   placeholder="******"></input>
                        </div>
                        <button onClick={handleClick} type="submit" className="btn btn-primary">Register</button>
                    </form>
                </div>
            </Container>
        </div></div>
    );
}


export default RegisterC;