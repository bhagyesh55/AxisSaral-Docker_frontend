import React from "react";

import im0 from "../ProductImages/Banner Image/Transaction Card.png";
import im1 from "../ProductImages/ProductSub/Meal Card.png";
import im2 from "../ProductImages/ProductSub/Gift Card.png";
import im3 from "../ProductImages/ProductSub/Smart Pay Card.png";

import "../SubProducts/ProductPages.css";
import Sidebar from "../../../../components/employeeSidebar/Sidebar";
export default function Trans() {
  return (
    <>
      <Sidebar />
      <div className="main">
      <div className="display-cont">
        <div class="Banner-image">
          <img src={im0} alt="im1" height="300px" width="100%" />
          <h2 className="heading">Pre-Paid Card</h2>
        </div>
      </div>
      <div className="container pb-5 ">
        <p style={{ fontSize: "18px", textAlign: "center" }}>
          Axis Bank offers a range of pre-paid cards by which one can gift,
          reward and motivate either your loved ones or your employees in an
          easy and convenient way. One can choose between Meal Cards, Gift
          Cards, Rewards Cards and Smart Pay Card. There are a number of
          benefits of pre-paid cards which include being able to load any amount
          between Rs. 500 and 10,000 in the Meal Card, being able to make
          purchases instantly with Gift Card! The Rewards Card offers
          flexibility to customize ones programs and the Smart Pay Card offers
          daily POS transaction limit of Rs. 50,000.
        </p>
      </div>
      <div class="small-cont">
        <div>
          <div>
            <img src={im1} alt="im1" height="100px" width="10%" />
            <h4>Meal Card</h4>
            <p>Issued by corporate organizations Tax free Meal</p>
          </div>
        </div>
      </div>

      <div class="small-cont2">
        <div>
          <div>
            <img src={im2} alt="im1" height="100px" width="16%" />
            <h4>Gift Card</h4>
            <p>An Ideal gift for your dear one</p>
          </div>
        </div>
      </div>

      <div class="small-cont3">
        <div>
          <div>
            <img src={im3} alt="im1" height="100px" width="45%" />
            <h4>Smart Pay Card</h4>
            <p>Ideal way to disburse salaries / incentives </p>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
