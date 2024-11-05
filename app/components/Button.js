// src/components/Button.js
import React from 'react';

const Button = ({ onClick, children, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;