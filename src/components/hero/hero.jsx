import React from 'react'
import '../hero/hero.scss'

export default function Hero() {
    return (
        <section id="hero" className="hero">
            <div className="container">
                <div className="row mt-2">
                    <div className="col-xl-5">
                        <div className="h-100 d-flex align-items-center justify-content-center">
                            <ul className="list-unstyled text-light d-grid">
                                <li>
                                    <h1 className="fs-1 fw-bold">Chanrge & Earn</h1>
                                </li>
                                <li>
                                    <p>
                                        You can get started with your marketing automation in a few minutesand you can
                                        send email newsletter with your audienceYou can get started with your marketing
                                        automation in a few
                                    </p>
                                </li>
                                <li>
                                    <div className="row">
                                        <div className="col">
                                            <button type="button" href="" className="btn btn-purple mb-3 text-light" id="import-material-supplier-modal">Explore now</button>
                                        </div>
                                        <div className="col">
                                            <button type="button" href="" className="btn btn-outline-light mb-3 text-light" id="import-material-supplier-modal">Explore now</button>
                                        </div>
                                        <div className="col-4">
                                            <img src={require('../../assets/images/Icon_Hero_02.svg').default} className="w-100" alt="" />
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="item-img col-xl-7 a">
                        <div className="row justify-content-center ">
                            <div className="img col-7">
                                <img src={require('../../assets/images/Phone.svg').default} className="w-100" alt="" />
                            </div>
                            <div className="img col-4 d-flex justify-content-center align-items-center">
                                <img src={require('../../assets/images/Icon_Hero_02.svg').default} className="w-100" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}