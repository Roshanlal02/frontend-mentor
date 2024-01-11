"use client";

import { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

const List = ({ data }) => {
  const [radioCheck, setRadioCheck] = useState(false);

  const handleTask = () => {
    setRadioCheck(!radioCheck);
    if (data.status === "Completed") {
      data.status = "Active";
    } else {
      data.status = "Completed";
    }
  };

  useEffect(() => {
    if (data.status === "Completed") {
      setRadioCheck(true);
    }
  });

  const handleComplete = () => {
    console.log(data)
  }

  return (
    <div className="flex px-5 py-5 gap-4 items-center bg-white dark:bg-very-dark-desaturated-blue border-b-[1px] border-very-light-gray dark:border-opacity-50 group cursor-pointer">
      <input
        checked={radioCheck}
        onChange={() => handleTask()}
        type="radio"
        className="w-6 h-6 hover:border-blue-300 checked:border-none checked:bg-gradient-to-r from-gr-one to-gr-two"
      />
      <span
        className={`min-w-[80%] bg-transparent focus:border-none active:border-none border-none outline-none text-dark-grayish-blue ${
          data.status === "Completed" ? "line-through opacity-30" : ""
        }`}
        onClick={() => handleTask()}
      >
        {data.task}
      </span>
      <button className="absolute right-4 hidden group-hover:block" onClick={() => handleComplete()}>
        <IoCloseOutline size={30} className="text-dark-grayish-blue" />
      </button>
    </div>
  );
};

export default List;
