import React from "react";
import Sidebar from "../../../../components/employeeSidebar/Sidebar";

import im0 from "../ProductImages/Banner Image/SavingAccount.png";
import im1 from "../ProductImages/ProductSub/Easy Access.png";
import im2 from "../ProductImages/ProductSub/liberty.png";
import im3 from "../ProductImages/ProductSub/prestige.png";

import "../SubProducts/ProductPages.css";
import "../Products/Cards.css";
export default function SavingAccounts() {
  return (
    <>
      <Sidebar />
      <div className="main">
      <div className="display-cont">
        <div class="Banner-image">
          <img src={im0} alt="im1" height="300px" width="100%" />
          <h2 className="heading">Savings Account</h2>
        </div>
      </div>
      <div className="container">
        <p style={{fontWeight:"500", textAlign: "center" }}>
          Axis Bank provides its customers with the option of choosing from a
          wide range of Savings Accounts with different features and benefits.
          The Savings Accounts are designed to meet the banking needs of people
          from all walks of life. Each Savings Account offers unique features
          such as high transaction limit, free cheque books, etc.</p><p  style={{fontWeight:"500", textAlign: "center" }}> The offers and
          discounts range from discounted movie tickets, Axis eDGE rewards to
          emergency travel allowances and a lot more.Apply for savings account
          to enjoy all these features, offers and discounts.
        </p>
      </div>
      <div class="small-cont">
        <div>
          <div>
            <img src={im1} alt="im1" height="100px" width="10%" />
            <h2>Easy Access</h2>
            <p>Digital Saving Account</p>
          </div>
        </div>
      </div>

      <div class="small-cont2">
        <div>
          <div>
            <img src={im2} alt="im1" height="100px" width="16%" />
            <h2>Liberty</h2>
            <p>Digital Saving Account</p>
          </div>
        </div>
      </div>

      <div class="small-cont3">
        <div>
          <div>
            <img src={im3} alt="im1" height="100px" width="45%" />
            <h2>Prestige</h2>
            <p>Digital Saving Account</p>
          </div>
        </div>
      </div>
      
      </div>
    </>
  );
}
