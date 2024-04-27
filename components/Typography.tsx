import { Inter } from "next/font/google";
import { Noto_Serif_Display } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const noto = Noto_Serif_Display({
  weight: "300",
  style: "italic",
  subsets: ["latin"],
});
export function Title({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h1
      className={`text-white text-5xl md:text-6xl font-bold mb-6 ${inter.className} ${className}`}
    >
      {children}
    </h1>
  );
}

export function SerifTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <h1 className={`${noto.className} ${className}`}>{children}</h1>;
}
