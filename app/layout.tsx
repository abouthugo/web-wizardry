"use client";
import "./output.css";
import { Inter } from "@next/font/google";
import { NavBar } from "../components/NavBar";
import Div100vh from "react-div-100vh";
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <Div100vh>
          <div
            className={`flex min-h-screen flex-col bg-neutral-900 ${inter.className}`}
          >
            <header className="mb-10">
              <NavBar />
            </header>
            <main className="h-96 flex-1 px-4">{children}</main>
          </div>
        </Div100vh>
      </body>
    </html>
  );
}
