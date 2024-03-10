import Link from "next/link";
import { ReactElement } from "react";
import { GitHub, Linkedin, Mail } from "react-feather";

const links = [
  {
    icon: Linkedin,
    text: "LinkedIn",
    href: "https://www.linkedin.com/in/mikeweeden36/",
  },
  {
    icon: Mail,
    text: "Email",
    href: "mailto:weeden.mike92@gmail.com",
  },
  {
    icon: GitHub,
    text: "GitHub",
    href: "https://github.com/mweeden36",
  },
];

const rows = links.reduce((rowsMarkup, rowObj) => {
  return [
    ...rowsMarkup,
    <li className="pb-2 px-4 inline hover:text-primary" key={rowObj.href}>
      <Link href={rowObj.href} target="_blank">
        <rowObj.icon className="block sm:inline" />
        <span className="sm:pl-2 lg:inline hidden">{rowObj.text}</span>
      </Link>
    </li>,
  ];
}, [] as ReactElement[]);

export default function LinksBlock() {
  return (
    <div className="w-full flex justify-center">
      <div className="bg-advanced-darkness p-6 rounded-md flex flex-col shadow-md">
        <h2 className="self-center text-xl pb-6 font-semibold">
          Let&apos;s connect
        </h2>
        <ul className="flex justify-around">{rows}</ul>
      </div>
    </div>
  );
}
