import { useTranslation } from "react-i18next";

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

  return (
    <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-[#1F2937] mb-8 text-center animate-fade-in">
        {t("services.title")}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => {
          const iconPath = process.env.NODE_ENV === 'production' ? `/inoway${service.icon}` : service.icon;
          return (
            <div
              key={service.id}
              className="service-card bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-in-up"
              role="article"
              aria-labelledby={`service-title-${service.id}`}
            >
              <img
                src={iconPath}
                alt={`${service.title} icon`}
                className="service-icon mx-auto mb-4"
                loading="lazy"
                onError={(e) => (e.target.src = process.env.NODE_ENV === 'production' ? '/inoway/assets/images/placeholder.jpg' : '/assets/images/placeholder.jpg')}
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
          );
        })}
      </div>
    </div>
  );
}

export default Services;