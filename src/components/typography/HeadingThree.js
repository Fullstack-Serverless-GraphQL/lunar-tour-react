import React from "react";
import PropTypes from "prop-types";
const HeadingThree = ({ className, children }) => {
  return (
    <h1 className={`${className} text-2xl text-black text-bold font-display`}>
      {children}
    </h1>
  );
};

HeadingThree.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

HeadingThree.defaultProps = {
  className: "",
};
export default HeadingThree;
