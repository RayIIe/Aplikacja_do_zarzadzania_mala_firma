import React, {useState} from 'react';
import {Container} from "react-bootstrap"
import axios from "axios";
import {useHistory} from "react-router-dom/cjs/react-router-dom";

function LogInC() {

    //const [nick, setNick] = useState()

    const history = useHistory()
    const [user, setLoginUser] = useState({
        name: '',
        password: ''
    })

    function handleChange(e) {
        const {name, value} = e.target

        setLoginUser(prevInput => {
            return {
                ...prevInput,//spread operator
                [name]: value
            }
        })
    }


    function handleClick(event) {
        //debugger
        event.preventDefault();
        console.log(user);


        axios.post('http://localhost:3001/login', user)
            .then(res => {
                setLoginUser(res.data.user)
                const ref = "/home"
                history.push(ref)
            })
        localStorage.setItem("username", JSON.stringify(user))
        window.location.reload()
        window.location.href = "/home"
        alert("Logged in")
    }

//     useEffect(() => {
//         localStorage.setItem("username", JSON.stringify(user))
//     }, [user])
//
// //

return (
    <div className="m-4">
        <h1 className="text-center text-dark">Login to your account.</h1>
        <div className="p-5 m-3 d-sm-flex">
            <Container className="container-sm w-auto p-5 border rounded-4 bg-light text-dark">
                <div>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="exampleInputEmail1" className="form-label fs-4">Email address</label>
                            <input type="email"
                                   className="form-control form-control-sm"
                                   id="exampleInputEmail1"
                                   name="email"
                                   value={user.email}
                                   onChange={handleChange}></input>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="exampleInputPassword1" className="form-label fs-4">Password</label>
                            <input type="password"
                                   className="form-control form-control-sm"
                                   id="exampleInputPassword1" name="password"
                                   value={user.password}
                                   onChange={handleChange}></input>
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="RememberMe"></input>
                            <label className="form-check-label " htmlFor="exampleCheck1">Remember me</label>
                        </div>
                        <button onClick={handleClick} type="submit" className="btn btn-primary">Log In</button>
                    </form>
                </div>
            </Container>
        </div>
    </div>
);
}


export default LogInC;