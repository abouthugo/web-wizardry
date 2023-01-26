"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NavData = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
];

const NavItem = ({ item }: { item: NavObj }) => {
  if (item.current)
    return (
      <Link
        href={item.href}
        className="block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent  md:p-0 dark:text-white"
      >
        {item.name}
      </Link>
    );
  return (
    <Link
      href={item.href}
      className="block py-2 pl-3 pr-4 text-neutral-700 rounded hover:bg-neutral-100 md:hover:bg-transparent md:p-0 md:dark:hover:text-white dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-neutral-700"
    >
      {item.name}
    </Link>
  );
};

const NavList = ({ items }: { items: NavObj[] }) => {
  const pathname = usePathname();
  return (
    <ul className="flex flex-col p-4 mt-4 border border-neutral-100 rounded-lg bg-neutral-50 md:flex-row md:space-x-8 md:mt-0 md:text-xl md:font-medium md:border-0 md:bg-white dark:bg-neutral-800 md:dark:bg-neutral-800 dark:border-neutral-700">
      {items.map((item) => (
        <li key={item.name}>
          <NavItem item={{ ...item, current: item.href === pathname }} />
        </li>
      ))}
    </ul>
  );
};

export function NavBar() {
  return (
    <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-neutral-800 fixed w-full z-20 top-0 left-0 border-b border-neutral-200 dark:border-neutral-600">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link href="/" className="flex items-center">
          <Image
            width={50}
            height={50}
            className="h-6 mr-3 sm:h-9"
            src="juicelogo.svg"
            alt="Juicebox logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            HP
          </span>
        </Link>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <NavList items={NavData} />
        </div>
      </div>
    </nav>
  );
}

type NavObj = {
  name: string;
  current?: boolean;
  href: string;
};
