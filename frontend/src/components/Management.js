import React, {useEffect, useState} from 'react';
import {Button, Form} from "react-bootstrap";
import Modal from "react-bootstrap/Modal"
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

function Management() {
    const [show, setShow] = useState(false);
    const [updatedRole, setUpdatedRole] = useState({})
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [users, setUsers] = useState([{
        name: '',
        email: '',
        role: ''
    }])

    useEffect(() => {
        fetch(`http://localhost:3001/users`).then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jRes => setUsers(jRes))
    }, [])


    const deleteUser = (id) => {
        //console.log(id);
        axios.delete(`http://localhost:3001/delete/${id}`)
            .then((res) => console.log(res))
            .catch((err) => console.log(err))

        window.location.reload()
    };

    const editUser = (users) => {
        console.log(users)
        setUpdatedRole(users)
        handleShow()
    }

    const handleChange = (e) => {
        const {role, value} = e.target;
        setUpdatedRole(prev => {
            return {
                ...prev,
                [role]: value,
            }
        })
    }

    const saveUpdatedRole = (id) => {
        console.log({ role: updatedRole })
        axios.put(`http://localhost:3001/update/${id}`, { role: updatedRole })
            .then(res => console.log(res))
            .catch(err => console.log(err))

        handleClose()
        // window.location.reload()
    }

    return (
        <div className="container-fluid text-center text-dark">
            <div className="row align-items-start">
                <h1 className="text-center text-dark">Management</h1>
                {users.map(user =>
                    <div key={user._id} className="col-auto  mx-auto ">
                        <div className="card my-2 ">
                            <div className="row align-items-start">
                                <div className="col-auto">
                                    <div className="card-body flex-md-fill text-dark">
                                        <h1 className="card-title fs-4">{user.name}</h1>
                                        <p className="card-text">{user.email}</p>
                                        <p className="card-text">Role: {user.role}</p>
                                    </div>
                                </div>
                                <div className="col-auto ms-auto">
                                    <div className="card-text mt-5 ms-5 me-2 text-dark">
                                        <Button onClick={() => editUser(user.role)} variant="info" href="#"
                                                className="card-link">Edit</Button>
                                        <Modal dialogClassName="text-dark" centered show={show} onHide={handleClose} backdrop="static"
                                               keyboard={false} className="fade" style={{marginInline: "650px"}}>
                                            <Modal.Header closeButton>
                                                <Modal.Title>Change role </Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <Form>
                                                    <Form.Select onChange={handleChange} placeholder={"Role"} className="role">
                                                        <option value="Basic">Basic</option>
                                                        <option value="Teacher">Teacher</option>
                                                        <option value="Admin">Admin</option>
                                                    </Form.Select>
                                                </Form>
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="secondary" onClick={handleClose}>Close</Button>
                                                <Button onClick={saveUpdatedRole} variant="primary">Confirm</Button>
                                            </Modal.Footer>
                                        </Modal>
                                        <Button variant="danger" onClick={() => deleteUser(user._id)} href="#"
                                                className="card-link">Delete</Button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Management;