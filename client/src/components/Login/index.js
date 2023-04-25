import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./index.scss";

const Login = () => {
  return (
    <div className="login-screen">
      <Container>
        <Row>
          <Col m={{ span: 6, offset: 3 }} className="login-screen-form">
            <h2 className="mb-3">Login</h2>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
<br/>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
            <p className="mt-3 mb-0">
              Don't have an account? <a href="/signup">Sign up</a>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;