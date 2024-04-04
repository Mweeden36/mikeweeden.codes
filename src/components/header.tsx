import Link from "next/link";
import ThemeButton from "./ThemeButton";

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

export default function Header() {
  return (
    <header className="py-4 px-4 dark:bg-advanced-darkness bg-primary flex">
      <div className="flex-grow">{getLinkItems()}</div>
      <ThemeButton />
    </header>
  );
}
