import React from 'react'
import './walkincrypto.scss'

export default function Walkincrypto() {
    return (
        <section id="walkincrypto" className='mt-5 pt-4 pb-4' height="60rem">
            <div className="container btn-item">
                <div className="row d-flex justify-content-center pt-lg-5 ml-5 pl-5">
                    <div className="col-md-2 col-xl-4 mb-4 mb-xl-0">
                        <div className="position-relative">
                            <img src={require('../../assets/images/Blingcharge.svg').default} className="w-100" alt="" />
                        </div>
                    </div>
                </div>
                <div className="row d-flex justify-content-center pt-lg-5 m-2 p-2">
                    <div className="d-flex justify-content-center mb-xl-0">
                        <div className="position-relative">
                            <ul className="list-unstyled text-light d-grid text-center row">
                                <li><h1>Just Charge and Earn</h1></li>
                                <li>You can get started with your marketing automation in a few minutesand you can send email newsletter </li>
                                <li>with your audienceYou can get started with your marketing automation in a few</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}