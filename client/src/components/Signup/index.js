import React, { useState } from "react";
import "./signup.css";
import { Form, Button } from "react-bootstrap";

import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";

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

  //executable ADD_USER mutation
  const [addUser, { error }] = useMutation(ADD_USER, {
    update(proxy, result) {
      // console.log(result);
    },
    variables: values,
  });

  const onSubmit = async (event) => {
    event.preventDefault();
    // addUser();

    try {
      const { data } = await addUser({ variables: { ...values } });

      console.log(data);

      if (!data) {
        throw new Error("something went wrong!");
      }

      Auth.login(data.addUser.token);
    } catch (err) {
      console.error(err);
      // setShowAlert(true);
    }
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
              type="password"
              placeholder="Your password"
              name="password"
              value={values.password}
              onChange={onChange}
            />
          </Form.Group>
          <div id="button" className="d-grid gap-2">
            <Button type="submit" variant="secondary" size="lg">
              Sign Up
            </Button>
          </div>
        </Form>
      </div>
    </main>
  );
}
