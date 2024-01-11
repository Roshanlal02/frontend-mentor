"use client";
import { useEffect, useState } from "react";
import { IoCheckmarkOutline } from "react-icons/io5";

const Input = () => {
  const [inputVal, setInputVal] = useState("");
  const [radioCheck, setRadioCheck] = useState(false);

  const changeInput = (e) => {
    setInputVal(e);
  };

  useEffect(() => {
    inputVal.length > 0 ? setRadioCheck(true) : setRadioCheck(false);
  }, [inputVal]);

  return (
    <div className="flex px-5 py-5 gap-4 items-center bg-white dark:bg-very-dark-desaturated-blue rounded-md">
      <input
        checked={radioCheck}
        onChange={() => null}
        type="radio"
        className="w-6 h-6 hover:border-blue-300 checked:border-none checked:bg-gradient-to-r from-gr-one to-gr-two"
      />
      <input
        className="min-w-[80%] bg-transparent focus:border-none active:border-none border-none outline-none caret-primary-blue"
        placeholder="Create a new todo..."
        onChange={(e) => changeInput(e.target.value)}
      />
      {inputVal.length > 0 && (
        <button className="absolute right-4">
          <IoCheckmarkOutline size={30} className="text-dark-grayish-blue" />
        </button>
      )}
    </div>
  );
};

export default Input;
