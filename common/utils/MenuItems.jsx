import { useTranslation } from 'next-i18next';

const MenuItems = () => {
    const { t } = useTranslation("");

    return (
        [
            {
                name: t("navbar.home-text"),
                path: '/',
                external: false
            },
            {
                name: t("navbar.about-me-text"),
                path: '/about',
                external: false
            },
            {
                name: t("navbar.portfolio-text"),
                path: '/portfolio',
                external: false
            },
            {
                name: t("navbar.resume-text"),
                path: t("navbar.resume-url"),
                external: true
            },
        ]
    );
}
 
export default MenuItems;
