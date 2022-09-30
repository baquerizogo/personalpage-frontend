import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Hero from "@/components/home/Hero";
import Skills from "@/components/home/Skills";
import Layout from "@/layouts/Layout";

export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ["common", "home"])),
		},
	};
}

const Index = () => {
	return (
		<Layout>
			<div className="grid-layout">
				<Hero/>
				<Skills/>
			</div>
		</Layout>
	);
}
 
export default Index;
