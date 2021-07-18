import React from 'react';
import './home.css'
import Button from 'react-bootstrap/Button';

export default function Login() {
    return (
        <main>
            <h1 className='mainTitle'>
                <p>Kindred</p>
            </h1>
            <p className='mainSubTitle'>
                <p>Spark an Interest</p>
            </p>
            <div className="d-grid gap-2">
                <Button id='login' variant="secondary" size="lg">
                    Login
                </Button>
                <Button id='signup' variant="secondary" size="lg">
                    Sign Up
                </Button>
            </div>
        </main>
    );
}