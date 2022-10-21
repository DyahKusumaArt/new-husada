import React from "react";
import { useState } from "react";
import { Card, Row, Col, } from "react-bootstrap";
import * as KalenderJawa from "@kalenderjawa/pustaka";
import HeaderOff from "../notlogin/header";

const Kjawa = () => {
    const [kjawa, setK] = useState([]);
    const achoba = KalenderJawa.sasi('mukarom', 2022).then(({ k, s }) => { setK(s.get(k)) });
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    console.log(kjawa);
    const flatarray = kjawa.filter((d, key) => d);

    console.log(flatarray);
    return (
        <div>
            <div>
                <HeaderOff/>
            </div>
            <Row className="mt-5">
                <Row >
                    <div className="d-flex justify-content-between ">
                        <div></div>
                        <h1 className="pb-4"> Kalender Jawa</h1>
                        <div className="text-center">Kalender Bali</div>
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

export default Kjawa;