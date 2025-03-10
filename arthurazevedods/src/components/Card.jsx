import PropTypes from 'prop-types';

const Card = ({ project, showUrlButton }) => {
    let githubExists = true;
    if (project.github == "#") {
        githubExists = false;
    }
    return (
        <div className="flex justify-center items-center my-5">
            <div className="max-w-[620px] mx-auto">
                <div className="relative flex w-full max-w-[23rem] h-[28rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                    {/* Image */}
                    <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                        <img
                            src={project.image}
                            alt={`Screenshot of ${project.name}`}
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                        <div className="flex items-center justify-between mb-3">
                            <h5 className="block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
                                {project.name}
                            </h5>
                        </div>
                        <p className="block font-sans text-base antialiased font-light leading-relaxed text-gray-700">
                            {project.description}
                        </p>

                        {/* Buttons Container - Pushed to the bottom */}
                        <div className="mt-auto flex gap-3">
                            {/* GitHub Button */}
                            {githubExists && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="View project on GitHub"
                                    className="inline-flex items-center gap-3 group"
                                >
                                    <span className="cursor-pointer rounded-full border border-black/5 bg-black/5 p-3 text-black transition-colors hover:border-black/10 hover:bg-black/10 hover:!opacity-100 group-hover:opacity-70">
                                        <svg
                                            height="24"
                                            width="24"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                className="group-hover:fill-[#171543] fill-black duration-300"
                                                d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.17 6.839 9.481.5.092.683-.217.683-.481 0-.237-.009-.866-.013-1.699-2.782.603-3.37-1.338-3.37-1.338-.454-1.15-1.11-1.458-1.11-1.458-.906-.619.069-.606.069-.606 1.002.071 1.527 1.03 1.527 1.03.89 1.529 2.34 1.087 2.911.831.091-.645.348-1.087.634-1.338-2.22-.252-4.555-1.11-4.555-4.94 0-1.09.39-1.986 1.028-2.682-.103-.252-.446-1.268.098-2.642 0 0 .837-.268 2.75 1.024a9.563 9.563 0 012.496-.335 9.58 9.58 0 012.496.335c1.913-1.292 2.75-1.024 2.75-1.024.544 1.374.202 2.39.1 2.642.64.696 1.027 1.592 1.027 2.682 0 3.839-2.338 4.685-4.567 4.933.358.309.678.916.678 1.847 0 1.334-.012 2.412-.012 2.74 0 .267.18.577.688.481A12.01 12.01 0 0022 12c0-5.523-4.477-10-10-10z"
                                                fill="#FFFFFF"
                                            />
                                        </svg>
                                    </span>
                                </a>

                            )}

                            {showUrlButton && (
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="View live demo"
                                    className="inline-flex items-center gap-3 group"
                                >
                                    <span className="cursor-pointer rounded-full border border-black/5 bg-black/5 p-3 text-black transition-colors hover:border-black/10 hover:bg-black/10 hover:!opacity-100 group-hover:opacity-70">
                                        <svg
                                            height="24"
                                            width="24"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                className="group-hover:fill-[#007bff] fill-black duration-300"
                                                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
                                                fill="#FFFFFF"
                                            />
                                        </svg>
                                    </span>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    project: PropTypes.shape({
        image: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        github: PropTypes.string.isRequired,

    }).isRequired,
    showUrlButton: PropTypes.bool.isRequired,
};

export default Card;