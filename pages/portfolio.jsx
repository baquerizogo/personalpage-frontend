import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Layout from "@/layouts/Layout";
import Project from '@/components/portfolio/Project';
import Gallery from '@/components/portfolio/Gallery';

export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ["common", "portfolio"])),
		},
	};
}


const portfolio = () => {
	return (
		<Layout>
			<div className="grid-layout">
                <Project/>
                <Gallery/>
			</div>
		</Layout>
	);
}
 
export default portfolio;