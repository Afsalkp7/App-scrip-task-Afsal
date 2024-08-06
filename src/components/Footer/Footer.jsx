import React from "react";
import "./footer.css";
import america from '../../assets/americanFlag.avif';
// import instagramLogo from '../../assets/instagramLogo.png'; // Replace with actual path
// import linkedinLogo from '../../assets/linkedinLogo.png'; // Replace with actual path
// import bankImages from '../../assets/bankImages.png'; // Replace with actual path

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
          <p className="footer-paragraph">
            <img className="american-flag" src={america} alt="American flag"/> USD
          </p>
          <small>
            Transactions will be completed in Euros and a currency reference is available on hover.
          </small>
        </div>
      </footer>
      <hr className="footer-divider" />
      <div className="footer-bottom">
        <div className="footer-bottom-section">
          <h3 className="footer-bottom-heading">mettā muse</h3>
          <ul className="footer-bottom-list">
            <li>About us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact us</li>
            <li>EU compliances docs</li>
          </ul>
        </div>
        <div className="footer-bottom-section">
          <h3 className="footer-bottom-heading">QUICK LINKS</h3>
          <ul className="footer-bottom-list">
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="footer-bottom-section">
          <h3 className="footer-bottom-heading">FOLLOW US</h3>
          <div className="footer-social-media">
            <img src='{instagramLogo}' alt="Instagram" className="social-logo" />
            <img src='{linkedinLogo}' alt="LinkedIn" className="social-logo" />
          </div>
          <p>mettā muse Accepts</p>
          <img src='{bankImages}' alt="Payment methods" className="bank-images" />
        </div>
      </div>
    </>
  );
}

export default Footer;
