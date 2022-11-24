import React, { Component } from "react";
import Slider from "react-slick";
import './about.scss'

export default function About() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <section id='about' className='container item-title'>
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
            <div className="row tab-content">
                <div className="col-12  ">
                    <div className="item-bg bg-dark tab-content">
                        <div className="tab-pane fade show active">
                            <div className="mt-2 p-4">
                                <div className="align-items-start" data-aos="zoom-in" data-aos-delay="400">
                                    <div className="row">
                                        <Slider {...settings}>
                                            <div class="align-items-start" data-aos="zoom-in" data-aos-delay="400">
                                                <div class="row">
                                                    <div class="col-md-5">
                                                        <img onclick="openImg(this)" src={require('../../assets/images/image 1.svg').default} alt="alt" />
                                                    </div>
                                                    <div class="col-md-7">
                                                        <h1 class="display-6 fw-bold pt-3">NFT to the bone makes you collect project 3D</h1>
                                                        <ul class="list-unstyled">
                                                            <li>We are a community based collection project featuring 3D and NFT</li>
                                                            <li>artwork. Cool 3D from me and comes in all kinds of evil shape traits</li>
                                                            <li>and sizes with a few surprises along the way</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="align-items-start" data-aos="zoom-in" data-aos-delay="400">
                                                <div class="row">
                                                    <div class="col-md-5">
                                                        <img onclick="openImg(this)" src={require('../../assets/images/image 1.svg').default} alt="alt" />
                                                    </div>
                                                    <div class="col-md-7">
                                                        <h1 class="display-6 fw-bold pt-3">NFT to the bone makes you collect project 3D</h1>
                                                        <ul class="list-unstyled">
                                                            <li>We are a community based collection project featuring 3D and NFT</li>
                                                            <li>artwork. Cool 3D from me and comes in all kinds of evil shape traits</li>
                                                            <li>and sizes with a few surprises along the way</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slider>
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
