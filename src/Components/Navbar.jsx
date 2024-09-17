import logo from "../assets/Black_Circle_Icon_Business_Logo-removebg-preview.png";

import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Navbar = () => {
  return <nav className="px-20 mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 max-w-32 h-32" src={logo} alt="logo" />
    </div>

    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        
        <a href="https://www.linkedin.com/in/jainam-kajaliya-3a39211b6/"><FaLinkedin /></a>
        <a href="https://github.com/jainam014"><FaGithub /></a>
        <a href="https://www.instagram.com/jainam.kajaliya/"><FaInstagram/></a>
        <a href="https://x.com/Jainam_32"><FaXTwitter/></a>
    </div>
  </nav>
}

export default Navbar