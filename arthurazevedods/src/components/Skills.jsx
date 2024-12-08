import { IoLogoJavascript } from "react-icons/io5";
import { FaPython, FaBootstrap, FaGitAlt } from "react-icons/fa";
import { FaGolang, FaNodeJs } from "react-icons/fa6";
import { SiMysql, SiPostgresql, SiTailwindcss } from "react-icons/si";
import { FaHtml5, FaReact } from "react-icons/fa";

function Skills() {
    return (
        <>
            <section className="bg-black min-h-60">
                <div className="m-auto text-3xl justify-start block  my-4 pt-2 border-b border-slate-300 pb-2 max-w-[360px]">
                    <h3>
                        <b className="text-white">Skills</b>
                    </h3>
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center">
                    <div className="col-md-12 text-center m-4">
                        <div className="col-md-12">
                            <h3 className="section-title">
                                <span className="text-red-500">HTML</span>
                            </h3>
                        </div>
                        <div className="col-md-12">
                            <ul className="list-inline mx-auto skill-icon text-red-500 text-4xl">
                                <FaHtml5 />
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-12 text-center m-4">
                        <div className="col-md-12">
                            <h1 className="section-title">
                                <span className="text-purple-500">React</span>
                            </h1>
                        </div>
                        <div className="col-md-12">
                            <ul className="list-inline mx-auto skill-icon text-purple-500 text-4xl">
                                <FaReact />
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-12 text-center m-4">
                        <div className="col-md-12">
                            <h1 className="section-title">
                                <span className="text-yellow-500">JavaScript</span>
                            </h1>
                        </div>
                        <div className="col-md-12">
                            <ul className="list-inline mx-auto skill-icon text-yellow-500 text-4xl">
                                <IoLogoJavascript />
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-12 text-center m-4">
                        <div className="col-md-12">
                            <h1 className="section-title">
                                <span className="text-green-500">Python</span>
                            </h1>
                        </div>
                        <div className="col-md-12">
                            <ul className="list-inline mx-auto skill-icon text-green-500 text-4xl">
                                <FaPython />
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-12 text-center m-4">
                        <div className="col-md-12">
                            <h1 className="section-title">
                                <span className="text-blue-500">Golang</span>
                            </h1>
                        </div>
                        <div className="col-md-12">
                            <ul className="list-inline mx-auto skill-icon text-blue-500 text-4xl">
                                <FaGolang />
                            </ul>
                        </div>
                    </div>
                    {/* Node.js */}
                    <div className="col-md-12 text-center m-4">
                        <h3 className="section-title text-green-400">Node.js</h3>
                        <ul className="list-inline mx-auto skill-icon text-green-400 text-4xl">
                            <FaNodeJs />
                        </ul>
                    </div>

                    {/* MySQL */}
                    <div className="col-md-12 text-center m-4">
                        <h3 className="section-title text-blue-600">MySQL</h3>
                        <ul className="list-inline mx-auto skill-icon text-blue-600 text-4xl">
                            <SiMysql />
                        </ul>
                    </div>

                    {/* PostgreSQL */}
                    <div className="col-md-12 text-center m-4">
                        <h3 className="section-title text-blue-700">PostgreSQL</h3>
                        <ul className="list-inline mx-auto skill-icon text-blue-700 text-4xl">
                            <SiPostgresql />
                        </ul>
                    </div>



                    {/* Git */}
                    <div className="col-md-12 text-center m-4">
                        <h3 className="section-title text-orange-600">Git</h3>
                        <ul className="list-inline mx-auto skill-icon text-orange-600 text-4xl">
                            <FaGitAlt />
                        </ul>
                    </div>

                    {/* Bootstrap */}
                    <div className="col-md-12 text-center m-4">
                        <h3 className="section-title text-purple-500">Bootstrap</h3>
                        <ul className="list-inline mx-auto skill-icon text-purple-500 text-4xl">
                            <FaBootstrap />
                        </ul>
                    </div>

                    {/* Tailwind */}
                    <div className="col-md-12 text-center m-4">
                        <h3 className="section-title text-teal-400">Tailwind</h3>
                        <ul className="list-inline mx-auto skill-icon text-teal-400 text-4xl">
                            <SiTailwindcss />
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Skills;
