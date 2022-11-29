import { useState, useEffect, Fragment } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import Layout from "@/layouts/Layout";
import Project from '@/components/portfolio/Project';
import ProjectsList from '@/utils/ProjectsList';

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
                <div className="col-span-full lg:col-start-2 lg:col-end-12">
                    <h3 className="text-gray-500">{t("portfolio-title", {ns: 'portfolio'})}</h3>
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