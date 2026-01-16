import { useTranslation } from "react-i18next";

export default function Header() {
  const { t, i18n } = useTranslation();

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="w-full h-15 flex items-center justify-center fixed top-5 z-50 gap-20">
      <nav className=" text-white flex gap-10 text-lg font-medium bg-black/60 px-6 py-3 rounded-full backdrop-blur-sm shadow-lg shadow-white/10 border border-white/10">
        <button onClick={() => handleScroll("home")}>{t("nav.home")}</button>
        <button onClick={() => handleScroll("projects")}>{t("nav.projects")}</button>
        <button onClick={() => handleScroll("stack")}>{t("nav.stack")}</button>
        <button onClick={() => handleScroll("certifications")}>{t("nav.certifications")}</button>
        <button onClick={() => handleScroll("contact")}>{t("nav.contact")}</button>
      </nav>

      <div className=" text-white flex gap-10 text-lg font-medium bg-black/60 px-6 py-3 rounded-full backdrop-blur-sm shadow-lg shadow-white/10 border border-white/10">
        <button onClick={() => i18n.changeLanguage("es")}>Es</button>
        <button onClick={() => i18n.changeLanguage("en")}>En</button>
      </div>
    </header>
  );
}
