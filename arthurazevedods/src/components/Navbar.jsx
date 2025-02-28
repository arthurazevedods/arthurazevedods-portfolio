import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { CgGitFork, CgFileDocument } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
    AiFillStar,
    AiOutlineHome,
    AiOutlineFundProjectionScreen,
    AiOutlineUser,
} from "react-icons/ai";

function NavBar() {
    const [expand, setExpand] = useState(false);
    const [navColour, setNavColour] = useState(false);
    const navRef = useRef(null);

    const handleScroll = () => {
        setNavColour(window.scrollY >= 20);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Close the mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setExpand(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [navRef]);

    const closeMobileMenu = () => {
        setExpand(false);
    };

    return (
        <>
            <nav
                className={`fixed top-0 w-full z-50 px-8 transition-all ${navColour
                        ? "bg-blue-800 bg-opacity-80 shadow-md backdrop-blur-md"
                        : "bg-blue-200 md:bg-white"
                    }`}
                ref={navRef}
            >
                <div className="container mx-auto flex items-center justify-between px-6 py-3">
                    {/* Brand Logo */}
                    <Link to="/" className="flex items-center " onClick={closeMobileMenu}>
                        <span className="text-black text-xl"> 
                            {"arthur"}
                        </span>
                    </Link>

                    {/* Mobile Toggle */}
                    <button
                        className="block md:hidden text-black focus:outline-none" 
                        onClick={() => setExpand(!expand)}
                    >
                        <div className="space-y-1">
                            <span
                                className={`block w-6 h-1 bg-blue-600 transition-transform ${expand ? "transform rotate-45 translate-y-2" : ""
                                    }`}
                            ></span>
                            <span
                                className={`block w-6 h-1 bg-blue-600 ${expand ? "opacity-0" : ""
                                    }`}
                            ></span>
                            <span
                                className={`block w-6 h-1 bg-blue-600 transition-transform ${expand ? "transform -rotate-45 -translate-y-2" : ""
                                    }`}
                            ></span>
                        </div>
                    </button>

                    {/* Navigation Links */}
                    <div
                        className={`md:flex md:items-center md:space-x-6 ${expand ? "block absolute top-12 left-0 w-full bg-blue-200 bg-opacity-80 backdrop-blur-md shadow-md md:static md:bg-transparent md:backdrop-blur-none md:shadow-none" : "hidden md:flex"
                            }`}
                    >
                        <Link
                            to="/"
                            className="block text-black hover:text-blue-600 transition px-6 py-2 md:px-0 md:py-0" 
                            onClick={closeMobileMenu}
                        >
                            <AiOutlineHome className="hidden lg:inline-block mb-1" /> Home
                        </Link>
                        <Link
                            to="/about"
                            className="block text-black hover:text-blue-600 transition px-6 py-2 md:px-0 md:py-0" 
                            onClick={closeMobileMenu}
                        >
                            <AiOutlineUser className="hidden lg:inline-block mb-1" /> Sobre Mim
                        </Link>
                        <Link
                            to="/project"
                            className="block text-black hover:text-blue-600 transition px-6 py-2 md:px-0 md:py-0" 
                            onClick={closeMobileMenu}
                        >
                            <AiOutlineFundProjectionScreen className="hidden lg:inline-block mb-1" />{" "}
                            Projetos
                        </Link>
                        <Link
                            to="/resume"
                            className="block text-black hover:text-blue-600 transition px-6 py-2 md:px-0 md:py-0" 
                            onClick={closeMobileMenu}
                        >
                            <CgFileDocument className="hidden lg:inline-block mb-1" /> Currículo
                        </Link>
                        <a
                            href="https://medium.com/@arthurazevedods"
                            target="_blank"
                            rel="noreferrer"
                            className="block text-black hover:text-blue-600 transition px-6 py-2 md:px-0 md:py-0" 
                            onClick={closeMobileMenu}
                        >
                            <ImBlog className="hidden lg:inline-block mb-1" /> Blogs
                        </a>
                        <a
                            href="https://github.com/arthurazevedods"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-block bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-500 transition mx-6 my-2 md:mx-0 md:my-0"
                            onClick={closeMobileMenu}
                        >
                            <CgGitFork className="inline-block text-lg" />{" "}
                            <AiFillStar className="inline-block text-md" />
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;