"use client";
import Link from "next/link";
import Image from "next/image";
import { type PropsWithChildren, useEffect, useRef, useState } from "react";
import classNames from "classnames";

type ItemPropsI = PropsWithChildren<{
  href: string;
}>;

type LogoPropsI = {
  width: number;
  height: number;
  justLogo?: boolean;
};

const LogoComponent = ({ width, height, justLogo = false }: LogoPropsI) => {
  return (
    <div className="z-20 flex">
      <Image
        width={width}
        height={height}
        className="h-6 sm:h-9"
        src="/juicelogo.svg"
        alt="Juicebox logo"
      />
      {!justLogo && (
        <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
          HP
        </span>
      )}
    </div>
  );
};

type withOnClickProps = {
  onClick: () => void;
  hidden: boolean;
};

const HamburgerMenu = ({ onClick, hidden }: withOnClickProps) => (
  <button
    className="md:hidden z-20 flex w-8 cursor-pointer mr-2"
    onClick={onClick}
    onKeyDown={onClick}
    type="button"
  >
    <div
      className={classNames(
        "grid justify-items-center gap-2 transition-all duration-200 ease-linear",
        {
          "-rotate-180": !hidden,
        },
      )}
    >
      <span
        className={classNames(
          "transition-all ease-in duration-200 h-[2px] w-7 rounded-full bg-white",
          {
            "-rotate-45": !hidden,
            "translate-y-2.5": !hidden,
          },
        )}
      />
      <span
        className={classNames(
          "transition-all ease-in duration-200 h-[2px] w-7 rounded-full bg-white",
          {
            "rotate-180": !hidden,
            "scale-0": !hidden,
          },
        )}
      />
      <span
        className={classNames(
          "transition-all ease-in duration-200 h-[2px] w-7 rounded-full bg-white",
          {
            "rotate-45": !hidden,
            "-translate-y-2.5": !hidden,
          },
        )}
      />
    </div>
  </button>
);

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

const NavList = () => {
  const MobileMenuPortal = () => {
    const [hidden, setHidden] = useState(true);
    const onClick = () => {
      setHidden((prevHidden) => {
        if (prevHidden) {
          document.body.classList.add("overflow-hidden");
        } else {
          document.body.classList.remove("overflow-hidden");
        }
        return !prevHidden;
      });
    };

    const renderCount = useRef(0);
    useEffect(() => {
      renderCount.current = renderCount.current + 1;
      console.log("Render count:", renderCount.current);
    });

    const classes = [
      "opacity-0",
      "transition-all ease-linear duration-300",
      "-z-1",
      "absolute top-0 left-0 flex-col pt-14 px-3",
      "md:hidden",
      "bg-neutral-800 border-neutral-700 h-full w-full",
    ];
    return (
      <>
        <HamburgerMenu onClick={onClick} hidden={hidden} />
        <ul
          className={classNames(classes, {
            "opacity-100": !hidden,
            "z-10": !hidden,
            "overflow-clip": !hidden,
          })}
        >
          <div
            onClick={onClick}
            onKeyDown={onClick}
            className={classNames("p-2", {
              hidden,
            })}
          >
            <NavItem href="/">Home</NavItem>
            <NavItem href="/projects">Projects</NavItem>
          </div>
        </ul>
      </>
    );
  };
  return (
    <>
      <ul className="hidden flex-col md:justify-end w-4/6 p-4 border rounded-lg md:flex md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium md:border-0">
        <NavItem href="/">Home</NavItem>
        <NavItem href="/projects">Projects</NavItem>
      </ul>
      <MobileMenuPortal />
    </>
  );
};

export function NavBar() {
  return (
    <nav className="w-full px-2 sm:px-4 py-1">
      <div className="md:container flex flex-wrap items-center justify-between mx-auto py-3 md:py-0">
        <Link href="/" className="flex items-center">
          <LogoComponent width={50} height={50} />
        </Link>
        <NavList />
      </div>
    </nav>
  );
}
