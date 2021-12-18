import './button.css';
import React from 'react';
import { Link } from 'react-router-dom';


 export function Button() {
    return (
        <div>
            <Link to='login'>
            <button className='btn'>Admin Login</button>
            </Link>
        </div>
    );
}

