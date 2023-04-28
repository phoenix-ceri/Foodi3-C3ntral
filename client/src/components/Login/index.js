import React, { useState } from "react";
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import { Link, Router, useNavigate } from 'react-router-dom'
import { LOGIN } from '../../utils/mutations'
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./index.scss";

const Login = (props) => {
  // const navigate = useNavigate();

  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
      // //this is where we redirect
      // return navigate('/about');
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
      <Container className="login-container">
        <Row>
          <Col m={{ span: 6, offset: 3 }} className="login-screen-form">
            <h2 className="mb-3">Login</h2>
            <Form onSubmit={handleFormSubmit}>
              <Form.Group >
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  id="email"
                  placeholder="Enter email"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group >
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

    //   <div className="container my-1">

    //   <h2>Login</h2>
    //   <form onSubmit={handleFormSubmit}>
    //     <div className="flex-row space-between my-2">
    //       <label htmlFor="email">Email address:</label>
    //       <input
    //         placeholder="youremail@test.com"
    //         name="email"
    //         type="email"
    //         id="email"
    //         onChange={handleChange}
    //       />
    //     </div>
    //     <div className="flex-row space-between my-2">
    //       <label htmlFor="pwd">Password:</label>
    //       <input
    //         placeholder="******"
    //         name="password"
    //         type="password"
    //         id="pwd"
    //         onChange={handleChange}
    //       />
    //     </div>
    //     {error ? (
    //       <div>
    //         <p className="error-text">The provided credentials are incorrect</p>
    //       </div>
    //     ) : null}
    //     <div className="flex-row flex-end">
    //       <button type="submit">Submit</button>
    //     </div>
    //   </form>
    //   <p>
    //   <Link to="/signup">← Go to Signup</Link>
    //   </p>
    // </div>
  );
};

export default Login;
