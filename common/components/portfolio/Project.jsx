import Link from "next/link";

import Badge from "@/interface/badges/Badge";
import Tailwind from "@/interface/icons/Tailwind";
import IconBadge from "@/interface/badges/IconBadge";

import { faChevronLeft, faChevronRight, faChevronUp, faExternalLink, faHammer, faIndustry, faSuitcase, faThumbTack } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment } from "react";
import { Disclosure, Transition } from "@headlessui/react";

const Project = ({ project }) => {
    return (
        <div className="col-span-full lg:col-start-2 lg:col-end-12 grid grid-cols-2 gap-4 border border-gray-300 rounded-lg bg-white p-4">
            <div className="col-span-full md:col-span-1 space-y-2">
                <div>
                    <h1 className="text-2xl font-bold">
                        {project?.title}
                        {project?.isPinned ? (
                            <Badge type="primary" className="ml-2 inline whitespace-nowrap items-center space-x-1 -mb-1 px-3 py-1">
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
            <div className="col-span-full md:col-span-1">
                <div className={`w-full h-44 bg-gray-100 rounded-md`}>
                    <img src={project.imageUrl} alt="" className="w-full h-full object-cover rounded-md"/>
                </div>
                <div className="flex mt-2 flex-wrap text-secondary-600">
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
            <Disclosure as={Fragment}>
                {({ open }) => (
                    <div className="col-span-full">
                        <Disclosure.Button as="div" className="bg-primary-100 text-primary-700 font-bold flex items-center justify-between rounded-md py-2 px-4 select-none cursor-pointer">
                            <h2>Project Info.</h2>
                            <FontAwesomeIcon icon={faChevronRight} size="sm" className={`transform transition-transform ${open ? '-rotate-90' : 'rotate-90'}`}/>
                        </Disclosure.Button>
                        <Transition
                            enter="transition duration-100"
                            enterFrom="transform opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-75"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform opacity-0"
                        >
                            <Disclosure.Panel as="div" className="py-2 px-4">
                                <p>{project?.details?.p1}</p>
                                <div className="mt-4">
                                    <p>{project?.details?.p2}</p>
                                    <p>{project?.details?.p3}</p>
                                </div>
                            </Disclosure.Panel>
                        </Transition>
                    </div>
                )}
            </Disclosure>
            {
                project?.features?.length > 0 ? 
                    <Disclosure as={Fragment}>
                        {({ open }) => (
                            <div className="col-span-full">
                                <Disclosure.Button as="div" className="bg-primary-100 text-primary-700 font-bold flex items-center justify-between rounded-md py-2 px-4 select-none cursor-pointer">
                                    <h2>Features</h2>
                                    <FontAwesomeIcon icon={faChevronRight} size="sm" className={`transform transition-transform ${open ? '-rotate-90' : 'rotate-90'}`}/>
                                </Disclosure.Button>
                                <Transition
                                    enter="transition duration-100"
                                    enterFrom="transform opacity-0"
                                    enterTo="transform scale-100 opacity-100"
                                    leave="transition duration-75"
                                    leaveFrom="transform scale-100 opacity-100"
                                    leaveTo="transform opacity-0"
                                >
                                    <Disclosure.Panel as="div" className="col-span-full py-2 px-4">
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
                                    </Disclosure.Panel>
                                </Transition>
                            </div>
                        )}
                    </Disclosure> : null
                    
                }
        </div>
    );
}
 
export default Project;