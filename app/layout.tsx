import "./output.css";
import { Inter } from "next/font/google";
import { NavBar } from "@components/NavBar";
import styles from "./layout.module.css";
import { cn } from "@/lib/utils";
import Footer from "@components/Footer";

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div
          className={cn(inter.className, styles.base)}
        >
          <header className="">
            <NavBar />
          </header>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
