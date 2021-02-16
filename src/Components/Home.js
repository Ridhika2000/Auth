import React from 'react'
import {NavLink } from 'react-router-dom';

const Home = () => {
    
    return (
        <>
        <ul>
            <li><NavLink to="/signup">SignUp </NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
        </ul>
        
        
    </>
    )
}

export default Home;
