import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <div className="logo">
                <h1>Quiz Hunter</h1>
            </div> 
            <div className="nav">
                {/* <NavLink to='/'>Home</NavLink> */}
                <NavLink to='/'>Topics</NavLink>
                <NavLink to='statistics'>Statistics</NavLink>
                <NavLink to='blog'>Blog</NavLink>
            </div> 
        </div>
    );
};

export default Header;