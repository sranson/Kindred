import React, { useState } from "react";
import "./login.css";
import { Form, Button } from "react-bootstrap";

import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";

export default function Login() {
  // set initial form state
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  //executable LOGIN_USER mutation
  const [loginUser, { error }] = useMutation(LOGIN_USER, {
    update(proxy, result) {
      //   console.log(result);
    },
    variables: values,
  });

  const onSubmit = async (event) => {
    event.preventDefault();
    // loginUser();

    try {
      const { data } = await loginUser({ variables: { ...values } });

      // console.log(data);

      if (!data) {
        throw new Error("something went wrong!");
      }

      Auth.login(data.login.token);
    } catch (err) {
      console.error(err);
      // setShowAlert(true);
    }

    setValues({
      email: "",
      password: "",
    });
  };

  return (
    <main className="main">
      <h1 className="loginTitle">
        <p>Kindred</p>
      </h1>
      <p className="loginSubTitle">
        <p>Spark an Interest</p>
      </p>
      <div>
        <Form onSubmit={onSubmit} noValidate>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label id="loginEmail">Email</Form.Label>
            <Form.Control id="inputUser"
              type="email"
              placeholder="Your email address"
              name="email"
              value={values.email}
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formBasicPassword"
          >

            <Form.Label id="loginPassword">Password</Form.Label>
            <Form.Control id="inputPassword"
              type="password"
              placeholder="Your password"
              name="password"
              value={values.password}
              onChange={onChange}
            />
          </Form.Group>
          <div className="d-grid gap-2">
            <Button id="button" type="submit" variant="secondary" size="lg">
              Login
            </Button>
          </div>
          <div className="d-grid gap-2">
            <Button id="button" type="submit" href="../signup" variant="secondary" size="lg">
              Go to Sign Up
            </Button>
          </div>
        </Form>
      </div>
    </main>
  );
}
