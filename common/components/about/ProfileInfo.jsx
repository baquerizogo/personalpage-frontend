import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faMapLocationDot, faTreeCity } from '@fortawesome/free-solid-svg-icons';

const ProfileInfo = () => {
    return (
        <div className="col-span-full lg:mt-4 lg:col-start-8 lg:col-end-12">
            <div>
                <div className="bg-[url('/images/salinas.png')] h-52 md:h-72 lg:h-40 xl:h-52 rounded-3xl bg-cover bg-top xl:bg-center">
                </div>
                <div className='w-2/5 mx-auto -mt-28 md:-mt-52 lg:-mt-24 xl:-mt-32 lg:mr-8 rounded-3xl'>
                    <img src="/images/profile.png" alt="Foto de perfil de José Baquerizo" className='rounded-3xl'/>
                </div>
            </div>
            <div className="my-4 space-y-4">
                <div className="text-center lg:text-right">
                    <h2 className="text-xl font-bold">José Antonio Baquerizo Gómez</h2>
                    <h3>@Baquerizogo</h3>
                </div>
                <div className="lg:text-right">
                    <div className="space-x-2">
                        <FontAwesomeIcon icon={faGraduationCap} className="lg:!hidden"/> 
                        <span>Ing. Tecnologías de la información</span>
                        <FontAwesomeIcon icon={faGraduationCap} className="!hidden lg:!inline"/> 
                    </div>
                    <div className="space-x-2">
                        <FontAwesomeIcon icon={faTreeCity} className="lg:!hidden"/> 
                        <span>he-llo</span>
                        <FontAwesomeIcon icon={faTreeCity} className="!hidden lg:!inline"/> 

                    </div>
                    <div className="space-x-2">
                        <FontAwesomeIcon icon={faMapLocationDot} className="lg:!hidden"/> 
                        <span>Ecuador</span>
                        <FontAwesomeIcon icon={faMapLocationDot} className="!hidden lg:!inline"/> 
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default ProfileInfo;