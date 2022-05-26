import React from "react";
import { FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a href="https://www.linkedin.com/in/umer-farooq-689685211/" target="_blank">
        <FiLinkedin />
      </a>
      <a href="https://github.com/umerfarooq777" target="_blank">
        <FiGithub />
      </a>
      <a href="https://www.facebook.com/umer.pharooq" target="_blank">
        <FiFacebook />
      </a>
      <a href="https://twitter.com/umerpharooq" target="_blank">
        <FiTwitter />
      </a>
    </div>
  );
};

export default HeaderSocials;
