import React from "react";

export const Button3 = ({ text }) => {
  return (
    <button className="btn button3 align-self-center d-flex align-items-center">
      {text}
      <i className="bi bi-arrow-right-short fs-2 button-icon "></i>
    </button>
  );
};
