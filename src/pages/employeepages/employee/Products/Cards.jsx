import React from "react";
import Sidebar from "../../../../components/employeeSidebar/Sidebar";
import im1 from "../ProductImages/ProductImage/Debit card.png";
import im2 from "../ProductImages/ProductImage/Credit card.png";
import im3 from "../ProductImages/ProductImage/Transit Cards.png";
import "./Cards.css";

export default function Cards() {
  return (
    <>
      <Sidebar />
      <section className="cards11">
        <h2 className="tx">Cards</h2>

        <div className="para">
          <p style={{fontWeight:"500", fontSize:"18px"}}>
            {" "}
            Cards are a convenient way to make immediate payments for any
            expense, in a cashless manner. Thanks to credit cards, you can
            fulfil your needs even if you don’t have ready cash on hand. There
            is no need to put off for later what you want to buy now. </p><p style={{fontWeight:"500", fontSize:"18px"}}>It could
            be buying the latest mobile phone, booking airline tickets for your
            upcoming holiday, paying for dinner at a classy restaurant with your
            family or friends or even buying your monthly groceries. Just swipe
            the card now and clear your credit card bill later! Choose from Axis
            Bank’s list of credit cards and apply for credit card that suited
            best for your needs..
          </p>
        </div>

        <div class="card11">
          <img src={im1} alt="im1" height="200px" width="230px" />
          <div class="container11">
            <h4>
              <b>Debit Card</b>
            </h4>
            <a href="/DebitCard" className="linkColor">
              <p>Know More</p>
            </a>
          </div>
        </div>

        <div class="card1">
          <img src={im2} alt="im1" height="200px" width="230px" />
          <div class="container1">
            <h4>
              <b>Credit Card</b>
            </h4>
            <a href="/CreditCard" className="linkColor">
              <p>Know More</p>
            </a>
          </div>
        </div>

        <div class="card2">
          <img src={im3} alt="im1" height="200px" width="230px" />
          <div class="container2">
            <h4>
              <b>Transaction Card</b>
            </h4>
            <a href="/Trans" className="linkColor">
              <p>Know More</p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
