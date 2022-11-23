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
                <div className="row d-flex justify-content-center pt-lg-5 ml-5 pl-5">
                    <div className="page-holder bg-gray-100">
                        <div className="row">
                            <div className="col-12 position-relative">
                                <h1 className="text-center fw-bold text-white">How to bling charge</h1>
                                <p className="text-center text-white">
                                    You can get started with your marketing automation in a few minutesand you can send email <br />
                                    newsletter with your audienceYou can get started with your marketing automation in a few
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
