import { useState } from "react";
import { useTranslation } from "react-i18next";
import ProjectModal from "./ProjectModal";

function ProjectCard({ project }) {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className="card"
        role="button"
        aria-label={t("modal.viewDetails", { name: project.title })}
      >
        <img
          src={project.image || '/assets/images/placeholder.jpg'}
          alt={project.title}
          loading="lazy"
          onError={(e) => (e.target.src = '/assets/images/placeholder.jpg')}
        />
        <div className="card-content">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setIsModalOpen(true);
            }}
            className="read-more"
            aria-label={t("projects.readMore")}
          >
            {t("projects.readMore")}
          </a>
        </div>
      </div>
      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={project}
      />
    </>
  );
}

export default ProjectCard;