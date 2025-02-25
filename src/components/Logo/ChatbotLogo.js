import React from 'react';
import { motion } from 'framer-motion';

const ChatbotLogo = ({ size = "medium" }) => {
  const sizes = {
    small: { width: 40, height: 40 },
    medium: { width: 80, height: 80 },
    large: { width: 120, height: 120 }
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
      {/* Chat Bubble */}
      <motion.path
        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 13.9021 3.5901 15.6665 4.59721 17.1199C4.70168 17.2707 4.7226 17.4653 4.64529 17.6317L3.42747 20.2519C3.23699 20.5853 3.47768 21 3.86159 21H12Z"
        stroke="#14bef0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />

      {/* AI Circuit Pattern */}
      <motion.path
        d="M8 12H16M8 9H12M8 15H14"
        stroke="#28328c"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
      />

      {/* AI Node Points */}
      <motion.path
        d="M15 9H16M14 15H16"
        stroke="#14bef0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
      />
    </motion.svg>
  );
};

export default ChatbotLogo; 