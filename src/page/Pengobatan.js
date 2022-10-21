
import { Form, Button, Row, Navbar, Container, Nav, Col, Card } from "react-bootstrap";
import React from "react";
import "../App.css"
import Headerlog from "../aflogin/header";
const Pengobatan = () => {
    const jasa = [{
        nama: "Dukun",
        label: "Jasa",
        link: "/dukun"

    }, {
        nama: "Balian",
        label: "konsultasi",
        link: "/balian"
    }, {
        nama: "Penghusada",
        label: "alternatif",
        link: "/penghusada"
    }, {
        nama: "Tabib",
        label: "populer",
        link: "/tabib"
    }];

    return (
        <div style={{ height: '768px' }}>
            <div><Headerlog/></div>
            <div style={{ background: "#212121", height: '100%' }} >
                <br></br>
                <h3 className="text-lg-center text-white">List Pengobatan</h3>
                <hr />
                <Container className="mb-5 d-flex ">
                    <Row xs={1} md={2} className="">
                        {jasa.map((item, key) =>
                            <Col style={{ width: '50%' }} className='text-center px-5'>
                                <Card className="obtoff mb-5" key={key} >
                                    <Card.Body>
                                        <Card.Title style={{ fontSize: '15px' }}>{item.nama}</Card.Title>
                                        <Card.Text>
                                            {item.label}
                                        </Card.Text>
                                        <Button variant="primary" href={item.link}>Go somewhere</Button>
                                    </Card.Body>
                                </Card>

                            </Col>
                        )}
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Pengobatan;