import Tailwind from "@/interface/icons/Tailwind";
import { faCss3, faCss3Alt, faFigma, faGitAlt, faHtml5, faJs, faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const ProjectsList = () => {
    return ([
        {
            title: 'Samara',
            isPinned: true,
            summary: 'Samara is a cloud-based web app provided as SaaS for all-size businesses to automatize their finances, processes and inventories without needing complex technological architecture. Just a device and internet access for enjoying all the benefits of Samara.',
            url: {
                text: 'Go to project',
                url: 'https://samara.frontend.hello4.one/',
            },
            keys: {
                status: 'In progress',
                isBeta: true,
                role: 'Front-end developer, UI/UX designer',
                company: {
                    name: 'he-llo',
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
                    svg: Tailwind,
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
                p1: 'This app was created from scratch, the draft was made on Figma using the mobile-first principles. After it was developed and deployed using NextJS with Context API and TailwindCSS. This app also uses a first-party API to connect data and other services provided by the he-llo team.',
                p2: 'In-project participation: Extremely high.',
                p3: 'Skills: Trouble-shooting, UX research, teamwork, project management.'
            },
            features: [
                ['Responsive web app', 'Cloud-based', 'Multiple users', 'Multiple branches'],
                ['Role management', 'Inventory management', 'Sales and Invoice generation', 'Statistics'],
                ['Product management', 'Incomes and expenses management', 'Kardex generation', 'Customer management']
            ]
        },
        {
            title: 'Class Schedules Automation app',
            isPinned: true,
            summary: 'Web app made for a specific school to automate class schedules and fix time distribution for teachers between classes using Operations Research and Process Optimization with Linear programming.',
            url: {
                text: 'Go to repository',
                url: 'https://github.com/baquerizogo/ScheduleClient',
            },
            keys: {
                status: 'Deployed',
                isBeta: false,
                role: 'Full-stack developer, UI/UX designer',
                company: {
                    name: 'Angélica Villón L. School',
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
                    svg: Tailwind,
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
                p1: 'This app was created from scratch, the draft was made on Figma using the mobile-first principles. After it was developed and deployed using NextJS with Context API and TailwindCSS. This app also uses a first-party API to connect data and other services provided by the he-llo team.',
                p2: 'In-project participation: Extremely high.',
                p3: 'Skills: Trouble-shooting, UX research, teamwork, project management.'
            },
            features: [
                ['Responsive web app', 'Cloud-based', 'Multiple users', 'Multiple branches'],
                ['Role management', 'Inventory management', 'Sales and Invoice generation', 'Statistics'],
                ['Product management', 'Incomes and expenses management', 'Kardex generation', 'Customer management']
            ]
        }
    ]);
}
 
export default ProjectsList;