
import { Form, Button, Row } from "react-bootstrap";
import React from "react";
import login from '../assets/image/husada.jpeg';
import "../App.css"
const Register = () => {
    const onFinish = values => {
        console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="login-page">
            <div className="login-box">
                <div className="illustration-wrapper">
                    <img src={login} alt="Login" style={{height:'640px'}}/>
                </div>
                <Form className="login-form"
                >
                    <p className="form-title">Create Account</p>
                    <p>Register Here</p>
                    <Form.Group className="mb-2" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Please input your email" required />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder=" Please input your Password" required />
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="formBasicNama">
                        <Form.Label>Nama Lengkap</Form.Label>
                        <Form.Control type="text" placeholder=" Please input your Name" required />
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="formBasicNumber">
                        <Form.Label>No HP</Form.Label>
                        <Form.Control type="number" placeholder=" Please input your number" required />
                    </Form.Group>

                    {/* <antd.Form.Item name="remember" valuePropName="checked">
                        <antd.Checkbox>Remember me</antd.Checkbox>
                    </antd.Form.Item> */}

                    <Row className="mx-auto">
                        <Button variant="success" size="lg"  href="/login" type="submit" >
                            Save
                        </Button>
                    </Row>

                    <div className="mt-3">Punya akun? <a href="/login">Login</a></div>
                </Form>
            </div>
        </div>
    );
};

export default Register;