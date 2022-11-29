import { faBootstrap, faCss3Alt, faFigma, faGitAlt, faHtml5, faJs, faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons";
import { faCalendarDays, faChartSimple, faDatabase, faHands } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from 'next-i18next';

const ProjectsList = () => {
    const { t } = useTranslation("");

    return ([
        {
            id: 0,
            title: t("0.title", {ns: 'portfolio'}),
            projectIcon: faChartSimple,
            isPinned: true,
            summary: t("0.summary", {ns: 'portfolio'}),
            imageUrl: "/images/portfolio/samara.png",
            imageAlt: "Samara project preview",
            link: {
                text: t("0.link.text", {ns: 'portfolio'}),
                url: 'https://samara.frontend.hello4.one/',
            },
            keys: {
                status: t("0.keys.status", {ns: 'portfolio'}),
                isBeta: true,
                role: t("0.keys.role", {ns: 'portfolio'}),
                company: {
                    name: t("0.keys.company.name", {ns: 'portfolio'}),
                    url: 'https://www.he-llo.com/'
                }
            },
            technologies: [
                {
                    icon: faHtml5,
                    text: 'HTML 5'
                },
                {
                    icon: faCss3Alt,
                    text: 'CSS 3'
                },
                {
                    icon: faJs,
                    text: 'JavaScript'
                },
                {
                    icon: faReact,
                    text: 'ReactJS'
                },
                {
                    abbr: 'Nx',
                    text: 'NextJS',
                },
                {
                    icon: faGitAlt,
                    text: 'Git/Github'
                },
                {
                    abbr: 'Ts',
                    text: 'Tailwind CSS'
                },
                {
                    abbr: 'Ps',
                    text: 'Adobe Photoshop'
                },
                {
                    icon: faFigma,
                    text: 'Figma'
                }
            ],
            details: {
                p1: t("0.details.p1", {ns: 'portfolio'}),
                p2: t("0.details.p2", {ns: 'portfolio'}),
                p3: t("0.details.p3", {ns: 'portfolio'})
            },
            features: [
                [
                    t("0.features.0.responsive", {ns: 'portfolio'}),
                    t("0.features.0.cloud", {ns: 'portfolio'}),
                    t("0.features.0.multi-user", {ns: 'portfolio'}),
                    t("0.features.0.multi-branch", {ns: 'portfolio'}),
                ],
                [
                    t("0.features.1.roles", {ns: 'portfolio'}),
                    t("0.features.1.inventory", {ns: 'portfolio'}),
                    t("0.features.1.sales", {ns: 'portfolio'}),
                    t("0.features.1.stats", {ns: 'portfolio'}),
                ],
                [
                    t("0.features.2.products", {ns: 'portfolio'}),
                    t("0.features.2.orders", {ns: 'portfolio'}),
                    t("0.features.2.kardex", {ns: 'portfolio'}),
                    t("0.features.2.customer", {ns: 'portfolio'}),
                ],
            ]
        },
        {
            id: 1,
            title: t("1.title", {ns: 'portfolio'}),
            projectIcon: faCalendarDays,
            isPinned: false,
            summary: t("1.summary", {ns: 'portfolio'}),
            imageUrl: "/images/portfolio/schedules.png",
            imageAlt: "Schedule manager project preview",            
            link: {
                text: t("1.link.text", {ns: 'portfolio'}),
                url: 'https://github.com/baquerizogo/ScheduleClient',
            },
            keys: {
                status: t("1.keys.status", {ns: 'portfolio'}),
                isBeta: false,
                role: t("1.keys.role", {ns: 'portfolio'}),
                company: {
                    name: t("1.keys.company.name", {ns: 'portfolio'}),
                }
            },
            technologies: [
                {
                    icon: faHtml5,
                    text: 'HTML 5'
                },
                {
                    icon: faCss3Alt,
                    text: 'CSS 3'
                },
                {
                    icon: faJs,
                    text: 'JavaScript'
                },
                {
                    icon: faReact,
                    text: 'ReactJS'
                },
                {
                    abbr: 'Nx',
                    text: 'NextJS',
                },
                {
                    icon: faGitAlt,
                    text: 'Git/Github'
                },
                {
                    icon: faNodeJs,
                    text: 'NodeJS',
                },
                {
                    abbr: 'Ex',
                    text: 'ExpressJS'
                },
                {
                    icon: faDatabase,
                    text: 'MongoDB'
                },
                {
                    icon: faBootstrap,
                    text: 'Bootstrap'
                },
                {
                    abbr: 'Ps',
                    text: 'Adobe Photoshop'
                },
                {
                    icon: faFigma,
                    text: 'Figma'
                }
            ],
            details: {
                p1: t("1.details.p1", {ns: 'portfolio'}),
                p2: t("1.details.p2", {ns: 'portfolio'}),
                p3: t("1.details.p3", {ns: 'portfolio'})
            },
            features: [
                [
                    t("1.features.0.responsive", {ns: 'portfolio'}),
                    t("1.features.0.automation", {ns: 'portfolio'}),
                    t("1.features.0.multi-user", {ns: 'portfolio'}),
                    t("1.features.0.manual", {ns: 'portfolio'}),
                ],
                [
                    t("1.features.1.constraint", {ns: 'portfolio'}),
                    t("1.features.1.algorithm", {ns: 'portfolio'}),
                    t("1.features.1.teacher", {ns: 'portfolio'}),
                    t("1.features.1.stats", {ns: 'portfolio'}),
                ],
                [
                    t("1.features.2.class", {ns: 'portfolio'}),
                    t("1.features.2.course", {ns: 'portfolio'}),
                    t("1.features.2.schedule", {ns: 'portfolio'}),
                    t("1.features.2.export", {ns: 'portfolio'}),
                ],
            ]
        },
        {
            id: 3,
            title: t("2.title", {ns: 'portfolio'}),
            projectIcon: faHands,
            isPinned: false,
            summary: t("2.summary", {ns: 'portfolio'}),
            imageUrl: "/images/portfolio/hellopage.png",
            imageAlt: "He-llo page project preview",
            link: {
                text: t("2.link.text", {ns: 'portfolio'}),
                url: 'https://www.he-llo.com/',
            },
            keys: {
                status: t("2.keys.status", {ns: 'portfolio'}),
                isBeta: false,
                role: t("2.keys.role", {ns: 'portfolio'}),
                company: {
                    name: t("2.keys.company.name", {ns: 'portfolio'}),
                }
            },
            technologies: [
                {
                    icon: faHtml5,
                    text: 'HTML 5'
                },
                {
                    icon: faCss3Alt,
                    text: 'CSS 3'
                },
                {
                    icon: faJs,
                    text: 'JavaScript'
                },
                {
                    icon: faReact,
                    text: 'ReactJS'
                },
                {
                    abbr: 'Nx',
                    text: 'NextJS',
                },
                {
                    icon: faGitAlt,
                    text: 'Git/Github'
                },
                {
                    icon: faNodeJs,
                    text: 'NodeJS',
                },
                {
                    abbr: 'Ex',
                    text: 'ExpressJS'
                },
                {
                    icon: faDatabase,
                    text: 'MongoDB'
                },
                {
                    abbr: 'Ts',
                    text: 'Tailwind CSS'
                },
                {
                    abbr: 'Ps',
                    text: 'Adobe Photoshop'
                },
                {
                    icon: faFigma,
                    text: 'Figma'
                }
            ],
            details: {
                p1: t("2.details.p1", {ns: 'portfolio'}),
                p2: t("2.details.p2", {ns: 'portfolio'}),
                p3: t("2.details.p3", {ns: 'portfolio'})
            }
        }
    ]);
}
 
export default ProjectsList;