import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png"; // Your logo path
import "./loader.css";  // We'll add the loader styles here

const Loader = ({ setIsLoading }) => {
  useEffect(() => {
    // Set a timer to hide the loader after 3 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);  // 3 seconds of animation, adjust as needed
  }, [setIsLoading]);

  return (
    <div className="loader-container">
      <div className="logo-wrapper">
        <img src={logo} alt="Logo" className="logo" />
      </div>
    </div>
  );
};

export default Loader;
