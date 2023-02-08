import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import im1 from '../CaroselImage/Bank Account.png'
import im2 from '../CaroselImage/Loan.png'
import im3 from '../CaroselImage/Deposit.png'
import im4 from '../CaroselImage/Cards.png'

import './Center.css';
import Sidebar from '../../../../components/employeeSidebar/Sidebar';
export default function Center() {
  return (
    <>
    <Sidebar/>
    <div className='center'>
    <div className='heading'>OUR PRODUCTS</div>
    <div>
    <Carousel>
                <div>
                    <img src={im1} alt="im1" height="400px" width="350px" />
                    <p className="legend">Explore Our wide variety of accounts that suits your banking needs.</p>
                    <a href="/Accounts">
                    <p className="legend">Explore Our wide variety of accounts that suits your banking needs.</p>
                   </a>
                </div>
                
                <div>
                    <img src={im2} alt="im2" height="375px" width="300px"/>
                    <p className="legend">Explore our range of loans designed for your unique needs.</p>
                    <a href="./Loan">
                    <p className="legend">Explore our range of loans designed for your unique needs.</p>
                    </a>
                </div>

                <div>
                    <img src={im3} alt="im3" height="375px" width="300px"/>
                    <p className="legend">Explore All our Deposits that help you progress!</p>
                    <a href="./Deposit" >
                    <p className="legend">Explore All our Deposits that help you progress!</p>
                    </a>
                </div>

                <div>
                    <img src={im4} alt="im3" height="375px" width="300px"/>
                    <p className="legend">Explore our range of cards designed for your unique needs.</p>
                    <a href="./Cards" >
                    <p className="legend">Explore our range of cards designed for your unique needs.</p>
                    </a>
                </div>
                
    </Carousel>
    </div>
    </div>
    </>
  )
}