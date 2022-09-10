import { useEffect, useState } from "react";
import { useTranslation } from 'next-i18next';
import ButtonLink from "../buttons/ButtonLink";
import LocaleSwitcher from "./LocaleSwitcher";

const Header = () => {
    const { t } = useTranslation("");

    const [scrollY, setScrollY] = useState(0); //Get scroll position
    
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        handleScroll(); //Set the initial scroll value
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    return (
        <header className="fixed top-0 left-0 right-0 z-40 flex justify-center">
            <div className={`w-full max-w-384 grid-layout ${scrollY > 30 ? '!px-0' : ''}`}>
                <nav 
                    className={`${scrollY > 30 ? 'shadow-md shadow-black/5 px-5 border-b border-b-white/50' : ''}
                        relative py-2 bg-background/50 backdrop-blur-md flex justify-between items-center rounded-b-lg col-span-full lg:col-start-2 lg:col-end-12
                    `}
                >
                    <div className="">
                        <div className="rounded-full w-12">
                            <img src="/images/profile.png" alt="Jose Baquerizo picture" className="rounded-full"/>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <LocaleSwitcher/>
                        <ButtonLink color="primary" className="font-bold" href="#" disabled>{t("navbar.contact-button-text")}</ButtonLink>
                    </div>
                </nav>
            </div>
        </header>
    );
}
 
export default Header;