
import { Form, Button, Row, Navbar, Container, Nav, Modal, Card } from "react-bootstrap";
import React from "react";
import profile from '../assets/image/profile-png.png'
import "../App.css"
import Headerlog from "../aflogin/header";
const Dashboard = () => {
    
    return (
        <div >
            <Headerlog></Headerlog>
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