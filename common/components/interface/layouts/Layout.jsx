import Footer from "./Footer";
import Header from "./Header";

const { Fragment } = require("react")

const Layout = ({ children }) => {
    return ( 
        <div className="min-h-screen bg-landscape bg-bottom lg:bg-contain bg-no-repeat !bg-opacity-25 flex flex-col max-w-384 mx-auto">
            <Header/>
            <div className="grow mt-20">
                {children}
            </div>
            <Footer/>
        </div>
    );
}
 
export default Layout;