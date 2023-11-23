import React from "react";
import './Login.css';

function LogIn() {
    return (
        <div className="login">
            <div className="logo">EAMS</div>
            <form>
                <h2>Log In</h2>
                <div className="fields-container">
                    <div>
                        <i class="fa-solid fa-user"></i>
                        <input type="text" placeholder="ID"/>
                    </div>
                    <div>
                        <i class="fa-solid fa-lock"></i>
                        <input type="password" placeholder="Password"/>
                    </div>
                </div>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default LogIn;