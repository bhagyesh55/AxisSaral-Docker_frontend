import React from "react";

import im0 from "../ProductImages/Banner Image/Car Loan.png";
import im1 from "../ProductImages/ProductSub/New Car Loan.png";
import im2 from "../ProductImages/ProductSub/Used Car loan.png";
import im3 from "../ProductImages/ProductSub/Parallel Car Loan.png";

import "../SubProducts/ProductPages.css";
import Sidebar from "../../../../components/employeeSidebar/Sidebar";
export default function CarLoan() {
  return (
    <>
      <Sidebar />
      <div className="main">
      <div className="display-cont">
        <div class="Banner-image">
          <img src={im0} alt="im1" height="300px" width="100%" />
          <h2 className="heading">Car Loan</h2>
        </div>
      </div>
      <div className="container pb-5 ">
        <p style={{ fontSize: "17px", textAlign: "center" }}>
          Axis Bank Car Loans Dreaming of owning a car? The Axis Bank Car Loan
          aims to ensures that you drive around the city in your own vehicle!
          Avail a car loan, or opt for a pre-approved car loan, and get the best
          interest rate. Axis Bank’s New Car Loan offers car loans from Rs. 1
          Lakh upto 100% on-road price along with benefits. Before applying for
          a car loan online, make sure to use the car loan calculator to find
          out your EMI. Apply for an Axis Bank New Car Loan and make your dream
          of owning a car come true.
        </p>
      </div>
      <div class="small-cont">
        <div>
          <div>
            <img src="https://www.finnable.com/wp-content/uploads/2022/01/Instant-car-loan.jpg" alt="im1" height="100px" width="10%" />
            <h4>New Car Loan</h4>
            <p>Loan Amount Rs.1 Lakh onward</p>
          </div>
        </div>
      </div>

      <div class="small-cont2">
        <div>
          <div>
            <img src="https://www.urbanfin.in/wp-content/uploads/2020/02/fou-rwheeler-loan.png" alt="im1" height="100px" width="16%" />
            <h4>Used Car loan</h4>
            <p>Maximum Tenure of 5 years</p>
          </div>
        </div>
      </div>

      <div class="small-cont3 pt-4">
        <div>
          <div>
            <img src="https://www.bankofbaroda.in/-/media/project/bob/countrywebsites/india/blogs/images/what-is-vehicle-loan-and-its-different-types.jpg" alt="im1" height="100px" width="45%" />
            <h4>Parallel Car Loan </h4>
            <p>Rs.1 Lakh onward (Loan against Car)</p>
          </div>
        </div>
      </div>
      </div>
    </>
  
  );
}
