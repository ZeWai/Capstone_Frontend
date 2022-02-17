import React from "react";
import footerlogo from "./assets/white-logo.png";

export const FooterPage = () => {
  return (
    <>
      <div className="footer">
        <div className="logo-container">
          <img src={footerlogo} className="footerlogo" alt="footerlogo" />
        </div>
        <div className="footer-copyright">
          &copy; {new Date().getFullYear()} Rooftop Republic Co. Limited All
          Rights Reserved{" "}
        </div>
      </div>
    </>
  );
};
