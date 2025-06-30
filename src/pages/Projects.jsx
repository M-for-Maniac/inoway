import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import ProjectCard from "../components/ProjectCard";
import projectsData from "../data/projects.json";

function Projects() {
  const { t, i18n } = useTranslation();
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("Projects useEffect triggered:", { language: i18n.language, isInitialized: i18n.isInitialized, projectsDataLength: projectsData.length });
    if (i18n.isInitialized) {
      setIsLoading(true);
      const newProjects = projectsData.map((proj) => ({
        id: proj.id,
        title: t(proj.titleKey),
        image: proj.image,
        images: proj.images || [proj.image],
        description: t(proj.descKey),
      }));
      console.log("Projects loaded:", newProjects);
      setProjects(newProjects);
      setIsLoading(false);
    } else {
      console.log("i18n not initialized, waiting...");
    }
  }, [i18n.language, i18n.isInitialized, t]);

  return (
    <div className="max-w-5xl mx-auto w-full">
      <h1 className="text-xl font-bold text-[#007BFF] mb-4">{t("projects.title")}</h1>
      {isLoading ? (
        <p className="text-center text-[#4A5568] text-sm">Loading projects...</p>
      ) : projects.length === 0 ? (
        <p className="text-center text-[#4A5568] text-sm">No projects available</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Projects;