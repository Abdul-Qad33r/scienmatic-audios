export const Background = "./images/background-tile.webp";

// Navbar
export const LogoImage = "./images/monstercat-logo.webp";
import { RxHamburgerMenu } from "react-icons/rx";
export const HamBurger = RxHamburgerMenu;

import { FaInstagramSquare, FaFacebook } from "react-icons/fa";
import { SiTiktok, SiPlayerfm } from "react-icons/si";
import { BsTwitter, BsTwitch } from "react-icons/bs";
import { RiDiscordFill } from "react-icons/ri";
export const SocialMediaIcons = [
  <FaInstagramSquare />,
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
  jpeg: "./images/cover.jpeg",
  webpNormal: "./images/image.webp",
  webpHD: "./images/image (1).webp",
};

export const Audios = [
  { location: "Assubhu Bada - Naat.mp3" },
  { location: "Ban k sayal - Naat.mp3" },
  { location: "Bharr do Jholi-Naat.mp3" },
  { location: "Ek Tera Ishra Ho Aur Asan Ho Manzil .mp3" },
  { location: "Madina Sharif Naat.mp3" },
  { location: "Saunadi Arabic Naat.mp3" },
  { location: "Subhanallah Walhamdulillah - Naat .mp3" },
  { location: "Tajdar E Haram - Atif.mp3" },
  { location: "Tajdar-e-Haram - Aatif.mp3" },
  { location: "Tajdare Haram Naat.mp3" },
  { location: "Wal khat U Hussini Naat sharif.mp3" },
  { location: "Ye Duniya Chor Di Humne.mp3" },
];

export const BodyVideo = "https://www.youtube.com/watch?v=STpHs6Ye4NM";

import { BsShare } from "react-icons/bs";
import { HiOutlinePlay, HiOutlinePause } from "react-icons/hi";
export const AudioIcons = {
  share: <BsShare />,
  play: <HiOutlinePlay />,
  pause: <HiOutlinePause />,
};
