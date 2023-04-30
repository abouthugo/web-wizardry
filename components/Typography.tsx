import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });
export function Title({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h1 className={`text-6xl font-bold mb-6 ${inter.className} ${className}`}>
      {children}
    </h1>
  );
}
