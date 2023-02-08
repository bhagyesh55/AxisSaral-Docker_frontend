import React from "react";

import im0 from "../ProductImages/Banner Image/Personal & Business Loan.png";
import im1 from "../ProductImages/ProductSub/Minimal documentation.png";
import im2 from "../ProductImages/ProductSub/Minimum Rs. 50,000.png";
import im3 from "../ProductImages/ProductSub/Easy to Apply.png";

import "../SubProducts/ProductPages.css";
import Sidebar from "../../../../components/employeeSidebar/Sidebar";
export default function PersonalBusiness() {
  return (
    <>
      <Sidebar />
      <div className="main">
        <div className="display-cont">
          <div class="Banner-image">
            <img src={im0} alt="im1" height="300px" width="100%" />
            <h2 className="heading">Personal Loan</h2>
          </div>
        </div>
        <div className="container pb-5 ">
          <p style={{ fontSize: "18px", textAlign: "center" }}>
            Axis Bank Personal Loans offer fast processing of your loan.
            Personal Loans can be used for plenty of purposes! They can be
            availed when you are planning a vacation, renovating your home or
            arranging a dream wedding for yourself or somebody special in the
            family. Now you need not postpone things on your bucket list! You
            can get a Personal Loan from Rs. 50,000 upto Rs. 40,00,000 with
            minimal documentation and quick processing from Axis Bank. Also, you
            can transfer your existing high interest Personal Loan to Axis Bank
            as well. With a quick approval on Axis Bank Personal Loans, turn
            your dreams into reality!
          </p>
        </div>
        <div class="small-cont">
          <div>
            <div>
              <img src={im1} alt="im1" height="100px" width="10%" />
              <h4>Minimal documentation</h4>
              <p>1.5% to 2% of loan amount + GST</p>
            </div>
          </div>
        </div>

        <div class="small-cont2">
          <div>
            <div>
              <img src={im2} alt="im1" height="100px" width="16%" />
              <h4>Minimum Rs. 50,000 </h4>
              <p>minimum age of 21 years</p>
            </div>
          </div>
        </div>



        <div class="small-cont3 pt-4">
          <div>
            <div>
              <img src={im3} alt="im1" height="100px" width="45%" />
              <h4>Easy to Apply</h4>
              <p> collateral-free EMI-based Business Loans</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
