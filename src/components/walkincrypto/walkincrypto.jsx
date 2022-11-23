import React from 'react'
import './walkincrypto.scss'

export default function Walkincrypto() {
    return (
        <section id="walkincrypto" className='' height= "60rem">
            <div className="container">
                <div className='a'>
                    <div className="row d-flex justify-content-center pt-lg-5 m-4 p-4">
                        <div className="col-md-2 col-xl-4 mb-4 mb-xl-0">
                            <div className="position-relative">
                                <img src={require('../../assets/images/Blingcharge.svg').default} className="w-100" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center pt-lg-5 m-4 p-4">
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
            </div>

            {/* <div className="container">
                <div className="row d-flex align-items-center justify-content-center">
                    <div className="col-xl-5">
                        <img src={require('../../assets/images/Blingcharge.svg').default} className="w-100" alt="" />
                    </div>
                </div>
                <div className="row d-flex align-items-center justify-content-center">
                    <div className="col-xl-7 ">
                        <ul className="list-unstyled text-light d-grid text-center row mt-5 pt-2">
                            <li><h1>Just Charge and Earn</h1></li>
                            <li>You can get started with your marketing automation in a few minutesand you can send email newsletter with your audienceYou can get started with your marketing automation in a few</li>
                        </ul>
                    </div>
                </div>
            </div> */}
        </section>
    )
}
