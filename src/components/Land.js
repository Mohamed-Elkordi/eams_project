import React from "react";
import './Land.css';
import landImage from '../images/land-page.png'
import { NavLink } from "react-router-dom";

function Land() {
    return (
        <div className="land">
            {/* <p className="logo">EAMS</p> */}
            <div className="container">
                <div>
                    <h1>Employee's Affairs Management System</h1>
                    <NavLink className="link login" to="/login">Log In</NavLink>
                    <NavLink className="link new-company" to="/new-company">New Company</NavLink>
                </div>
                <div>
                    <img src={landImage} className="image" alt="employees"/>
                </div>
            </div>
        </div>
    )
}

export default Land;