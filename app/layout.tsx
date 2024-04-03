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
    <html lang="en" className="h-dvh">
      <body className="flex min-h-full flex-col">
        <div className={cn(inter.className, styles.base)}>
          <header className="">
            <NavBar />
          </header>
          <main className="grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
