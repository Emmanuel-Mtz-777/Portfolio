import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import SplitText from "../effects/SplitText";
import AnimatedContent from "../effects/AnimatedContent";
import Mail from "../icons/Mail";
import Linkedin from "../icons/Linkedin";
import GitHub from "../icons/Github";

export default function Hero() {
    const { t, i18n } = useTranslation();
    const [showRole, setShowRole] = useState(false);
    const [showDescription, setShowDescription] = useState(false);
    const [key, setKey] = useState(0);

    useEffect(() => {
        setShowRole(false);
        setShowDescription(false);
        setKey(prev => prev + 1);
    }, [i18n.language]);

    return (
        <section id="home" className="relative min-h-[100dvh] w-full flex items-center justify-center px-4 pt-20 sm:px-6 overflow-hidden">
        <div className="flex flex-col items-center text-center gap-6 max-w-3xl w-full py-20">

            <SplitText
            key={`greeting-${key}`}
            text={t("hero.greeting")}
            className="text-2xl sm:text-3xl md:text-5xl font-semibold text-stone-400"
            delay={60}
            duration={0.4}
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            tag="h1"
            onLetterAnimationComplete={() => setShowRole(true)}
            />

            <div className="h-10 sm:h-12">
            {showRole && (
                <SplitText
                key={`role-${key}`}
                text={t("hero.role")}
                className="text-2xl sm:text-4xl  font-semibold text-white"
                delay={50}
                duration={0.2}
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                tag="h2"
                onLetterAnimationComplete={() => setShowDescription(true)}
                />
            )}
            </div>
            <div
            className={`
                text-white space-y-3 max-w-2xl
                transition-all duration-700 ease-out
                text-start
                ${showDescription ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
            `}
            >
            <p className="text-base sm:text-lg">
                {t("hero.description")}
            </p>

            <p className="text-base sm:text-lg">
                {t("hero.completeDescription")}
            </p>

            <p className="text-sm opacity-80 mt-4">
                {t("hero.location")}
            </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-6 w-full">

            <div className="flex flex-row gap-6 justify-center ">
                <AnimatedContent>
                <a href="#" className="hero-link">
                    <GitHub className="w-5 h-5" />
                    GitHub
                </a>
                </AnimatedContent>

                <AnimatedContent>
                <a href="#" className="hero-link">
                    <Linkedin className="w-5 h-5" />
                    LinkedIn
                </a>
                </AnimatedContent>
            </div>
            <AnimatedContent>
                <a
                href="#"
                className="hero-link px-6 w-full sm:w-auto text-center"
                >
                <Mail className="w-5 h-5" />
                <span className="break-all sm:break-normal">
                    hemmanuelmtz777@gmail.com
                </span>
                </a>
            </AnimatedContent>
            </div>
        </div>
        </section>
    );
}
