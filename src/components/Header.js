import React from "react";
import { NavLink, Link } from "react-router-dom";

function Header() {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-primary">
            <div className="container">
                <Link to="/" className="navbar-brand" href="#">
                    LOGO
                </Link>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <NavLink
                            exact
                            to="/"
                            activeClassName="active"
                            className="nav-link"
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/about"
                            activeClassName="active"
                            className="nav-link"
                        >
                            About
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
