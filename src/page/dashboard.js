
import { Form, Button, Row, Navbar, Container, Nav, Modal, Card } from "react-bootstrap";
import React from "react";
import profile from '../assets/image/profile-png.png'
import "../App.css"
const Dashboard = () => {
    
    return (
        <div >
            <div className="header p-2 " >
                <Navbar collapseOnSelect expand="lg" className="atasH">
                    <Container className="" >
                        <div>
                            <Navbar.Brand href="#home" className="brand text-white" >Husada Center</Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        </div>
                        <Navbar.Collapse id="responsive-navbar-nav" >
                            <Nav className="me-auto text-white">
                                <Nav.Link href="/kjawa" className="text-white">Kalender</Nav.Link>
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
            <div className="mt-3 mb-5">
                <p className="text-lg-center"> LAYANAN </p>
                <hr/>
                <Container className="mx-auto d-flex justify-content-between">
                    <Card style={{ width: '28rem' , height:'250px', background:'#14ae5c'}}>
                        {/* <Card.Img variant="top" src={profile} /> */}
                        <Card.Body>
                            <Card.Title>Jasa Pengobatan</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary" href="/pengobatan">Click Here !</Button>
                        </Card.Body>
                    </Card>
                    <Card className="mx-5" style={{ width: '28rem', height:'250px' ,background:'#14ae5c' }}>
                        {/* <Card.Img variant="top" src={profile} /> */}
                        <Card.Body>
                            <Card.Title>Konsultasi</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Click Here !</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '28rem', height:'250px', background:'#14ae5c' }}>
                        {/* <Card.Img variant="top" src={profile} /> */}
                        <Card.Body>
                            <Card.Title>Pengobatan Alternatif</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Click Here !</Button>
                        </Card.Body>
                    </Card>
                </Container>
                <Container className="mx-auto d-flex justify-content-between mt-5">
                    <Card style={{ width: '28rem', height:'250px', background:'#14ae5c' }}>
                        {/* <Card.Img variant="top" src={profile} /> */}
                        <Card.Body>
                            <Card.Title>Jasa Populer</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Click Here !</Button>
                        </Card.Body>
                    </Card>
                    <Card className="mx-5" style={{ width: '28rem', height:'250px', background:'#14ae5c' }}>
                        {/* <Card.Img variant="top" src={profile} /> */}
                        <Card.Body>
                            <Card.Title>Marketplace</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Click Here !</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '28rem', height:'250px' , background:'#14ae5c' }}>
                        {/* <Card.Img variant="top" src={profile} /> */}
                        <Card.Body>
                            <Card.Title>Soon</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Click Here !</Button>
                        </Card.Body>
                    </Card>
                </Container>
            </div>

        </div>
    );
};

export default Dashboard;