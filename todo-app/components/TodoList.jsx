"use client";

import { useState } from "react";
import List from "./List";

let todoList = [
  {
    id: 1,
    task: "This is the task",
    status: "Active",
  },
  {
    id: 2,
    task: "This is the task",
    status: "Active",
  },
  {
    id: 3,
    task: "This is the task",
    status: "Completed",
  },
  {
    id: 4,
    task: "This is the task",
    status: "Completed",
  },
];

const TodoList = () => {
  let todo = todoList;
  const [tab, setTab] = useState("All");
  const tasksLeft = todoList.filter((task) => task.status === "Completed");

  const handleTabs = (e, tabName) => {
    e.stopPropagation();
    setTab(tabName);
  };

  return (
    <div className="bg-white dark:bg-very-dark-desaturated-blue rounded-md py-2">
      {todo.map((list) => (
        <List data={list} key={list?.id} />
      ))}
      <div className="flex justify-between px-5 pb-1 pt-3">
        <div className="text-light-grayish-blue">{`${tasksLeft.length} items left`}</div>
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
        <div className="text-light-grayish-blue hover:text-dark-grayish-blue cursor-pointer">
          Clear Completed
        </div>
      </div>
    </div>
  );
};

export default TodoList;
