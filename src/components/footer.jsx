import React from "react";

const Footer = () => {
  return (
    <footer className="container">
      <hr />
      <small>Hamb store&nbsp;&copy;&nbsp;{(new Date()).getFullYear()}</small>
    </footer>
  );
};

export default Footer;
