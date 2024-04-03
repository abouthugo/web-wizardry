import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hugo Perdomo | Projects",
  // TODO: add a project description
  description: "",
  openGraph: {
    title: "Hugo Perdomo | Projects",
    description: "",
    images: [
      {
        // TODO: add preview image
        url: "",
        width: 1200,
        height: 630,
        alt: "preview-page",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
export default function ProjectsHomePage() {
  return (
    <div className="w-full h-dvh">
      <div className="flex min-h-full justify-center items-center">
        <div className="grow">
          <h1 className="text-white text-5xl font-bold text-center">No projects have been imported yet check back later</h1>
        </div>
      </div>
    </div>
  );
}
