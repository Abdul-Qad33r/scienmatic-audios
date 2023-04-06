import React from "react";
import "./SocialMediaIcons.scss";
import { SocialIcons } from "../../assets/Constants";

const SocialMediaIcons = () => {
  return (
    <ul className="nav__mediaIconsList">
      {SocialIcons.map((icon, index) => (
        <li
          key={`social-media-icon-${index}`}
          className="nav__mediaIconsList--item"
          tabIndex="0"
        >
          {icon}
        </li>
      ))}
    </ul>
  );
};

export default SocialMediaIcons;
