
import { Form, Button, Row } from "react-bootstrap";
import React from "react";
import login from '../assets/image/login.jpg';
import "../App.css"
const Login = () => {
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
                    <img src={login} alt="Login" />
                </div>
                <Form className="login-form"
                >
                    <p className="form-title">Welcome back</p>
                    <p>Login to Bali Husada</p>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Please input your email" required />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder=" Please input your Password" required />
                    </Form.Group>

                    {/* <antd.Form.Item name="remember" valuePropName="checked">
                        <antd.Checkbox>Remember me</antd.Checkbox>
                    </antd.Form.Item> */}

                    <Row className="mx-auto">
                        <Button variant="success" href="/" type="submit">
                            Save
                        </Button>
                    </Row>

                    <div className="mt-4">Tidak Punya Akun? <a href="/register">Register</a></div>
                </Form>
            </div>
        </div>
    );
};

export default Login;