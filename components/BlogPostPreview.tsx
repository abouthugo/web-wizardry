import Link from "next/link";
import Image from "next/image";

// TODO: make this into a reusable component
export default function BlogPostPreview() {
  return (
    <article className="max-w-3xl mx-auto">
      <Link href="/blog/1">
        <div className="flex  justify-between outline-white outline-1 hover:bg-neutral-800 hover:cursor-pointer rounded-md p-4">
          <div>
            <p className="text-sm text-neutral-500">Jan 24, 2023</p>
            <h1 className="text-2xl font-bold">Withering Garden</h1>
            <p className="text-neutral-400 text-md mb-2">
              I find that as I&apos;m getting older I&apos;m able to easily find
              more things to write about.
            </p>
            <span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
              Poems
            </span>
          </div>
          <div>
            <Image
              src="/withering-garden.png"
              alt="Withering Garden"
              className="rounded-md"
              width={100}
              height={40}
              priority
            />
          </div>
        </div>
      </Link>
    </article>
  );
}
