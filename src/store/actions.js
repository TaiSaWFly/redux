import * as actionTypes from "./actionTypes";

export function taskCompleted(id) {
  return {
    type: actionTypes.taskUpdated,
    payload: { id, complited: true },
  };
}

export function titleChange(id) {
  return {
    type: actionTypes.taskUpdated,
    payload: { id, title: `New title for ${id}` },
  };
}

export function deleteTask(id) {
  return {
    type: actionTypes.taskDelete,
    payload: { id },
  };
}
