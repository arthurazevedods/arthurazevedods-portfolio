import { useEffect, useState } from "react";
import { CgGitFork } from "react-icons/cg";
import { AiFillStar } from "react-icons/ai";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      className={`navbar fixed z-20 w-full transition-colors duration-300 ${
        scrolled
          ? "bg-[#44475a]/90 backdrop-blur text-[#f8f8f2] shadow-lg"
          : "text-[#f8f8f2] shadow-sm"
      }`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden text-2xl p-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-60 p-4 shadow text-lg"
          >
            <li>
              <a className="text-lg py-2 px-4">Home</a>
            </li>
            <li>
              <a className="text-lg py-2 px-4">Portfolio</a>
              <ul className="p-2">
                <li>
                  <a className="text-base py-2 px-4">Repositórios</a>
                </li>
                <li>
                  <a className="text-base py-2 px-4">Projetos</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="text-lg py-2 px-4">Blog</a>
              <ul className="p-2">
                <li>
                  <a className="text-base py-2 px-4">Medium</a>
                </li>
                <li>
                  <a className="text-base py-2 px-4">Codar Br</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl rounded-md p-4 bg-[#8be9fd] text-[#282a36] font-bold">
          arthur
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl gap-2">
          <li>
            <a className="px-4 py-2">Home</a>
          </li>
          <li>
            <details>
              <summary className="px-4 py-2">Porfolio</summary>
              <ul className="p-2">
                <li>
                  <a className="text-base py-2 px-4">Repositórios</a>
                </li>
                <li>
                  <a className="text-base py-2 px-4">Projetos</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary className="px-8 py-2">Blog</summary>
              <ul className="p-2">
                <li>
                  <a className="text-base py-2 px-4">Medium</a>
                </li>
                <li>
                  <a className="text-base py-2 px-4">Codar Br</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a
          href="https://github.com/arthurazevedods"
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-[var(--primary)] text-[var(--primary-foreground)] rounded-lg px-6 py-3 hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)] transition mx-6 my-2 md:mx-0 md:my-0 text-xl"
        >
          <CgGitFork className="inline-block text-2xl align-middle" />{" "}
          <AiFillStar className="inline-block text-xl align-middle" />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
