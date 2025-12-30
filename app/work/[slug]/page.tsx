import Navbar from "@/app/components/Navbar";
import { projects } from "@/app/util/data";
import { notFound } from "next/navigation";
import Header from "../components/Header";
import ProjectImages from "../components/ProjectImages";
import MoreProject from "../components/MoreProject";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex w-full flex-col items-center">
      {/* Navbar */}
      <Navbar />

      {/* Description */}
      <Header project={project} />

      {/* Project Images */}
      <ProjectImages project={project} />

      {/* more projects */}
      <MoreProject />
    </div>
  );
}
