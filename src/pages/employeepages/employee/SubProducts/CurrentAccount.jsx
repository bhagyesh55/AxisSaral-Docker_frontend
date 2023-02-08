import React from "react";

import im0 from "../ProductImages/Banner Image/CurrentAccount.png";
import im1 from "../ProductImages/ProductSub/Liberty Current Account.png";
import im2 from "../ProductImages/ProductSub/Digi Account.png";
import im3 from "../ProductImages/ProductSub/Global Economy.png";

import "../SubProducts/ProductPages.css";
import Sidebar from "../../../../components/employeeSidebar/Sidebar";
export default function CurrentAccounts() {
  return (
    <>
      <Sidebar />
      <div className="main">
        <div className="display-cont">
          <div class="Banner-image">
            <img src={im0} alt="im1" height="300px" width="100%" />
            <h2 className="heading">Current Account</h2>
          </div>
        </div>
        <div className="container pb-5">
          <p  style={{fontWeight:"500", textAlign: "center" }}>
            Boost your business and give it the bandwidth to transact anytime at
            the click of a button with Axis Bank Current Accounts! </p><p  style={{fontWeight:"500", textAlign: "center" }}>With digital
            services such as online NEFT/RTGS transactions 24x7, prompt SMS
            alerts and customized offerings on allied products such as CMS,
            Trade & Forex Services across user friendly Internet & Mobile
            Banking platforms, you can be assured that your banking transactions
            will be hassle-free and seamless.
          </p>
        </div>
        <div class="small-cont">
          <div>
            <div>
              <img src={im1} alt="im1" height="100px" width="10%" />
              <h2>Liberty Current Account </h2>
              <p>Account for Proprietorship</p>
            </div>
          </div>
        </div>

        <div class="small-cont2">
          <div>
            <div>
              <img src={im2} alt="im1" height="100px" width="16%" />
              <h2>Digi Account </h2>
              <p>Digital Current Account</p>
            </div>
          </div>
        </div>

        <div class="small-cont3">
          <div>
            <div>
              <img src={im3} alt="im1" height="100px" width="45%" />
              <h2>Global Economy</h2>
              <p>Current Account for Business</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
