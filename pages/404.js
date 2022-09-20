import Button from "@/interface/buttons/Button";
import Header from "@/layouts/Header";

import { useRouter } from "next/router";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';


export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ["common", "404"])),
		},
	};
}

const Custom404 = () => {
    const { t } = useTranslation("");
    const router = useRouter();

    return (
        <div className="w-full bg-dot-grid">
            <Header/>
            <div className="relative flex min-h-screen w-full items-center justify-center">
                <div className="space-y-4 text-center">
                    <h1 className="text-5xl font-extrabold">{t("title", {ns: '404'})}</h1>
                    <Button onClick={() => router.back()} size="lg" color="primary">{t("button-text", {ns: '404'})}</Button>
                </div>
                <div className="absolute bottom-0 md:right-0 flex justify-end mx-4">
                    <img src="/gif/404.gif" alt="Confused John Travolta gif" className="w-3/4 md:w-2/3"/>
                </div>
            </div>
        </div>
    );
}
 
export default Custom404;