import React from "react";
import { useState } from "react";
import { Card, Row, Col, } from "react-bootstrap";
import { BalineseDate } from "balinese-date-js-lib";
import HeaderOff from "../notlogin/header";

const Kbali = () => {
    const now = new BalineseDate(new Date());
    const baru = new BalineseDate();
    console.log(now)
    console.log(baru)
    console.log(now.saka); // show the saka
    console.log(now.sasih.name); // show the sasih name
    console.log(now.wuku.name); // show the wuku name
    return (
        <div>
            <div>
                <HeaderOff/>
            </div>
            <Row className="mt-5">
                <Row >
                    <div className="d-flex justify-content-between ">
                        <div></div>
                        <h1 className="pb-4"> Kalender Bali</h1>
                        <div className="text-center">Kalender Jawa</div>
                    </div>

                </Row>
                {kjawa.map((data, index) => (
                    <Col md="2" className="maxi mb-4 px-4">
                        <Card key={`data-${index}`} className="kal shadow">
                            <Card.Body className="text-center">
                                <h3 >{Object.keys(data)} </h3>
                                <h2 className='product__title'>{data[index + 1].dinten}</h2>
                                <p className='product__description '>
                                    {data[index + 1].neptu} <span > {data[index + 1].pasaran} </span>   
                                </p>

                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <div>
                
            </div>
        </div>
    );
};

export default Kbali;