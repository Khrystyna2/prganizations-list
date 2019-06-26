import React from 'react';
import { NavLink, Link} from 'react-router-dom';


function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
            <Link to='/' className="navbar-brand" href="#">LOGO</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <NavLink exact to='/' activeClassName='active' className="nav-link">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/about'  activeClassName='active' className="nav-link">About</NavLink>
                </li>
            </ul>
            </div>
        </div>
    </nav>
  );
}

export default Header;