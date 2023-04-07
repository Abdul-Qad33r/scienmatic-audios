import React, { useState } from "react";
import "./Navbar.scss";
import { LogoImage, Hamburger, SideMenu, Arrows } from "../../assets/Constants";
import { SocialMediaIcons } from "../Container";
import { AnimatePresence, motion } from "framer-motion";

const asideVariants = {
  initial: {
    x: "100%",
    scale: 0,
  },
  animate: {
    x: 0,
    scale: 1,
    transition: { duration: 0.3, ease: "easeInOut", type: "spring" },
  },
  exit: { x: "-50%", scale: 0 },
};

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <header className="navbar">
      <nav className="flex">
        <a href="/" className="nav__logo">
          <img src={LogoImage} alt="monstercat" />
        </a>

        <SocialMediaIcons className="nav__mediaIconsList" />

        <button
          className="flex nav__hamburger"
          onClick={() => setSidebar((prev) => !prev)}
        >
          <Hamburger />
        </button>
      </nav>

      <AnimatePresence mode="wait">
        {sidebar && (
          <motion.aside
            className="sidebar"
            variants={asideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <a href="/" className="nav__logo">
              <img
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

            <SocialMediaIcons className="flex wrap" />

            <div className="signButtons">
              <a
                role="button"
                href="#"
                className="sidebar__signBtn sidebar__signInBtn"
              >
                SIGN IN
              </a>
              OR
              <a
                role="button"
                href="#"
                className="sidebar__signBtn sidebar__signUpBtn"
              >
                SIGN UP
              </a>
            </div>
            {/* After installing react-router-dom these both links will change in to Link element */}
          </motion.aside>
        )}
      </AnimatePresence>
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
