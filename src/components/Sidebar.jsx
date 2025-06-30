import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import debounce from "lodash/debounce";

function Sidebar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleSidebar = () => setIsOpen(!isOpen);

  // Debounce language change to prevent rapid clicks
  const changeLanguage = debounce((lang) => {
    localStorage.setItem("language", lang); // Set default language
    i18n.changeLanguage(lang).then(() => {
      console.log("Language changed to:", lang);
      // Update URL with new lng parameter
      const searchParams = new URLSearchParams(location.search);
      searchParams.set("lng", lang);
      navigate(`${location.pathname}?${searchParams.toString()}`);
      setIsOpen(false);
    });
  }, 300);

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