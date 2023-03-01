import fs from "fs/promises";
import Image from "next/image";
import { notFound } from "next/navigation";
import showdown from "showdown";
import { Title } from "../../../components/Typography";
import styles from "./page.module.css";

async function getBlogPost(blogId: string) {
  const converter = new showdown.Converter({ simpleLineBreaks: true });
  const posts: PostsRepo = require("../../../content/blogs.json");
  const { blogs } = posts;
  const blogPost = blogs.find((t) => t.id === blogId);
  if (!blogPost) return null;

  const mdPath = `content/${blogPost.content}`;
  const blogText = await fs.readFile(mdPath, "utf-8");
  return { ...blogPost, text: converter.makeHtml(blogText) };
}

export default async function BlogPost({ params }: any) {
  const blog = await getBlogPost(params.id);
  if (!blog) notFound();
  return (
    <div className="max-w-3xl mx-auto">
      <Title>{blog.title}</Title>
      <Image
        src={blog.image.src}
        alt={blog.image.alt}
        className="rounded-md mb-10"
        width={700}
        height={160}
        priority
      />
      <div
        className={styles.wrapper}
        dangerouslySetInnerHTML={{ __html: blog.text }}
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

type PostsRepo = {
  blogs: BlogPost[];
};
