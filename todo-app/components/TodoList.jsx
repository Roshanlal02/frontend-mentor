"use client";

import { Fragment, useEffect, useState } from "react";
import List from "./List";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  clearCompleted,
  getActiveTodos,
  getCompletedTodos,
  modifyOrder,
  setInitialState,
} from "@/redux/features/todoSlice";

const TodoList = () => {
  const [tab, setTab] = useState("All");
  const [taskRem, setTaskRem] = useState(0);
  const [taskRemCall, setTaskRemCall] = useState();
  const activeData = getActiveTodos(useAppSelector((state) => state.todo));
  const completedData = getCompletedTodos(
    useAppSelector((state) => state.todo)
  );
  const allData = useAppSelector((state) => state.todo);
  let todo =
    tab !== "All" ? (tab === "Active" ? activeData : completedData) : allData;
  const todoForRemNum = useAppSelector((state) => state.todo);
  const dispatch = useAppDispatch();
  const [draggingItem, setDraggingItem] = useState(null);

  const handleTabs = (e, tabName) => {
    e.stopPropagation();
    setTab(tabName);
  };

  useEffect(() => {
    const tasksLeft = todoForRemNum?.filter(
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

  const handleDragStart = (e, dragItem) => {
    setDraggingItem(dragItem);
    e.dataTransfer.setData("text/plain", "");
  };

  const handleDragEnd = () => {
    setDraggingItem(null);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, dropItem) => {
    dispatch(modifyOrder({ draggingItem, dropItem }));
  };

  useEffect(() => {
    const todoFromLocal = localStorage.getItem("todoObj");
    if (todoFromLocal) {
      dispatch(setInitialState(JSON.parse(todoFromLocal)));
    }
  }, []);

  return (
    <Fragment>
      <div className="bg-white dark:bg-very-dark-desaturated-blue rounded-md py-2 max-sm:py-1">
        {todo.length > 0 ? (
          <div>
            {todo?.map((list) => (
              <List
                data={list}
                key={list?.id}
                setCallBack={(call) => setCallBack(call)}
                onDragStart={(e, data) => handleDragStart(e, data)}
                onDragEnd={handleDragEnd}
                onDragOver={handleDragOver}
                onDrop={(e, data) => handleDrop(e, data)}
              />
            ))}
          </div>
        ) : (
          <div>
            <div className="flex justify-center px-10 py-10">
              No list available
            </div>
          </div>
        )}
        <div className="flex justify-between px-5 pb-1 pt-3">
          <div className="text-light-grayish-blue max-sm:text-sm">{`${taskRem} items left`}</div>
          <div className="flex gap-4 text-light-grayish-blue max-md:hidden">
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
            className="text-light-grayish-blue hover:text-dark-grayish-blue cursor-pointer  max-sm:text-sm"
            onClick={() => handleClearComplete()}
          >
            Clear Completed
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-very-dark-desaturated-blue rounded-md p-4 max-md:flex mt-3 hidden justify-center text-sm">
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
      </div>
    </Fragment>
  );
};

export default TodoList;
