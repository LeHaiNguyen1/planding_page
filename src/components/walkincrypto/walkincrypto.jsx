import React from 'react'
import './walkincrypto.scss'

export default function Walkincrypto() {
    return (
        <section id='walkincrypto' className='container  d-flex justify-content-center align-items-center'>
            <div className='container btn-item '>
                <div className='row position-relative'>
                    <img src={require('../../assets/images/Blingcharge.svg').default} className="w-100" alt="" />
                </div>
                <div className='row position-relative justify-content-center'>
                    <h1>Just Charge and Earn</h1>
                    <p className="text-center text-white">
                        You can get started with your marketing automation in a few minutesand you can send email
                        newsletter with your audienceYou can get started with your marketing automation in a few
                    </p>
                </div>
            </div>
        </section>
    )
}
