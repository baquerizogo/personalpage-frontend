import { faCalendarDays, faHands, faProjectDiagram } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Gallery = () => {
    return (
        <div className="col-span-full lg:col-start-2 lg:col-end-12 my-12">
            <h3 className="text-2xl font-bold md:text-center">More projects</h3>
            <div className="mt-4 space-y-4 md:flex md:space-x-4 md:space-y-0">
                <div className="w-full md:max-w-[33.33%] bg-gradient-to-r from-primary-600 to-primary-700 p-4 rounded-lg md:flex md:space-x-4">
                    <div className="flex w-full items-center text-white">
                        <div className="bg-primary-700 w-1/5 min-w-[20%] aspect-square rounded-lg mr-4 flex items-center justify-center">
                            <FontAwesomeIcon icon={faCalendarDays} className="text-4xl md:text-xl xl:text-2xl"/>
                        </div>
                        <div className="">
                            <h4 className="font-bold">Class Schedules Automation app</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Gallery;