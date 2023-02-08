import React from "react";

import im0 from "../ProductImages/Banner Image/DFD.png";
import im1 from "../ProductImages/ProductSub/Open a Full KYC Fixed.png";
import im2 from "../ProductImages/ProductSub/Open FD online.png";
import im3 from "../ProductImages/ProductSub/No penalty on pre-mature.png";

import "../SubProducts/ProductPages.css";
import Sidebar from "../../../../components/employeeSidebar/Sidebar";
export default function FixedDeposit() {
  return (
    <>
      <Sidebar />
      <div className="main">
        <div className="display-cont">
          <div class="Banner-image">
            <img src={im0} alt="im1" height="300px" width="100%" />
            <h2 className="heading">Digital Fixed Deposit</h2>
          </div>
        </div>
        <div className="container pb-5">
          <p style={{ fontWeight: "500" , textAlign: "center" }}>
            Digital Fixed Deposit is an industry-first digital Full KYC Fixed
            Deposit product. Open Digital Fixed Deposit without an Axis Bank
            Savings Account by providing your basic details. It comes with a
            host of features like attractive FD interest rates, zero issuance
            fees and no penalty on premature withdrawal (up to 25% of the
            amount). A quick and convenient way to save money.
          </p>
        </div>
        <div class="small-cont">
          <div>
            <div>
              <img src={im1} alt="im1" height="100px" width="10%" />
              <h4>Open a Full KYC Fixed</h4>
              <p>Deposit within minutes</p>
            </div>
          </div>
        </div>

        <div class="small-cont2">
          <div>
            <div>
              <img src={im2} alt="im1" height="100px" width="16%" />
              <h4>Open FD online </h4>
              <p>without any bank savings account</p>
            </div>
          </div>
        </div>

        <div class="small-cont3">
          <div>
            <div>
              <img src={im3} alt="im1" height="100px" width="45%" />
              <h4>No penalty on pre-mature</h4>
              <p>easy FD withdrawal</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
