import Badge from "@/interface/badges/Badge";
import { faThumbTack } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectItem = ({ project }) => {
    return (
        <div className="col-span-full md:col-span-1 border border-gray-300 p-2 rounded-lg bg-white grid gap-4 grid-cols-3">
            <div className="col-span-2">
                <h1 className="text-xl font-bold">
                    {project?.title}
                    {project?.isPinned ? (
                        <Badge type="primary" className="ml-2 inline items-center space-x-1 -mb-1 px-3 py-1">
                            <FontAwesomeIcon icon={faThumbTack}/>
                            <span>Pinned</span>
                        </Badge>
                    ): null}
                </h1>
            </div>
            <div className="rounded-md h-24 w-full bg-gray-200">

            </div>
        </div>
    );
}
 
export default ProjectItem;