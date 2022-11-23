import React from 'react'
import './about.scss'

export default function About() {
    return (
        <section id='about' className='container about'>
            <div className="row d-flex justify-content-center">
                <div className="page-holder bg-gray-100">
                    <div className="row">
                        <div className="col-12">
                        <h1 className="text-center fw-bold text-white">How to bling charge</h1>
                            <p className="text-center text-white">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="about" className="row">
                <div className="col-12  ">
                    <div className="item-bg bg-dark tab-content">
                        <div className="tab-pane fade show active">
                            <div className="mt-2 p-4">
                                <div className="align-items-start" data-aos="zoom-in" data-aos-delay="400">
                                    <div className="row">
                                        <div className="col-md-5">
                                            <img src={require('../../assets/images/image 1.svg').default} className="w-100" alt="" />
                                        </div>
                                        <div className="col-md-7 p-5">
                                            <h1 className="text-light">NFT  to the bone makes you collect project 3D</h1>
                                            <ul className="list-unstyled d-grid text-secondary">
                                                <li>We are a community based collection project featuring 3D and NFT</li>
                                                <li>artwork. Cool 3D from me and comes in all kinds of evil shape traits</li>
                                                <li>and sizes with a few surprises along the way</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
