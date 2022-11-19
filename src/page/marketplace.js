
import { Form, Button, Row, Navbar, Container, Nav, Col, Card } from "react-bootstrap";
import React from "react";
import profile from '../assets/image/error.png'
import "../App.css"
import Headerlog from "../aflogin/header";
const Marketplace = () => {
    const data = [{
        Nama: "Loloh Cemcem",
        Deskripsi: " Loloh cemcem seperti jamu",
        Price: '10000',
        stock: '5',
        Id: "1"
    }, 
    {
        Nama: "Loloh Kunyit",
        Deskripsi: " Loloh obat untuk sakit luka",
        Price: '5000',
        stock: '15',
        Id: "2"
    },
    {
        Nama: "Jahe Merah",
        Deskripsi: " Menghangatkan badan",
        Price: '10000',
        stock: '3',
        Id: "1"
    },{
        Nama: "temulawak",
        Deskripsi: " mengobati penyakit hepatitis",
        Price: '7000',
        stock: '7',
        Id: "1"
    },];
    return (
        <div >
           <Headerlog/>
            <div style={{ background: '', height: '100%' }}>
                <br></br>
                <p className="text-center text-dark">Marketplace</p>
                <hr />
                <Container className="mx-auto d-flex mt-5">
                    <Row  className="">
                        {data.map((item, key) =>
                            <Col xs={12} md={6} lg={4} className='text-center px-3'>
                                <Card className="obtoffe mb-5" key={key} >
                                    <div className="mt-3"><Card.Img variant="top" src={profile} style={{ height: '100px', width: '130px', borderRadius: '15%' }} /></div>
                                    <Card.Body>
                                        <Card.Title style={{ fontSize: '15px' }}>{item.Nama}</Card.Title>
                                        <Card.Text>
                                            {item.Deskripsi}
                                        </Card.Text>
                                        <div className="d-flex justify-content-between pt-3 px-3  ">
                                            <div>Stock: {item.stock}</div>
                                            
                                            <div>Price: {item.Price}</div>
                                        </div>
                                        <Button className="mt-3">
                                            Beli Sekarang
                                        </Button>
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

export default Marketplace;