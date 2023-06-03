import Link from "next/link";
import pokeballIcon from "../assets/pokeball-icon.png";
import Image from "next/image";

import { GiHamburgerMenu } from "react-icons/gi";
import { useRouter } from "next/router";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const router = useRouter();
  const isActive = (pathname) => {
    return router.pathname === pathname;
  };

  const linkList = [
    {
      path: "/search",
      content: "SEARCH",
    },
    {
      path: "/compare",
      content: "COMPARE",
    },
    {
      path: "pokemon/:id",
      content: "POKEMON",
    },
    {
      path: "/list",
      content: "MY LIST",
    },
    {
      path: "/about",
      content: "ABOUT",
    },
  ];
  const [selectedTab, setSelectedTab] = useState(linkList[0]);
  return (
    <nav>
      <div className="block">
        <Image src={pokeballIcon} alt="Pokeball" />
      </div>
      <div className="data">
        <>
          {linkList.map((item) => (
            <Link
              key={item.content}
              className={item.path === selectedTab.path ? "selected" : ""}
              onClick={() => setSelectedTab(item)}
              href={item.path}
            >
              {item.content}
              {item.path === selectedTab.path ? (
                <motion.div
                  key={item.label}
                  className="underline"
                  layoutId="underline"
                />
              ) : null}
            </Link>
          ))}
        </>
      </div>
      <div className="block">
        <GiHamburgerMenu />
      </div>
    </nav>
  );
}
