import Footer from "./Footer";
import Header from "./Header";

const { Fragment } = require("react")

const Layout = ({ children }) => {
    return ( 
        <div className="min-h-screen flex flex-col">
            <Header/>
            <div className="grow mt-20">
                {children}
            </div>
            <Footer/>
        </div>
    );
}
 
export default Layout;