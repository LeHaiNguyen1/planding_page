import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.scss'

export default function Navbar() {
    return (
        <section>
            <nav className="container navbar navbar-expand-sm navbar-dark align-items-start pr-5 pl-5">
                <a className="logo" href="#"> <img src={require('../../assets/images/Logo.svg').default} className="w-100" /></a>
                <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse justify-content-end align-content-end" id="collapsibleNavId">
                    <ul className="navbar-nav mt-5 mt-lg-0 ">
                        <li className="nav-item">
                            <a className="btn btn-rounded waves-effect waves-light my-2 my-sm-0 text-light active" href="#" aria-current="page">How to play <span className="visually-hidden">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="btn btn-rounded waves-effect waves-light my-2 my-sm-0 text-light" href="#">Token</a>
                        </li>
                        <li className="nav-item">
                            <a className="btn btn-rounded waves-effect waves-light my-2 my-sm-0 text-light" href="#">Pogs</a>
                        </li>
                        <li className="nav-item">
                            <a className="btn btn-rounded waves-effect waves-light my-2 my-sm-0 text-light" href="#" role="button">Help</a>
                        </li>
                        <li className="nav-item">
                            <a className="btn btn-violet btn-rounded text-light " href="#" role="button">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </section>
    )
}