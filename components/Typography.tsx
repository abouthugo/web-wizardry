import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });
export function Title({ children }: { children: React.ReactNode }) {
  return (
    <h1 className={`text-6xl font-bold mb-6 ${inter.className}`}>{children}</h1>
  );
}
