"use client";
import { useEffect, useState } from "react";
import { IoCheckmarkOutline } from "react-icons/io5";
import { addTodo } from "../redux/features/todoSlice";
import { useAppDispatch } from "../redux/hooks";
import generateUniqueId from "@/utils/generateId";
import RadioButton from "./RadioButton";

const Input = () => {
  const [inputVal, setInputVal] = useState("");
  const [radioCheck, setRadioCheck] = useState(false);
  const dispatch = useAppDispatch();
  const generateId = generateUniqueId();

  const changeInput = (e) => {
    setInputVal(e);
  };

  useEffect(() => {
    inputVal.length > 0 ? setRadioCheck(true) : setRadioCheck(false);
  }, [inputVal]);

  const addTodoList = () => {
    dispatch(addTodo({ id: generateId, input: inputVal }));
    setInputVal("");
  };

  const handleEnter = (event) => {
    if (event.keyCode === 13) {
      addTodoList();
    }
  };

  return (
    <div className="flex px-5 py-5 gap-4 items-center bg-white dark:bg-very-dark-desaturated-blue rounded-md">
      <RadioButton check={radioCheck} handleChange={null} />
      <input
        className="min-w-[80%] bg-transparent focus:border-none active:border-none border-none outline-none caret-primary-blue"
        placeholder="Create a new todo..."
        onChange={(e) => changeInput(e.target.value)}
        value={inputVal}
        onKeyUp={(event) => handleEnter(event)}
      />
      {inputVal.length > 0 && (
        <button className="absolute right-4" onClick={() => addTodoList()}>
          <IoCheckmarkOutline size={30} className="text-dark-grayish-blue" />
        </button>
      )}
    </div>
  );
};

export default Input;
