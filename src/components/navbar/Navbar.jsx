import React from 'react'
import './navbar.css'
import logo from './logo.png'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg sticky-top">
            <div className="container-fluid align-items-center ">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="Atiman" />
                </a>
                <button className="navbar-toggler align-items-center" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#landpg">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about-bg">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#assflow">Flow</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contactus">Contact Us</a>
                        </li>
                        <li>
                            <a href="https://atiman.gitbook.io/atiman-documentation" target="_blank"
                                className="btn ms-2 text-white">WHITEPAPER</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
