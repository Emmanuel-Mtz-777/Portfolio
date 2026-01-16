import { useState } from "react";
import { useTranslation } from "react-i18next";
import { HiMenu, HiX, HiHome, HiFolder, HiCode, HiAcademicCap, HiMail } from "react-icons/hi";

export default function Header() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const menuItems = [
    { id: "home", label: t("nav.home"), icon: <HiHome /> },
    { id: "projects", label: t("nav.projects"), icon: <HiFolder /> },
    { id: "stack", label: t("nav.stack"), icon: <HiCode /> },
    { id: "certifications", label: t("nav.certifications"), icon: <HiAcademicCap /> },
    { id: "contact", label: t("nav.contact"), icon: <HiMail /> },
  ];

  return (
    <header className="w-full fixed top-5 z-50 flex items-center justify-between sm:justify-center sm:gap-8 px-4 sm:px-20">

      <nav className="hidden md:flex text-white gap-10 text-lg font-medium bg-black/60 px-6 py-3 rounded-full backdrop-blur-sm shadow-lg shadow-white/10 border border-white/10">
        {menuItems.map((item) => (
          <button key={item.id} onClick={() => handleScroll(item.id)}>
            {item.label}
          </button>
        ))}
      </nav>


      <div className="flex items-center gap-4 justify-between sm:justify-evenly w-full md:w-auto">
        <div className="flex items-center gap-2 bg-black/60 px-4 py-2 rounded-full backdrop-blur-sm">
          <button
            onClick={() => i18n.changeLanguage("es")}
            className="text-white font-medium px-2 py-1"
          >
            Es
          </button>
          <button
            onClick={() => i18n.changeLanguage("en")}
            className="text-white font-medium px-2 py-1"
          >
            En
          </button>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMenuOpen(true)}
        >
          <HiMenu />
        </button>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-full bg-black/40 backdrop-blur-md z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >

        <div className="flex justify-end p-4">
          <button className="text-white text-3xl" onClick={() => setMenuOpen(false)}>
            <HiX />
          </button>
        </div>

        <nav className="flex flex-col gap-8 px-8 mt-8 text-white text-2xl font-medium">
          {menuItems.map((item) => (
            <button
              key={item.id}
              className="flex items-center gap-4"
              onClick={() => handleScroll(item.id)}
            >
              <span className="text-3xl">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
