import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import ProjectCard from "../components/ProjectCard";
import projectsData from "../data/projects.json";

function Home() {
  const { t, i18n } = useTranslation();
  const [projects, setProjects] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [expandedStandard, setExpandedStandard] = useState(null);

  const projectsPerPage = 3;

  const fetchProjects = () => {
    console.log("fetchProjects called:", { page, language: i18n.language, isInitialized: i18n.isInitialized });
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
    console.log("Home useEffect triggered:", { language: i18n.language, isInitialized: i18n.isInitialized });
    if (i18n.isInitialized) {
      setProjects([]);
      setPage(0);
      setHasMore(true);
      setIsLoading(true);
      setExpandedStandard(null);
      fetchProjects();
    }
  }, [i18n.language, i18n.isInitialized]);

  const standards = [
    {
      id: "international-airports",
      title: t("projects.internationalAirports"),
      standard: t("home.standards.internationalAirports.standard"),
      details: t("home.standards.internationalAirports.details"),
    },
    {
      id: "local-airports",
      title: t("projects.localAirports"),
      standard: t("home.standards.localAirports.standard"),
      details: t("home.standards.localAirports.details"),
    },
    {
      id: "hospitals",
      title: t("projects.hospitals"),
      standard: t("home.standards.hospitals.standard"),
      details: t("home.standards.hospitals.details"),
    },
    {
      id: "universities",
      title: t("projects.universities"),
      standard: t("home.standards.universities.standard"),
      details: t("home.standards.universities.details"),
    },
    {
      id: "subway-stations",
      title: t("projects.subwayStations"),
      standard: t("home.standards.subwayStations.standard"),
      details: t("home.standards.subwayStations.details"),
    },
    {
      id: "malls",
      title: t("projects.malls"),
      standard: t("home.standards.malls.standard"),
      details: t("home.standards.malls.details"),
    },
  ];

  const toggleStandard = (id) => {
    setExpandedStandard(expandedStandard === id ? null : id);
  };

  return (
    <div className="max-w-7xl mx-auto w-full space-y-12 px-4 sm:px-6 lg:px-8">
      <section className="hero-company bg-white rounded-2xl shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#007BFF] to-[#4A90E2] opacity-40"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 p-8 sm:p-12">
          <div className="md:w-1/2 px-4 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#fafafa] mb-6">{t("home.hero")}</h1>
            <p className="text-lg sm:text-xl text-[#fafafa] mb-6">{t("home.subhero")}</p>
            <h2 className="text-3xl font-semibold text-[#fafafa] mb-4">{t("home.company.title")}</h2>
            <p className="text-[#fafafa] mb-6">{t("home.company.description")}</p>
            <Link
              to="/contact"
              className="inline-block bg-[#007BFF] text-white rounded-full px-8 py-3 text-base font-semibold hover:bg-[#FFA500] transition-all duration-300 transform hover:scale-105"
              aria-label={t("home.cta")}
            >
              {t("home.cta")}
            </Link>
          </div>
          <div className="md:w-1/2 animate-fade-in-up">
            <img
              src="/assets/images/hero.jpg"
              alt={t("home.company.imageAlt")}
              className="rounded-lg object-cover w-full h-64"
              onError={(e) => (e.target.src = '/assets/images/placeholder.jpg')}
            />
          </div>
        </div>
      </section>

      <section className="standards-overview">
        <h2 className="text-3xl font-semibold text-[#2D3748] text-center">{t("home.standards.title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {standards.map((standard) => (
            <div
              key={standard.id}
              className="standard-card bg-white rounded-xl shadow-md p-6 cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              onClick={() => toggleStandard(standard.id)}
              role="button"
              tabIndex={0}
              aria-label={t("modal.viewDetails", { name: standard.title })}
              onKeyDown={(e) => e.key === "Enter" && toggleStandard(standard.id)}
            >
              <h3 className="text-xl font-semibold text-[#2D3748] mb-2">{standard.title}</h3>
              <p className="text-[#2D3748] text-sm mb-4">{standard.standard}</p>
              <div
                className={`standard-details overflow-hidden transition-all duration-300 ${
                  expandedStandard === standard.id ? "max-h-40 opacity-100 p-4" : "max-h-0 opacity-0 p-0"
                }`}
              >
                <p className="text-[#2D3748] text-sm">{standard.details}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="projects-section">
        <h2 className="text-3xl font-semibold text-[#2D3748] text-center">{t("home.featuredProjects")}</h2>
        {isLoading && projects.length === 0 ? (
          <p className="text-center text-[#4A5568] text-sm">Loading projects...</p>
        ) : (
          <InfiniteScroll
            dataLength={projects.length}
            next={fetchProjects}
            hasMore={hasMore}
            loader={<p className="text-center text-[#4A5568] text-sm mt-6">Loading...</p>}
            key={i18n.language}
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
      </section>
    </div>
  );
}

export default Home;