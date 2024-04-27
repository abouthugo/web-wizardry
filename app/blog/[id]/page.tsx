import { Title } from "@components/Typography";
import { getPostData } from "@lib/posts";
import Image from "next/image";
import { notFound } from "next/navigation";
import styles from "./page.module.css";

export default async function BlogPost({ params }: any) {
  const blog = await getPostData(params.id);
  if (!blog) notFound();
  return (
    <div className="max-w-3xl mx-auto">
      <Title>{blog.data.title}</Title>
      <Image
        src={blog.data.image}
        alt={blog.data.alt}
        className="rounded-md mb-10"
        width={700}
        height={160}
        priority
      />
      <div
        className={styles.wrapper}
        dangerouslySetInnerHTML={{ __html: blog.contentHTML }}
      ></div>
    </div>
  );
}

type BlogPost = {
  id: string;
  title: string;
  image: {
    src: string;
    alt: string;
  };
  date: string;
  content: string;
};
