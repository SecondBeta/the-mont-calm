import React from "react";
import classNames from "classnames";
import { GiMountains } from "react-icons/gi";

import styles from "./Navbar.module.css";
import Link from "next/link";

const Navbar = ({ navigationData, currentRoute, setCurrentRoute }) => {
  return (
    <nav className="hidden md:flex flex-row items-center z-50 sticky justify-between px-8 h-18 rounded-b-3xl bg-white">
      <span className="text-green-600 text-5xl py-3">
        <GiMountains />
      </span>
      <ul className="flex flex-row self-end h-12">
        {navigationData.map((item, index) => (
          <Link key={index} href={item} passHref={true}>
          <li
            className={classNames([
              styles.navItem,
              currentRoute === item && styles.selectedNavItem,
            ])}
            key={index}
            onClick={() => setCurrentRoute(item)}
          >
            {item}
          </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;