import { useState, useEffect, Fragment } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import Layout from "@/layouts/Layout";
import Project from '@/components/portfolio/Project';
import ProjectsList from '@/utils/ProjectsList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ["common", "portfolio"])),
		},
	};
}


const Portfolio = () => {
    const list = ProjectsList();
    const { t } = useTranslation("");

    const [ projects, setProjects ] = useState([]);
    const [ active, setActive ] = useState(list[0]);

    useEffect(() => {
        if(active) {
            setProjects(list.filter(e => active.id != e.id));
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }
    }, [active]); // eslint-disable-line react-hooks/exhaustive-deps

    const handleClick = (project) => {
        setActive(project);
    }

	return (
		<Layout>
			<div className="grid-layout">
                <div className="col-span-full lg:col-start-2 lg:col-end-12 space-y-2">
                    <h3 className="text-slate-600">{t("portfolio-title", {ns: 'portfolio'})}</h3>
                    <div className="px-4 py-2 rounded-xl text-center font-medium bg-slate-700 text-white space-x-1">
                        <span>{t("portfolio-github", {ns: 'portfolio'})}</span>
                        <Link href="https://github.com/baquerizogo">
                            <a className="px-2 py-1 rounded-md hover:bg-slate-600 whitespace-nowrap" target="blank">
                                <FontAwesomeIcon icon={faGithub} className="mr-1"/>
                                <span>Github</span>
                            </a>
                        </Link>
                    </div>
                </div>
                { list?.map((project, index) => (
                    <Fragment key={index}>
                        <Project project={project}/>
                    </Fragment>
                ))}
            </div>
		</Layout>
	);
}
 
export default Portfolio;