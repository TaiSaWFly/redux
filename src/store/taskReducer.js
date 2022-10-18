import * as tasks from "./actionTypes";

export function taskReducer(state, action) {
  switch (action.type) {
    case tasks.taskUpdated: {
      const newArray = [...state];
      const elementIndex = newArray.findIndex(
        (el) => el.id === action.payload.id
      );
      newArray[elementIndex] = { ...newArray[elementIndex], ...action.payload };
      return newArray;
    }
    case tasks.taskDelete: {
      const newArray = [...state];
      const arrayOutId = newArray.filter((el) => el.id !== action.payload.id);
      return arrayOutId;
    }

    default:
      return state;
  }
}
