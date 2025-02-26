import { createSlice } from "@reduxjs/toolkit";

// TOD@ Añadir la obtención por localStorage
const initialState = {
  tasks: [
    {
      id: 0,
      description: "",
      done: false
    }
  ]
};

const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    addTask: (state) => {
      state.tasks.push({ id: state.tasks.length, description: '', done: false });
    },
    deleteTask: (state, actions) => {
      state.tasks = state.tasks.filter(({ id }) => id != actions.payload);
    },
    changeTaskStatus: (state, actions) => {
      state.tasks = state.tasks.map(task => {
        if (task.id === actions.payload) {
          task.done = !task.done;
        }
        return task;
      });
    },
    updateTaskDescription: (state, actions) => {
      state.tasks = state.tasks.map(task => {
        if (task.id === actions.payload.id) {
          task.description = actions.payload.input;
        }
        return task;
      });
    }
  }
});

export const {
  addTask,
  deleteTask,
  changeTaskStatus,
  updateTaskDescription
} = listSlice.actions;

export default listSlice;