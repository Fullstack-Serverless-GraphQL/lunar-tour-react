import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";
import loading from "../../assets/loop.svg";

const rotate = keyframes`
  from {
	  transform: rotate(0deg);
  }
  to {
	  transform: rotate(360deg);
  }
`;
const ImageStyles = styled.img`
  display: inline-block;
  animation: ${rotate} 2s infinite linear;
`;

const BlueBlockButton = ({
  className = "",
  onClick,
  children,
  disabled = false,
  isLoading,
  large,
  long,
  ...props
}) => {
  return (
    <button
      /* eslint-disable no-template-curly-in-string*/
      className={`${className} cursor-pointer bg-blue-lightest text-blue-darkest focus:outline-none font-display rounded-px px-16 py-2 hover:bg-transparent hover:border hover:border-blue-darkest`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {isLoading ? <ImageStyles src={loading} alt="loading..." /> : children}
    </button>
  );
};
const propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.string,
  disabled: PropTypes.bool,
  large: PropTypes.bool,
  long: PropTypes.bool,
  isLoading: PropTypes.bool,
};
BlueBlockButton.propTypes = propTypes;
export default BlueBlockButton;
