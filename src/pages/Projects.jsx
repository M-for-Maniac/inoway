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
    console.log("fetchProjects called:", { page, language: i18n.language, isInitialized: i18n.isInitialized, projectsDataLength: projectsData.length });
    if (!i18n.isInitialized) {
      console.log("i18n not initialized, skipping fetch");
      return;
    }
    setIsLoading(true);
    const startIndex = page * projectsPerPage;
    const newProjects = projectsData.slice(startIndex, startIndex + projectsPerPage).map((proj) => ({
      id: proj.id,
      title: t(proj.titleKey),
      image: proj.image,
      images: proj.images || [proj.image],
      description: t(proj.descKey),
    }));
    console.log("New projects fetched:", newProjects);
    setProjects((prev) => {
      const updated = [...prev, ...newProjects];
      console.log("Updated projects:", updated);
      return updated;
    });
    setPage((p) => p + 1);
    setIsLoading(false);
    if (startIndex + newProjects.length >= projectsData.length) {
      console.log("No more projects to fetch, total:", projectsData.length);
      setHasMore(false);
    }
  };

  useEffect(() => {
    console.log("Projects useEffect triggered:", { language: i18n.language, isInitialized: i18n.isInitialized });
    if (i18n.isInitialized) {
      setProjects([]);
      setPage(0);
      setHasMore(true);
      setIsLoading(true);
      fetchProjects();
    }
  }, [i18n.language, i18n.isInitialized]);

  // Fallback to load all projects if empty
  useEffect(() => {
    if (i18n.isInitialized && !isLoading && projects.length === 0 && hasMore) {
      console.log("Fallback: Loading all projects due to empty state");
      const newProjects = projectsData.map((proj) => ({
        id: proj.id,
        title: t(proj.titleKey),
        image: proj.image,
        images: proj.images || [proj.image],
        description: t(proj.descKey),
      }));
      setProjects(newProjects);
      setHasMore(false);
      setIsLoading(false);
    }
  }, [projects, isLoading, i18n.isInitialized, t]);

  return (
    <div className="max-w-5xl mx-auto w-full">
      <h1 className="text-xl font-bold text-[#007BFF] mb-4">{t("projects.title")}</h1>
      {isLoading && projects.length === 0 ? (
        <p className="text-center text-[#4A5568] text-sm">Loading projects...</p>
      ) : (
        <InfiniteScroll
          key={i18n.language}
          dataLength={projects.length}
          next={fetchProjects}
          hasMore={hasMore}
          loader={<h4 className="text-center text-[#4A5568] text-sm mt-4">We keep up the MAGIC</h4>}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.length === 0 && !isLoading ? (
              <p className="text-center text-[#4A5568] text-sm">No projects available</p>
            ) : (
              projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))
            )}
          </div>
        </InfiniteScroll>
      )}
    </div>
  );
}

export default Projects;