import ButtonLink from "../buttons/ButtonLink";

const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-40 lg:grid-layout">
            <nav className="relative px-5 lg:px-0 py-2 bg-background/90 backdrop-blur-md w-384 flex justify-between items-center rounded-b-lg lg:col-start-2 lg:col-end-12">
                <div>
                    <div className="rounded-full w-12">
                        <img src="/images/profile.png" alt="Jose Baquerizo picture" className="rounded-full"/>
                    </div>
                </div>
                <div>
                    <ButtonLink color="primary" className="font-bold" href="#">Contact me</ButtonLink>
                </div>
            </nav>
        </header>
    );
}
 
export default Header;