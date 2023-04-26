import React, { useState } from "react";
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom'
import { LOGIN } from '../../utils/mutations'
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./index.scss";

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: ''});
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="login-screen">
      <Container>
        <Row>
          <Col m={{ span: 6, offset: 3 }} className="login-screen-form">
            <h2 className="mb-3">Login</h2>
            <Form onSubmit={handleFormSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                name="email" 
                type="email" 
                id="email" 
                placeholder="Enter email" 
                onChange={handleChange} 
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                name="password" 
                type="password" 
                id="pwd" 
                placeholder="Password" 
                onChange={handleChange} 
                />
              </Form.Group>
              <br />
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
            <p className="mt-3 mb-0">
            Don't have an account? <Link to="/signup">← Go to Signup</Link>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
