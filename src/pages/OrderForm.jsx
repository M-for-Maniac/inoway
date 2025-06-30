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

    // Format WhatsApp message
    const message = `
      New Order from Inoway:
      Name: ${formData.name}
      Email: ${formData.email}
      Phone: ${formData.phone}
      Project Type: ${t(`projects.${formData.projectType}`)}
      Details: ${formData.details || "None"}
    `.trim();
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/+989982261006?text=${encodedMessage}`; // Your testing number

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", projectType: "", details: "" });
  };

  return (
    <div className="max-w-5xl mx-auto w-full py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-xl font-bold text-[#007BFF] mb-4">{t("order.title")}</h1>
      {submitted ? (
        <div className="text-center">
          <p className="text-[#4A5568] mb-4">{t("order.success")}</p>
          <Link
            to="/order"
            className="inline-block bg-[#007BFF] text-white rounded-full px-6 py-2 text-sm font-semibold hover:bg-[#FFA500] transition-all duration-300"
            onClick={() => setSubmitted(false)}
          >
            {t("order.submitAnother")}
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-xl shadow-md">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-[#2D3748]">
              {t("order.name")}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-[#007BFF] focus:ring-[#007BFF]"
              aria-required="true"
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#2D3748]">
              {t("order.email")}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-[#007BFF] focus:ring-[#007BFF]"
              aria-required="true"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-[#2D3748]">
              {t("order.phone")}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-[#007BFF] focus:ring-[#007BFF]"
              placeholder="+989982261006"
              aria-required="true"
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>
          <div>
            <label htmlFor="projectType" className="block text-sm font-medium text-[#2D3748]">
              {t("order.projectType")}
            </label>
            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-[#007BFF] focus:ring-[#007BFF]"
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
            {errors.projectType && <p className="text-red-500 text-xs mt-1">{errors.projectType}</p>}
          </div>
          <div>
            <label htmlFor="details" className="block text-sm font-medium text-[#2D3748]">
              {t("order.details")}
            </label>
            <textarea
              id="details"
              name="details"
              value={formData.details}
              onChange={handleChange}
              rows="4"
              className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-[#007BFF] focus:ring-[#007BFF]"
              placeholder={t("order.detailsPlaceholder")}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#007BFF] text-white rounded-full px-6 py-3 text-sm font-semibold hover:bg-[#FFA500] transition-all duration-300"
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