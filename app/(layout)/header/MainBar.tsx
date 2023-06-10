/* eslint-disable @next/next/no-img-element */
"use client";

import Button from "@/app/(components)/Button";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Container from "../Container";
import NavLink from "./nav/NavLink";
import { navItems } from "./nav/data";

const MainBar = () => {
  const [toggle, setToggle] = useState(false);

  const handleNavToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="bg-white py-2">
      <Container>
        <div className="flex items-center justify-between gap-4">
          <a href="#">
            <img
              src="http://dev2.growthbydesign.org/wp-content/uploads/Logo.png"
              alt="logo"
              width={260}
              height={65}
            />
          </a>
          <Bars3Icon
            onClick={handleNavToggle}
            className="h-10 w-10 text-brandingBlue-400 md:hidden"
          />
          <Button
            btnText="LOGIN"
            link="#"
            className="hidden font-bold md:flex"
          />
        </div>
      </Container>
      <nav>
        <ul className="bg-brandingBlue-400 text-white py-4 text-center my-2 hidden md:hidden">
          {navItems.map((item, idx) => (
            <NavLink key={idx} link={item.link} text={item.text} />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MainBar;
