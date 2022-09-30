import Link from "next/link";

import Badge from "@/interface/badges/Badge";
import Tailwind from "@/interface/icons/Tailwind";
import IconBadge from "@/interface/badges/IconBadge";

import { faCss3Alt, faFigma, faGitAlt, faHtml5, faJs, faReact } from "@fortawesome/free-brands-svg-icons";
import { faExternalLink, faHammer, faIndustry, faSuitcase, faThumbTack } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Project = () => {
    return (
        <>
            <div className="col-span-full md:col-span-4 lg:col-start-2 lg:col-end-7 space-y-4">
                <div>
                    <h3 className="text-sm text-gray-500">Portfolio</h3>
                    <div className="flex items-center space-x-2">
                        <h1 className="text-2xl font-bold">Samara</h1>
                        <Badge type="primary" className="flex items-center space-x-1 -mb-1 px-3 py-1">
                            <FontAwesomeIcon icon={faThumbTack}/>
                            <span>Pinned</span>
                        </Badge>
                    </div>
                </div>
                <div className="space-y-4">
                    <p>Samara is a cloud-based web app provided as SaaS for all-size businesses to automatize their finances, processes and inventories without needing complex technological architecture. Just a device and internet access for enjoying all the benefits of Samara.</p>
                    <Link href="#">
                        <a className="link-animated space-x-2 text-primary-700">
                            <span>Go to project</span>
                            <FontAwesomeIcon icon={faExternalLink} size="sm"/>
                        </a>
                    </Link>
                </div>
                <div>
                    <ul className="space-y-1">
                        <li className="space-x-3">
                            <FontAwesomeIcon icon={faHammer}/>
                            <span>In-progress</span>
                            <Badge type="secondary" size="xs">Beta</Badge>
                        </li>
                        <li className="space-x-3">
                            <FontAwesomeIcon icon={faSuitcase}/>
                            <span>Front-end developer, UI/UX designer</span>
                        </li>
                        <li className="space-x-3">
                            <FontAwesomeIcon icon={faIndustry}/>
                            <Link href="#">
                                <a className="link-animated space-x-2">
                                    <span>he-llo</span>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-span-full md:col-span-4 lg:col-start-7 lg:col-end-12 space-y-4">
                <div className="w-full h-44 bg-gray-100 rounded-lg">

                </div>
                <div className="flex flex-wrap text-secondary-600">
                    <IconBadge icon={faHtml5} text="HTML 5"/>
                    <IconBadge icon={faCss3Alt} text="CSS 3"/>
                    <IconBadge icon={faJs} text="JavaScript"/>
                    <IconBadge icon={faReact} text="ReactJS"/>
                    <IconBadge abbr="Nx" text="NextJS"/>
                    <IconBadge icon={faGitAlt} text="Git/GitHub"/>
                    <IconBadge svg={Tailwind} text="Tailwind CSS" className="fill-secondary-600"/>
                    <IconBadge abbr="Ps" text="Adobe Photoshop"/>
                    <IconBadge icon={faFigma} text="Figma"/>
                </div>
            </div>
            <div className="col-span-full lg:col-start-2 lg:col-end-12 mt-4">
                <h2 className="text-xl font-bold">Project Info.</h2>
                <p>This app was created from scratch, the draft was made on Figma using the mobile-first principles. After it was developed and deployed using NextJS with Context API and TailwindCSS. This app also uses a first-party API to connect data and other services provided by the he-llo team.</p>
                <div className="mt-4">
                    <p>In-project participation: Extremely high.</p>
                    <p>Skills: Trouble-shooting, UX research, teamwork, project management.</p>
                </div>
            </div>
            <div className="col-span-full lg:col-start-2 lg:col-end-12 mt-4">
                <h2 className="text-xl font-bold">Features</h2>
                <ul className="ml-4 list-disc md:flex md:justify-between">
                    <div>
                        <li>Responsive web app</li>
                        <li>Cloud-based</li>
                        <li>Multiple users</li>
                        <li>Multiple branches</li>
                    </div>
                    <div>
                        <li>Role management</li>
                        <li>Inventory management</li>
                        <li>Sales and Invoice generation</li>
                        <li>Statistics</li>
                    </div>
                    <div>
                        <li>Product management</li>
                        <li>Incomes and expenses management</li>
                        <li>Kardex generation</li>
                        <li>Customer management</li>
                    </div>
                </ul>
            </div>
        </>
    );
}
 
export default Project;