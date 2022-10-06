
import { Form, Button, Row, Navbar, Container, Nav, Modal, Card } from "react-bootstrap";
import React, { useState } from 'react';
import profile from '../assets/image/profile-png.png'
import "../App.css"
function Profile() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className="header p-2" >
                <Navbar collapseOnSelect expand="lg" className="atasH">
                    <Container className="" >
                        <div>
                            <Navbar.Brand href="#home" className="brand text-white" >Husada Center</Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        </div>
                        <Navbar.Collapse id="responsive-navbar-nav" >
                            <Nav className="me-auto text-white">
                                <Nav.Link href="#features" className="text-white">Informasi</Nav.Link>
                                <Nav.Link href="#features" className="text-white">Layanan</Nav.Link>
                                <Nav.Link href="#features" className="text-white">Peta</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link href="/profile" className="text-white">Profile</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                        <Nav.Link href="/" className="p-2">Logout</Nav.Link>
                    </Container>
                </Navbar>

            </div>
            <div className="d-center">
                <Card className="p-3" style={{ background: '#C92905' }}>

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
                                        <Form.Label>Old Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>

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
                                <Button variant="primary">Save</Button>
                            </Modal.Footer>
                        </Modal >
                        <Row>
                            <Button className="btn btn-outline-primary btn-lg btn-block text-white" >

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