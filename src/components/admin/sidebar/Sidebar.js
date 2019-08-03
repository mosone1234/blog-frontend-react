import React, { Component } from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
    render() {
        return (
            <div>
                <div className="bg-light border-light" id="sidebar-wrapper">
                    <div className="sidebar-heading">
                        Start Boostrap
                    </div>
                    <div className="list-group list-group-flush">
                        <span className="list-group-item list-group-item-action bg-light">
                            <Link to="/admin/users"></Link>
                            Users
                        </span>
                        <span className="list-group-item list-group-item-action bg-light">
                            <Link to="/admin/articles">
                                Articles
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sidebar;