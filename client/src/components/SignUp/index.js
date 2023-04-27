import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import { ADD_USER } from "../../utils/mutations";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./index.scss"

const SignupScreen = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        name: formState.name,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="signup-screen">
      <Container className="signup-container">
        <Row>
          <Col md={{ span: 6, offset: 3 }} className="signup-screen-form">
            <h2 className="mb-3">Sign up</h2>
            <Form onSubmit={handleFormSubmit}>
              <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  name="firstName"
                  type="text"
                  id="firstName"
                  placeholder="Enter your first name"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  name="lastName"
                  type="text"
                  id="lastName"
                  placeholder="Enter your last name"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  id="email"
                  placeholder="Enter email"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="password"
                  type="password"
                  id="pwd"
                  placeholder="Password"
                  onChange={handleChange}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
            <p className="mt-3 mb-0">
              Already have an account? <Link to="/login">← Go to Login</Link>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignupScreen;
