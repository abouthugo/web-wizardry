import BlogPreview, { BlogData } from "@components/BlogPostPreview";
import { getAllPosts } from "@lib/posts";

export default async function Home() {
  const blogs = (await getAllPosts()).map((b) => b.data) as BlogData[];
  return (
    <>
      <div className="max-w-3xl mx-auto">
        <h1 className={`text-6xl font-bold mb-6`}>Blog Feed</h1>
      </div>
      {blogs.map((b) => (
        <BlogPreview blog={b} key={b.id} />
      ))}
    </>
  );
}
