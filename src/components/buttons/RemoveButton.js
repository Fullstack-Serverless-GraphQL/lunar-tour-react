import React from "react";
import PropTypes from "prop-types";
import remove from "../../assets/remove.svg";

const RemoveButton = ({
  className = "",
  onClick,
  text,
  disabled = false,
  isLoading,
  large,
  long,
  ...props
}) => {
  return (
    <button
      /* eslint-disable no-template-curly-in-string*/
      className={`${className} bg-white cursor-pointer text-red-darkest focus:outline-none font-display  px-16 py-2 cursor:pointer`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      <div className="flex flex-row">
        <img src={remove} alt="remove" />
        <p className="text-sm font-display text-bold ml-3 mt-3">Remove</p>
      </div>
    </button>
  );
};
const propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string,
  disabled: PropTypes.bool,
  large: PropTypes.bool,
  long: PropTypes.bool,
  isLoading: PropTypes.bool,
};
RemoveButton.propTypes = propTypes;
export default RemoveButton;
