import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Layout from "@/layouts/Layout";
import ProfileInfo from '@/components/about/ProfileInfo';
import Description from '@/components/about/Description';

export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ["common", "about"])),
		},
	};
}


const About = () => {
	return (
		<Layout>
			<div className="grid-layout lg:h-[72vh]">
                <ProfileInfo/>
                <Description/>
			</div>
		</Layout>
	);
}
 
export default About;