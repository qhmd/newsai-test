import { Newspaper } from "lucide-react";
import SearchCustom from "./searchCustom";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import useSearchStore from "../store/newsStore";

const Header = () => {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const { setIsSearching } :NewsStore = useSearchStore();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setShow(false);
            } else {
                setShow(true);
            }
            setLastScrollY(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);
    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: show ? 0 : -100 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full z-99 backdrop-blur-sm py-2 text-white shadow-lg"
        >
            <div className="justify-around flex items-center hover:cursor-pointer">
                <div className="flex items-center gap-2" onClick={() => setIsSearching(false)}>
                    <Newspaper color="blue" />
                    <p className="font-bold text-xl text-white">AI News</p>
                </div>
                <SearchCustom />
            </div>
        </motion.header>
    )
}

export default Header