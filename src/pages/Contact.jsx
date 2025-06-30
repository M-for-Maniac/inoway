import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-xl font-bold text-[#007BFF] mb-4">{t("contact.title")}</h1>
      <div className="card">
        <div className="card-content">
          <h2 className="text-base font-semibold text-[#333333] mb-2">{t("contact.getInTouch")}</h2>
          <ul className="space-y-2">
            <li>
              <a
                href="mailto:mehrbod.sarabi@inoway.co"
                className="text-[#007BFF] hover:text-[#FFA500] text-sm flex items-center"
                aria-label={t("contact.developerEmail")}
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2l-8 5-8-5h16zm-2 12H6V8l6 4.5L18 8v10z" />
                </svg>
                {t("contact.developerEmail")} (Mehrbod Sarabi - {t("contact.developerRole")})
              </a>
            </li>
            <li>
              <a
                href="mailto:amir.r.tehrani@inoway.co"
                className="text-[#007BFF] hover:text-[#FFA500] text-sm flex items-center"
                aria-label={t("contact.ceoEmail")}
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2l-8 5-8-5h16zm-2 12H6V8l6 4.5L18 8v10z" />
                </svg>
                {t("contact.ceoEmail")} (Amir R. Tehrani - {t("contact.ceoRole")})
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/+989982261006"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#007BFF] hover:text-[#FFA500] text-sm flex items-center"
                aria-label={t("contact.whatsapp")}
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.78.47 3.51 1.36 5.02L2 22l5.25-1.38c1.45.85 3.08 1.3 4.79 1.3 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm0 18.18c-1.5 0-2.97-.39-4.26-1.13l-.3-.18-3.11.81.82-3.01-.19-.31c-.79-1.3-1.2-2.8-1.2-4.36 0-4.55 3.7-8.25 8.25-8.25s8.25 3.7 8.25 8.25-3.7 8.25-8.25 8.25zm4.99-6.12c-.27-.14-1.62-.8-1.87-.89-.25-.09-.43-.14-.62.14-.18.27-.7.89-.86 1.07-.16.18-.32.2-.59.07-.27-.14-1.14-.52-2.17-1.66-.81-.89-1.36-1.99-1.52-2.26-.16-.27-.02-.41.12-.54.12-.12.27-.32.41-.48.14-.16.18-.27.27-.46.09-.18.05-.36-.02-.5-.07-.14-.62-1.49-.86-2.04-.23-.54-.46-.45-.62-.45-.16 0-.34 0-.52 0-.18 0-.34.07-.5.23-.16.16-.62.61-.62 1.49s.64 2.87 1.11 3.87c.47 1 1.64 3.06 3.98 4.3.56.29 1 .47 1.34.6.56.22 1.07.18 1.47.11.45-.08 1.38-.56 1.58-1.1.2-.54.2-1.01.14-1.1-.07-.09-.25-.14-.52-.28z"/>
                </svg>
                {t("contact.whatsapp")}
              </a>
            </li>
            <li>
              <a
                href="https://www.artinoco.ir"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#007BFF] hover:text-[#FFA500] text-sm flex items-center"
                aria-label={t("contact.website")}
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
                </svg>
                {t("contact.website")}
              </a>
            </li>
            <li>
              <a
                href="tel:+989982261006"
                className="text-[#007BFF] hover:text-[#FFA500] text-sm flex items-center"
                aria-label={t("contact.phone")}
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.18 1.12.57 2.33.96 3.57.96.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.39 2.45.96 3.57.18.35.09.75-.18 1.02l-2.2 2.2z"/>
                </svg>
                {t("contact.phone")} ({t("contact.phoneNumber")})
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;