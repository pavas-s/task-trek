import React, { useState } from "react";

const CreateTodo = () => {
  //   const countArr = useState(0);
  //   const count = countArr[0];
  //   const setCount = countArr[1];

  const [task, setTask] = useState(0);
  const [input, setInput] = useState("");
  const tasks = ["Task 1", "Task 2", "Task 3", "Task 4"];

  const handleClick = () => {
    setTask(task + 1);
    console.log("Add Task", task);
  };
  const countTasks = () =>
    task === 0 ? "No Task Available" : `Tasks: ${task}`;
  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <>
      <h1>{countTasks()}</h1>
      <h1>Tasks: {task}</h1>
      <input type="text" onChange={handleChange} />
      <button onClick={handleClick} value="Add Task Button">
        Add Task
      </button>
      <h1>Input: {input}</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task}>{task}</li>
        ))}
      </ul>
    </>
  );
};

export default CreateTodo;
