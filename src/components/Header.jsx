import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  
    return (
        <header className="bg-primary text-white py-3">
            <div className="container d-flex justify-content-between">
                <h3 className="h4">My Website</h3>
                <nav>
                    <ul className="nav">
                        <li>
                            <Link to="/maintodoitems" className="nav-link text-white">ToDo App</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" className="nav-link text-white">Login</Link>
                        </li>
                        <li>
                            <Link to="/register" className="nav-link text-white">Register</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
  };

export default Header
