import React from 'react'
import { Link } from 'react-router-dom'
import '../../components/navbar/index.css'

export default function Navbar() {
    return (
<div className="m-4">
    <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
            <a href="#" className="navbar-brand">Brand</a>
            <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarCollapse">
                <div className="navbar-nav">
                    <a href="#" className="nav-item nav-link active">How to play</a>
                    <a href="#" className="nav-item nav-link">Token</a>
                    <a href="#" className="nav-item nav-link">Pogs</a>
                    <a href="#" className="nav-item nav-link">Help</a>
                </div>
            </div>
        </div>
    </nav>
</div>
    )
}