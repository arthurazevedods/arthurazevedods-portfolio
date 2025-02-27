import { useState } from "react";
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

    const handleScroll = () => {
        setNavColour(window.scrollY >= 20);
    };

    window.addEventListener("scroll", handleScroll);

    return (
        <>
            <nav
                className={`fixed top-0 w-full z-50 px-8 transition-all ${navColour
                        ? "bg-purple-800 bg-opacity-80 shadow-md backdrop-blur-md"
                        : "bg-black"
                    }`}
            >
                <div className="container mx-auto flex items-center justify-between px-6 py-3">
                    {/* Brand Logo */}
                    <Link to="/" className="flex items-center">
                        <span className="text-white text-xl">
                            {"arthur"}
                        </span>
                    </Link>

                    {/* Mobile Toggle */}
                    <button
                        className="block md:hidden text-white focus:outline-none"
                        onClick={() => setExpand(!expand)}
                    >
                        <div className="space-y-1">
                            <span
                                className={`block w-6 h-1 bg-purple-400 transition-transform ${expand ? "transform rotate-45 translate-y-2" : ""
                                    }`}
                            ></span>
                            <span
                                className={`block w-6 h-1 bg-purple-400 ${expand ? "opacity-0" : ""
                                    }`}
                            ></span>
                            <span
                                className={`block w-6 h-1 bg-purple-400 transition-transform ${expand ? "transform -rotate-45 -translate-y-2" : ""
                                    }`}
                            ></span>
                        </div>
                    </button>

                    {/* Navigation Links */}
                    <div
                        className={`md:flex items-center md:space-x-6 ${expand ? "block" : "hidden"
                            }`}
                    >
                        <Link
                            to="/"
                            className="text-white hover:text-purple-400 transition"
                            onClick={() => setExpand(false)}
                        >
                            <AiOutlineHome className="inline-block mb-1" /> Home
                        </Link>
                        <Link
                            to="/about"
                            className="text-white hover:text-purple-400 transition"
                            onClick={() => setExpand(false)}
                        >
                            <AiOutlineUser className="inline-block mb-1" /> Sobre Mim
                        </Link>
                        <Link
                            to="/project"
                            className="text-white hover:text-purple-400 transition"
                            onClick={() => setExpand(false)}
                        >
                            <AiOutlineFundProjectionScreen className="inline-block mb-1" />{" "}
                            Projetos
                        </Link>
                        <Link
                            to="/resume"
                            className="text-white hover:text-purple-400 transition"
                            onClick={() => setExpand(false)}
                        >
                            <CgFileDocument className="inline-block mb-1" /> Currículo
                        </Link>
                        <a
                            href="https://medium.com/@arthurazevedods"
                            target="_blank"
                            rel="noreferrer"
                            className="text-white hover:text-purple-400 transition"
                        >
                            <ImBlog className="inline-block mb-1" /> Blogs
                        </a>
                        <a
                            href="https://github.com/arthurazevedods"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-block bg-purple-600 text-white rounded-lg px-4 py-2 hover:bg-purple-500 transition"
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
