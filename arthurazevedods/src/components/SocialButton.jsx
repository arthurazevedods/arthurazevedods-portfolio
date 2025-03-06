import PropTypes from "prop-types";

const SocialButton = ({ href, bgColor, borderColor, children }) => {
    return (
        <div className="social-button">
            <a href={href} target="_blank" rel="noopener noreferrer">
                <button className="relative w-12 h-12 rounded-full group" aria-label="Social Media Button">
                    <div className={`floater w-full h-full absolute top-0 left-0 ${bgColor} rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl`}></div>
                    <div className={`icon relative z-10 w-full h-full flex items-center justify-center border-2 ${borderColor} rounded-full`}>
                        {children}
                    </div>
                </button>
            </a>
        </div>
    );
};

SocialButton.propTypes ={
    href: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
    borderColor: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
};

export default SocialButton;