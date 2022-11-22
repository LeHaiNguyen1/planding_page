import React from 'react'
import './about.scss'

export default function About() {
    return (
        <section>
            <div class="row d-flex justify-content-center">
                <div class="page-holder bg-gray-100">
                    <div class="row">
                        <div class="col-12">
                            <p class="text-center fw-bold text-white m-4 p-4">
                                <h1 class="text-center fw-bold text-white m-4 p-4">How to bling charge</h1>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="about" class="row">
                <div class="col-12  ">
                    <div class="item-bg bg-dark tab-content">
                        <div class="tab-pane fade show active">
                            <div class="mt-2 p-4">
                                <div class="align-items-start" data-aos="zoom-in" data-aos-delay="400">
                                    <div class="row">
                                        <div class="col-md-5">
                                            <img src={require('../../assets/images/image 1.svg').default} class="w-100" alt="" />
                                        </div>
                                        <div class="col-md-7 p-5">
                                            <h1 class="text-light">NFT  to the bone makes you collect project 3D</h1>
                                            <ul class="list-unstyled d-grid text-secondary">
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
