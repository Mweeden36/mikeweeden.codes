"use client";
import { Moon, Sun } from "react-feather";
import { useEffect, useState } from "react";

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

export default function ThemeButton() {
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
    <button
      className="hover:text-silver dark:hover:text-primary"
      onClick={onClickModeSwitch}
    >
      {isDarkMode ? <Sun /> : <Moon />}
    </button>
  );
}
