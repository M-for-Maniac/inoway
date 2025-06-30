import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function Sidebar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const changeLanguage = debounce((lang) => {
    localStorage.setItem("language", lang);
    i18n.changeLanguage(lang).then(() => {
      console.log("Language changed to:", lang);
      setIsOpen(false);
    });
  }, 300);

  useEffect(() => {
    const lng = localStorage.getItem("language") || "en";
    if (lng !== i18n.language) {
      console.log("Syncing language from localStorage:", lng);
      i18n.changeLanguage(lng);
    }
  }, [i18n]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <button
        className="burger-menu"
        onClick={toggleSidebar}
        aria-label={isOpen ? t("nav.closeMenu") : t("nav.openMenu")}
      >
        {isOpen ? "✕" : "☰"}
      </button>
      <div className={`sidebar ${isOpen ? "open" : ""}`} role="navigation" aria-label="Main navigation">
        <div>
          <h1 className="text-[#007BFF]">InoWay by Artino</h1>
          <nav className="space-y-1">
            {[
              { to: "/", label: t("nav.home") },
              { to: "/services", label: t("services.title") },
              { to: "/projects", label: t("projects.title") },
              { to: "/contact", label: t("contact.title") },
            ].map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
                onClick={() => setIsOpen(false)}
                aria-current={({ isActive }) => (isActive ? "page" : undefined)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="mt-8 flex items-center flex-wrap gap-2">
            {["en", "fa", "ar", "ru"].map((lang) => (
              <button
                key={lang}
                onClick={() => changeLanguage(lang)}
                className={`lang-button ${i18n.language === lang ? "active" : ""}`}
                aria-label={`Switch to ${lang.toUpperCase()}`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;