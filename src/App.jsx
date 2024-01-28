import React, { useState } from "react";
import { context } from "./context";
import TodoListV2 from "./TodoList";
const App = () => {
  // the list of task will be here in listToDo
  const [listToDo, setListToDo] = useState([]);

  // if task is completed ==> done=true else done=false
  const [done, setDone] = useState(false);

  const completeTask = (idTask) => {
    setDone(!done);
    setListToDo((prev) =>
      prev.map((t) => (t.id === idTask ? { ...t, completed: done } : t))
    );
  };
  const addTask = (task) => {
    setListToDo((prev) => [...prev, task]);
  };
  const removeTask = (id) => {
    setListToDo((prev) => prev.filter((task) => task.id !== id));
  };

  const updateTask = (task) => {
    setListToDo((prev) =>
      prev.map((p) => {
        if (task.id === p.id) {
          return {
            ...p,
            id: task.id,
            mission: task.mission,
            completed: task.completed,
          };
        }
        return p;
      })
    );
  };
  return (
    <context.Provider
      value={{ addTask, listToDo, removeTask, updateTask, completeTask }}
    >
      <TodoListV2 />
    </context.Provider>
  );
};

export default App;
