import React from "react";

import im0 from "../ProductImages/Banner Image/Recurrent Deposit(RD).png";
import im1 from "../ProductImages/ProductSub/Minimum Investm.png";
import im2 from "../ProductImages/ProductSub/Flexible Tenure.png";
import im3 from "../ProductImages/ProductSub/Save Regularly.png";

import "../SubProducts/ProductPages.css";
import Sidebar from "../../../../components/employeeSidebar/Sidebar";
export default function RecurrentDeposit() {
  return (
    <>
      <Sidebar />
      <div className="main">
        <div className="display-cont">
          <div class="Banner-image">
            <img src={im0} alt="im1" height="300px" width="100%" />
            <h4 className="heading">Recurring Deposit (RD)</h4>
          </div>
        </div>
        <div className="container pb-5 ">
          <p style={{ fontWeight: "500" , textAlign: "center" }}>
            Axis Bank's Recurring Deposit helps you build your savings through
            systematic deposits, every month. Earn a higher interest rate
            depending on the amount of instalment and the deposit period, on
            your Recurring Deposit. Open a Recurring Deposit online with minimum
            monthly instalments of Rs. 500 while the maximum can run into
            multiples thereof with no maximum limit. Earn interest for a minimum
            tenure of 6 months or a maximum of 10 years on your Recurring
            Deposit.
          </p>
        </div>
        <div class="small-cont">
          <div>
            <div>
              <img src={im1} alt="im1" height="100px" width="10%" />
              <h4>Minimum Investment </h4>
              <p>You can start of with Rs.500</p>
            </div>
          </div>
        </div>

        <div class="small-cont2">
          <div>
            <div>
              <img src={im2} alt="im1" height="110px" width="16%" />
              <h4>Flexible Tenure</h4>
              <p>Minimum 6 months only</p>
            </div>
          </div>
        </div>

        <div class="small-cont3 pt-4">
          <div>
            <div>
              <img src={im3} alt="im1" height="105px" width="45%" />
              <h4>Save Regularly</h4>
              <p>The Simplest Way of Building Wealth</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
