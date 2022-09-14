const NavBarToggle = ({ onClick, collapsed }) => {
    return (
        <button type="button" aria-label="Navbar toggle" onClick={onClick} className={`${collapsed ? "navbar-button-animated -translate-y-1 w-6 h-6" : ''}`}>
            <span className="block w-6 h-0.5 bg-gray-700 rounded-xs mt-1.5 transition-transform"/>
            <span className={`block ${collapsed ? 'w-6' : 'w-3'} h-0.5 bg-gray-700 rounded-xs mt-1.5 transition-transform`}/>
        </button>
    );
}
 
export default NavBarToggle;