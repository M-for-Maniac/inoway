import { useState } from "react";
import Modal from "react-modal";
import { useTranslation } from "react-i18next";

Modal.setAppElement("#root");

function ImageGallery({ images, modalTitleKey, modalAltKey }) {
  const { t } = useTranslation();
  const [modalImage, setModalImage] = useState(null);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={t(image.altKey)}
            className="w-full h-full object-cover rounded-lg cursor-pointer hover:border-2 hover:border-[#FFA500]"
            onClick={() => setModalImage(image)}
            loading="lazy"
            role="button"
            aria-label={t("services.viewImage", { index: index + 1 })}
          />
        ))}
      </div>
      <Modal
        isOpen={!!modalImage}
        onRequestClose={() => setModalImage(null)}
        className="modal"
        overlayClassName="modal-overlay"
        aria={{ labelledby: "modal-title", describedby: "modal-description" }}
      >
        <div className="modal-content">
          <h2 id="modal-title" className="text-xl font-bold text-[#007BFF]">
            {t(modalTitleKey)}
          </h2>
          <img
            src={modalImage?.src}
            alt={t(modalImage?.altKey || modalAltKey)}
            className="w-full object-cover rounded-lg"
            loading="lazy"
          />
          <button
            onClick={() => setModalImage(null)}
            className="bg-[#007BFF] text-white rounded-full px-6 py-2 mt-4 hover:bg-[#FFA500]"
            aria-label={t("modal.close")}
          >
            {t("modal.close")}
          </button>
        </div>
      </Modal>
    </>
  );
}

export default ImageGallery;