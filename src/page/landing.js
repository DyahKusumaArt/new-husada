import React from "react";
import { useState } from "react";
import { Nav, Navbar, Container, Carousel, Card, Row, Col, Button } from "react-bootstrap";
import satu from '../assets/image/1.jpg';
import dua from '../assets/image/2.jpg';
import tiga from '../assets/image/3.jpg';
import pengobatan from '../assets/image/pengobatan.jpg';
import "../App.css";
import { Link } from "react-router-dom";

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
        label: "pengobatan"
    }, {
        nama: "Konsultasi",
        label: "konsultasi"
    }, {
        nama: "Pengobatan Alternatif",
        label: "alternatif"
    }, {
        nama: "Jasa Populer",
        label: "populer"
    }, {
        nama: "Marketplace",
        label: "marketplace"
    }];
    return (
        <div>
            <div className="header p-2" >
                <Navbar collapseOnSelect expand="lg" className="atasH">
                    <Container className="" >
                        <div>
                            <Navbar.Brand href="#home" className="brand text-white" >Husada Center</Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav"  />
                        </div>
                        <Navbar.Collapse id="responsive-navbar-nav" >
                            <Nav className="me-auto text-white">
                                <Nav.Link href="#features" className="text-white">Informasi</Nav.Link>
                                <Nav.Link href="#features" className="text-white">Layanan</Nav.Link>
                                <Nav.Link href="#features" className="text-white">Peta</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link href="/register" className="text-white">Register</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                        <Nav.Link href="/login" className="p-2">Login</Nav.Link>
                    </Container>
                </Navbar>

            </div>
            <div>
                <div className=" d-flex flex-row">
                    <Container className=" d-flex flex-row" >
                        {Layanan.map((item, key) =>
                                <Card className=" " key={key} style={{ width: '16rem', marginRight: '15px', marginTop:'5px', height:'6rem' , fontSize:'10px'}}>
                                    <Card.Body>
                                        <Card.Title style={{ fontSize:'15px'}}>{item.nama}</Card.Title>
                                        {/* <Card.Text>
                                            {item.label}
                                        </Card.Text> */}
                                        <Button variant="primary" href="/pengobatan">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                        )}
                    </Container>
                </div>

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
    );
}

export default Landing;