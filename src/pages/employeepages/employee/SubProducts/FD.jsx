import React from "react";

import im0 from "../ProductImages/im1.png";
import im1 from "../ProductImages/ProductSub/Digital Fixed Deposit.png";
import im2 from "../ProductImages/ProductSub/Tax-Saver Fixed Deposit.png";
import im3 from "../ProductImages/ProductSub/Fixed Deposit Plus.png";

import "../SubProducts/ProductPages.css";
import Sidebar from "../../../../components/employeeSidebar/Sidebar";
export default function FD() {
  return (
    <>
      <Sidebar />
      <div className="main">
      <div className="display-cont">
        <div class="Banner-image">
          <img src={im0} alt="im1" height="300px" width="100%" />
          <h2 className="heading">Fixed Deposits (FD)</h2>
        </div>
      </div>
      <div className="container pb-5">
        <p style={{ fontWeight: "500", textAlign: "center"  }}>
          Axis Bank's Fixed Deposit (FD) is a safe and convenient way to see
          your savings grow. Open a Fixed Deposit online with Axis Bank and save
          a minimum of Rs. 5,000 for a flexible tenure starting from a minimum
          of 7 days to a maximum of 10 years. Axis Bank’s online account opening
          services help you to open a Fixed Deposit account from wherever you
          are. It provides easy transfers from your savings account to your
          Fixed Deposit. Get the most competitive Fixed Deposit interest rates
          for both long and short term investments. Axis Bank provides you
          automatic roll-out facility so that you can get your Fixed Deposit
          interest credited to a designated account or get it paid out to a
          different account.
        </p>
      </div>
      <div class="small-cont">
        <div>
          <div>
            <img src={im1} alt="im1" height="100px" width="10%" />
            <h4>Digital Fixed Deposit</h4>
            <p>Open FD with KYC without documentation</p>
          </div>
        </div>
      </div>

      <div class="small-cont2">
        <div>
          <div>
            <img src={im2} alt="im1" height="100px" width="16%" />
            <h4>Tax-Saver Fixed Deposit</h4>
            <p>Save money for your future with tax benefits</p>
          </div>
        </div>
      </div>

      <div class="small-cont3">
        <div>
          <div>
            <img src={im3} alt="im1" height="100px" width="45%" />
            <h4>Fixed Deposit Plus</h4>
            <p>Earn higher rate of interest FDs</p>
          </div>
        </div>
      </div>
      </div>
    </>
  
  );
}
