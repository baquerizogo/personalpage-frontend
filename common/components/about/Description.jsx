import { useTranslation } from "next-i18next";
import IconBadge from "@/interface/badges/IconBadge";
import Tailwind from "@/interface/icons/Tailwind";

import { 
    faBootstrap, 
    faCss3Alt, 
    faFigma, 
    faGitAlt, 
    faHtml5, 
    faJs, 
    faNodeJs, 
    faReact 
} from "@fortawesome/free-brands-svg-icons";

import { 
    faChessKnight, 
    faDatabase, 
    faGamepad, 
    faSwimmer 
} from "@fortawesome/free-solid-svg-icons";

const Description = () => {
    const { t } = useTranslation("");

    return (
        <div className="col-span-full space-y-8 mb-8 lg:mt-8 lg:col-start-2 lg:col-end-7 lg:row-start-1">
            <div>
                <h1 className="text-2xl font-bold">{t("description.title", {ns: 'about'})} ☕</h1>
                <div className="space-y-4">
                    <p>{t("description.p-first", {ns: 'about'})}</p>
                    <p>{t("description.p-second", {ns: 'about'})}</p>
                    <p className="italic">&gt; {t("description.p-quote", {ns: 'about'})}</p>
                </div>
            </div>
            <div>
                <h2 className="text-2xl font-bold">{t("skills.title", {ns: 'about'})} 🧨</h2>
                <div className="space-y-4">
                    <p>
                    {t("skills.p-first", {ns: 'about'})}
                    </p>
                    {/*<span className="block">{t("skills.p-second", {ns: 'about'})}</span>*/}
                </div>
                <div className="text-secondary-600 flex flex-wrap mt-4">
                    <IconBadge icon={faHtml5} text="HTML 5"/>
                    <IconBadge icon={faCss3Alt} text="CSS 3"/>
                    <IconBadge icon={faJs} text="JavaScript"/>
                    <IconBadge icon={faReact} text="ReactJS"/>
                    <IconBadge icon={faNodeJs} text="NodeJS"/>
                    <IconBadge abbr="Nx" text="NextJS"/>
                    <IconBadge abbr="Ex" text="ExpressJS"/>
                    <IconBadge icon={faGitAlt} text="Git/GitHub"/>
                    <IconBadge svg={Tailwind} text="Tailwind CSS" className="fill-secondary-600"/>
                    <IconBadge icon={faBootstrap} text="Bootstrap"/>
                    <IconBadge icon={faDatabase} text="MongoDB"/>
                    <IconBadge abbr="Ai" text="Adobe Ilustrator"/>
                    <IconBadge abbr="Ps" text="Adobe Photoshop"/>
                    <IconBadge icon={faFigma} text="Figma"/>
                    <IconBadge abbr="B1" text="English"/>
                    <IconBadge icon={faChessKnight} text={t("skills.list.chess", {ns: 'about'})}/>
                    <IconBadge icon={faGamepad} text={t("skills.list.videogames", {ns: 'about'})}/>
                    <IconBadge icon={faSwimmer} text={t("skills.list.swimming", {ns: 'about'})}/>
                </div>
            </div>
        </div>
    );
}
 
export default Description;