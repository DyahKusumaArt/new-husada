import React from "react";
import { useState } from "react";
import { Card, Row, Col,  } from "react-bootstrap";
import * as KalenderJawa from "@kalenderjawa/pustaka";

const Kjawa = () => {
    const [kjawa, setK] = useState([]);
    const [neptu, setHari] = useState([]);
    const achoba = KalenderJawa.sasi('mukarom', 2022).then(({ k, s }) => { setK(s.get(k)) });
    
    console.log(kjawa);
    const flatarray = kjawa.filter((d,key)=>d);
    
    console.log(flatarray);
    return (
        <div>
            <Row className="mt-5">
                {kjawa.map((data, index) => (
                    <Col md="2" className="mb-5 px-4">
                        <Card key={`data-${index}`} className="produk__card">
                            <Card.Body>
                                <h3 className='product__subtitle'>{Object.keys(data)} </h3>
                                <h2 className='product__title'>{Object.keys(data)}</h2>
                                <p className='product__description '>
                                    
                                </p>
                                <div className="flex">
                                    <span className='product__price-new'>{data.neptu}</span>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Kjawa;