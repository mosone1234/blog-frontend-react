import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="navbar-brand"><span>Navbar</span></div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <div className="nav-link">
                                <Link to="/">home</Link>
                                <span className="sr-only">(current)</span></div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link">
                                <Link to="/dashboard">dashboard</Link>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <div className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span>Dropdown</span>
                            </div>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <span className="dropdown-item">Action</span>
                                <span className="dropdown-item">Another action</span>
                                <div className="dropdown-divider"></div>
                                <span className="dropdown-item">Something else here</span>
                            </div>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link disabled">Disabled</span>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        );
    }
}

export default Navbar;