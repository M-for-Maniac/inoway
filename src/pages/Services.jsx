import { useTranslation } from "react-i18next";
import ImageGallery from "../components/ImageGallery";

function Services() {
  const { t } = useTranslation();

  const services = [
    {
      id: 1,
      title: t("services.userBehavior.title"),
      description: t("services.userBehavior.description"),
      icon: "/assets/images/002-behavior.png",
    },
    {
      id: 2,
      title: t("services.clarityConsistency.title"),
      description: t("services.clarityConsistency.description"),
      icon: "/assets/images/004-signboard.png",
    },
    {
      id: 3,
      title: t("services.visualCues.title"),
      description: t("services.visualCues.description"),
      icon: "/assets/images/003-eye.png",
    },
    {
      id: 4,
      title: t("services.accessibility.title"),
      description: t("services.accessibility.description"),
      icon: "/assets/images/wheelchair-ramp.png",
    },
    {
      id: 5,
      title: t("services.maintenance.title"),
      description: t("services.maintenance.description"),
      icon: "/assets/images/005-wrench.png",
    },
  ];

  const userBehaviorVideos = [
    {
      src: "/assets/videos/ZurichVipLounge.mp4",
      altKey: "services.userBehavior.video1Alt",
      captionKey: "services.userBehavior.video1Caption",
      poster: "/assets/images/ZurichVIPLounge.PNG",
    },
    {
      src: "/assets/videos/QueensNHSHospital.mp4",
      altKey: "services.userBehavior.video2Alt",
      captionKey: "services.userBehavior.video2Caption",
      poster: "/assets/images/QueensNHSHospital.PNG",
    },
  ];

  const clarityImages = [
    { src: "/assets/images/plan1.jpeg", altKey: "services.clarityConsistency.image1Alt", captionKey: "services.clarityConsistency.image1Caption" },
    { src: "/assets/images/plan2.jpeg", altKey: "services.clarityConsistency.image2Alt", captionKey: "services.clarityConsistency.image2Caption" },
    { src: "/assets/images/plan3.jpeg", altKey: "services.clarityConsistency.image3Alt", captionKey: "services.clarityConsistency.image3Caption" },
  ];

  const visualCuesImages = [
    { src: "/assets/images/totem1.jpeg", altKey: "services.visualCues.image1Alt", captionKey: "services.visualCues.image1Caption" },
    { src: "/assets/images/totem1.jpeg", altKey: "services.visualCues.image2Alt", captionKey: "services.visualCues.image2Caption" },
    { src: "/assets/images/totem1.jpeg", altKey: "services.visualCues.image3Alt", captionKey: "services.visualCues.image3Caption" },
  ];

  const accessibilityImages = [
    { src: "/assets/images/app1.jpg", altKey: "services.accessibility.image1Alt", captionKey: "services.accessibility.image1Caption" },
    { src: "/assets/images/app2.jpeg", altKey: "services.accessibility.image2Alt", captionKey: "services.accessibility.image2Caption" },
    { src: "/assets/images/app3.jpeg", altKey: "services.accessibility.image1Alt", captionKey: "services.accessibility.image1Caption" },
    { src: "/assets/images/app4.jpeg", altKey: "services.accessibility.image1Alt", captionKey: "services.accessibility.image1Caption" },
    { src: "/assets/images/app5.JPG", altKey: "services.accessibility.image1Alt", captionKey: "services.accessibility.image1Caption" },
    { src: "/assets/images/app6.JPG", altKey: "services.accessibility.image1Alt", captionKey: "services.accessibility.image1Caption" },
  ];

  const accessibilityFeatures = [
    t("services.accessibility.feature1"),
    t("services.accessibility.feature2"),
    t("services.accessibility.feature3"),
  ];

  const maintenanceImages = [
    { src: "/assets/images/EIQM ISO LOGO NEW - HSE.png", altKey: "services.maintenance.image1Alt", captionKey: "services.maintenance.image1Caption" },
    { src: "/assets/images/EIQM ISO LOGO NEW - IMS.png", altKey: "services.maintenance.image2Alt", captionKey: "services.maintenance.image2Caption" },
    { src: "/assets/images/EIQM ISO LOGO NEW iso 9001-2015.png", altKey: "services.maintenance.image2Alt", captionKey: "services.maintenance.image2Caption" },
    { src: "/assets/images/EIQM ISO LOGO NEW iso 14001-2015.png", altKey: "services.maintenance.image2Alt", captionKey: "services.maintenance.image2Caption" },
    { src: "/assets/images/EIQM ISO LOGO NEW iso 45001-2018.png", altKey: "services.maintenance.image2Alt", captionKey: "services.maintenance.image2Caption" },
  ];

  return (
    <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-[#1F2937] mb-12 text-center animate-fade-in">
        {t("services.title")}
      </h1>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {services.map((service) => (
          <div
            key={service.id}
            className="service-card bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-in-up"
            role="article"
            aria-labelledby={`service-title-${service.id}`}
          >
            <img
              src={service.icon}
              alt={`${service.title} icon`}
              className="service-icon mx-auto mb-4"
              loading="lazy"
              onError={(e) => (e.target.src = "/assets/images/placeholder.jpg")}
            />
            <div className="card-content">
              <h2
                id={`service-title-${service.id}`}
                className="text-xl font-semibold text-[#2D3748] mb-2"
              >
                {service.title}
              </h2>
              <p className="text-[#4A5568] text-sm">{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Section 1: Understand User Behavior (Video Previews) */}
      <section className="service-section mb-16">
        <h2 className="text-2xl font-bold text-[#007BFF] mb-6">{t("services.userBehavior.sectionTitle")}</h2>
        <p className="text-[#4A5568] mb-8 max-w-3xl mx-auto">{t("services.userBehavior.sectionDescription")}</p>
        <div className="video-gallery grid grid-cols-1 sm:grid-cols-2 gap-6">
          {userBehaviorVideos.map((video, index) => (
            <div
              key={`video-${index}`}
              className="video-item bg-white rounded-xl shadow-md overflow-hidden"
              role="figure"
              aria-labelledby={`video-caption-${index}`}
            >
              <video
                className="w-full h-48 object-cover"
                controls
                preload="metadata"
                poster={video.poster}
              >
                <source src={video.src} type={video.src.endsWith(".webm") ? "video/webm" : "video/mp4"} />
                <source
                  src={video.src.endsWith(".webm") ? video.src.replace(".webm", ".mp4") : video.src.replace(".mp4", ".webm")}
                  type={video.src.endsWith(".webm") ? "video/mp4" : "video/webm"}
                />
                {t("services.userBehavior.videoFallback")}
              </video>
              <div className="p-4">
                <p id={`video-caption-${index}`} className="text-sm text-[#4A5568]">
                  {t(video.captionKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Design for Clarity and Consistency (Images and Plans) */}
      <section className="service-section mb-16">
        <h2 className="text-2xl font-bold text-[#007BFF] mb-6">{t("services.clarityConsistency.sectionTitle")}</h2>
        <p className="text-[#4A5568] mb-8 max-w-3xl mx-auto">{t("services.clarityConsistency.sectionDescription")}</p>
        <ImageGallery
          images={clarityImages}
          modalTitleKey="services.clarityConsistency.modalTitle"
          modalAltKey="services.clarityConsistency.modalAlt"
        />
      </section>

      {/* Section 3: Leverage Visual Cues and Landmarks (Totems and Landmarks) */}
      <section className="service-section mb-16">
        <h2 className="text-2xl font-bold text-[#007BFF] mb-6">{t("services.visualCues.sectionTitle")}</h2>
        <p className="text-[#4A5568] mb-8 max-w-3xl mx-auto">{t("services.visualCues.sectionDescription")}</p>
        <ImageGallery
          images={visualCuesImages}
          modalTitleKey="services.visualCues.modalTitle"
          modalAltKey="services.visualCues.modalAlt"
        />
      </section>

      {/* Section 4: Ensure Accessibility (App Features and Images) */}
      <section className="service-section mb-16">
        <h2 className="text-2xl font-bold text-[#007BFF] mb-6">{t("services.accessibility.sectionTitle")}</h2>
        <p className="text-[#4A5568] mb-8 max-w-3xl mx-auto">{t("services.accessibility.sectionDescription")}</p>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2">
            <h3 className="text-lg font-semibold text-[#2D3748] mb-4">{t("services.accessibility.featuresTitle")}</h3>
            <ul className="feature-list space-y-4">
              {accessibilityFeatures.map((feature, index) => (
                <li key={`feature-${index}`} className="flex items-start">
                  <span className="feature-icon mr-2">•</span>
                  <span className="text-[#4A5568] text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-1/2">
            <ImageGallery
              images={accessibilityImages}
              modalTitleKey="services.accessibility.modalTitle"
              modalAltKey="services.accessibility.modalAlt"
            />
          </div>
        </div>
      </section>

      {/* Section 5: Maintain and Update (Maintenance Services) */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-[#007BFF] mb-6">{t("services.maintenance.sectionTitle")}</h2>
        <p className="text-[#4A5568] max-w-3xl mx-auto">{t("services.maintenance.sectionDescription")}</p>
        <div className="iso-images">
        <img src="/assets/images/EIQM ISO LOGO NEW - HSE.png" altKey="services.maintenance.image1Alt" captionKey="services.maintenance.image1Caption" />
        <img src="/assets/images/EIQM ISO LOGO NEW - IMS.png" altKey="services.maintenance.image1Alt" captionKey="services.maintenance.image1Caption" />
        <img src="/assets/images/EIQM ISO LOGO NEW iso 9001-2015.png" altKey="services.maintenance.image1Alt" captionKey="services.maintenance.image1Caption" />
        <img src="/assets/images/EIQM ISO LOGO NEW iso 14001-2015.png" altKey="services.maintenance.image1Alt" captionKey="services.maintenance.image1Caption" />
        <img src="/assets/images/EIQM ISO LOGO NEW iso 45001-2018.png" altKey="services.maintenance.image1Alt" captionKey="services.maintenance.image1Caption" />
        </div>
      </section>
    </div>
  );
}

export default Services;