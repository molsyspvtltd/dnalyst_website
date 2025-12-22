import React from "react";

const Card = ({ children, className = "", ...props }) => (
  <div
    className={`rounded-lg border bg-card text-card-foreground shadow-sm p-4 
      sm:p-5 md:p-6 lg:p-8 
      ${className}`}
    {...props}
  >
    {children}
  </div>
);

export default Card;
