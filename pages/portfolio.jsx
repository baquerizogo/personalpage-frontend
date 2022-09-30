import { useState, useEffect } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Layout from "@/layouts/Layout";
import Project from '@/components/portfolio/Project';
import Gallery from '@/components/portfolio/Gallery';
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
                <Project project={active}/>
                <Gallery projects={projects} handleClick={handleClick}/>
			</div>
		</Layout>
	);
}
 
export default Portfolio;