import React from "react";
import { FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a href="https://linkedin.com" target="_blank">
        <FiLinkedin />
      </a>
      <a href="https://github.com" target="_blank">
        <FiGithub />
      </a>
      <a href="https://dribbble.com" target="_blank">
        <FiFacebook />
      </a>
      <a href="https://dribbble.com" target="_blank">
        <FiTwitter />
      </a>
    </div>
  );
};

export default HeaderSocials;
