import React from "react";

import im0 from "../ProductImages/Banner Image/CrediCard.png";
import im1 from "../ProductImages/ProductSub/IndianOil Credit Card.png";
import im2 from "../ProductImages/ProductSub/FlipKart Credit Card.png";
import im3 from "../ProductImages/ProductSub/MY Zone Credit Card.png";

import "../SubProducts/ProductPages.css";
import Sidebar from "../../../../components/employeeSidebar/Sidebar";
export default function CreditCard() {
  return (
    <>
      <Sidebar />
      <div className="main">
        <div className="display-cont">
          <div class="Banner-image">
            <img src={im0} alt="im1" height="300px" width="100%" />
            <h2 className="heading">Credit Card</h2>
          </div>
        </div>
        <div className="container pb-5 ">
          <p style={{ fontSize: "17px", textAlign: "center" }}>
            Credit cards are a convenient way to make immediate payments for any
            expense, in a cashless manner. Thanks to credit cards, you can
            fulfil your needs even if you don’t have ready cash on hand. There
            is no need to put off for later what you want to buy now. It could
            be buying the latest mobile phone, booking airline tickets for your
            upcoming holiday, paying for dinner at a classy restaurant with your
            family or friends or even buying your monthly groceries. Just swipe
            the card now and clear your credit card bill later! Choose from Axis
            Bank’s list of credit cards and apply for credit card that suited
            best for your needs.
          </p>
        </div>
        <div class="small-cont">
          <div>
            <div>
              <img src={im1} alt="im1" height="100px" width="10%" />
              <h4>IndianOil Credit Card</h4>
              <p>100% Cashback upto Rs 250 in first30 days</p>
            </div>
          </div>
        </div>

        <div class="small-cont2">
          <div>
            <div>
              <img src={im2} alt="im1" height="100px" width="16%" />
              <h4>FlipKart Credit Card</h4>
              <p>Unlimited cashback on all your spends</p>
            </div>
          </div>
        </div>

        <div class="small-cont3 pt-4">
          <div>
            <div>
              <img src={im3} alt="im1" height="100px" width="45%" />
              <h4>MY Zone Credit Card</h4>
              <p>Enjoy 40% off on Swiggy and complimentary </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
