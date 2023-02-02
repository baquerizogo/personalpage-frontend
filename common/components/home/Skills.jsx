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
	faReact,
} from "@fortawesome/free-brands-svg-icons";

import { faDatabase, faVial } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
    return (
        <div className="mb-8 col-span-full md:col-span-5 lg:col-start-2 lg:col-end-9 flex flex-wrap">
            <IconBadge icon={faHtml5} text="HTML 5"/>
            <IconBadge icon={faCss3Alt} text="CSS 3"/>
            <IconBadge icon={faJs} text="JavaScript"/>
            <IconBadge abbr="Ts" text="TypeScript"/>
            <IconBadge icon={faReact} text="ReactJS"/>
            <IconBadge icon={faNodeJs} text="NodeJS"/>
            <IconBadge abbr="Nx" text="NextJS"/>
            <IconBadge abbr="Ex" text="ExpressJS"/>
            <IconBadge icon={faVial} text="Jest"/>
            <IconBadge icon={faGitAlt} text="Git/GitHub"/>
            <IconBadge svg={Tailwind} text="Tailwind CSS" className="fill-slate-700"/>
            <IconBadge icon={faBootstrap} text="Bootstrap"/>
            <IconBadge icon={faDatabase} text="MongoDB"/>
            <IconBadge abbr="Ai" text="Adobe Ilustrator"/>
            <IconBadge abbr="Ps" text="Adobe Photoshop"/>
            <IconBadge icon={faFigma} text="Figma"/>
            <IconBadge abbr="B1" text="English"/>
        </div>
    );
}
 
export default Skills;