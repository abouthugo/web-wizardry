import "./output.css";
import { Inter } from "@next/font/google";
import { NavBar } from "../components/NavBar";

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
        <div
          className={`flex min-h-screen flex-col bg-neutral-900 ${inter.className}`}
        >
          <header className="mb-20">
            <NavBar />
          </header>
          <main className="h-96 flex-1  p-4">{children}</main>
        </div>
      </body>
    </html>
  );
}
