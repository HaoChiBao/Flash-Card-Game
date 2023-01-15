import React from "react";
import './landing.css'
import { Link } from "react-router-dom";


function Landing() {
    window.onload = function () {
        const signUp = document.querySelector('.sign-up');
        const login = document.querySelector('.login');

        signUp.addEventListener('click', () => {
            window.location.assign('/register');
        })

        login.addEventListener('click', () => {
            window.location.assign('/login');
        })
    }

    return (
        <div className="bodyFr">
            <div className="container">
                <div className="text-section">
                    <div className="title1">Study Sprint</div>
                    <div className="description"> Elevate your learning with active recall and mini-games</div>
                    {/* <Link to="/register"> */}
                    <div>
                        <button className="sign-up" >Sign Up</button>
                    </div>
                    {/* </Link> */}

                    {/* <Link to="login"> */}
                    <div>
                        <button className="login" >Login</button>
                    </div>
                    {/* </Link> */}
                </div>
                <div>
                    <img src="mainslayer.png" />
                </div>
            </div>
        </div>
    );


}

export default Landing;