import React, { Component } from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
    render() {
        return (
            <div>
                <div className="bg-light border-light" id="sidebar-wrapper">
                    <div className="sidebar-heading">
                        <div className="justify-content-center d-flex">
                            Start Boostrap
                        </div>
                    </div>
                    <div className="list-group list-group-flush">
                        <span className="list-group-item list-group-item-action bg-light">
                            <Link to="/admin/users">
                                Users
                            </Link>
                        </span>
                        <span className="list-group-item list-group-item-action bg-light">
                            <Link to="/admin/articles">
                                Articles
                            </Link>
                        </span>
                        <span className="list-group-item list-group-item-action bg-light">
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sidebar;