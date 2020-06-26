import React from "react";
import PropTypes from "prop-types";
import loading from "../../assets/loop.svg";

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
      className={`${className} cursor-pointer bg-white border border-red-light text-red-darkest focus:outline-none font-display rounded-px px-16 py-2 hover:bg-transparent hover:border hover:border-red-darkest`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      <div className="flex flex-row">
        <img src="../../assets/remove.svg" />
        <p className="text-sm font-display text-bold ml-3 ">Remove</p>
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
