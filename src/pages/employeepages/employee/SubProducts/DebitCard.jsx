import React from "react";

import im0 from "../ProductImages/Banner Image/Deb Card.png";
import im1 from "../ProductImages/ProductSub/E-Debit Card.png";
import im2 from "../ProductImages/ProductSub/Liberty Debit Card.png";
import im3 from "../ProductImages/ProductSub/Burgundy Debit Card.png";

import "../SubProducts/ProductPages.css";
import Sidebar from "../../../../components/employeeSidebar/Sidebar";
export default function DebitCard() {
  return (
    <>
      <Sidebar />
      <div className="main">
      <div className="display-cont">
        <div class="Banner-image">
          <img src={im0} alt="im1" height="300px" width="100%" />
          <h2 className="heading">Debit Card</h2>
        </div>
      </div>
      <div className="container pb-5">
        <p style={{ fontWeight: "500", textAlign: "center"  }}>
          In a world going cashless, Debit Cards are your best friends! Free
          yourself from carrying around rolls of cash everywhere you go. Using a
          Debit Card is almost as easy as using cash and is more secure and
          safer. Use them anywhere, anytime. A Debit Card can be used as an ATM
          card for withdrawing cash from any bank’s ATM. It can also be used for
          making payments by swiping at a merchant’s point-of-sales machine and
          for online transactions.
        </p>
      </div>
      <div class="small-cont">
        <div>
          <div>
            <img src={im1} alt="im1" height="100px" width="10%" />
            <h4>E-Debit Card</h4>
            <p>Daily cash withdrawal & purchase</p>
          </div>
        </div>
      </div>

      <div class="small-cont2">
        <div>
          <div>
            <img src={im2} alt="im1" height="100px" width="16%" />
            <h4>Liberty Debit Card</h4>
            <p>Daily cash withdrawal limit of Rs. 50,000</p>
          </div>
        </div>
      </div>

      <div class="small-cont3 pt-4">
        <div>
          <div>
            <img src={im3} alt="im1" height="100px" width="45%" />
            <h4>Burgundy Debit Card</h4>
            <p>limit of Rs. 3 lakh to Rs. 6 lakh</p>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
