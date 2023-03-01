"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const LogoComponent = ({ width, height, justLogo = false }: LogoPropsI) => {
  return (
    <>
      <Image
        width={width}
        height={height}
        className="h-6 mr-3 sm:h-9"
        src="/juicelogo.svg"
        alt="Juicebox logo"
      />
      {!justLogo && (
        <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
          HP
        </span>
      )}
    </>
  );
};

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
  const [hidden, setHidden] = useState(true);
  const onClick: OnClickType = (e) => {
    e.preventDefault();
    setHidden(!hidden);
  };

  const HamburgerMenu = () => (
    <button
      className="md:hidden flex w-8 cursor-pointer mr-2"
      onClick={onClick}
    >
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        fill="none"
        stroke="none"
        width="100%"
        height="100%"
      >
        <title>Menu</title>
        <rect x="0" y="0" width="100%" height="100%" fillRule="nonzero" />
        <line
          x1="5"
          y1="7"
          x2="19"
          y2="7"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="5"
          y1="17"
          x2="19"
          y2="17"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="5"
          y1="12"
          x2="19"
          y2="12"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );

  const CloseMobileMenuButton = () => (
    <button className="flex w-6 h-6 cursor-pointer" onClick={onClick}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#ffffff"
        width="100%"
        height="100%"
      >
        <path
          d="M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z"
          fill="#ffffff"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );

  const MobileMenuPortal = () => {
    return (
      <ul
        className={`${
          hidden ? "hidden" : ""
        } absolute top-4 right-1 m-1 flex-col w-[calc(100%_-_16px)] border rounded-lg md:hidden md:space-x-8 md:mt-0 md:text-md md:font-medium md:border-0 bg-neutral-800 border-neutral-700`}
      >
        <div className="flex container md:hidden p-2 flex-wrap items-center justify-between mx-auto mb-3">
          <div className="flex items-center">
            <LogoComponent width={30} height={30} justLogo />
          </div>
          <CloseMobileMenuButton />
        </div>
        <div onClick={onClick} className="p-2 bg-zinc-800 rounded-lg">
          {children}
        </div>
      </ul>
    );
  };
  return (
    <>
      <HamburgerMenu />
      <ul className="hidden flex-col md:justify-end w-4/6 p-4 border rounded-lg md:flex md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium md:border-0">
        <div className="flex container md:hidden flex-wrap items-center justify-between mx-auto">
          <div className="flex items-center">
            <LogoComponent width={30} height={30} />
          </div>
          <button className="flex w-6 h-6 cursor-pointer" onClick={onClick}>
            <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff">
              <path
                d="M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z"
                fill="#ffffff"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        {children}
      </ul>
      <MobileMenuPortal />
    </>
  );
};

export function NavBar() {
  return (
    <nav className="w-full px-2 sm:px-4 py-1 relative z-20">
      <div className="container flex flex-wrap items-center justify-between mx-auto pt-6 md:pt-0">
        <Link href="/" className="flex items-center">
          <LogoComponent width={50} height={50} />
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
  children?: React.ReactNode;
}
interface ItemPropsI extends BasicPropsI {
  href: string;
}

interface LogoPropsI extends BasicPropsI {
  width: number;
  height: number;
  justLogo?: boolean;
}

type OnClickType = (e: React.MouseEvent<HTMLElement>) => void;
