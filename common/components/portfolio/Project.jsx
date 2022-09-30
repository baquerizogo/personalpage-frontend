import Link from "next/link";

import Badge from "@/interface/badges/Badge";
import Tailwind from "@/interface/icons/Tailwind";
import IconBadge from "@/interface/badges/IconBadge";

import { faCss3Alt, faFigma, faGitAlt, faHtml5, faJs, faReact } from "@fortawesome/free-brands-svg-icons";
import { faExternalLink, faHammer, faIndustry, faSuitcase, faThumbTack } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment } from "react";

const Project = ({ project }) => {
    return (
        <>
            <div className="col-span-full md:col-span-4 lg:col-start-2 lg:col-end-7 space-y-4">
                <div>
                    <h3 className="text-sm text-gray-500">Portfolio</h3>
                    <h1 className="text-2xl font-bold">
                        {project?.title}
                        {project?.isPinned ? (
                            <Badge type="primary" className="ml-2 inline items-center space-x-1 -mb-1 px-3 py-1">
                                <FontAwesomeIcon icon={faThumbTack}/>
                                <span>Pinned</span>
                            </Badge>
                        ): null}
                    </h1>
                </div>
                <div className="space-y-4">
                    <p>{project?.summary}</p>
                    <a href={project?.link.url} target="blank" className="link-animated space-x-2 text-primary-700">
                        <span>{project?.link.text}</span>
                        <FontAwesomeIcon icon={faExternalLink} size="sm"/>
                    </a>
                </div>
                <div>
                    <ul className="space-y-1">
                        <li className="space-x-3">
                            <FontAwesomeIcon icon={faHammer}/>
                            <span>{project?.keys.status}</span>
                            {project?.keys.isBeta ? (
                                <Badge type="secondary" size="xs">Beta</Badge>
                            ) : null }
                        </li>
                        <li className="space-x-3">
                            <FontAwesomeIcon icon={faSuitcase}/>
                            <span>{project?.keys.role}</span>
                        </li>
                        <li className="space-x-3">
                            <FontAwesomeIcon icon={faIndustry}/>
                                {project.keys.company.url ? (
                                    <a href={project.keys.company.url} target="blank" className="link-animated space-x-2">
                                        <span>{project.keys.company.name}</span>
                                    </a>
                                ): (
                                    <span>{project.keys.company.name}</span>
                                )}
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-span-full md:col-span-4 lg:col-start-7 lg:col-end-12 space-y-4">
                <div className="w-full h-44 bg-gray-100 rounded-lg">

                </div>
                <div className="flex flex-wrap text-secondary-600">
                    {
                        project?.technologies?.length > 0 ? project.technologies.map((t, index) => {
                        return (
                            <Fragment key={index}>
                                <IconBadge icon={t.icon || null} abbr={t.abbr || null} svg={t.svg || null} text={t.text}/>
                            </Fragment>
                        )}) : null
                    }
                </div>
            </div>
            <div className="col-span-full lg:col-start-2 lg:col-end-12 mt-4">
                <h2 className="text-xl font-bold">Project Info.</h2>
                <p>{project?.details?.p1}</p>
                <div className="mt-4">
                    <p>{project?.details?.p2}</p>
                    <p>{project?.details?.p3}</p>
                </div>
            </div>
            <div className="col-span-full lg:col-start-2 lg:col-end-12 mt-4">
                <h2 className="text-xl font-bold">Features</h2>
                <ul className="ml-4 list-disc md:flex md:justify-between">
                    { project?.features?.length > 0 ? project.features.map((group, index) => (
                        <div key={index}>
                            {
                                group.map((element, index) => (
                                    <li key={index}>{element}</li>
                                ))
                            }
                        </div>
                    )) : null}
                </ul>
            </div>
        </>
    );
}
 
export default Project;