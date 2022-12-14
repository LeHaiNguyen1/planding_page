import React from 'react'
import './feature.scss'

export default function Feature() {
    return (
        <section id='feature' className='feature'>
            <div className="container">
                <div className="row mt-2">
                    <div className="col-xl-7 d-flex justify-content-center">
                        <img src={require('../../assets/images/xiaomi 1.svg').default} className="w-100" alt="" />
                    </div>
                    <div className="col-xl-5">
                        <div className="mt-5 pt-2 pb-5">
                            <ul className="list-unstyled text-light d-grid">
                                <li>
                                    <h1>Let your charger make money for you</h1>
                                </li>
                                <li>
                                    <p>
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Leverage on your Blingcharge charger and create a stern of passive income at no cost.
                                    </p>
                                </li>
                                <li>
                                    <div className="row mt-3">
                                        <div className="col-2"><img src={require('../../assets/images/352783 1.svg').default} className="w-100" alt="" /></div>
                                        <div className="col-10 d-flex align-items-center"><p>Buy NFT adapter or take NFT 5W___</p></div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row mt-3">
                                        <div className="col-2"><img src={require('../../assets/images/352783 2.svg').default} className="w-100" alt="" /></div>
                                        <div className="col-10 d-flex align-items-center"><p>C???m s???c ??i???n tho???i ___ app Sit back</p></div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row mt-3">
                                        <div className="col-2"><img src={require('../../assets/images/352783 4.svg').default} className="w-100" alt="" /></div>
                                        <div className="col-10 d-flex align-items-center"><p>and watch money ____</p></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
