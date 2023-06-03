import React from "react";
import avatarImage from "../assets/profile.jpeg";
import { FaGithub, FaWhatsapp, FaSkype, FaGoogle } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Image from "next/image";

function About() {
  return (
    <div className="profile">
      <Image
        src={avatarImage}
        alt="Profile picture"
        className="profile-image"
      />
      <h1 className="profile-text">Hi I am Nguyễn Tân Cương</h1>
      <h2 className="profile-text">
        I am a fullstack developer at Viettel Networks
      </h2>
      <h4 className="profile-text">
        This project is created for learning ReactJs and relative libraries!
      </h4>
      <div className="profile-links">
        <a href="https://github.com/cuongnt97">
          <FaGithub />
        </a>
        <a href="https://api.whatsapp.com/send?phone=0977957565">
          <FaWhatsapp />
        </a>
        <a href="mailto:cuong97ndc@gmail.com">
          <SiGmail />
        </a>
      </div>
    </div>
  );
}

export default About;
