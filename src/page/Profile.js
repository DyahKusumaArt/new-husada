
import { Form, Button, Row, Navbar, Container, Nav, Modal, Card } from "react-bootstrap";
import React, { useState } from 'react';
import profile from '../assets/image/profile-png.png'
import "../App.css"
import Headerlog from "../aflogin/header";
function Profile() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Headerlog/>
            <div className="d-center">
                <Card className="p-3" style={{ background: '#13653f' }}>

                    <Form className="text-white">
                        <h3>Edit Profile</h3>
                        <hr></hr>
                        <div className="text-center"> <img src={profile} alt="Logo" className="foto mb-2 center" /></div>

                        <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        {/* personal imformation  */}
                        <Form.Group className="mb-2" controlId="formBasicName">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="text" placeholder="ex: Aisaka Yuzu" />
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="formBasicPhone">
                            <Form.Label>Contact</Form.Label>
                            <Form.Control type="number" placeholder="Phone Number" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicALamat">
                            <Form.Label>Alamat</Form.Label>
                            <Form.Control type="text" placeholder="ex: Indonesia" />
                        </Form.Group>
                        <Button variant="primary" onClick={handleShow} className="mb-3">
                            Edit Password
                        </Button>
                        <Modal
                            show={show}
                            onHide={handleClose}
                            backdrop="static"
                            keyboard={false}
                            centered
                        >
                            <Modal.Header closeButton>
                                <Modal.Title>Edit Password</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form >
                                    {/* change password */}
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>New Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Confirm Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" type="submit">Save</Button>
                            </Modal.Footer>
                        </Modal >
                        <Row>
                            <Button className="btn btn-outline-primary btn-lg btn-block text-white" type="submit">
                                Save Changes
                            </Button>
                        </Row>
                    </Form>
                </Card>
            </div>

        </>
    );
};

export default Profile;