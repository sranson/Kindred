import React, { useState } from "react";
import "./signup.css";
import { Form, Button } from "react-bootstrap";

export default function Signup() {
  // set initial form state
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <main className="main">
      <h1 className="signUpTitle">
        <p>Kindred</p>
      </h1>
      <p className="signUpSubTitle">
        <p>Spark an Interest</p>
      </p>
      <div>
        <Form onSubmit={onSubmit} noValidate>
          <Form.Group id="username" className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              id="inputUser"
              placeholder="Enter username"
              type="text"
              name="username"
              value={values.username}
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group id="email" className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              id="inputEmail"
              type="email"
              placeholder="Your email address"
              name="email"
              value={values.email}
              onChange={onChange}
            />
            <Form.Text id="warning" className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group
            id="password"
            className="mb-3"
            controlId="formBasicPassword"
          >
            <Form.Label>Password</Form.Label>
            <Form.Control
              id="inputPassword"
              type="password"
              placeholder="Your password"
              name="password"
              value={values.password}
              onChange={onChange}
            />
          </Form.Group>
        </Form>
      </div>
      <div id="button" className="d-grid gap-2">
        <Button type="submit" variant="secondary" size="lg">
          Sign Up
        </Button>
      </div>
    </main>
  );
}
