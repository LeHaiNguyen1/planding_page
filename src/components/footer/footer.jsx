import React from 'react'
import './footer.scss'

export default function Footer() {

    return (
        <section id='footer' className="footer">
            <div className="footer-middle">
                <div className="container pb-3">
                    <div className="row mt-5 pt-4 pb-4">
                        <div className="col-md-4 col-sm-6">
                            <div className="footer-pad">
                                <a href="#"> <img src={require('../../assets/images/Logo_02.svg').default} /></a>
                                <ul className="list-unstyled d-grid">
                                    <li><p>Various kinds of NFT that are trending the trend will be reset and every week creator will show NFT</p></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 d-flex ">
                            <div className="footer-pad">
                                <h4>Categories</h4>
                                <ul className="list-unstyled d-grid">
                                    <li><a href="#">Art</a></li>
                                    <li><a href="#">Collections</a></li>
                                    <li><a href="#">Domain Name</a></li>
                                    <li><a href="#">Creator NFT</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="d-flex col-md-3 col-sm-6 ">
                            <div className="footer-pad">
                                <h4>Contact us</h4>
                                <ul className="list-unstyled d-grid">
                                    <li><a href="#">Platform Status</a></li>
                                    <li><a href="#">Custumer services</a></li>
                                    <li><a href="#">Partner</a></li>
                                    <li><a href="#">Privacy policy</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <h4>Get in touch</h4>
                            <ul className="social-network social-circle">
                                <li><p>Indonesia Jl. Griya Permata Hijau no D1 Sukabumi Utara 543881</p></li>
                                <li className="text-center"><a href="#" className="icoFacebook" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                                <li className="text-center"><a href="#" className="icoLinkedin" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
                                <li className="text-center"><a href="#" className="icoLinkedin" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
