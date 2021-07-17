import React from 'react';
import './login.css'

export default function Login() {
    return (
        <main>
            <h1 className='title'>
                <p>Kindred</p>
            </h1>
            <h2 className='subtitle'>
                <p>Spark an Interest</p>
            </h2>
            <div>
                <Button className='login' variant="secondary" size="lg">
                    Login
                </Button>
                <Button className='signup' variant="secondary" size="lg">
                    Sign Up
                </Button>
            </div>
        </main>
    );
}