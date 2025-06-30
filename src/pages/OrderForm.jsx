import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function OrderForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    details: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = t("order.errors.name");
    if (!formData.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)) newErrors.email = t("order.errors.email");
    if (!formData.phone.match(/^\+?\d{10,15}$/)) newErrors.phone = t("order.errors.phone");
    if (!formData.projectType) newErrors.projectType = t("order.errors.projectType");
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const message = `
      New Order from Inoway:
      Name: ${formData.name}
      Email: ${formData.email}
      Phone: ${formData.phone}
      Project Type: ${t(`projects.${formData.projectType}`)}
      Details: ${formData.details || "None"}
    `.trim();
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/+989982261006?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", projectType: "", details: "" });
  };

  return (
    <div className="max-w-2xl mx-auto w-full py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-[#007BFF] mb-8 animate-fade-in">{t("order.title")}</h1>
      {submitted ? (
        <div className="form-success animate-fade-in-up">
          <p>{t("order.success")}</p>
          <Link
            to="/order"
            className="form-success-link"
            onClick={() => setSubmitted(false)}
          >
            {t("order.submitAnother")}
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="form-container">
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              {t("order.name")}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-input"
              aria-required="true"
            />
            {errors.name && <p className="form-error">{errors.name}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              {t("order.email")}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              aria-required="true"
            />
            {errors.email && <p className="form-error">{errors.email}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="phone" className="form-label">
              {t("order.phone")}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="form-input"
              placeholder="+989982261006"
              aria-required="true"
            />
            {errors.phone && <p className="form-error">{errors.phone}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="projectType" className="form-label">
              {t("order.projectType")}
            </label>
            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className="form-select"
              aria-required="true"
            >
              <option value="">{t("order.selectProjectType")}</option>
              <option value="internationalAirports">{t("projects.internationalAirports")}</option>
              <option value="localAirports">{t("projects.localAirports")}</option>
              <option value="hospitals">{t("projects.hospitals")}</option>
              <option value="universities">{t("projects.universities")}</option>
              <option value="subwayStations">{t("projects.subwayStations")}</option>
              <option value="malls">{t("projects.malls")}</option>
              <option value="parking">{t("projects.parking")}</option>
              <option value="emergency">{t("projects.emergency")}</option>
            </select>
            {errors.projectType && <p className="form-error">{errors.projectType}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="details" className="form-label">
              {t("order.details")}
            </label>
            <textarea
              id="details"
              name="details"
              value={formData.details}
              onChange={handleChange}
              rows="6"
              className="form-textarea"
              placeholder={t("order.detailsPlaceholder")}
            />
          </div>
          <button
            type="submit"
            className="form-button"
            aria-label={t("order.submit")}
          >
            {t("order.submit")}
          </button>
        </form>
      )}
    </div>
  );
}

export default OrderForm;