import Link from "next/link";

const ButtonLink = ({children, color, className, onClick, disabled, href}) => {
    const config = {
        default : 'bg-gray-600 text-white hover:bg-gray-700',
        primary : 'bg-primary-600 text-white hover:bg-primary-700',
        secondary : 'bg-blue-500 text-white hover:bg-blue-600',
        tertiary : 'bg-orange-500 text-white hover:bg-orange-600',
        link: 'bg-transparent text-primary',
        cancel: 'bg-transparent text-danger',
        outline : 'bg-transparent border border-gray-400 dark:border-gray-500 hover:bg-gray-100 hover:dark:bg-gray-600'
    }

    return (
        <Link href={href || '#'}>
            <a
                className={`rounded-xl py-2 px-4 transition-all duration-200 select-none ${config[color || 'default']} ${className || ''} ${disabled ? 'pointer-events-none opacity-50' : ''}`} 
                onClick={onClick || null} 
                disabled={disabled || false}
            >
                {children}
            </a>
        </Link>
    );
}
 
export default ButtonLink;