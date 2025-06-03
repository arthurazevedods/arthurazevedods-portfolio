import { useEffect, useState } from "react";


function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(()=>{
    const onScroll = () =>{
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
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Portfolio</a>
              <ul className="p-2">
                <li>
                  <a>Repositórios</a>
                </li>
                <li>
                  <a>Projetos</a>
                </li>
              </ul>
            </li>
            
            <li>
              <a>Blog</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-lg rounded-md p-3 bg-[#8be9fd] text-[#282a36]">arthur</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Home</a>
          </li>
          <li>
            <details>
              <summary>Porfolio</summary>
              <ul className="p-2">
                <li>
                  <a>Repositórios</a>
                </li>
                <li>
                  <a>Projetos</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Blog</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn px-3 bg-[#f8f8f2] text-[#282a36] hover:bg-[#282a36] hover:text-[#f8f8f2]">Button</a>
      </div>
    </div>
  );
}

export default Navbar
