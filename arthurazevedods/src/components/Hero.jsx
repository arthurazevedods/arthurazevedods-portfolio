import Type from "./Type";
import homeLogo from "../assets/home-main-doodle.svg";
import Socials from "./Socials";
function Hero() {
    return (
        <>
            <section className="relative bg-black bg-cover bg-center min-h-screen bg-no-repeat pt-10 px-8 flex flex-col justify-center items-center">
                <div className="relative z-10 pt-20 text-white">
                    <div className="container mx-auto flex flex-wrap items-center px-5">
                        <div className="w-full md:w-6/12 text-left">
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">
                                Olá!{" "}
                                <span
                                    className="inline-block animate-wave origin-[70%_70%]"
                                    role="img"
                                    aria-labelledby="wave"
                                >
                                    👋🏻
                                </span>
                            </h1>
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">
                                EU SOU
                                <strong className="text-purple-400 ml-2">ARTHUR AZEVEDO</strong>
                            </h1>
                            <div className="mt-8">
                                <Type />
                            </div>
                        </div>
                        <div className="w-full md:w-6/12 flex justify-end mt-10 md:mt-0">
                            <img
                                src={homeLogo}
                                alt="home pic"
                                className="max-h-[450px] object-contain"
                            />
                        </div>
                    </div>
                </div>
                <Socials className="pb-2"/>
            </section>
        </>
    );
}

export default Hero;
