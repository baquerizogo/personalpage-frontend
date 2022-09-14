import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
    return (
        <div className="w-full bg-landscape bg-bottom lg:bg-contain bg-no-repeat !bg-opacity-25">
            <div className="min-h-screen flex flex-col max-w-384 mx-auto">
                <Header/>
                <div className="grow mt-20">
                    {children}
                </div>
                <Footer/>
            </div>
        </div>
    );
}
 
export default Layout;