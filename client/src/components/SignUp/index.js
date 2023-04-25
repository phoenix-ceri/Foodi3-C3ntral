import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./index.scss"

const SignupScreen = () => {
  return (
    <div className="signup-screen">
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }} className="signup-screen-form">
            <h2 className="mb-3">Sign up</h2>
            <Form>
              <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Form.Group controlId="formBasicPasswordConfirm">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
            <p className="mt-3 mb-0">
              Already have an account? <a href="/login">Log in</a>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignupScreen;
