import React from "react";
import Sidebar from "../../../../components/employeeSidebar/Sidebar";
import im1 from "../ProductImages/ProductImage/FD.png";
import im2 from "../ProductImages/ProductImage/Fixed Deposit.png";
import im3 from "../ProductImages/ProductImage/rec.png";

import "./Deposit.css";

export default function Deposit() {
  return (
    <>
      <Sidebar />
      <section className="deposit-display">
        <h2 className="tx">Deposit</h2>

        <div className="para">
          <p style={{fontWeight:"500", fontSize:"16px"}}>
            If you’re looking to invest your money, bank deposits are one of the
            most popular forms of investment and with good reason: the high
            interest rates and minimum risk factor ensure that your money is in
            safe hands.</p><p style={{fontWeight:"500", fontSize:"16px"}}> Get the best out of your wealth with Axis Bank's special
            offers on Fixed and Recurring Deposits that come with competitive
            rates of interest. Avail added benefits and tax savings on your
            money with the Tax Saver Fixed Deposit. The Encash 24 Flexi Deposit
            scheme offers you the liquidity of a savings account and the high
            returns of a Fixed Deposit. Keeping in view, Axis Bank’s aim of
            customer's ease of access, you can now create and manage your
            deposit accounts online. Watch your money grow with Axis Bank
            Deposits.
          </p>
        </div>

        <div class="depositcard1">
          <img src={im1} alt="im1" height="200px" width="230px" />
          <div class="depositcontainer1">
            <h4>
              <b>Fixed Deposits (FD)</b>
            </h4>
            <a href="/FD" className="linkColor">
              <p>Know More</p>
            </a>
          </div>
        </div>

        <div class="depositcard2">
          <img src={im2} alt="im1" height="200px" width="230px" />
          <div class="depositcontainer2">
            <h4>
              <b>Digital Fixed Deposit</b>
            </h4>
            <a href="/FixedDeposit" className="linkColor">
              <p>Know More</p>
            </a>
          </div>
        </div>

        <div class="depositcard3">
          <img src={im3} alt="im1" height="200px" width="230px" />
          <div class="depositcontainer3">
            <h4>
              <b>Recurrent Deposit(RD)</b>
            </h4>
            <a href="/RecurrentDeposit" className="linkColor">
              <p>Know More</p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
