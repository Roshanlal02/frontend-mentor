import React from "react";

const RadioButton = ({ check, handleChange }) => {
  return (
    <div className="flex relative">
      <label className="w-6 h-6 max-sm:w-5 max-sm:h-5">
        <input
          checked={check}
          onChange={handleChange}
          type="radio"
          className="w-6 h-6 max-sm:w-5 max-sm:h-5 hover:border-blue-300 checked:border-none checked:bg-gradient-to-r from-gr-one to-gr-two"
        />
      </label>
      {check && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="11"
          height="9"
          className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2"
        >
          <path
            fill="none"
            stroke="#FFF"
            strokeWidth="2"
            d="M1 4.304L3.696 7l6-6"
          />
        </svg>
      )}
    </div>
  );
};

export default RadioButton;
