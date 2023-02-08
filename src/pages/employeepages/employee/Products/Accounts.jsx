import React from "react";
import im1 from "../ProductImages/ProductImage/Saving Account.png";
import im2 from "../ProductImages//ProductImage/Current Account.png";
import im3 from "../ProductImages//ProductImage/Salary Account.png";

import "./Accounts.css";
import Sidebar from "../../../../components/employeeSidebar/Sidebar";

export default function Accounts() {
  return (
    <>
      <Sidebar />
      <section className="accounts-display">
        <h2 className="tx">ACCOUNTS</h2>

        <div className="para">
          <p  style={{fontWeight:"500", fontSize:"18px"}}>
            With the world going cashless, bank accounts have become a necessity
            rather than an option. Having a bank account is essentially having a
            24x7 security for your hard-earned money. But safety isn’t the only
            feature we offer. You can earn interest on your savings, make
            hassle-free payments, and manage all your expenses online.
          </p>
        </div>




        <div class="accountscard1">
          <img src={im1} alt="im1" height="200px" width="260px" />
          <div class="accountcontainer1">
            <h4>
              <b>Savings Account</b>
            </h4>
            <a href="/SavingAccount" className="linkColor">
              <p>Know More</p>
            </a>
          </div>
        </div>

        <div class="accountscard2">
          <img src={im2} alt="im1" height="200px" width="230px" />
          <div class="accountcontainer2">
            <h4>
              <b>Current Account</b>
            </h4>
            <a href="/CurrentAccount" className="linkColor">
              <p>Know More</p>
            </a>
          </div>
        </div>

        <div class="accountscard3">
          <img src={im3} alt="im1" height="200px" width="230px" />
          <div class="accountcontainer3">
            <h4>
              <b>Salary Account</b>
            </h4>
            <a href="/SalaryAccount" className="linkColor">
              <p>Know More</p>
            </a>
          </div>
        </div>
     
      </section>
    </>
  );
}
