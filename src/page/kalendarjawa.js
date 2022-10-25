import React from "react";
import { useState ,useEffect} from "react";
import { Card, Row, Col, } from "react-bootstrap";
import * as KalenderJawa from "@kalenderjawa/pustaka";
import HeaderOff from "../notlogin/header";

const Kjawa = () => {
    const current = new Date();
    const [coba, setCoba] = useState("");
    const bulan = (current.getMonth());
    console.log(bulan)
    console.log(coba);
    const [kjawa, setK] = useState([]);

    const achoba = KalenderJawa.sasi(coba, 2022).then(({ k, s }) => { setK(s.get(k)) });
    console.log(kjawa);
    const flatarray = kjawa.filter((d, key) => d);
    console.log(flatarray);

    useEffect(() => {
        if (bulan == 1) {
            setCoba('mukarom');
        } else if (bulan == 2) {
            setCoba('sapar');
        } else if (bulan == 3) {
            setCoba('robiulawal');
        } else if (bulan == 4) {
            setCoba('robiulakir');
        } else if (bulan == 5) {
            setCoba('jumadilawal');
        } else if (bulan == 6) {
            setCoba('jumadilakir');
        } else if (bulan == 7) {
            setCoba('rojab');
        } else if (bulan == 8) {
            setCoba('sakban');
        } else if (bulan == 9) {
            setCoba('romadon');
        } else if (bulan == 10) {
            setCoba('sawal');
        } else if (bulan == 11) {
            setCoba('dulkodah');
        } else if (bulan == 12) {
            setCoba('dulkijah');
        }
    }, [coba]);




    return (
        <div>
            <div>
                <HeaderOff />
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