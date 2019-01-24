import React from "react";
import "./Navbar.css"

// eslint-disable-next-line
const Navbar = props => (
    <nav className="navbar navbar-expand-xl bg-info">
        {/* <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
            <ul class="navbar-nav mr-auto">
                <li class = "nav-item">
                    <img src = "./favicon.ico" alt = "react_icon" />
                </li>
                <li class = "nav-item active">
                    <a class="nav-link" href="#">Vivillon Match Game</a>
                </li>
            </ul>
        </div> */}
        <img id = "icon" className = "navbar-brand" src = "./favicon.ico" alt = "react_icon" />
        <ul className="nav navbar-nav navbar-left">
            <li id = "game-title" className="nav-item">
                {// eslint-disable-next-line
                }<a className="navbar-brand" href="#">Vivillon Match Game</a>
            </li>
        </ul>

        <ul className="nav navbar-nav navbar-right">
            <li id = "score" className="nav-item">
                <p className="navbar-text">Score: <span>{props.score}</span></p>
            </li>
            <li id = "highscore" className="nav-item">
                <p className="navbar-text">High Score: <span>{props.highScore}</span></p>
            </li>
        </ul>

    </nav>
);

export default Navbar;