"use client";
import Link from "next/link";
import Image from "next/image";

const NavItem = ({ children, href }: ItemPropsI) => {
  return (
    <li>
      <Link
        href={href}
        className="block py-2 pl-3 pr-4 md:p-0 text-white hover:text-neutral-300"
      >
        {children}
      </Link>
    </li>
  );
};

const NavList = ({ children }: BasicPropsI) => {
  return (
    <ul className="flex flex-col p-4 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium md:border-0 bg-neutral-800 border-neutral-700">
      {children}
    </ul>
  );
};

export function NavBar() {
  return (
    <nav className="w-full z-20 top-0 left-0 px-2 sm:px-4 py-1 bg-neutral-800">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link href="/" className="flex items-center">
          <Image
            width={50}
            height={50}
            className="h-6 mr-3 sm:h-9"
            src="juicelogo.svg"
            alt="Juicebox logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
            HP
          </span>
        </Link>
        <NavList>
          <NavItem href="/">Home</NavItem>
          <NavItem href="/blog">Blog</NavItem>
          <NavItem href="/about">About</NavItem>
        </NavList>
      </div>
    </nav>
  );
}

interface BasicPropsI {
  children: React.ReactNode;
}
interface ItemPropsI extends BasicPropsI {
  href: string;
}
