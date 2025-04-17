import React from "react";

export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="w-12 h-12 border-4 border-burnt border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}
