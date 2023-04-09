// Navbar
export const LogoImage = "/images/monstercat-logo.webp";
import { GiHamburgerMenu } from "react-icons/gi";
export const Hamburger = GiHamburgerMenu;

import { FaFacebook } from "react-icons/fa";
import { SiTiktok, SiPlayerfm, SiInstagram } from "react-icons/si";
import { BsTwitter, BsTwitch } from "react-icons/bs";
import { RiDiscordFill } from "react-icons/ri";
export const SocialIcons = [
  <SiInstagram />,
  <SiTiktok />,
  <BsTwitter />,
  <BsTwitch />,
  <FaFacebook />,
  <RiDiscordFill />,
  <SiPlayerfm />,
];

import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";
export const Arrows = {
  up: <MdOutlineArrowDropUp />,
  down: <MdOutlineArrowDropDown />,
};

export const SideMenu = [
  { title: "music", submenu: ["our music", "instinct", "uncaged", "silk"] },
  { title: "artist" },
  {
    title: "about",
    submenu: [
      "about monstercat",
      "diversity & inclusion",
      "code of ethics",
      "environmental",
      "contact us",
    ],
  },
  { title: "news" },
  {
    title: "events",
    submenu: ["MONSTERCAT EVENTS EXPERIENCE", "UPCOMING EVENTS"],
  },
  {
    title: "PROGRAMMING",
    submenu: [
      "MonstercatTV",
      "CALL OF THE WILD",
      "SILK SHOWCASE",
      "UPCOMING SHOWS",
    ],
  },
  { title: "GOLD" },
  { title: "PARTNERS" },
  { title: "PRESS" },
  { title: "PLAYER" },
  { title: "SHOP" },
  { title: "LOST CIVILIZATION" },
];

// Header

export const HeaderImages = {
  jpeg: "/images/cover.jpeg",
  webpNormal: "/images/image.webp",
  webpHD: "/images/image (1).webp",
};

export const Audios = [
  { location: "/audios/Assubhu Bada - Naat.mp3" },
  { location: "/audios/Ban k sayal - Naat.mp3" },
  { location: "/audios/Bharr do Jholi-Naat.mp3" },
  {
    location: "/audios/Ek Tera Ishra Ho Aur Asan Ho Manzil .mp3",
  },
  { location: "/audios/Madina Sharif Naat.mp3" },
  { location: "/audios/Saunadi Arabic Naat.mp3" },
  {
    location: "/audios/Subhanallah Walhamdulillah - Naat .mp3",
  },
  { location: "/audios/Tajdar E Haram - Atif.mp3" },
  { location: "/audios/Tajdar-e-Haram - Aatif.mp3" },
  { location: "/audios/Tajdare Haram Naat.mp3" },
  {
    location: "/audios/Wal khat U Hussini Naat sharif.mp3",
  },
  { location: "/audios/Ye Duniya Chor Di Humne.mp3" },
];

export const BodyVideo = "https://www.youtube.com/watch?v=STpHs6Ye4NM";

import { BsShare } from "react-icons/bs";
import { FiPlay, FiPause } from "react-icons/fi";
export const AudioIcons = {
  share: <BsShare />,
  play: <FiPlay />,
  pause: <FiPause />,
};
