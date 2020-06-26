import React from "react";
import PropTypes from "prop-types";
const BodyOne = ({ className, children }) => {
  return (
    <p className={`${className} text-4xl text-black text-bold font-display`}>
      {children}
    </p>
  );
};

BodyOne.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
};

BodyOne.defaultProps = {
  className: "",
};
export default BodyOne;
