import React from "react";
import {Link , NavLink } from "react-router-dom";
import Logo from './../assets/imgs/logo.png';


export default function Header(){
    return(
        <header>
            <div className='container'>
                <div className="row">
                    <div className="col-md-3">
                        <div className="logo">
                            <Link to ="/">
                                <img src={Logo} alt="" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <nav className='navbar'>
                            <ul className='navbar-list'>
                                <li className='navbar-item'>
                                    <NavLink to="/">Home</NavLink>
                                </li>
                                <li className='navbar-item'>
                                    <NavLink to="/about">About Us</NavLink>
                                </li>
                                <li className='navbar-item'>
                                    <NavLink to="/services">Services</NavLink>
                                </li>
                                <li className='navbar-item'>
                                    <NavLink to="/gallery">Gallery</NavLink>
                                </li>
                                <li className='navbar-item'>
                                    <NavLink to="/testimonials">Testimonials</NavLink>
                                </li>
                                <li className='navbar-item'>
                                    <NavLink to="/contact">Contact</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}