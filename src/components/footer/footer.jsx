import React from 'react'
import './footer.scss'

export default function Footer() {

    return (
        <section class="footer">
            <div class="footer-middle">
                <div class="ccontainer pb-3">
                    <div class="row">
                        <div class="col-md-4 col-sm-6">
                            <div class="footer-pad">
                                <a href="#"> <img src={require('../../assets/images/Logo_02.svg').default} /></a>
                                <ul class="list-unstyled d-grid">
                                    <li><p>Various kinds of NFT that are trending the trend will be reset and every week creator will show NFT</p></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6 d-flex ">
                            <div class="footer-pad">
                                <h4>Categories</h4>
                                <ul class="list-unstyled d-grid">
                                    <li><a href="#">Art</a></li>
                                    <li><a href="#">Collections</a></li>
                                    <li><a href="#">Domain Name</a></li>
                                    <li><a href="#">Creator NFT</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="d-flex col-md-3 col-sm-6 ">
                            <div class="footer-pad">
                                <h4>Contact us</h4>
                                <ul class="list-unstyled d-grid">
                                    <li><a href="#">Platform Status</a></li>
                                    <li><a href="#">Custumer services</a></li>
                                    <li><a href="#">Partner</a></li>
                                    <li><a href="#">Privacy policy</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <h4>Get in touch</h4>
                            <ul class="social-network social-circle">
                                <li><p>Indonesia Jl. Griya Permata Hijau no D1 Sukabumi Utara 543881</p></li>
                                <li class="text-center"><a href="#" class="icoFacebook" title="Facebook"><i class="fa fa-facebook"></i></a></li>
                                <li class="text-center"><a href="#" class="icoLinkedin" title="Linkedin"><i class="fa fa-linkedin"></i></a></li>
                                <li class="text-center"><a href="#" class="icoLinkedin" title="Linkedin"><i class="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
