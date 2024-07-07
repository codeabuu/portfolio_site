import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { SiGmail } from "react-icons/si";
import { SiLinkedin } from 'react-icons/si';


const Footer = () => {
  return (
    <div id="works" className=" mx-auto m-auto h-[300px]  mt-16 sm:h-[250px]">
      <div className=" bg-yellow-400 h-full flex flex-col gap-8 items-center justify-between p-10 sm:p-7">
        <h2 
        data-aos="zoom-out"
         className=" font-bold text-5xl sm:text-3xl">Let's Talk</h2>
        <div className=" flex items-center justify-center gap-8 sm:gap-5">
        <a 
          data-aos="fade-up" data-aos-duration="1400"

            href="https://www.linkedin.com/in/abdulngui"
            className="box font-medium text-white  flex items-center justify-center flex-col"
          >
            <SiLinkedin className=" text-black text-3xl hover:scale-125 cursor-pointer" />
            <p>LinkedIn</p>
          </a>
          <a 
          data-aos="fade-up" data-aos-duration="1200"

            href="https://wa.me/+254725748376"
            className="box font-medium text-white  flex items-center justify-center flex-col"
          >
            <IoLogoWhatsapp className=" text-black text-3xl hover:scale-125 cursor-pointer" />
            <p>WhatsApp</p>
          </a>
          <a 
          data-aos="fade-up" data-aos-duration="1400"

            href="mailto:abdulnguih@gmail.com"
            className="box font-medium text-white  flex items-center justify-center flex-col"
          >
            <SiGmail className=" text-black text-3xl hover:scale-125 cursor-pointer" />
            <p>Gmail</p>
          </a>
        </div>
        <div className="sm:text-[12px]">
          | Copyright &copy; <span>2024 gteks </span> All rights reserved
          <a href="#"></a> |
        </div>
      </div>
    </div>
  );
};

export default Footer;
