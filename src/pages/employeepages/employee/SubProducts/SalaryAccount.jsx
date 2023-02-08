import React from "react";
import Sidebar from "../../../../components/employeeSidebar/Sidebar";

import im0 from "../ProductImages/Banner Image/SalaryAccount.png";
import im1 from "../ProductImages/ProductSub/ULTIMA Burgundy.png";
import im2 from "../ProductImages/ProductSub/ULTIMA Easy.png";
import im3 from "../ProductImages/ProductSub/ULTIMA Liberty.png";

import "../SubProducts/ProductPages.css";
export default function SalaryAccount() {
  return (
    <>
      <Sidebar />
      <div className="main">
      <div className="display-cont">
        <div class="Banner-image">
          <img src={im0} alt="im1" height="300px" width="100%" />
          <h2 className="heading">Salary Account</h2>
        </div>
      </div>
      <div className="container  pb-5">
        <p  style={{fontWeight:"500", textAlign: "center" }}>
          Axis Bank ULTIMA Salary Accounts are designed to meet your employees
          every need, through unlimited cashback, ultimate lifestyle privileges
          and ultimate wealth management solutions. We also offer a seamless and
          convenient access to their salaries. </p><p  style={{fontWeight:"500", textAlign: "center" }}>Open a ULTIMA Salary Account that
          is most appropriate for your employees' job profiles and let them
          enjoy a myriad of added benefits, including special debit cards. Help
          your employees to conveniently keep a tab on their salary and
          reimbursements.
        </p>
      </div>
      <div class="small-cont">
        <div>
          <div>
            <img src={im1} alt="im1" height="100px" width="10%" />
            <h2>ULTIMA Burgundy</h2>
            <p>Digital Salary Account</p>
          </div>
        </div>
      </div>

      <div class="small-cont2">
        <div>
          <div>
            <img src={im2} alt="im1" height="100px" width="16%" />
            <h2>ULTIMA Easy </h2>
            <p>Access Salary Account</p>
          </div>
        </div>
      </div>

      <div class="small-cont3">
        <div>
          <div>
            <img src={im3} alt="im1" height="100px" width="45%" />
            <h2>ULTIMA Liberty</h2>
            <p>Digital Saving Account</p>
          </div>
        </div>
      </div>
    
      </div>
    </>
  );
}
