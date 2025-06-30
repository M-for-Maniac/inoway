import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import InfiniteScroll from "react-infinite-scroll-component";
import ProjectCard from "../components/ProjectCard";
import projectsData from "../data/projects.json";

function Projects() {
  const { t, i18n } = useTranslation();
  const [projects, setProjects] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const projectsPerPage = 6;

  const fetchProjects = () => {
    setIsLoading(true);
    const startIndex = page * projectsPerPage;
    const newProjects = projectsData.slice(startIndex, startIndex + projectsPerPage).map((proj) => ({
      id: proj.id,
      title: t(proj.titleKey),
      image: proj.image,
      images: proj.images || [proj.image],
      description: t(proj.descKey),
    }));
    setProjects((prev) => [...prev, ...newProjects]);
    setPage((p) => p + 1);
    setIsLoading(false);
    if (startIndex + newProjects.length >= projectsData.length) {
      setHasMore(false);
    }
  };

  useEffect(() => {
    setProjects([]);
    setPage(0);
    setHasMore(true);
    setIsLoading(true);
    fetchProjects();
  }, [i18n.language, t]);

  return (
    <div className="max-w-5xl mx-auto w-full">
      <h1 className="text-xl font-bold text-[#007BFF] mb-4">{t("projects.title")}</h1>
      {isLoading && projects.length === 0 ? (
        <p className="text-center text-[#4A5568] text-sm">Loading projects...</p>
      ) : (
        <InfiniteScroll
          key={i18n.language} // Force remount on language change
          dataLength={projects.length}
          next={fetchProjects}
          hasMore={hasMore}
          loader={<h4 className="text-center text-[#4A5568] text-sm mt-4">We keep up the MAGIC</h4>}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </InfiniteScroll>
      )}
    </div>
  );
}

export default Projects;