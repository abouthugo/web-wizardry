import Link from "next/link";
import Image from "next/image";

export default function BlogPreview({ blog }: { blog: BlogData }) {
  return (
    <article className="max-w-3xl mx-auto">
      <Link href={`/blog/${blog.id}`}>
        <div className="flex  justify-between outline-white outline-1 hover:bg-neutral-800 hover:cursor-pointer rounded-md p-4">
          <div>
            <p className="text-sm text-neutral-500">{blog.date}</p>
            <h1 className="text-2xl font-bold">{blog.title}</h1>
            <p className="text-neutral-400 text-md mb-2">{blog.preview}</p>
            {blog.tags.split(", ").map((t) => (
              <span
                key={t}
                className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
              >
                {t}
              </span>
            ))}
          </div>
          <div>
            <Image
              src={blog.image}
              alt={blog.alt}
              className="rounded-md"
              width={100}
              height={40}
            />
          </div>
        </div>
      </Link>
    </article>
  );
}

export type BlogData = {
  id: number;
  title: string;
  tags: string;
  date: string;
  preview: string;
  image: string;
  alt: string;
};
