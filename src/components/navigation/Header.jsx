import { useTranslation } from "react-i18next";

export default function Header() {
    const { t, i18n } = useTranslation();
    return(
        <header className="w-screen h-15 flex items-center justify-center fixed top-5 z-50 gap-20">
            <nav className=" text-white flex gap-10 text-lg font-medium bg-black/30 px-6 py-3 rounded-full backdrop-blur-sm shadow-lg shadow-white/10 border border-white/10">
                <a href="">{t('nav.home')}</a>
                <a href="">{t('nav.projects')}</a>
                <a href="">{t('nav.stack')}</a>
                <a href="">{t('nav.certifications')}</a>
                <a href="">{t('nav.contact')}</a>
            </nav>
            <div className=" text-white flex gap-10 text-lg font-medium bg-black/30 px-6 py-3 rounded-full backdrop-blur-sm shadow-lg shadow-white/10 border border-white/10">
                <button onClick={() => i18n.changeLanguage('es')}>Es</button>
                <button onClick={() => i18n.changeLanguage('en')}>En</button>
            </div>
        </header>
    )
}
