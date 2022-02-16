
import React from "react";

const Icon = ({ fill = '#00D857'}) => {
  return (
    <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="15.5" cy="15.5" r="15.5" transform="rotate(90 15.5 15.5)" fill={fill} />
    </svg>

  );
};

export default Icon;
