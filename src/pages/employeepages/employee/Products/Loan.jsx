import React from "react";
import Sidebar from "../../../../components/employeeSidebar/Sidebar";
import im1 from "../ProductImages/ProductImage/HouseLoan.png";
import im2 from "../ProductImages/ProductImage/Busines-Personal.png";
import im3 from "../ProductImages/ProductImage/CarLoan.png";
import "./Loan.css";
export default function Loan() {
  return (
    <>
      <Sidebar />
      <div className="loan">
        <h2 className="tx">LOANS</h2>

        <div className="para">
          <p style={{fontWeight:"500", fontSize:"18px"}}>
            At Axis Bank, we believe your journey should continue without any
            speed bumps. This is why we bring you customized Bank Loans at
            competitive interest rates. To get started, check your loan
            eligibility using our simple loan calculators. You can submit your
            Bank Loan application online in three easy steps and avail the most
            attractive interest rates and comfortable repayment tenures.
          </p>
        </div>

        <div className="card11">
          <img src={im1} alt="im1" height="200px" width="230px" />
          <div className="container11">
            <h4>
              <b>Home Loan</b>
            </h4>
            <a href="/HomeLoan" className="linkColor">
              <p>Know More</p>
            </a>
          </div>
        </div>

        <div className="card1">
          <img src={im2} alt="im1" height="200px" width="230px" />
          <div className="container1">
            <h4>
              <b>Personal Loan</b>
            </h4>
            <a href="/PersonalBusiness" className="linkColor">
              <p>Know More</p>
            </a>
          </div>
        </div>

        <div className="card2">
          <img src={im3} alt="im1" height="200px" width="230px" />
          <div className="container2">
            <h4>
              <b>Car Loan</b>
            </h4>
            <a href="/CarLoan" className="linkColor">
              <p>Know More</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
