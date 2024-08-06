import React from "react";
import "./footer.css";
import america from '../../assets/americanFlag.avif'
function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-left">
          <h3 className="footer-heading">BE THE FIRST TO KNOW</h3>
          <p>Sign up for updates from mettā muse.</p>
          <div className="subscribe">
            <input
              type="text"
              placeholder="Enter your Email"
              className="email-input"
            />
            <button className="subscribe-button">Subscribe</button>
          </div>
        </div>
        <div className="footer-right">
          <h4 className="footer-sub-heading">CONTACT US</h4>
            <p className="footer-paragraph">+44 221 133 5360</p>
            <p className="footer-paragraph">customercare@mettamuse.com</p>
          <h4 className="footer-sub-heading">CURRENCY</h4>
            <p className="footer-paragraph"><img className="american-flag" src={america} alt="American flag"/> USD</p>
            <small>Transactions will be completed in Euros and a currency reference is available on hover.</small>
        </div>
      </footer>
    </>
  );
}

export default Footer;
