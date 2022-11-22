import React from 'react'

export default function OutputFloor() {
    return (
        <section id='section-steps' class="item-trial-flow">
            <div class="container">
                <div class="row d-flex justify-content-center">
                    <div class="page-holder bg-gray-100">
                        <div class="row">
                            <div class="col-12">
                                <h1 class="text-center fw-bold text-white m-4 p-4">Chose your adapter</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-2 col-xl-4 mb-4 mb-xl-0">
                        <div class="position-relative">
                            <img src={require('../../assets/images/10.svg').default} class="w-100" alt="" />
                        </div>
                    </div>
                    <div class="col-md-2 col-xl-4 mb-4 mb-xl-0">
                        <div class="position-relative card-item-step2">
                            <img src={require('../../assets/images/20.svg').default} class="w-100" alt="" />
                        </div>
                    </div>
                    <div class="col-md-2 col-xl-4 mb-4 mb-xl-0">
                        <div class="position-relative card-item-step2">
                            <img src={require('../../assets/images/30 1.svg').default} alt="" />
                        </div>
                    </div>
                    <div class="col-md-2 col-xl-4 mb-4 mb-xl-0">
                        <div class="position-relative">
                            <img src={require('../../assets/images/40.svg').default} class="w-100" alt="" />
                        </div>
                    </div>
                    <div class="col-md-2 col-xl-4 mb-4 mb-xl-0">
                        <div class="position-relative card-item-step2">
                            <img src={require('../../assets/images/45.svg').default} class="w-100" alt="" />
                        </div>
                    </div>
                    <div class="col-md-2 col-xl-4 mb-4 mb-xl-0">
                        <div class="position-relative card-item-step2">
                            <img src={require('../../assets/images/61.svg').default} alt="" />
                        </div>
                    </div>
                </div>
                <div class="row d-flex justify-content-center">
                    <div class="page-holder bg-gray-100 d-flex justify-content-center">
                        <a type="button" href="" class="btn btn-outline-light mb-3 text-light" id="import-material-supplier-modal">Explore Now</a>
                    </div>
                </div>

            </div>
        </section>
    )
}
