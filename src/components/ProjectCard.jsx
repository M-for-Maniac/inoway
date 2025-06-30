import { useState } from "react";
import { useTranslation } from "react-i18next";
import ProjectModal from "./ProjectModal";

function ProjectCard({ project }) {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  return (
    <>
      <div
        className="card bg-white rounded-xl shadow-md hover:shadow-lg cursor-pointer transition-all duration-300"
        role="button"
        tabIndex={0}
        aria-label={t("modal.viewDetails", { name: project.title })}
        onClick={openModal}
        onKeyDown={(e) => e.key === "Enter" && openModal()}
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
              openModal();
            }}
            className="read-more text-[#007BFF] hover:text-[#FFA500]"
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