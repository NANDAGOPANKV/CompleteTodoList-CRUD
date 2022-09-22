import React, { useState } from "react";
import "./App.css";

function App() {
  const [newTask, setNewTask] = useState("");
  const [todoLists, setTodoLists] = useState([]);

  // addTask
  const addTask = () => {
    const task = {
      id: todoLists.length === 0 ? 1 : todoLists[todoLists.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    setTodoLists([...todoLists, task]);
  };

  // delete Task
  const handleDelete = (id) => {
    console.log(id);
    setTodoLists(todoLists.filter((task) => task.id !== id));
  };

  // completed Task
  const handleCompleted = (id) => {
    setTodoLists(
      todoLists.map((d) => {
        if (d.id === id) {
          return { ...d, completed: true };
        } else {
          return d;
        }
      })
    );
  };

  // update
  const handleUpdate = (id) => {
    setTodoLists(
      todoLists.map((d) => {
        if (d.id === id) {
          return { ...d, taskName: prompt("Change...") };
        } else {
          return d;
        }
      })
    );
  };

  //return
  return (
    <div className="App">
      <div className="addTask">
        <input
          type="text"
          onChange={(e) => {
            setNewTask(e.target.value);
          }}
        />
        <button onClick={addTask}>ADD</button>
      </div>
      <div className="lists">
        {todoLists.map((data, index) => {
          return (
            <div key={index}>
              {data ? (
                data.completed ? (
                  <h1>
                    <del>{data.taskName}</del>
                  </h1>
                ) : (
                  <h1>{data.taskName}</h1>
                )
              ) : (
                <h1>{data.taskName}</h1>
              )}

              <button onClick={() => handleDelete(data.id)}>DELETE</button>
              <button onClick={() => handleCompleted(data.id)}>
                COMPLETED
              </button>
              <button onClick={() => handleUpdate(data.id)}>UPDATE</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;

// style={{
//   backgroundColor: data.completed ? "green" : "white",
//   color: data.completed ? "white" : "black",
// }}
