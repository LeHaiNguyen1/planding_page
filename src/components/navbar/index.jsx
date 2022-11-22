import React from 'react'
import { Link } from 'react-router-dom'
import '../../components/navbar/index.scss'

export default function Navbar() {
    return (
        <nav class="navbar navbar-expand-sm navbar-dark align-items-start pr-5 pl-5">
            <a class="logo" href="#"> <img src={require('../../assets/images/Logo.svg').default} /></a>
            <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse justify-content-end align-content-end" id="collapsibleNavId">
                <ul class="navbar-nav mt-5 mt-lg-0 ">
                    <li class="nav-item">
                        <a class="nav-link active" href="#" aria-current="page">How to play <span class="visually-hidden">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-light" href="#">Token</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-light" href="#">Pogs</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-light" href="#">Help</a>
                    </li>
                    <li class="nav-item">
                        {/* <a class="nav-link" href="#"><button class="btn btn-violet btn-rounded waves-effect waves-light my-2 my-sm-0" type="submit">Contact Us</button></a> */}
                        <a class="btn btn-violet btn-rounded waves-effect waves-light my-2 my-sm-0" href="#" role="button">Contact Us</a>
                    </li>
                </ul>
            </div>
        </nav>
        // <div className="m-4">
        //     <nav className="navbar navbar-expand-lg navbar-light">
        //         <div className="container-fluid">
        //             <a href="#" className="navbar-brand"><img src={require('../../assets/images/Logo.svg').default} /></a>
        //             <button type="button" className="" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        //                 <span className="navbar-toggler-icon"></span>
        //             </button>
        //             <div className="collapse navbar-collapse justify-content-end" id="navbarCollapse">
        //                 <div className="navbar-nav">
        //                     <a href="#" className="nav-item nav-link text-white active">How to play</a>
        //                     <a href="#" className="nav-item nav-link text-white">Token</a>
        //                     <a href="#" className="nav-item nav-link text-white">Pogs</a>
        //                     <a href="#" className="btn-item  btn btn-primary">Contact Us</a>
        //                 </div>
        //             </div>
        //         </div>
        //     </nav>
        // </div>
    )
}