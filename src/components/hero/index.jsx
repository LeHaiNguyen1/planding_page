import React from 'react'
import { Link } from 'react-router-dom'

export default function Articles() {
    return (
        <section id="team" class="team">
            <div class="container">
                <div class="row mt-2">
                    <div class="col-xl-6">
                        <div class="h-100 d-flex align-items-center justify-content-center">
                            <ul class="list-unstyled text-light">
                                <li>
                                    <h1 class="display-1 fw-bold">Chanrge & Earn</h1>
                                </li>
                                <br />
                                <li>
                                    <h1 class="fs-5">
                                        <p>You can get started with your marketing automation in a few minutesand you can
                                            send email newsletter with your audienceYou can get started with your marketing
                                            automation in a few
                                        </p>
                                    </h1>
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