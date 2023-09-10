import React from "react";

const FooterLinks = ({ title, links }) => {
  return (
    <div>
      <h3>{title}</h3>
      <ul>
        {links.map((link, index) => (
          <li key={index}>{link}</li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;