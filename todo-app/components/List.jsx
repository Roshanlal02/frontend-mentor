"use client";

import { useAppDispatch, } from "@/redux/hooks";
import { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import {
  markCompleted,
  removeTask,
} from "@/redux/features/todoSlice";
import RadioButton from "./RadioButton";

const List = ({
  data,
  setCallBack,
  onDragStart,
  onDragEnd,
  onDragOver,
  onDrop,
}) => {
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
  };

  return (
    <div
      className="flex p-5 max-sm:p-3 gap-4 items-center bg-white dark:bg-very-dark-desaturated-blue border-b-[1px] border-very-light-gray dark:border-opacity-50 group cursor-pointer"
      draggable="true"
      onDragStart={(e) => onDragStart(e, data)}
      onDragEnd={onDragEnd}
      onDragOver={onDragOver}
      onDrop={(e) => onDrop(e, data)}
    >
      <RadioButton check={radioCheck} handleChange={() => handleTask()} />
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
