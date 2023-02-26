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
      <div className="absolute right-0 bottom-0 bg-[url('/under-construction.png')] bg-neutral-900 bg-blend-lighten bg-cover z-0 w-[28rem] h-[28rem] md:w-[40rem] md:h-[40rem]" />
    </>
  );
}
