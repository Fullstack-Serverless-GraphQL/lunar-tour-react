import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";
import "../../index.css";
import loading from "../../assets/loading.svg";

const propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string,
  disabled: PropTypes.bool,
  large: PropTypes.bool,
  long: PropTypes.bool,
  isLoading: PropTypes.bool,
};

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

const DarkPinkButton = ({
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
      className={`${className} cursor-pointer bg-blue-lightest text-blue-darkest focus:outline-none font-display rounded-px px-16 py-2 hover:bg-transparent hover:border hover:border-blue-darkest`}
      onClick={onClick}
      disabled={disabled}
    >
      {isLoading === true ? (
        <ImageStyles src={loading} alt="loading..." />
      ) : (
        text
      )}
    </button>
  );
};

DarkPinkButton.propTypes = propTypes;
export default DarkPinkButton;
