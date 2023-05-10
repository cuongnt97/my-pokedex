import Link from 'next/link'
import pokeballIcon from "../assets/pokeball-icon.png"
import Image from 'next/image';

import {GiHamburgerMenu} from 'react-icons/gi'
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();
  const isActive = (pathname) => {
    return router.pathname === pathname;
  };

  return (
    <nav>
      <div className="block">
        <Image src={pokeballIcon} alt="Pokeball" />
      </div>
      <div className="data">
        <>
          <div className="underline"></div>
          <Link
            className={isActive("/search") ? "active-link" : ""}
            href="/search"
          >
            SEARCH
          </Link>
          <Link
            className={isActive("/compare") ? "active-link" : ""}
            href="/compare"
          >
            COMPARE
          </Link>
          <Link
            className={isActive("/pokemon/:id") ? "active-link" : ""}
            href="/pokemon/:id"
          >
            POKEMON
          </Link>
          <Link className={isActive("/list") ? "active-link" : ""} href="/list">
            MY LIST
          </Link>
          <Link
            className={isActive("/about") ? "active-link" : ""}
            href="/about"
          >
            ABOUT
          </Link>
        </>
      </div>
      <div className="block">
        <GiHamburgerMenu />
      </div>
    </nav>
  );
}
