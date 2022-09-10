import { useTranslation } from 'next-i18next';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faGithub, 
    faInstagram, 
    faLinkedinIn, 
    faTwitter 
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    const { t } = useTranslation();
    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer className="lg:grid-layout">
            <div className="mx-5 lg:mx-0 py-5 md:flex md:justify-between lg:col-start-2 lg:col-end-12">
                <div>
                    <p>{t("footer.find-me-text.first")} <span className="font-bold">@Baquerizogo</span> {t("footer.find-me-text.last")}</p>
                    <div className="flex flex-col md:flex-row md:space-x-8 mt-2">
                        <a href="https://www.instagram.com/baquerizogo/" target="blank" className="space-x-1">
                            <FontAwesomeIcon icon={faInstagram}/>
                            <span>Instagram</span>
                        </a>
                        <a href="https://twitter.com/baquerizogo" target="blank" className="space-x-1">
                            <FontAwesomeIcon icon={faTwitter}/>
                            <span>Twitter</span>
                        </a>
                        <a href="https://github.com/baquerizogo" target="blank" className="space-x-1">
                            <FontAwesomeIcon icon={faGithub}/>
                            <span>GitHub</span>
                        </a>
                        <a href="https://www.linkedin.com/in/baquerizogo" target="blank" className="space-x-1">
                            <FontAwesomeIcon icon={faLinkedinIn}/>
                            <span>LinkedIn</span>
                        </a>
                    </div>
                </div>
                <div className="mt-8 md:mt-0 md:text-right md:space-y-2">
                    <p>{t("footer.hire-hello-text.first")} <a href="https://www.he-llo.com" target="blank" className="text-sky-500 font-bold">he-llo</a></p>
                    <p>{t("footer.copyright-text.first")} {year} baquerizogo</p>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;