import React from 'react';
import { motion } from 'framer-motion';

const VMSLogo = ({ size = "medium" }) => {
  const sizes = {
    small: { width: 40, height: 40 },
    medium: { width: 60, height: 60 },
    large: { width: 80, height: 80 }
  };

  const dimensions = sizes[size] || sizes.medium;

  return (
    <motion.svg
      width={dimensions.width}
      height={dimensions.height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ 
        minWidth: dimensions.width,
        minHeight: dimensions.height
      }}
    >
      {/* Camera Body */}
      <motion.path
        d="M21 8V16C21 17.1046 20.1046 18 19 18H5C3.89543 18 3 17.1046 3 16V8C3 6.89543 3.89543 6 5 6H19C20.1046 6 21 6.89543 21 8Z"
        stroke="#14bef0"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />

      {/* Lens Circle */}
      <motion.circle
        cx="12"
        cy="12"
        r="3"
        stroke="#28328c"
        strokeWidth="2"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />

      {/* Analytics Wave Lines */}
      <motion.path
        d="M7 20H17M9 22H15"
        stroke="#14bef0"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 1 }}
      />
    </motion.svg>
  );
};

export default VMSLogo; 