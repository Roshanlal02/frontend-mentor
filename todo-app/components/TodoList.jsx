"use client";

import { useEffect, useState } from "react";
import List from "./List";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { clearCompleted } from "@/redux/features/todoSlice";

const TodoList = () => {
  const [tab, setTab] = useState("All");
  const [taskRem, setTaskRem] = useState(0);
  const [taskRemCall, setTaskRemCall] = useState();
  let todo =
    tab !== "All"
      ? tab === "Active"
        ? useAppSelector((state) =>
            state.todo.filter((item) => item.status === "Active")
          )
        : useAppSelector((state) =>
            state.todo.filter((item) => item.status === "Completed")
          )
      : useAppSelector((state) => state.todo);
  const todoForRemNum = useAppSelector((state) => state.todo);
  const dispatch = useAppDispatch();

  const handleTabs = (e, tabName) => {
    e.stopPropagation();
    setTab(tabName);
  };

  useEffect(() => {
    const tasksLeft = todoForRemNum.filter(
      (task) => task.status !== "Completed"
    );
    setTaskRem(tasksLeft?.length);
  }, [taskRemCall, todoForRemNum]);

  const setCallBack = (data) => {
    setTaskRemCall(data);
  };

  const handleClearComplete = () => {
    dispatch(clearCompleted());
  };

  return (
    <div className="bg-white dark:bg-very-dark-desaturated-blue rounded-md py-2">
      {todo.length > 0 ? (
        <div>
          {todo.map((list) => (
            <List
              data={list}
              key={list?.id}
              setCallBack={(call) => setCallBack(call)}
            />
          ))}
        </div>
      ) : (
        <div>
          <div className="flex justify-center px-10 py-10">
            No TODO list available
          </div>
        </div>
      )}
      <div className="flex justify-between px-5 pb-1 pt-3">
        <div className="text-light-grayish-blue">{`${taskRem} items left`}</div>
        <div className="flex gap-4 text-light-grayish-blue">
          <div
            className={`cursor-pointer ${
              tab === "All"
                ? "text-primary-blue"
                : "hover:text-dark-grayish-blue"
            }`}
            onClick={(e) => handleTabs(e, "All")}
          >
            All
          </div>
          <div
            className={`cursor-pointer ${
              tab === "Active"
                ? "text-primary-blue"
                : "hover:text-dark-grayish-blue"
            }`}
            onClick={(e) => handleTabs(e, "Active")}
          >
            Active
          </div>
          <div
            className={`cursor-pointer ${
              tab === "Completed"
                ? "text-primary-blue"
                : "hover:text-dark-grayish-blue"
            }`}
            onClick={(e) => handleTabs(e, "Completed")}
          >
            Completed
          </div>
        </div>
        <div
          className="text-light-grayish-blue hover:text-dark-grayish-blue cursor-pointer"
          onClick={() => handleClearComplete()}
        >
          Clear Completed
        </div>
      </div>
    </div>
  );
};

export default TodoList;
