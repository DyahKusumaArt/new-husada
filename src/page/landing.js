import axios from "axios";
import React, { useEffect, useState } from "react";
import { Nav, Navbar, Container, Carousel, Card, Row, Col, Button } from "react-bootstrap";
import satu from '../assets/image/first.jpeg';
import dua from '../assets/image/first.jpeg';
import tiga from '../assets/image/first.jpeg';
import pengobatan from '../assets/image/pengobatan.jpg';
import "../App.css";
import { Link } from "react-router-dom";
import HeaderOff from "../notlogin/header";

function Landing() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        axios.get("http://localhost:5000/obat", { withCredentials: 'true' })
            .then((response) => {
                setData(response.data);
                console.log(data)
            });
    };

    const Layanan = [{
        nama: "Pengobatan",
        label: "pengobatan",
        link: "/login"
    }, {
        nama: "Alternatif",
        label: "alternatif",
        link: "/login"
    }, {
        nama: "Jasa Populer",
        label: "populer",
        link: "/login"

    }, {
        nama: "Marketplace",
        label: "marketplace",
        link: "/login"
    }];
    return (
        <div>
            <HeaderOff />
            <div>
    
                <Carousel activeIndex={index} onSelect={handleSelect} >

                    <Carousel.Item >
                        <img style={{ height: "760px" }}
                            className="d-block w-100"
                            src={dua}
                            url
                            alt="First slide"
                        />
                        <Carousel.Caption style={{ color: "black" }} className="shadow p">
                            {/* <h3>Slide Pertama</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{ height: "760px" }}
                            className="d-block w-100"
                            src={satu}
                            alt="Second slide"
                        />

                        <Carousel.Caption style={{ color: "black" }} className="shadow p">
                            {/* <h3>Slide Kedua</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{ height: "760px" }}
                            className="d-block w-100"
                            src={tiga}
                            alt="Third slide"
                        />

                        <Carousel.Caption style={{ color: "black" }} className="shadow p">
                            {/* <h3>Slide Ketiga</h3>
                            <p>
                                deskripsi
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className=" d-flex flex-row mt-5 mb-5">
                    <Container className="" >
                        <Row className="justify">
                            {Layanan.map((item, key) =>
                                <Col  xs={12} md={6} lg={3} >
                                    <Card  className=" d-flex flex-row justify-content-between " key={key} >
                                        <Card.Body style={{background: '#13653f'}}>
                                            <Card.Title style={{ fontSize: '15px' }}>{item.nama}</Card.Title>
                                            {/* <Card.Text>
                                            {item.label}
                                        </Card.Text> */}
                                            <Button variant="primary" href={item.link}>Go</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )}
                        </Row>
                    </Container>
                </div>

            <Container className="shadow  mb-5 blue" >
                <h3 className="text-center p-5">Informasi Tanaman dan Obat Tradisional</h3>
                <Row className="g-4">
                    {data.map((_, idx) => (
                        <Col xs={12} md={12} lg={12} >
                            <Card className="shadow rounded-3 p-2">
                                {/* <Card.Img variant="top" src="holder.js/100px160"/> */}
                                <Card.Body key={idx}>
                                    <Card.Title>{_.latin_name}</Card.Title>
                                    <Card.Title>{_.local_nama}</Card.Title>
                                    <Card.Text>
                                        {_.description}
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