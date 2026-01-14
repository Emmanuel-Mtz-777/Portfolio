import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import SplitText from "../effects/SplitText";
import Particles from "../effects/Particles";
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
        <section className="relative min-h-screen w-screen flex flex-col justify-center items-center px-6 gap-6 overflow-hidden">

            <div className="absolute inset-0 -z-10 pointer-events-none">
                <Particles
                particleColors={["#01c1da"]}
                particleCount={400}
                particleSpread={10}
                speed={0.3}
                particleBaseSize={100}
                moveParticlesOnHover={false}
                alphaParticles={false}
                disableRotation={false}
                />
            </div>

            <SplitText
                key={`greeting-${key}`} 
                text={t("hero.greeting")}
                className="text-3xl md:text-6xl font-semibold text-center text-white"
                delay={60}
                duration={0.4}
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                onLetterAnimationComplete={() => setShowRole(true)}
            />

            <div className="h-10">
                {showRole && (
                <SplitText
                    key={`role-${key}`}
                    text={t("hero.role")}
                    className="text-2xl md:text-4xl font-semibold text-center text-white"
                    delay={50}
                    duration={0.2}
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    onLetterAnimationComplete={() => setShowDescription(true)}
                />
                
                )}
            </div>

            <div
                className={`
                max-w-3xl text-white space-y-3
                transition-all duration-700 ease-out
                ${showDescription ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
                `}
            >
                    <p className="text-lg">{t("hero.description")}</p>
                    <p className="text-lg">{t("hero.completeDescription")}</p>
                    <p className="text-md opacity-80 mt-4">
                    {t("hero.location")}
                    </p>
                    <div className="flex flex-col sm:flex-row items-center py-4 gap-6">
                    <div className="flex w-full justify-center gap-6 sm:gap-16">
                        <AnimatedContent>
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center text-white border border-white px-6 py-3 gap-2 rounded-2xl"
                        >
                            <GitHub className="w-6 h-6"/> Github
                        </a>
                        </AnimatedContent>
                        <AnimatedContent>
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center text-white border border-white px-6 py-3 gap-2 rounded-2xl"
                        >
                            <Linkedin className="w-6 h-6"/> Linkedin
                        </a>
                        </AnimatedContent>
                    </div>
                    <AnimatedContent>
                        <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center text-white border border-white px-6 py-3 gap-2 rounded-2xl w-full sm:w-auto"
                        >
                        <Mail className="w-6 h-6"/> hemmanuelmtz777@gmail.com
                        </a>
                    </AnimatedContent>
                </div>
            </div>
        </section>
    );
}
