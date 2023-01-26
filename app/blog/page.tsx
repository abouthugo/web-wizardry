import BlogPostPreview from "../../components/BlogPostPreview";

export default function Home() {
  return (
    <>
      <div className="max-w-3xl mx-auto">
        <h1 className={`text-6xl font-bold mb-6`}>Blog Feed</h1>
      </div>
      <BlogPostPreview />
    </>
  );
}
