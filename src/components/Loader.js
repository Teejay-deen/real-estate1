import React from 'react'
import { ImSpinner2 } from "react-icons/im";

const Loader = ({ className = "text-violet-700", loadingText }) => {
    return (
      <center>
        <ImSpinner2 className={className} size={50}></ImSpinner2>
        <span className={className}>{loadingText || "Fecthing data..."}</span>
      </center>
    );
  };

export default Loader