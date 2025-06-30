import { useState } from "react";
import Modal from "react-modal";
import { useTranslation } from "react-i18next";

Modal.setAppElement("#root");

function ProjectModal({ isOpen, onClose, project }) {
  const { t, i18n } = useTranslation();
  const [mainImage, setMainImage] = useState(project?.image || "/assets/images/placeholder.jpg");

  if (!project) return null;

  const isRtl = i18n.language === "fa" || i18n.language === "ar";

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="modal"
      overlayClassName="modal-overlay"
      aria={{ labelledby: "modal-title", describedby: "modal-description" }}
    >
      <div className="modal-content" dir={isRtl ? "rtl" : "ltr"}>
        <h2 id="modal-title" className="text-xl font-bold text-[#007BFF]">{project.title}</h2>
        <img
          src={mainImage}
          alt={project.title}
          loading="lazy"
          onError={(e) => (e.target.src = '/assets/images/placeholder.jpg')}
        />
        {project.images && (
          <div className="flex flex-wrap gap-2 justify-center mt-2">
            {project.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${project.title} thumbnail ${index + 1}`}
                className="modal-thumbnail border-2 border-transparent hover:border-[#FFA500] data-[active=true]:border-[#007BFF]"
                data-active={mainImage === image}
                onClick={() => setMainImage(image)}
                loading="lazy"
                onError={(e) => (e.target.src = '/assets/images/placeholder.jpg')}
              />
            ))}
          </div>
        )}
        <p id="modal-description" className="text-[#4A5568]">{project.description}</p>
        <button
          onClick={onClose}
          className="bg-[#007BFF] text-white rounded-full hover:bg-[#FFA500] text-sm font-medium transition-colors duration-200"
          aria-label={t("modal.close")}
        >
          {t("modal.close")}
        </button>
      </div>
    </Modal>
  );
}

export default ProjectModal;