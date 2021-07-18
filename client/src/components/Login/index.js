import React from 'react';
import './login.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

export default function Login() {
    return (
        <main className='main'>
            <h1 className='title'>
                <p>Kindred</p>
            </h1>
            <p className='subtitle'>
                <p>Spark an Interest</p>
            </p>
            <div>
                <Form>
                    <Form.Group id='username' className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control id='inputUser' type="username" placeholder="Enter username" />
                    </Form.Group>
                    <Form.Group id='password' className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control id='inputPassword' type="password" placeholder="Password" />
                    </Form.Group>
                </Form>
            </div>
            <div id='button' className="d-grid gap-2">
                <Button id='login' variant="secondary" size="lg">
                    Login
                </Button>
            </div>
        </main>
    );
}
