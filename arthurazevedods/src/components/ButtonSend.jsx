import PropTypes from "prop-types";

function Button({ text, type }) {
    return (
        <button
            type={type}
            className="inline-block rounded-sm border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden"        >
            
          {text}
           
        </button>
    );
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["button", "submit", "reset"]).isRequired,
};

export default Button;