import React from "react";

const Error = () => {
  console.log("undefined route accessed causing error 404");
  return (
    <div className="flex justify-center items-center h-[90vh] overflow-hidden">
      <h1 className="text-5xl text-white text-center">
        Error 404 Page Not Found !!!
      </h1>
    </div>
  );
};

export default Error;
