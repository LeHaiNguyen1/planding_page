import React from 'react'
import { Link } from 'react-router-dom'
import '../../components/navbar/navbar.scss'

export default function Navbar() {
    return (
        <nav class="navbar navbar-expand-sm navbar-dark align-items-start pr-5 pl-5">
            <a class="logo" href="#"> <img src={require('../../assets/images/Logo.svg').default} class="w-100"/></a>
            <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse justify-content-end align-content-end" id="collapsibleNavId">
                <ul class="navbar-nav mt-5 mt-lg-0 ">
                    <li class="nav-item">
                        <a class="btn btn-rounded waves-effect waves-light my-2 my-sm-0 text-light active" href="#" aria-current="page">How to play <span class="visually-hidden">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="btn btn-rounded waves-effect waves-light my-2 my-sm-0 text-light" href="#">Token</a>
                    </li>
                    <li class="nav-item">
                        <a class="btn btn-rounded waves-effect waves-light my-2 my-sm-0 text-light" href="#">Pogs</a>
                    </li>
                    <li class="nav-item">
                        <a class="btn btn-rounded waves-effect waves-light my-2 my-sm-0 text-light" href="#" role="button">Help</a>
                    </li>
                    <li class="nav-item">
                        <a class="btn btn-violet btn-rounded text-light " href="#" role="button">Contact Us</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}