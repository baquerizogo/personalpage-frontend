import { useTranslation } from 'next-i18next'

const Hero = () => {
    const { t } = useTranslation("");

    return (
        <>
            <div className="col-span-full md:col-span-5 lg:col-start-2 lg:col-end-9">
                <span className="block text-4xl my-4">🔥☕</span>
                <h1 className="text-2xl xl:text-4xl font-bold">{t("hero.title", {ns: 'home'})}</h1>
                <h2 className="text-2xl xl:text-4xl">{t("hero.subtitle", {ns: 'home'})} <span className="font-bold whitespace-nowrap">he-llo</span>.</h2>
                <p className="my-4 text-lg">{t("hero.description", {ns: 'home'})}</p>
            </div>
            <div className="col-span-full md:col-span-3 lg:col-start-9 lg:col-end-12 flex items-center justify-center md:justify-end">
                <img src="/images/profile.png" alt="Jose Baquerizo Picture" className="w-2/3 rounded-[5rem] lg:rounded-[4rem] xl:rounded-[5rem]"/>
            </div>
        </>
    );
}
 
export default Hero;