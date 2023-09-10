import React from "react";

const FooterBottom = ({ links }) => {
  return (
    <div>
      <ul>
        {links.map((link, index) => (
          <li key={index}>{link}</li>
        ))}
      </ul>
    </div>
  );
};

export default FooterBottom;
