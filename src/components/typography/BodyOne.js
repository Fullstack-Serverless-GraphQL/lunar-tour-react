import React from "react";
import PropTypes from "prop-types";
const BodyOne = ({ className, children }) => {
  return (
    <p className={`${className} text-sm text-black text-bold font-display`}>
      {children}
    </p>
  );
};

BodyOne.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

BodyOne.defaultProps = {
  className: "",
};
export default BodyOne;
