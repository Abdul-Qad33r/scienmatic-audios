import React, { useState } from "react";
import "./Navbar.scss";
import { LogoImage, Hamburger, SideMenu, Arrows } from "../../assets/Constants";
import { SocialMediaIcons } from "../Container";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(true);

  return (
    <header className="navbar">
      <nav className="flex">
        <a href="/" className="nav__logo">
          <img src={LogoImage} alt="monstercat" />
        </a>

        <SocialMediaIcons />

        <button
          className="flex nav__hamburger"
          onClick={() => setSidebar((prev) => !prev)}
        >
          <Hamburger />
        </button>
      </nav>

      {sidebar && (
        <aside className="sidebar">
          <a href="/" className="nav__logo">
            <img
              loading="lazy"
              src="https://cdn.monstercat.com/monstercat-logo-white.svg"
              alt="monstercat"
              style={{
                width: "180px",
                height: "40.77px",
              }}
            />
          </a>

          <div className="sidebar__menu">
            <ul className="sidebar__menu--items">
              {SideMenu.map((item, index) => (
                <SidebarItem item={item} index={index} />
              ))}
            </ul>
          </div>
        </aside>
      )}
    </header>
  );
};

const SidebarItem = ({ item, index }) => {
  const [subMenu, setSubmenu] = useState(false);
  return (
    <li key={`sidebarItem-${item.title}-${index}`}>
      <button
        className="sidebar__menu--items--item"
        onClick={() => setSubmenu((prev) => !prev)}
      >
        {item.title.toUpperCase()}
      </button>

      {item.submenu && subMenu && (
        <ul className="sidebar__menu--subItems">
          {item.submenu.map((subItem, subIndex) => (
            <li
              className="sidebar__menu--subItems--item"
              key={`sidebarSubItem-${subItem}-${subIndex}`}
            >
              {subItem.toUpperCase()}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default Navbar;
