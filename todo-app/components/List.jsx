"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { markCompleted, removeTask } from "@/redux/features/todoSlice";
import RadioButton from "./RadioButton";

const List = ({ data, setCallBack }) => {
  const [radioCheck, setRadioCheck] = useState(false);
  const [cb, setCb] = useState(false);
  const dispatch = useAppDispatch();

  const handleTask = () => {
    setCb(!cb);
    setRadioCheck(!radioCheck);
    dispatch(markCompleted(data));
    setCallBack(cb);
  };

  useEffect(() => {
    if (data.status === "Completed") {
      setRadioCheck(true);
    }
  });

  const handleComplete = () => {
    dispatch(removeTask(data));
    console.log(data);
  };

  return (
    <div className="flex px-5 py-5 gap-4 items-center bg-white dark:bg-very-dark-desaturated-blue border-b-[1px] border-very-light-gray dark:border-opacity-50 group cursor-pointer">
      <RadioButton check={radioCheck} handleChange={handleTask} />
      <span
        className={`min-w-[80%] bg-transparent focus:border-none active:border-none border-none outline-none text-dark-grayish-blue ${
          data.status === "Completed" ? "line-through opacity-30" : ""
        }`}
        onClick={() => handleTask()}
      >
        {data.task}
      </span>
      <button
        className="absolute right-4 hidden group-hover:block"
        onClick={() => handleComplete()}
      >
        <IoCloseOutline size={30} className="text-dark-grayish-blue" />
      </button>
    </div>
  );
};

export default List;
