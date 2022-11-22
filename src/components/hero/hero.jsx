import React from 'react'
import '../hero/hero.scss'

export default function Hero() {
    return (
        <section id="hero" class="hero">
            <div class="container">
                <div class="row mt-2">
                    <div class="col-xl-6">
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
                                        <div class="col-auto">
                                            <button type="button" href="" class="btn btn-purple mb-3 text-light" id="import-material-supplier-modal" data-type-import="BUSINESS">Explore now</button>
                                        </div>
                                        <div class="col-auto">
                                            <button type="button" href="" class="btn btn-light-purple mb-3 text-light" id="import-material-supplier-modal" data-type-import="BUSINESS">Get early Access</button>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-6">
                        <img src={require('../../assets/images/Phone.svg').default} class="w-100" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}