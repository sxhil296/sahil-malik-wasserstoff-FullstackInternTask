import React from "react";

const ErrorMessage = ({ error }) => {
  return (
    <div className="text-red-600 text-lg sm:text-xl m-4 rounded-md w-[80%] sm:w-[40%] mx-auto font-medium flex items-center justify-center bg-[#28282B] p-4">
      <h3>{error}</h3>
    </div>
  );
};

export default ErrorMessage;