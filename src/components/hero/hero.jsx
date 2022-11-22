import React from 'react'
import '../hero/hero.scss'

export default function Hero() {
    return (
        <section id="hero" class="hero">
            <div class="container">
                <div class="row mt-2">
                    <div class="col-xl-5">
                        <div class="h-100 d-flex align-items-center justify-content-center">
                            <ul class="list-unstyled text-light d-grid">
                                <li>
                                    <h1 class="display-3">Chanrge & Earn</h1>
                                </li>
                                <li>
                                    <p>
                                        You can get started with your marketing automation in a few minutesand you can
                                        send email newsletter with your audienceYou can get started with your marketing
                                        automation in a few
                                    </p>
                                </li>
                                <li>
                                    <div class="row">
                                        <div class="col">
                                            <button type="button" href="" class="btn btn-purple mb-3 text-light" id="import-material-supplier-modal">Explore now</button>
                                        </div>
                                        <div class="col">
                                            <button type="button" href="" class="btn btn-light-purple mb-3 text-light" id="import-material-supplier-modal">Get early Access</button>
                                        </div>
                                        <div class="col-4">
                                            <img src={require('../../assets/images/Icon_Hero_02.svg').default} class="w-100" alt="" />
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="item-img col-xl-7 a">
                        <div class="row justify-content-center ">
                            <div class="img col-7">
                                <img src={require('../../assets/images/Phone.svg').default} class="w-100" alt=""/>
                            </div>
                            <div class="img col-4 d-flex justify-content-center align-items-center">
                                <img src={require('../../assets/images/Icon_Hero_02.svg').default} class="w-100" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}