import React from "react";
import PropTypes from "prop-types";

const Input = ({ className, value, onChange, ...props }) => {
  return (
    <input
      className={`${className} 
      bg-white 
      rounded-px 
      py-3
      px-16 
      border
      border-grey-light 
      focus:outline-none 
      focus:bg-white"`}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
};

const propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
Input.propTypes = propTypes;
export default Input;
