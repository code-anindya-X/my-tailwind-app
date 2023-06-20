import React from "react";

const Loader = ({ className, loaderType }) => {
  className = "loading loading-dots loading-lg " + className;
  return (
    <>
      {loaderType === "dots" && (
        <div>
          <span className={className}></span>
        </div>
      )}
      {loaderType === "progress" && (
        <div>
          <span className="loading loading-ring loading-lg"></span>
        </div>
      )}
    </>
  );
};

export default Loader;
