

export default function Footer() {
    return <>
  <div className="container-fluid p-0 footer-bg">
    <div className="row align-items-center" data-type="footer">
      <div className="col-md-3 text-top">
        <img src="src/assets/images/foot_logo.png" alt="footer_logo" className="footer-logo"></img>
      </div>
      <div className="col-md-8" data-type="foot">
        <div className="d-flex align-items-start">
          <div className="d-flex flex-column footer-links-container">
            <div className="d-flex footer-links-margin">
              <div className="col-md-4"> 
                <div className="d-flex flex-column">
                  <a href="#">Home</a>
                  <a href="#">Products</a>
                  <a href="#">Features</a>
                  <a href="#">Private by Design</a>
                  <a href="#">Support</a>
                  <a href="#">Sitemap</a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="d-flex flex-column">
                  <a href="#">Privacy Policy</a>
                  <a href="#">Cookies</a>
                  <a href="#">Terms of Use</a>
                  <a href="#">Legal</a>
                  <a href="#">Terms of Sale</a>
                  <a href="#">Ad Choices</a>
                </div>
              </div>
            </div>
          </div>
          <div className="ml-0 footer-links-margin"> 
            <p className="footer-email-text">Get emails from Facebook about Portal <br></br>and other Facebook hardware products.</p>
            <button className="btn btn-primary btn-sm">Sign Up</button>
            <button className="btn btn-link btn-sm">United States (English)</button>
          </div>
        </div>
        <div className="mt-1">
          <p className="footer-disclaimer-text">“Hey Portal” voice command availability varies. Learn more. Screen images simulated. User experience may vary. Requires wireless internet connection and Facebook <br></br>
                            or WhatsApp account. WhatsApp is not available on tablets. Features, functionality, and content vary and may not be available on all Portal models or <br></br>
                            in all areas and languages. Some features may require a Facebook account and downloading the Portal mobile app. Additional account registration, terms and 
                            <br></br>fees may apply.</p>
          <p className="footer-disclaimer-text">*Represents savings off of regular, non-promotional prices. Both products must be purchased on same receipt to qualify. Valid on qualifying purchases at <br></br>
                            Not valid on prior purchases and non-transferable. Not valid for cash or cash equivalent. Valid on in-stock products only. Offer may be cancelled <br></br>
                            or modified at any time without notice. Void where prohibited.</p>
          <p className="footer-disclaimer-text">©2021 Facebook, Inc. or its affiliates. All rights reserved. Facebook, Portal from Facebook and the Facebook logo are trademarks of Facebook, Inc. Amazon, Alexa <br></br>
                            and all related logos are trademarks of Amazon.com, Inc. or its affiliates. Other names and brands may be claimed as the property of others.</p>
        </div>
      </div>
    </div>
  </div>
    </>
}