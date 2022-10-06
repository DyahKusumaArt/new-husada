
import { Form, Button, Row, Navbar, Container, Nav, Modal, Card } from "react-bootstrap";
import React from "react";
import "../App.css"
const Pengobatan = () => {


    return (
        <div style={{height:'768px'}}>
            <div className="header p-2 " >
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
            <div style={{background:"#212121", height:'100%'}} >
                <br></br>
                <p className="text-lg-center">List Pengobatan "setelah login memilih fitur untuk pengobatan"</p>
                <hr/>
                <Container className="mx-auto d-flex justify-content-between">
                    <Card style={{ width: '25rem', height:'15rem', background:'#AF1B3F', color:'white', paddingBottom:'50px' }}>
                      
                        <Card.Body>
                            <Card.Title>Dukun</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary" href="/dukun">Click Here !</Button>
                        </Card.Body>
                    </Card>
                    <Card className="mx-5" style={{ width: '25rem', height:'15rem', background:'#AF1B3F', color:'white', paddingBottom:'50px' }}>
                      
                        <Card.Body>
                            <Card.Title>Balian</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary" href="/balian">Click Here !</Button>
                        </Card.Body>
                    </Card>
                   
                </Container>
                <Container className="mx-auto d-flex justify-content-between mt-5">
                    <Card style={{ width: '25rem', height:'15rem', background:'#AF1B3F', color:'white', paddingBottom:'50px'  }}>
                      
                        <Card.Body>
                            <Card.Title>Penghusada</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary" href="/penghusada">Click Here !</Button>
                        </Card.Body>
                    </Card>
                    <Card className="mx-5" style={{ width: '25rem', height:'15rem', background:'#AF1B3F', color:'white', paddingBottom:'50px' }}>
                      
                        <Card.Body>
                            <Card.Title>Tabib</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary" href="/tabib">Click Here !</Button>
                        </Card.Body>
                    </Card>
                   
                </Container>
            </div>

        </div>
    );
};

export default Pengobatan;