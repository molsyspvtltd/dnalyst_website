import React from 'react';

const CardContent = ({ children, className = "", ...props }) => (
  <div className={`p-4 sm:p-5 md:p-6 lg:p-8 ${className}`} {...props}>
    {children}
  </div>
);

export default CardContent;
