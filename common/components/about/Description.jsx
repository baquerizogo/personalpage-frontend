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
    faChevronDown, 
    faDatabase, 
    faGamepad, 
    faSwimmer, 
    faVial
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Description = () => {
    const { t } = useTranslation("");

    return (
        <div className="lg:snap-mandatory lg:snap-y lg:overflow-scroll lg:overflow-x-hidden lg:pr-4 col-span-full mb-8 lg:mt-4 lg:col-start-2 lg:col-end-7 lg:row-start-1">
            <div className="lg:snap-center lg:h-full mb-12 lg:mb-0">
                <h1 className="text-2xl font-bold mb-2">{t("description.title", {ns: 'about'})} ☕</h1>
                <div className="space-y-4">
                    <p>{t("description.p-first", {ns: 'about'})}</p>
                    <p>{t("description.p-second", {ns: 'about'})}</p>
                    <p className="italic bg-slate-700 text-white rounded-lg px-3 py-1">{t("description.p-quote", {ns: 'about'})}</p>
                    <div className="hidden text-center animate-bounce md:flex flex-col text-slate-500">
                        <FontAwesomeIcon icon={faChevronDown} size="sm"/>
                    </div>
                </div>
            </div>
            <div className="lg:snap-center lg:h-full">
                <h2 className="text-2xl font-bold">{t("skills.title", {ns: 'about'})} 🧨</h2>
                <div className="space-y-4">
                    <p>
                    {t("skills.p-first", {ns: 'about'})}
                    </p>
                    {/*<span className="block">{t("skills.p-second", {ns: 'about'})}</span>*/}
                </div>
                <div className="flex flex-wrap mt-4">
                    <IconBadge icon={faHtml5} text="HTML5"/>
                    <IconBadge icon={faCss3Alt} text="CSS3"/>
                    <IconBadge icon={faJs} text="JavaScript"/>
                    <IconBadge abbr="Ts" text="TypeScript"/>
                    <IconBadge icon={faReact} text="ReactJS"/>
                    <IconBadge abbr="Nx" text="NextJS"/>
                    <IconBadge icon={faNodeJs} text="NodeJS"/>
                    <IconBadge abbr="Ex" text="ExpressJS"/>
                    <IconBadge abbr="Rx" text="Redux"/>
                    <IconBadge abbr="Ctx" text="Context API"/>
                    <IconBadge icon={faVial} text="Jest"/>
                    <IconBadge icon={faGitAlt} text="Git/GitHub"/>
                    <IconBadge svg={Tailwind} text="Tailwind CSS" className="fill-secondary-600"/>
                    <IconBadge icon={faBootstrap} text="Bootstrap"/>
                    <IconBadge icon={faDatabase} text="MongoDB"/>
                    <IconBadge abbr="Ai" text="Adobe Ilustrator"/>
                    <IconBadge abbr="Ps" text="Adobe Photoshop"/>
                    <IconBadge icon={faFigma} text="Figma"/>
                    <IconBadge abbr="B1" text="English"/>
                    <IconBadge abbr="TDD" text="Test-driven development"/>
                    <IconBadge icon={faChessKnight} text={t("skills.list.chess", {ns: 'about'})}/>
                    <IconBadge icon={faGamepad} text={t("skills.list.videogames", {ns: 'about'})}/>
                    <IconBadge icon={faSwimmer} text={t("skills.list.swimming", {ns: 'about'})}/>
                </div>
            </div>
        </div>
    );
}
 
export default Description;