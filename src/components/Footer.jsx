import React from "react";
import { SocialIcon } from "react-social-icons";

const Footer = ({ footer_heading, footer_social_icons }) => {
  return (
    <div className="footer">
      <h4 className="footerHeading">{footer_heading}</h4>
      <h2>You're at the end of the page.</h2>
    </div>
  );
};
export default Footer;
