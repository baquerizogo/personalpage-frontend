import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
    const router = useRouter();

    const variants = {
        hidden: { opacity: 0, x: -50, y: 0 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: -50 },
    }
    
    return (
        <div className="w-full bg-dot-grid"> {/*bg-dot-grid class uses relative positionning*/}
            <div className={`min-h-screen flex flex-col max-w-384 mx-auto`}>
                <Header/>
                    <motion.main 
                        variants={variants} // Pass the variant object into Framer Motion
                        initial="hidden" // Set the initial state to variants.hidden
                        animate="enter" // Animated state to variants.enter
                        exit="exit" // Exit state to variants.exit
                        transition={{type: 'linear'}} // Set the transition to linear
                        className="grow mt-20"
                    >
                        {children}
                    </motion.main>
                <Footer/>
            </div>
        </div>
    );
}
 
export default Layout;