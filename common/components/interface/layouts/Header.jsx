import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTranslation } from 'next-i18next';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faExternalLink, faHamburger } from "@fortawesome/free-solid-svg-icons";

import ButtonLink from "../buttons/ButtonLink";
import LocaleSwitcher from "./LocaleSwitcher";

import { MenuItems } from "@/utils/MenuItems";
import NavBarToggle from "./NavbarToggle";

const Header = () => {
    const { t } = useTranslation("");
    const router = useRouter();

    const [scrollY, setScrollY] = useState(0); //Get scroll position
    const [collapsed, setCollapsed] = useState(false); //Triggers sidebar

    const handleClick = () => {
        setCollapsed(!collapsed);
    };
    
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
            <div className="fixed top-0 left-0 z-30 right-0 flex justify-center">
                <div className={`w-full max-w-384 grid-layout ${scrollY > 30 ? '!px-0' : '!px-0'}`}>
                    <nav 
                        className={`${scrollY > 30 || collapsed ? 'shadow-md shadow-black/5 border-b border-b-white/50' : ''}
                         px-5 lg:px-4 relative py-2 bg-background/50 backdrop-blur-lg rounded-b-lg col-span-full lg:col-start-2 lg:col-end-12
                        `}
                    >
                        <div className="flex justify-between items-center">
                            <div className="">
                                <div className="hidden md:block rounded-full w-12">
                                    <img src="/images/profile.png" alt="Jose Baquerizo picture" className="rounded-full"/>
                                </div>
                                <div className="md:hidden relative z-50">
                                    <NavBarToggle onClick={handleClick} collapsed={collapsed}/>
                                </div>
                            </div>
                            <div className="hidden grow md:flex justify-end items-center space-x-8 mx-8">
                                {MenuItems.map((e) => (
                                    <Link href={e.path} passHref={e.external}>
                                        <a className={`flex items-center space-x-1 link-animated ${router.pathname == e.path ? 'text-primary-600 font-bold' : ''}`}>
                                            <span>{e.name}</span>
                                            { e.external ? <FontAwesomeIcon icon={faExternalLink} size="xs" className="mt-0.5"/> : null }
                                        </a>
                                    </Link>
                                ))}
                            </div>
                            <div className="flex items-center space-x-4">
                                <LocaleSwitcher/>
                                <ButtonLink color="primary" className="font-bold" href="#" disabled>{t("navbar.contact-button-text")}</ButtonLink>
                            </div>
                        </div>
                        <div className={`md:hidden flex justify-around my-4 transition-all ${!collapsed ? '-translate-y-4 -mb-10 opacity-0' : ''}`}>
                            {MenuItems.map((e) => (
                                <Link href={e.path} passHref={e.external}>
                                    <a className={`flex items-center space-x-1 link-animated ${router.pathname == e.path ? 'text-primary-600 font-bold' : ''}`}>
                                        <span>{e.name}</span>
                                        { e.external ? <FontAwesomeIcon icon={faExternalLink} size="xs" className="mt-0.5"/> : null }
                                    </a>
                                </Link>
                            ))}
                        </div>
                    </nav>
                </div>
            </div>
    );
}
 
export default Header;