import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import * as astions from "./store/actions";
import { initialStore } from "./store/store";

const store = initialStore();

const App = () => {
  const [state, setState] = useState(store.getState());

  useEffect(() => {
    store.subscribe(() => {
      setState(store.getState());
    });
  }, []);

  const completeTask = (taskId) => {
    store.dispatch(astions.taskCompleted(taskId));
  };
  const changeTitle = (taskId) => {
    store.dispatch(astions.titleChange(taskId));
  };
  const taskDelete = (taskId) => {
    store.dispatch(astions.deleteTask(taskId));
  };

  return (
    <>
      <h1> App</h1>
      <button onClick={completeTask}>complited</button>
      <ul>
        {state.map((el) => (
          <li key={el.id}>
            <p>{el.title}</p>
            <p>{`Complited: ${el.complited}`}</p>
            <button onClick={() => completeTask(el.id)}>complited</button>
            <button onClick={() => changeTitle(el.id)}>changeTitle</button>
            <button onClick={() => taskDelete(el.id)}>Delete</button>
            <hr />
          </li>
        ))}
      </ul>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
