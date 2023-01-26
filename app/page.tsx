import { Title } from "../components/Typography";

export default function Home() {
  return (
    <>
      <div className="relative max-w-3xl mx-auto text-center z-10">
        <Title>Welcome</Title>
        <p className="mb-7 text-2xl text-neutral-400">
          This site is under constant development
        </p>
      </div>
      <div className="absolute right-0 bottom-0 bg-[url('/under-construction.png')] bg-neutral-900 bg-blend-lighten w-[40rem] h-[40rem] bg-cover z-0" />
    </>
  );
}
