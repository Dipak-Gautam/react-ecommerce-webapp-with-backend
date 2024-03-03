import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="d-flex justify-content-center my-5">
      <div
        className="spinner-border"
        role="status"
        style={{ width: "7rem", height: "7rem" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
