import React from 'react'

export default function OutputFloor() {
    return (
        <section id='section-steps' className="item-trial-flow">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="page-holder bg-gray-100">
                        <div className="row">
                            <div className="col-12">
                                <h1 className="text-center fw-bold text-white m-4 p-4">Chose your adapter</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 col-xl-4 mb-4 mb-xl-0">
                        <div className="position-relative">
                            <img src={require('../../assets/images/10.svg').default} className="w-100" alt="" />
                        </div>
                    </div>
                    <div className="col-md-2 col-xl-4 mb-4 mb-xl-0">
                        <div className="position-relative card-item-step2">
                            <img src={require('../../assets/images/20.svg').default} className="w-100" alt="" />
                        </div>
                    </div>
                    <div className="col-md-2 col-xl-4 mb-4 mb-xl-0">
                        <div className="position-relative card-item-step2">
                            <img src={require('../../assets/images/30 1.svg').default} alt="" />
                        </div>
                    </div>
                    <div className="col-md-2 col-xl-4 mb-4 mb-xl-0">
                        <div className="position-relative">
                            <img src={require('../../assets/images/40.svg').default} className="w-100" alt="" />
                        </div>
                    </div>
                    <div className="col-md-2 col-xl-4 mb-4 mb-xl-0">
                        <div className="position-relative card-item-step2">
                            <img src={require('../../assets/images/45.svg').default} className="w-100" alt="" />
                        </div>
                    </div>
                    <div className="col-md-2 col-xl-4 mb-4 mb-xl-0">
                        <div className="position-relative card-item-step2">
                            <img src={require('../../assets/images/61.svg').default} alt="" />
                        </div>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="page-holder bg-gray-100 d-flex justify-content-center">
                        <a type="button" href="" className="btn btn-outline-light mb-3 text-light" id="import-material-supplier-modal">Explore Now</a>
                    </div>
                </div>

            </div>
        </section>
    )
}
