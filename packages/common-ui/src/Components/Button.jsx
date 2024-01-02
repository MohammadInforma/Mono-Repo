// common-components/CustomButton.js
import React from 'react';

const Button = (props) => {
  const buttonStyles = {
    borderRadius: '8px',
    background: 'linear-gradient(to right, #ff6e7f, #bfe9ff)',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    color: '#ffffff',
    padding: '10px 20px',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
    border: 'none'
  };

  const hoverStyles = {
    background: 'linear-gradient(to right, #ff7e92, #a4d4ff)',
  };

  return (
    <button
      style={{...buttonStyles,  ...hoverStyles, ...props.style, width: props.width}}
      onMouseEnter={(e) => e.target.style.background = hoverStyles.background}
      onMouseLeave={(e) => e.target.style.background = buttonStyles.background}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;
