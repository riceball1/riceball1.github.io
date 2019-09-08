import React from 'react';
import './Nav.scss';


const Nav = () => {
    return (
        <ul className="nav">
            <li><a className="active" href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#connect">Connect</a></li>
        </ul>
    )
}

export default Nav;