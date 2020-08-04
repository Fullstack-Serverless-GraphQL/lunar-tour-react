import React from "react";
import PropTypes from "prop-types";
const HeadingTwo = ({ className, children }) => {
  return (
    <h1 className={`${className} text-xl text-black text-bold font-display`}>
      {children}
    </h1>
  );
};

HeadingTwo.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

HeadingTwo.defaultProps = {
  className: "",
};
export default HeadingTwo;
