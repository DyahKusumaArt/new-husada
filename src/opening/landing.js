import React from "react";
import { useState } from "react";
import { Nav, Navbar, Container, Carousel, Card, Row, Col, Table } from "react-bootstrap";
import satu from '../assets/image/1.jpg';
import dua from '../assets/image/2.jpg';
import tiga from '../assets/image/3.jpg';
import pengobatan from '../assets/image/pengobatan.jpg';
import "../App.css";

function Landing() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    const dataObat = [{
        nama: "obat 1",
        label: "Overview"
    }, {
        nama: "obat 2",
        label: "Overview"
    }, {
        nama: "obat 3",
        label: "Overview"
    }, {
        nama: "obat 4",
        label: "Overview"
    }, {
        nama: "obat 5",
        label: "Overview"
    }, {
        nama: "obat 6",
        label: "Overview"
    }, {
        nama: "obat 7",
        label: "Overview"
    }, {
        nama: "obat 8",
        label: "Overview"
    }, {
        nama: "obat 9",
        label: "Overview"
    }];
    const Layanan = [{
        nama: "Jasa Pengobatan",
        label: "Penghusada, Balian Dan Lain Sebagainya"
    }, {
        nama: "Konsultas",
        label: "Overview"
    }, {
        nama: "Pengobatan",
        label: "Overview"
    }, {
        nama: "obat 4",
        label: "Overview"
    }, {
        nama: "obat 5",
        label: "Overview"
    }];
    return (
        <div>
            <div className="header p-3" >
                <Navbar collapseOnSelect expand="lg" >
                    <Container className="">
                        <div>
                            <Navbar.Brand href="#home">HUSADA Center</Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        </div>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#features">Informasi</Nav.Link>
                                <Nav.Link href="#features">Layanan</Nav.Link>
                                <Nav.Link href="#features">Peta</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link href="#features">Login</Nav.Link>
                                <Nav.Link href="#pricing">Register</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </div>
            <div>
                <div className="" style={{ height: '500px', background: "#DA1212" }}>
                    <Carousel activeIndex={index} onSelect={handleSelect} >

                        <Carousel.Item >
                            <img style={{ height: "660px" }}
                                className="d-block w-100"
                                src={dua}
                                url
                                alt="First slide"
                            />
                            <Carousel.Caption style={{ color: "black" }} className="shadow p">
                                <h3>Slide Pertama</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                style={{ height: "660px" }}
                                className="d-block w-100"
                                src={satu}
                                alt="Second slide"
                            />

                            <Carousel.Caption style={{ color: "black" }} className="shadow p">
                                <h3>Slide Kedua</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                style={{ height: "660px" }}
                                className="d-block w-100"
                                src={tiga}
                                alt="Third slide"
                            />

                            <Carousel.Caption style={{ color: "black" }} className="shadow p">
                                <h3>Slide Ketiga</h3>
                                <p>
                                    deskripsi
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
            <div className="" style={{ marginTop: "170px", height: "700px" }}>
                <Container className="shadow px- mb-5 blue" >
                    <h3 className="text-center p-5">Informasi Tanaman dan Obat Tradisional</h3>
                    <Row xs={1} md={3} className="g-4">
                        {Array.from(dataObat).map((_, idx) => (
                            <Col>
                                <Card className="shadow rounded-3 p-2">
                                    {/* <Card.Img variant="top" src="holder.js/100px160"/> */}
                                    <Card.Body key={idx}>
                                        <Card.Title>{_.nama}</Card.Title>
                                        <Card.Text>
                                            This is a longer card with supporting text below as a natural
                                            lead-in to additional content. This content is a little bit
                                            longer.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                    <div className="mt-5 text-center text-white pb-3"><a href="#" > Login For More Content</a></div>

                </Container>

            </div>
            <div style={{ height: "700px" }}>
                <Container className="red shadow bg-opacity-100 ">
                    <h3 className="text-center m-5 pt-3 ">
                        Layanan Dukun
                    </h3>
                 
                            <Row>
                                <Col xs={7} className="kanan ">
                                   <p>Jasa Pengobatan</p>
                                   <p>
                                    Desripsi
                                   </p>
                                </Col>
                                <Col><img
                                    className="d-block w-75 m-3 rounded-5"
                                    src={pengobatan}
                                    url
                                    alt="First slide"
                                /></Col>
                            </Row>
                            <Row>
                                <Col xs={4}><img
                                    className="d-block w-100 mx-3 rounded-5"
                                    src={pengobatan}
                                    url
                                    alt="First slide"
                                />
                                </Col>
                                <Col className="mt-5">
                                   <p>Konsultasi</p>
                                    <p>Deskripsi</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={7} className="kanan">
                                   <p>Jasa Pengobatan</p>
                                   <p>
                                    Desripsi
                                   </p>
                                </Col>
                                <Col><img
                                    className="d-block w-75 m-3 rounded-5"
                                    src={pengobatan}
                                    url
                                    alt="First slide"
                                /></Col>
                            </Row>
                            <Row>
                                <Col xs={4}><img
                                    className="d-block w-100 mx-3 rounded-5"
                                    src={pengobatan}
                                    url
                                    alt="First slide"
                                />
                                </Col>
                                <Col className="mt-5">
                                   <p>Konsultasi</p>
                                    <p>Deskripsi</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="kanan">
                                   <p>Jasa Pengobatan</p>
                                   <p>
                                    Lorem
                                   </p>
                                </Col>
                                <Col><img
                                    className="d-block w-75 m-3 rounded-5"
                                    src={pengobatan}
                                    url
                                    alt="First slide"
                                /></Col>
                            </Row>
                     

                </Container>
            </div>
        </div>
    );
}

export default Landing;