import React from "react";

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
        <img className = "navbar-brand" src = "./favicon.ico" alt = "react_icon" />
        {// eslint-disable-next-line
        }<a className="navbar-brand" href="#">Vivillon Match Game</a>

        <ul className="nav navbar-nav navbar-right">
            <li className="nav-item">
                <p className="navbar-text">Score: <span>{props.score}</span></p>
            </li>
            <li className="nav-item">
                <p className="navbar-text">High Score: <span>{props.highScore}</span></p>
            </li>
        </ul>

    </nav>
);

export default Navbar;