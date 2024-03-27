"use client";
import Link from "next/link";
import { Moon, Sun } from "react-feather";
import { useEffect, useState } from "react";

const links = ["Home", "Gus", "Values"];

const getLinkItems = () => {
  return links.map((link) => {
    return (
      <Link
        className="px-2 hover:text-silver dark:hover:text-primary"
        href={`/${link === "Home" ? "" : link.toLowerCase()}`}
        key={link}
      >
        {link}
      </Link>
    );
  });
};

const updateHTMLNodeClass = (isDarkMode: boolean) => {
  const htmlNodes = document.querySelectorAll("html");
  if (htmlNodes.length) {
    if (isDarkMode) {
      htmlNodes[0].classList.remove("light");
      htmlNodes[0].classList.add("dark");
    } else {
      htmlNodes[0].classList.add("light");
      htmlNodes[0].classList.remove("dark");
    }
  }
};

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  useEffect(() => {
    const isDarkModeOnRender = localStorage.getItem("mode") !== "light";
    setIsDarkMode(isDarkModeOnRender);
    updateHTMLNodeClass(isDarkModeOnRender);
  }, []);

  const onClickModeSwitch = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    if (newDarkMode) {
      localStorage.setItem("mode", "dark");
    } else {
      localStorage.setItem("mode", "light");
    }
    updateHTMLNodeClass(newDarkMode);
  };

  return (
    <header className="py-4 px-4 dark:bg-advanced-darkness bg-primary flex">
      <div className="flex-grow">{getLinkItems()}</div>
      <button
        className="hover:text-silver dark:hover:text-primary"
        onClick={onClickModeSwitch}
      >
        {isDarkMode ? <Sun /> : <Moon />}
      </button>
    </header>
  );
}
