// src/components/Card.js
import React from "react";

const Card = ({ children, className = "" }) => {
  return (
    <div className={`bg-white rounded-2xl shadow-md p-6 border border-gray-200 ${className}`}>
      {children}
    </div>
  );
};

const CardContent = ({ children, className = "" }) => {
  return <div className={className}>{children}</div>;
};

export { Card, CardContent };
