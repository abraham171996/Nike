import React from "react";
import styles from "./footer.module.css";
import {AiOutlineTwitter} from "react-icons/ai"
import {BiLogoFacebook} from "react-icons/bi"
import {TfiYoutube} from "react-icons/tfi"
import {TiSocialInstagram} from "react-icons/ti"
import {FaLocationDot} from "react-icons/fa6"
import FooterLinks from "../../../components/FooterLinks/FooterLinks";
import FooterBottom from "../../../components/FooterBottom/FooterBottom";

const footerLinksData = [
  {
    title: "Find A Store",
    links: ["Become A Member", "Sign Up for Email", "Send Us Feedback", "Student Discounts"],
  },
  {
    title: "Find A Store",
    links: ["Order Status", "Delivery", "Returns", "Payment Options", "Contact Us On Nike.com Inquiries", "Contact Us On All Other Inquiries"],
  },
  {
    title: "About Nike",
    links: ["News", "Careers", "Investors", "Sustainability"],
  },
];
const footerBottomLinks = ["Guides", "Terms of Sale", "Terms of Use", "Nike Privacy Policy"];
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
       <div className={styles.footer_wrapper}>
       <div className={styles.footer_top}>
          <div className={styles.footer_top_left}>
          {footerLinksData.map((data, index) => (
                <FooterLinks key={index} title={data.title} links={data.links} />
              ))}
          </div>
          <div className={styles.footer_top_right}>
              <AiOutlineTwitter/>
              <BiLogoFacebook/>
              <TfiYoutube/>
              <TiSocialInstagram/>
          </div>
        </div>
        <div className={styles.footer_bottom}>
          <div className={styles.footer_bottom_left}>
              <div className={styles.location}>
                      <FaLocationDot/>
                      <p>Azerbaijan</p>
              </div>  
                <div className={styles.author}>
                      <span>© 2023 Abraham</span>
                </div>
          </div>
          <div className={styles.footer_bottom_right}>
          <FooterBottom links={footerBottomLinks} />
          </div>
        </div>
       </div>
      </div>
    </footer>
  );
};

export default Footer;
