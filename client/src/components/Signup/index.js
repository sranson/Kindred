import React from 'react';
import './signup.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

export default function Login() {
    return (
        <main className='main'>
            <h1 className='signUpTitle'>
                <p>Kindred</p>
            </h1>
            <p className='signUpSubTitle'>
                <p>Spark an Interest</p>
            </p>
            <div>
                <Form>
                    <Form.Group id='username' className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control id='inputUser' type="username" placeholder="Enter username" />
                    </Form.Group>
                    <Form.Group id='email' className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control id='inputEmail' type="email" placeholder="Enter email" />
                        <Form.Text id='warning' className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group id='password' className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control id='inputPassword' type="password" placeholder="Password" />
                    </Form.Group>
                </Form>
            </div>
            <div id='button' className="d-grid gap-2">
                <Button variant="secondary" size="lg">
                    Sign Up
                </Button>
            </div>
        </main>
    );
}
