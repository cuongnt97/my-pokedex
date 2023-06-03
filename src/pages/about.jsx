import React from "react";
import avatarImage from "../assets/profile.jpeg";
import { FaGithub, FaWhatsapp, FaSkype } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Image from "next/image";
import Link from "next/link";

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
        <Link href="https://github.com/cuongnt97">
          <FaGithub />
        </Link>
        <Link href="mailto:cuong97ndc@gmail.com">
          <SiGmail style={{ color: "#DB4437" }} />
        </Link>
        <Link href="https://api.whatsapp.com/send?phone=0977957565">
          <FaWhatsapp style={{ color: "#5FFC7B" }} />
        </Link>
        <Link href="skype:cuong97ndc?chat">
          <FaSkype style={{ color: "#009EDC" }} />
        </Link>
      </div>
    </div>
  );
}

export default About;
