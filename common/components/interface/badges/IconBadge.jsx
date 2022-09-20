import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconBadge = ({ icon, text, abbr, svg: Svg, className }) => {
    return (
        <div className="inline-block bg-lowContrast/70 mr-2 my-1 px-4 py-2 rounded-full">
            <div className="flex items-center space-x-2">
                { icon ? <FontAwesomeIcon icon={icon} size='lg'/> : null }
                { abbr ? <span className="text-sm font-bold">{abbr}</span> : null }
                { Svg ? <Svg className={className || ''}/> : null}
                <span className="text-sm">{text}</span>
            </div>
        </div>
    );
}
 
export default IconBadge;